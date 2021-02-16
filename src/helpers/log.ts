import { Color } from './cube';

export type LogEntry = [Color, number];

export type Log = LogEntry[];

export const addLog = (log: Log, c: Color, turns: number) => {
  const newLog = [...log];

  const lastLog = log[log.length - 1];

  if (lastLog && lastLog[0] === c) {
    const newTurns = (lastLog[1] + turns) % 4;
    if (newTurns === 0) {
      newLog.pop();
    } else {
      newLog[newLog.length - 1][1] = newTurns;
    }
  } else {
    newLog.push([c, turns]);
  }

  return newLog;
};
