export enum Color {
  white = 0,
  blue,
  orange,
  green,
  red,
  yellow,
}

export type sideArr = [Color, Color, Color, Color, Color, Color, Color, Color, Color];

export type cubeArr= [sideArr, sideArr, sideArr, sideArr, sideArr, sideArr];

const createSideArr = (c: Color): sideArr => new Array(9).fill(c) as sideArr;

const createSortedCubeArr = (): cubeArr => [...(Object.values(Color).filter(c => typeof c === 'number') as Color[])].map(createSideArr) as cubeArr;

const arrValReplace = (to: sideArr, from: sideArr, changes: [number, number][]): sideArr => {
  to = [...to];
  for (let change of changes) {
    to[change[0]] = from[change[1]];
  }
  return to as sideArr;
}

class Cube {

  public arr: cubeArr;
  public moveCount: number = 0;
  
  constructor() {
    this.arr = createSortedCubeArr();
    console.log(this.arr);
  }

  public rotateSide(color: Color = Color.white) {
    const {white, blue, orange, green, red, yellow} = Color;
    const newCube: cubeArr = this.arr.map(side => [...side]) as cubeArr;
    let sides: Color[];
    switch (color) {
      case white:
        sides = [white, blue, orange, green, red];
        break;
      case blue:
        sides = [blue, orange, white, red, yellow];
        break;
      case orange:
        sides = [orange, white, blue, yellow, green];
        break;
      case green:
        sides = [green, yellow, red, white, orange];
        break;
      case red:
        sides = [red, green, yellow, blue, white];
        break;
      case yellow:
        sides = [yellow, red, green, orange, blue]
        break;
    }
    const s: sideArr = this.arr[sides[0]];
    newCube[sides[0]] = [s[6], s[3], s[0], s[7], s[4], s[1], s[8], s[5], s[2]];
    newCube[sides[1]] = arrValReplace(this.arr[sides[1]], this.arr[sides[2]], [[6, 0], [3, 1], [0, 2]]);
    newCube[sides[2]] = arrValReplace(this.arr[sides[2]], this.arr[sides[3]], [[0, 8], [1, 7], [2, 6]]);
    newCube[sides[3]] = arrValReplace(this.arr[sides[3]], this.arr[sides[4]], [[8, 2], [7, 5], [6, 8]]);
    newCube[sides[4]] = arrValReplace(this.arr[sides[4]], this.arr[sides[1]], [[2, 6], [5, 3], [8, 0]]);
    this.arr = newCube;
    this.moveCount++;
    console.log('rotateWhite', newCube);
  }
}

export default Cube;
