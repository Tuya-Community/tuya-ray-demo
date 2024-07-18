/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useDeepCompareEffect } from 'ahooks';
import { useMemo, useState } from 'react';
import useMemoizedFn from './useMemoizedFn';

export default function useSelections<T>(items: T[], defaultSelected: T[] = []) {
  const [selected, setSelected] = useState<T[]>(defaultSelected);
  const [lastItems, setLastItems] = useState([...items]);

  const selectedSet = useMemo(() => new Set(selected), [selected]);

  const isSelected = (item: T) => selectedSet.has(item);

  const select = (item: T) => {
    selectedSet.add(item);
    return setSelected(Array.from(selectedSet));
  };

  const unSelect = (item: T) => {
    selectedSet.delete(item);
    return setSelected(Array.from(selectedSet));
  };

  const toggle = (item: T) => {
    if (isSelected(item)) {
      unSelect(item);
    } else {
      select(item);
    }
  };

  const selectAll = () => {
    items.forEach(o => {
      selectedSet.add(o);
    });
    setSelected(Array.from(selectedSet));
  };

  const unSelectAll = () => {
    items.forEach(o => {
      selectedSet.delete(o);
    });
    setSelected(Array.from(selectedSet));
  };

  const noneSelected = useMemo(() => items.every(o => !selectedSet.has(o)), [items, selectedSet]);

  const allSelected = useMemo(() => items.every(o => selectedSet.has(o)) && !noneSelected, [
    items,
    selectedSet,
    noneSelected,
  ]);

  const partiallySelected = useMemo(() => !noneSelected && !allSelected, [
    noneSelected,
    allSelected,
  ]);

  const toggleAll = () => (allSelected ? unSelectAll() : selectAll());

  const unSelectedAll2 = () => {
    selectedSet.clear();
    setSelected(Array.from(selectedSet));
  };

  /**
   * 全选后,下滑到底请求了下一页的数据
   * 此时需要将新数据也选上
   */
  useDeepCompareEffect(() => {
    const lastAllSelect = lastItems.every(o => selectedSet.has(o));
    if (selectedSet.size > 0 && lastAllSelect) {
      selectAll();
    }
    setLastItems([...items]);
  }, [items]);

  return {
    selected,
    noneSelected,
    allSelected,
    partiallySelected,
    setSelected,
    isSelected,
    select: useMemoizedFn(select),
    unSelect: useMemoizedFn(unSelect),
    toggle: useMemoizedFn(toggle),
    selectAll: useMemoizedFn(selectAll),
    unSelectAll: useMemoizedFn(unSelectAll),
    unSelectedAll2: useMemoizedFn(unSelectedAll2),
    toggleAll: useMemoizedFn(toggleAll),
  } as const;
}
