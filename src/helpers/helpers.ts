import { sideArr } from './cube';
import SillyGooseError from './SillyGooseError';

export const arrValReplace = (to: sideArr, from: sideArr, changes: [number, number][]): sideArr => {
  to = to.slice(0) as sideArr;
  for (const change of changes) {
    to[change[0]] = from[change[1]];
  }
  return to as sideArr;
};

export const randInt = (min = 0, max = 9): number => {
  if (max < min) throw new SillyGooseError('Max cannot be less than min, you silly goose.');
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const randElement = <T>(a: T[]): T => a[randInt(0, a.length - 1)];

export const roundToTwoDecimals = (n: number): number => Math.round(n * 100) / 100;

export const reverseArr = <T>(array: T[]): T[] => array.slice().reverse();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const timeFn = <T>(runCount: number, fn: (...args: any[]) => T, ...args: any[]): T => {
  console.time(fn.name);
  let result;
  for (let i = 0; i < runCount; i++) {
    result = fn(...args);
  }
  console.timeEnd(fn.name);
  return result as T;
};

export const isObjectEmpty = (obj: Record<string, unknown>): boolean => {
  for (const i in obj) return false;
  return true;
};
