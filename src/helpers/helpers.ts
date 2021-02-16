import { sideArr } from './cube';

export const arrValReplace = (to: sideArr, from: sideArr, changes: [number, number][]): sideArr => {
  to = [...to];
  for (let change of changes) {
    to[change[0]] = from[change[1]];
  }
  return to as sideArr;
};
