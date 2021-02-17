import React, { MouseEvent, useState } from 'react';

import { Color, createMixedUpCubeArr, rotateSide, sideArr } from '../helpers/cube';
import { addLog, Log } from '../helpers/log';
import { populateSolutionMap } from '../helpers/solver';
import styles from './Cube.module.css';
import LogDisplay from './LogDisplay';

populateSolutionMap();

const CubeComponent: React.FC = () => {
  const [cubeArr, setCubeArr] = useState(() => createMixedUpCubeArr());
  const [log, setLog] = useState([] as Log);
  console.log('render!');

  const handleClick = (c: Color, i: number, isRightClick = false) => (ev: MouseEvent<HTMLDivElement>) => {
    const turns = isRightClick ? 3 : 1;
    const newCubeArr = rotateSide(cubeArr, c, turns);
    setCubeArr(newCubeArr);
    setLog(addLog(log, c, turns));
    ev.preventDefault();
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
          {side.map(createSquareEl(sideColor))}
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
      <LogDisplay log={log} maxLogs={20}></LogDisplay>
    </div>
  );
};

export default CubeComponent;
