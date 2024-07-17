/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import store from '@/redux';

/* eslint-disable max-len */
export const robotBase64Img = () => {
  if (!store) return '';
  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;
  return `${staticPrefix}/app/robot/000001pj81/robot.png`;
};

export const pileBase64Img = () => {
  if (!store) return '';
  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;
  return `${staticPrefix}/app/robot/000001pj81/pile.png`;
};

export const posBase64Img = () => {
  if (!store) return '';
  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/pos.png`;
};

export const resizeBase64Img = () => {
  if (!store) return '';
  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;
  return `${staticPrefix}/app/robot/000001pj81/wresize.png`;
};

export const deleteBase64Img = () => {
  if (!store) return '';
  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/wdelete.png`;
};

export const rotateBase64Img = () => {
  if (!store) return '';
  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/wrotate.png`;
};

export const pointIconBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;
  return `${staticPrefix}/app/robot/000001pj81/point.png`;
};
export const bDeleteBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;
  return `${staticPrefix}/app/robot/000001pj81/bdelete.png`;
};

export const bRotateBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;
  return `${staticPrefix}/app/robot/000001pj81/brotate.png`;
};

export const bResizeBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/bresize.png`;
};

export const oDeleteBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/odelete.png`;
};

export const oRotateBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/orotate.png`;
};
export const oResizeBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;
  return `${staticPrefix}/app/robot/000001pj81/oresize.png`;
};
export const rDeleteBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/rdelete.png`;
};
export const rRotateBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/rrotate.png`;
};
export const rResizeBase64Img = () => {
  if (!store) return '';

  const { commonInfo } = store.getState();
  const { staticPrefix } = commonInfo;

  return `${staticPrefix}/app/robot/000001pj81/rresize.png`;
};
export default {
  robotBase64Img,
  pileBase64Img,
  posBase64Img,
  resizeBase64Img,
  deleteBase64Img,
  rotateBase64Img,
  pointIconBase64Img,
  bDeleteBase64Img,
  bResizeBase64Img,
  bRotateBase64Img,
  rDeleteBase64Img,
  rResizeBase64Img,
  rRotateBase64Img,
  oDeleteBase64Img,
  oResizeBase64Img,
  oRotateBase64Img,
};
