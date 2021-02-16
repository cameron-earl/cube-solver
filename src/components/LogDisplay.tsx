import React from 'react';

import { Color } from '../helpers/cube';
import { Log, LogEntry } from '../helpers/log';

interface LogDisplayProps {
  log: Log;
}

function LogDisplay(props: LogDisplayProps) {
  const { log } = props;

  const logElements = log.map((l: LogEntry, i: number) => (
    <div>
      {Color[l[0]]} - {l[1]}
    </div>
  ));

  return <div>{logElements}</div>;
}

export default LogDisplay;
