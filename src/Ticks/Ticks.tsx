import React from 'react';
import styles from './Ticks.module.css';
import styled from '@emotion/styled'

const Tick = styled.div<{ bottom: number }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom}%;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
`;


type Props = {
    min: number;
    max: number;
    step: number;
}


const getTicks = (min: number, max: number, step: number): number[] => {
    const ticks = [];
    for (let i = min; i <= max; i += step) {
        ticks.push(i);
    }
    return ticks;
}

export const Ticks: React.FC<Props> = ({ min, max, step }) => {
    return (
        <div className={styles.root}>
            <div className={styles.anchor}>
                {getTicks(min, max, step).map((tick) => {
                    const pct = (tick - min) / (max - min);
                    return (
                        <Tick key={tick} bottom={pct * 100}>
                        </Tick>
                    )
                })}
            </div>
        </div>
    );
};
