import React from 'react';
import styled from '@emotion/styled';
import { Slider as RadixSlider } from 'radix-ui';
import { Int } from '@m-bock/gcode-viewer-core/Prim';
import { toNumber, trunc } from '@m-bock/gcode-viewer-core/Extra/Data/Int';

type Props = {
    value: Int;
    onChange: (value: Int) => void;
    min: Int;
    max: Int;
}

const StyledRoot = styled.div`
    position: absolute;
    top: 16px;
    bottom: 16px;
    right: 16px;
    width: 16px;
`

const StyledRadixSliderRoot = styled(RadixSlider.Root)`
	position: relative;
	display: flex;
    flex-direction: column;
	align-items: center;
	user-select: none;
	touch-action: none;
	width: 16px;
	height: 100%;
`

const StyledRadixSliderTrack = styled(RadixSlider.Track)`
	background-color: rgba(255, 255, 255, 0.1);
	position: relative;
	flex-grow: 1;
	border-radius: 2px;
	height: 100%;
    width: 2px;
`

const StyledRadixSliderRange = styled(RadixSlider.Range)`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.3);
	border-radius: 2px;
	height: 100%;
`

const StyledRadixSliderThumb = styled(RadixSlider.Thumb)`
	display: block;
	width: 12px;
	height: 12px;
	background-color: rgba(255, 255, 255, 0.6);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 6px;
	transition: all 0.1s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.8);
        transform: scale(1.1);
    }
    
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
    }
`

export const Slider: React.FC<Props> = ({ value, onChange, min, max }) => {
    return (
        <StyledRoot>
            <StyledRadixSliderRoot
                onValueChange={(vals) => onChange(trunc(vals[0] || 0))}
                orientation="vertical"
                defaultValue={[toNumber(value)]}
                max={toNumber(max)}
                min={toNumber(min)}
                step={1}>
                <StyledRadixSliderTrack>
                    <StyledRadixSliderRange />
                </StyledRadixSliderTrack>
                <StyledRadixSliderThumb aria-label="Volume" />
            </StyledRadixSliderRoot>
        </StyledRoot>
    )
}


