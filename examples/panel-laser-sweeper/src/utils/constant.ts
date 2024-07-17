export const SUCTION_MAP: Record<Suction, { code: Suction; value: number }> = {
  closed: {
    value: 0,
    code: 'closed',
  },
  gentle: {
    value: 1,
    code: 'gentle',
  },
  normal: {
    value: 2,
    code: 'normal',
  },
  strong: {
    value: 3,
    code: 'strong',
  },
  max: {
    value: 4,
    code: 'max',
  },
} as const;

export const CISTERN_MAP: Record<Cistern, { code: Cistern; value: number }> = {
  closed: {
    value: 0,
    code: 'closed',
  },
  low: {
    value: 1,
    code: 'low',
  },
  middle: {
    value: 2,
    code: 'middle',
  },
  high: {
    value: 3,
    code: 'high',
  },
} as const;
