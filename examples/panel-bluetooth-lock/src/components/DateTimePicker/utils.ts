import { useCallback, useRef, useState } from 'react';
import type { Dispatch, SetStateAction, MutableRefObject } from 'react';
import { isFunction, isNaN } from 'lodash';

export function getTrueValue(value: string | undefined): string | number {
  if (!value) {
    return 0;
  }
  let newValue = value;

  while (isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      newValue = value.slice(1);
    } else {
      return 0;
    }
  }

  return parseInt(newValue, 10);
}

export function getMonthEndDay(year: number, month: number): number {
  return 32 - new Date(year, month - 1, 32).getDate();
}

export function addDays(date: Date, days: number): Date {
  let newDate = date;
  newDate = new Date(newDate.valueOf());
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

export function getDayNumber(date: Date): number {
  const newDate = new Date(date.getTime() + 8 * 60 * 60 * 1000);
  return newDate.getTime() - (newDate.getTime() % (24 * 60 * 60 * 1000));
}

export function padZero(num: number | string, targetLength = 2): string {
  let str = `${num}`;

  while (str.length < targetLength) {
    str = `0${str}`;
  }

  return str;
}

type StateType<T> = T | (() => T);

export function useRefState<T>(
  initialState: StateType<T>
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] {
  const [state, setState] = useState<T>(initialState);
  const ref = useRef(state);
  const setRafState = useCallback(
    patch => {
      setState(prevState => {
        // eslint-disable-next-line no-return-assign
        return (ref.current = isFunction(patch) ? patch(prevState) : patch);
      });
    },
    [state]
  );
  return [state, setRafState, ref];
}
