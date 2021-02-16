import React, { MouseEvent, useState } from 'react';

import { Color, createSortedCubeArr, rotateSide, sideArr } from '../helpers/cube';
import { addLog, Log } from '../helpers/log';
import styles from './Cube.module.css';
import LogDisplay from './LogDisplay';

function CubeComponent() {
  const [cubeArr, setCubeArr] = useState(createSortedCubeArr());
  const [log, setLog] = useState([] as Log);

  console.log(cubeArr);

  const handleClick = (c: Color, i: number, isRightClick = false) => (ev: MouseEvent<HTMLDivElement>) => {
    let newCubeArr;
    if (isRightClick) {
      newCubeArr = rotateSide(cubeArr, c);
      newCubeArr = rotateSide(newCubeArr, c);
      newCubeArr = rotateSide(newCubeArr, c);
      ev.preventDefault();
    } else {
      newCubeArr = rotateSide(cubeArr, c);
    }
    setCubeArr(newCubeArr);
    setLog(addLog(log, c, isRightClick ? 3 : 1));
  };

  const createSquareEl = (sideColor: Color) => (c: Color, i: number) => (
    <div
      key={`${Color[sideColor]}-${i}-${c}-square`}
      className={`${styles.square} ${styles[Color[c]]}`}
      onClick={handleClick(sideColor, i)}
      onContextMenu={handleClick(sideColor, i, true)}
    ></div>
  );

  const createSideEl = (aspect: number) => (side: sideArr, i: number) => {
    const sideColor = aspect * 3 + i;
    return (
      <div className={`${styles[Color[sideColor]]} ${styles.sideContainer}`} key={`${sideColor}-sideContainer`}>
        <div key={`${Color[sideColor]}-side`} className={`${styles[Color[sideColor]]} ${styles.side}`}>
          {side.map(createSquareEl(i))}
        </div>
      </div>
    );
  };

  const frontDisplay = cubeArr.slice(0, 3).map(createSideEl(0));
  const rearDisplay = cubeArr.slice(3).map(createSideEl(1));

  return (
    <div>
      <div className={styles.cubeContainer}>
        <div className={styles.viewContainer}>{frontDisplay}</div>
        <div className={styles.viewContainer}>{rearDisplay}</div>
      </div>
      <LogDisplay log={log}></LogDisplay>
    </div>
  );
}

export default CubeComponent;
