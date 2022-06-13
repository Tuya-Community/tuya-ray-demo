import { atom } from 'jotai';
import { selectAtom } from 'jotai/utils';
import deepEqual from 'fast-deep-equal';

/**
 * 在此处定义你当前产品的 DP 类型
 */
export interface DpState {
  switch: boolean;
}

type UpdateDpStatePayload = Partial<DpState>;

/**
 * 定义一个 dpStateAtom
 *
 * 第一个参数传入默认值
 * 第二个参数传入接受到 payload 时如何更新数据源
 *
 * 第一个泛型定义数据源的类型
 * 第二个泛型定义修改数据源的 payload
 *
 * @docs 详见 https://jotai.org/docs/basics/primitives
 */
export const dpStateAtom = atom<DpState, UpdateDpStatePayload>(null, (get, set, payload) => {
  set(dpStateAtom, { ...(get(dpStateAtom) || {}), ...payload });
});

/**
 * 定义一个基于 dpStateAtom 的选择器
 *
 * 第一个参数传入源 atom 数据
 * 第二个参数传入 selector 选择器匹配需要返回的数据
 * 第三个参数传入 equalityFn 判断是否一致，有助于避免无效的渲染，提高性能，
 *
 * 第一个泛型定义数据源的类型
 * 第二个泛型定义 selector 选择器匹配返回的数据的类型
 *
 * @docs 详见 https://jotai.org/docs/utils/select-atom
 */
export const selectDpStateAtom = selectAtom<DpState, DpState>(dpStateAtom, data => data, deepEqual);
