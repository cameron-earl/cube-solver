import { arrValReplace } from './helpers';

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

export type sideArr = [Color, Color, Color, Color, Color, Color, Color, Color, Color];

export type cubeArr = [sideArr, sideArr, sideArr, sideArr, sideArr, sideArr];

const createSideArr = (c: Color): sideArr => new Array(9).fill(c) as sideArr;

export const createSortedCubeArr = (): cubeArr => colors.map(createSideArr) as cubeArr;

const transformMap: { [key: number]: Color[] } = {
  [white]: [white, blue, orange, green, red],
  [blue]: [blue, orange, white, red, yellow],
  [orange]: [orange, white, blue, yellow, green],
  [green]: [green, yellow, red, white, orange],
  [red]: [red, green, yellow, blue, white],
  [yellow]: [yellow, red, green, orange, blue],
};

export const rotateSide = (arr: cubeArr, color: Color = white, count: number = 1): cubeArr => {
  const newCube: cubeArr = arr.map((side) => [...side]) as cubeArr;

  let sides: Color[] = transformMap[color];

  const s: sideArr = arr[sides[0]];
  newCube[sides[0]] = [s[6], s[3], s[0], s[7], s[4], s[1], s[8], s[5], s[2]];
  newCube[sides[1]] = arrValReplace(arr[sides[1]], arr[sides[2]], [
    [6, 0],
    [3, 1],
    [0, 2],
  ]);
  newCube[sides[2]] = arrValReplace(arr[sides[2]], arr[sides[3]], [
    [0, 8],
    [1, 7],
    [2, 6],
  ]);
  newCube[sides[3]] = arrValReplace(arr[sides[3]], arr[sides[4]], [
    [8, 2],
    [7, 5],
    [6, 8],
  ]);
  newCube[sides[4]] = arrValReplace(arr[sides[4]], arr[sides[1]], [
    [2, 6],
    [5, 3],
    [8, 0],
  ]);
  return newCube;
};
