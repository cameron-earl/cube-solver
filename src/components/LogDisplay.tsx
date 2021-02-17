import React from 'react';

import { Color } from '../helpers/cube';
import { roundToTwoDecimals } from '../helpers/helpers';
import { Log, LogEntry } from '../helpers/log';

interface LogDisplayProps {
  log: Log;
  maxLogs: number;
}

const MIN_OPACITY = 0.15;
const FADE_COUNT = 3;

const LogDisplay: React.FC<LogDisplayProps> = (props: LogDisplayProps) => {
  const { log, maxLogs } = props;

  const fadeCount = Math.min(maxLogs, FADE_COUNT);
  const increasePercent = Math.pow(2, 1 / fadeCount) * Math.pow(MIN_OPACITY + 1, -1 / fadeCount);
  const currentFadeCount = log.length + fadeCount - maxLogs;
  const fadeCountOffset = fadeCount - currentFadeCount;

  const calcOpacity = (i: number): number =>
    roundToTwoDecimals((1 + MIN_OPACITY) * Math.pow(increasePercent, i + fadeCountOffset) - 1);

  const getOpacity = (i: number): number | '' => (i >= currentFadeCount ? '' : calcOpacity(i));

  const logElements = log
    .map((l: LogEntry, i: number) => {
      const opacity = getOpacity(i);
      if (typeof opacity === 'number' && opacity < 0) return '';
      return (
        <div key={`${i}-log`} style={{ opacity }}>
          {i + 1}. {Color[l[0]]} - {l[1]}
        </div>
      );
    })
    .reverse();

  return <div>{logElements}</div>;
};

export default LogDisplay;
