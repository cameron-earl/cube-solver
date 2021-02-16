import React, { useState } from 'react'
import Cube, { Color, sideArr } from '../helpers/cube';
import styles from './Cube.module.css';
import cloneDeep from 'lodash.clonedeep';

const cubeObj = new Cube();

function CubeComponent() {

  const [cubeArr, setCubeArr] = useState(cubeObj.arr);
  const [cubeMoves, setCubeMoves] = useState(cubeObj.moveCount);

  console.log(cubeMoves, cubeArr);

  const handleClick = (c: Color, i: number) => () => {
    if (i !== 4) return;
    cubeObj.rotateSide(c);
    setCubeMoves(cubeObj.moveCount);
    setCubeArr(cloneDeep(cubeObj.arr));
  } 

  const createSquareEl = (sideColor: Color) => (c: Color, i: number) => (
    <div 
      key={`${Color[sideColor]}-${i}-${c}-square`} 
      className={`${styles.square} ${styles[Color[c]]}`}
      onClick={handleClick(sideColor, i)}
    >{i}</div>
  );

  const createSideEl = (side: sideArr, i: number) => (
    <div className={`${styles[Color[i]]} ${styles.sideContainer}`} key={`${i}-sideContainer`}>
      <div key={`${Color[i]}-side`} className={`${styles[Color[i]]} ${styles.side}`}>{side.map(createSquareEl(i))}</div>
    </div>
  );

  const display = cubeArr.map(createSideEl);

  return (
    <div>
      <div>{cubeMoves}</div>
      <div className={styles.cubeContainer}>
        {display}
      </div>
    </div>
  )
}

export default CubeComponent;