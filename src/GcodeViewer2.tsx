import React from 'react';
import styled from '@emotion/styled';
import * as Viewer from './Components/Viewer';
import { useStateMachineViewer } from '@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer';
import * as StateMachinesViewer from '@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer';
import { toNumber, trunc } from '@m-bock/gcode-viewer-core/Extra/Data/Int';
import { useEffectEq } from '@m-bock/gcode-viewer-core/react-utils';
import { eqString } from '@m-bock/gcode-viewer-core/Extra/Data/String';
import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import { mkUrl } from '@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App';

export const StyledRoot = styled.div`
    border: 1px solid red;
    width: 800px;
    height: 600px;
`

type Props = {
    data: IndexFileItem,
    url: string
}

export const GCodeViewer2: React.FC<Props> = ({
    data, url
}) => {
    const { state, dispatch } = useStateMachineViewer()

    useEffectEq(() => {
        dispatch.runLoadGcodeLines({ url: mkUrl({ absUrl: url, relUrl: data.gcode }) })


        return () => {
            console.log("cleanup")
        }
    }, eqString, data.gcode)



    return (
        <StyledRoot>
            <Viewer.Root>
                <Viewer.LayerCountBox
                    currentLayer={state.endLayer}
                    totalLayers={state.maxLayer} />
                <Viewer.Slider
                    value={state.endLayer}
                    onChange={(val) => dispatch.msg(StateMachinesViewer.mkMsg.MsgSetEndLayer(val))}
                    min={state.minLayer}
                    max={state.maxLayer} />
                <Viewer.Ticks />
            </Viewer.Root>
        </StyledRoot>
    )
}