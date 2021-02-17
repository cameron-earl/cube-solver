import { arrValReplace, chunkSubstr, randElement, randInt } from './helpers';
import SillyGooseError from './SillyGooseError';

export enum Color {
  white = 0,
  blue,
  orange,
  green,
  red,
  yellow,
}

const { white, blue, orange, green, red, yellow } = Color;

const colors = [white, blue, orange, green, red, yellow];

export const opposite = [yellow, green, red, blue, orange, white];

export type sideArr = [Color, Color, Color, Color, Color, Color, Color, Color, Color];

export type cubeArr = [sideArr, sideArr, sideArr, sideArr, sideArr, sideArr];

const createSideArr = (c: Color): sideArr => new Array(9).fill(c) as sideArr;

export const createSortedCubeArr = (): cubeArr => colors.map(createSideArr) as cubeArr;

export const createMixedUpCubeArr = (count?: number): cubeArr => shuffleCube(createSortedCubeArr(), count) as cubeArr;

export const shuffleCube = (arr: cubeArr, moves = 50): cubeArr => {
  let a = deepCopy(arr);
  for (let i = 0; i < moves; i++) {
    const turns = randInt(1, 3);
    const side = randElement(colors);
    a = rotateSide(a, side, turns);
  }
  return a;
};

const transformMap: { [key: number]: Color[] } = {
  [white]: [white, blue, orange, green, red],
  [blue]: [blue, orange, white, red, yellow],
  [orange]: [orange, white, blue, yellow, green],
  [green]: [green, yellow, red, white, orange],
  [red]: [red, green, yellow, blue, white],
  [yellow]: [yellow, red, green, orange, blue],
};

export const deepCopy = (arr: cubeArr): cubeArr => {
  // silly but highly optimized
  return [
    arr[0].slice(0),
    arr[1].slice(0),
    arr[2].slice(0),
    arr[3].slice(0),
    arr[4].slice(0),
    arr[5].slice(0),
  ] as cubeArr;
};

export const rotateSide = (arr: cubeArr, color: Color = white, count = 1): cubeArr => {
  const a = deepCopy(arr);
  let temp: cubeArr;
  const sides: Color[] = transformMap[color];

  for (let i = 0; i < count; i++) {
    temp = deepCopy(a);
    const s: sideArr = temp[sides[0]];
    a[sides[0]] = [s[6], s[3], s[0], s[7], s[4], s[1], s[8], s[5], s[2]];
    a[sides[1]] = arrValReplace(temp[sides[1]], temp[sides[2]], [
      [6, 0],
      [3, 1],
      [0, 2],
    ]);
    a[sides[2]] = arrValReplace(temp[sides[2]], temp[sides[3]], [
      [0, 8],
      [1, 7],
      [2, 6],
    ]);
    a[sides[3]] = arrValReplace(temp[sides[3]], temp[sides[4]], [
      [8, 2],
      [7, 5],
      [6, 8],
    ]);
    a[sides[4]] = arrValReplace(temp[sides[4]], temp[sides[1]], [
      [2, 6],
      [5, 3],
      [8, 0],
    ]);
  }
  return a;
};

export const cubeArrToString = (arr: cubeArr): string => arr.reduce((str, side) => str + side.join(''), '');

export const cubeArrFromString = (str: string): cubeArr => {
  if (str.length !== 6 * 9) throw new SillyGooseError(`That's not a cubeArr, silly goose!`);
  return chunkSubstr(str, 9).map((s) => s.split('').map(Number)) as cubeArr;
};
