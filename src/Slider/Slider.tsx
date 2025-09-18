import React, { useRef, useEffect } from 'react';

import { Slider as RadixSlider } from 'radix-ui';
import styles from './Slider.module.css';

interface SliderProps {
    value: number;
    onChange: (value: number[]) => void;
    min: number;
    max: number;
}

export const Slider: React.FC<SliderProps> = (props) => {
    return (
        <RadixSlider.Root
            onValueChange={props.onChange}
            className={styles.Root}
            orientation="vertical"
            defaultValue={[props.value]}
            max={props.max}
            min={props.min}
            step={1}>
            <RadixSlider.Track className={styles.Track}>
                <RadixSlider.Range className={styles.Range} />
            </RadixSlider.Track>
            <RadixSlider.Thumb className={styles.Thumb} aria-label="Volume" />
        </RadixSlider.Root>
    )
}
