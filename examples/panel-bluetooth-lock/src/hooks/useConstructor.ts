import { useRef } from 'react';

export type Constructor = (...args: any[]) => any;

export default function useConstructor(constructor: Constructor) {
  const isConstructorCalled = useRef(false);
  if (!isConstructorCalled.current) {
    constructor();
    isConstructorCalled.current = true;
  }
}