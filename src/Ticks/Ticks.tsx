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
    return Array.from({ length: (max - min) / step }, (_, i) => min + i * step);
}

export const Ticks: React.FC<Props> = ({ min, max, step }) => {
    return (
        <div className={styles.root}>
            <div className={styles.anchor}>
                {getTicks(min, max, step).map((tick) => (
                    <Tick key={tick} bottom={tick}>
                    </Tick>
                ))}
            </div>
        </div>
    );
};
