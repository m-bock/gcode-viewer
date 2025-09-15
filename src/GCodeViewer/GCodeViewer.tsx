import React, { useState, useEffect, useRef, useReducer } from 'react';
import * as GCodePreview from 'gcode-preview';
import styles from './GCodeViewer.module.css';

export const GCodeViewer: React.FC<{ gcode: string[] }> = ({ gcode }) => {

    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;

            const gcodePreview = GCodePreview.init({
                canvas,
                lineWidth: 4,
                lineHeight: 4,
                renderTravel: false,
                renderExtrusion: true,
                renderTubes: false,
                startLayer: 10,
                endLayer: 20,
                backgroundColor: 'black',
                buildVolume: {
                    x: 220,
                    y: 220,
                    z: 0,
                },
            });

            //gcodePreview.canvas.getContext('webgl', { antialias: true })


            gcodePreview.processGCode(gcode);
        }
    }, [gcode]);

    return <canvas ref={canvasRef} className={styles.canvas} />
}

