import React from 'react';
import styled from '@emotion/styled';
import * as Viewer from './Components/Viewer';
import { mkMsg, useStateMachineViewer } from '@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer';
import * as StateMachinesViewer from '@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer';
import { toNumber, trunc } from '@m-bock/gcode-viewer-core/Extra/Data/Int';
import { useEffectEq } from '@m-bock/gcode-viewer-core/react-utils';
import { eqString } from '@m-bock/gcode-viewer-core/Extra/Data/String';
import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import { mkUrl } from '@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App';
import { onRemoteData } from '@m-bock/gcode-viewer-core/GCodeViewer/RemoteData';

export const StyledRoot = styled.div`
    border: 1px solid red;
    width: 800px;
    height: 600px;
`

type Props = {
    gcodeUrl: string,
    fileName: string,
    pictures: string[],
}

export const GCodeViewer2: React.FC<Props> = ({
    gcodeUrl, fileName, pictures
}) => {
    const { state, dispatch } = useStateMachineViewer()

    useEffectEq(() => {
        const { cancel } = dispatch.runLoadGcodeLines({ url: gcodeUrl })

        return () => {
            console.log("cleanup")
            cancel()
        }
    }, eqString, gcodeUrl)

    const gcode = onRemoteData(state.gcodeLines, {
        NotAsked: () => [],
        Loading: () => [],
        Loaded: (data) => data,
        Error: (err) => []
    })

    return (
        <StyledRoot>
            <Viewer.Root>
                <Viewer.View3D
                    gcode={gcode}
                    endLayer={state.endLayer}
                    onMaxLayerIndex={(val) => dispatch.MsgSetMaxLayer(val)} />
                <Viewer.LayerCountBox
                    currentLayer={state.endLayer}
                    totalLayers={state.maxLayer} />
                <Viewer.Slider
                    value={state.endLayer}
                    onChange={(val) => dispatch.MsgSetEndLayer(val)}
                    min={state.minLayer}
                    max={state.maxLayer} />
                <Viewer.Ticks min={state.minLayer} max={state.maxLayer} step={trunc(5)} />
            </Viewer.Root>
        </StyledRoot>
    )
}