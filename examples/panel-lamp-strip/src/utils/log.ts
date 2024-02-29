/* eslint-disable no-console */
// import { isObject } from '../../utils';

type Level = 'VERBOSE' | 'SUCCESS' | 'INFO' | 'WARN' | 'FATAL';

export interface LogConfig {
  /**
   * @description 名称
   * @default SDM
   */
  name?: string;
  /**
   * 日志输出级别
   */
  level?: Level;
  /**
   * @description 日志标签
   */
  label?: string;
}

const LEVELS = {
  VERBOSE: 4,
  SUCCESS: 3,
  INFO: 2,
  WARN: 1,
  FATAL: 0,
};

const DEFAULT_CONFIG = {
  name: 'Perf',
  level: 'INFO' as const,
};

export const createLogger = (cfg: LogConfig = DEFAULT_CONFIG) => {
  const config = { ...DEFAULT_CONFIG, ...cfg };
  const levelWeight = LEVELS[config.level ?? 'INFO'];

  const colorMap = {
    VERBOSE: '#AAAAAA',
    SUCCESS: '#2DDA86',
    INFO: '#1989FA',
    WARN: '#FFA000',
    FATAL: '#F04C4C',
  };
  const strMap = {
    basic: {
      format: (level: Level, timeStr: string) => {
        return `%c[${timeStr}]%c [${level}]%c ${config.name}`;
      },
      styles: (level: Level) => [
        'font-weight: bold',
        `'color: ${colorMap[level]}; font-weight: bold'`,
        'font-weight: bold',
      ],
    },
    withLabel: {
      format: (level: Level, timeStr: string) =>
        `%c[${timeStr}]%c [${level}]%c ${config.name} by ${config.label}`,
      styles: (level: Level) => [
        'font-weight: bold',
        `color: ${colorMap[level]}; font-weight: bold`,
        'font-weight: bold',
      ],
    },
  };

  const format = config.label ? strMap.withLabel.format : strMap.basic.format;
  const styles = config.label ? strMap.withLabel.styles : strMap.basic.styles;

  const log = (level: Level, text: string, ...args: any[]): void => {
    const curLevelWeight = LEVELS[level];
    if (curLevelWeight > levelWeight) {
      return;
    }
    // const curConfig = isObject(args.slice(-1)) ? { ...config, ...args.slice(-1) } : config;
    const date = new Date();
    const timeStr = `${date.toLocaleString()}.${`${date.getMilliseconds()}`.padStart(3, '0')}`;

    console.log &&
      console.log(
        `${format(level, timeStr)}: %c${JSON.stringify(text)}`,
        ...[...styles(level), 'font-weight: normal'],
        ...(args ?? [])
      );

    // console.groupCollapsed && console.groupCollapsed(format('INFO', timeStr), ...styles('INFO'));
    // console.log && console.log(text, ...args.slice(1, args.length - 2));
    // console.groupEnd && console.groupEnd();
  };

  function verbose(text: string, ...args: any[]): void {
    log('VERBOSE', text, ...args);
  }

  function success(text: string, ...args: any[]): void {
    log('SUCCESS', text, ...args);
  }

  function info(text: string, ...args: any[]): void {
    log('INFO', text, ...args);
  }

  function warn(text: string, ...args: any[]): void {
    log('WARN', text, ...args);
  }

  function fatal(text: string, ...args: any[]): void {
    log('FATAL', text, ...args);
  }

  return {
    verbose,
    success,
    info,
    warn,
    fatal,
    now: +new Date(),
  };
};

export const log = createLogger({});
