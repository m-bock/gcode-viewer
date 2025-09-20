import React from 'react';
import * as Viewer from './Components/Viewer';
import { useStateMachineViewer } from '@m-bock/gcode-viewer-core/StateMachines/Viewer';
import { trunc } from '@m-bock/gcode-viewer-core/Extra/Data/Int';
import { useEffectEq } from '@m-bock/gcode-viewer-core/react-utils';
import { eqString } from '@m-bock/gcode-viewer-core/Extra/Data/String';
import { onRemoteData } from '@m-bock/gcode-viewer-core/RemoteData';


type Props = {
    gcodeUrl: string,
    fileName: string,
    pictures: string[],
}

export const AppViewer: React.FC<Props> = ({
    gcodeUrl, fileName, pictures
}) => {
    const { state, dispatch } = useStateMachineViewer()

    useEffectEq(() => {
        const { cancel } = dispatch.runLoadGcodeLines({ url: gcodeUrl, interval: 10_000 })

        return () => {
            console.log("cleanup")
            cancel()
        }
    }, eqString, gcodeUrl)

    const rmp = onRemoteData(state.gcodeFile, {
        NotAsked: () => "loading" as const,
        Loading: () => "loading" as const,
        Loaded: () => "loaded" as const,
        Error: () => "error" as const
    })


    return (
        <Viewer.Root>
            <Viewer.View3D
                gcode={state.gcodeLines}
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
            <Viewer.Ticks
                min={state.minLayer}
                max={state.maxLayer}
                step={trunc(5)} />
            <Viewer.FileName fileName={fileName} status={state.gcodeFile} />
            <div style={{ color: "white", position: "absolute", top: 0, left: 0 }}>{rmp}</div>

        </Viewer.Root>
    )
}