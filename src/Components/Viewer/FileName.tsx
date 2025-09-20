import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { onRemoteData, RemoteData } from '@m-bock/gcode-viewer-core/RemoteData';

type Props = {
    fileName: string;
    status: RemoteData<string>;
}

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const StyledRoot = styled.div`
    color: #2bc0b4;
    position: absolute;
    bottom: 16px;
    right: 70px;
    font-size: 12px;
    opacity: 0.7;
    display: flex;
    align-items: center;
    gap: 6px;
`

const Spinner = styled.div`
    width: 12px;
    height: 12px;
    border: 2px solid transparent;
    border-top: 2px solid #2bc0b4;
    border-radius: 50%;
    animation: ${spin} 1s linear infinite;
`;

export const FileName: React.FC<Props> = ({ fileName, status }) => {
    return (
        <StyledRoot>
            {onRemoteData(status, {
                NotAsked: () => <></>,
                Loading: () => <div>Loading</div>,
                Loaded: (data) => <></>,
                Error: (error) => <div>Error</div>
            })}
            {fileName}
        </StyledRoot >
    )
}