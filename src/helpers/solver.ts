import { Color, createSortedCubeArr, cubeArr, cubeArrFromString, cubeArrToString, opposite, rotateSide } from './cube';
import { Log } from './log';
// TODO: perhaps revisit this for larger solutionMaps? Perhaps import permutations too to save on deserialization time?
// import { solutionMap } from './solutionMap';

const solutionMap: { [key: string]: Log } = {};
type permutation = [cubeArr, Log];

export const populateSolutionMap = (): void => {
  // if (!isObjectEmpty(solutionMap)) return;
  console.time('populateSolutionMap');
  const sorted: cubeArr = createSortedCubeArr();
  solutionMap[cubeArrToString(sorted)] = [];
  const permutations: permutation[] = Object.entries(solutionMap).map((e) => [cubeArrFromString(e[0]), e[1]]);
  for (let i = 0; permutations[i][1].length < 5 /* alt: i < permutations.length */; i++) {
    for (let j = 1; j < sorted.length; j++) {
      // Save a bit of time by preventing unnecessary work
      if (permutations[i][1].length > 0) {
        const lastColor: Color = permutations[i][1][permutations[i][1].length - 1][0];
        if (lastColor === j) continue;
        if (permutations[i][1].length > 1) {
          if (j === opposite[lastColor] && permutations[i][1][permutations[i][1].length - 2][0] == j) {
            continue;
          }
        }
      }

      for (let k = 1; k <= 3; k++) {
        const newArr = rotateSide(permutations[i][0], j, k);
        const str = cubeArrToString(newArr);
        if (solutionMap[str]) continue;
        const steps: Log = [...permutations[i][1], [j, k]];
        permutations.push([newArr, steps]);
        solutionMap[str] = steps;
      }
    }
  }
  console.timeEnd('populateSolutionMap');
};
