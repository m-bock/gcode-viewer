import React from 'react';
import styled from '@emotion/styled';
import { Int } from '@m-bock/gcode-viewer-core/Prim';
import { toNumber, trunc } from '@m-bock/gcode-viewer-core/Extra/Data/Int';

type Props = {
    min: Int;
    max: Int;
    step: Int;
}

const StyledRoot = styled.div`
    opacity: 0.2;
    position: absolute;
    width: 10px;
    right: 40px;
    top: 22px;
    bottom: 22px;
`

const StyledTick = styled.div<{ bottom: number }>`
  position: absolute;
  bottom: ${({ bottom }) => bottom}%;
  right: 0;
  width: 100%;
  height: 1px;
  background-color: #fff;
`;

const StyledAnchor = styled.div`
    position: relative;
    
    width: 100%; height: 100%;

`;

const getTicks = (min: Int, max: Int, step: Int): { count: Int, pct: number }[] => {
    const ticks = [];
    for (let i = toNumber(min); i <= toNumber(max); i += toNumber(step)) {
        ticks.push({
            count: trunc(i),
            pct: (i - toNumber(min)) / (toNumber(max) - toNumber(min))
        });
    }
    return ticks;
}

export const Ticks: React.FC<Props> = ({ min, max, step }) => {
    const ticks = getTicks(min, max, step);

    return (
        <StyledRoot>
            <StyledAnchor>
                {ticks.map(({ count, pct }) =>
                    <StyledTick key={toNumber(count)} bottom={pct * 100} />
                )}
            </StyledAnchor>
        </StyledRoot>
    );
};
