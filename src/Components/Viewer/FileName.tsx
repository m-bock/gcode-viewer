import React from 'react';
import styled from '@emotion/styled';


type Props = {
    fileName: string;
}

const StyledRoot = styled.div`
    color: #2bc0b4;
    position: absolute;
    bottom: 16px;
    right: 70px;
    font-size: 12px;
    opacity: 0.7;
`

export const FileName: React.FC<Props> = ({ fileName }) => {
    return <StyledRoot>{fileName}</StyledRoot>
}