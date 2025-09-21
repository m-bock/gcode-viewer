import React from 'react';
import styled from '@emotion/styled';


type Props = {
    children: React.ReactNode;
}

const StyledRoot = styled.div`
    position: relative;

    border: 1px solid #887432;
    width: 800px;
    height: 600px;
    border-radius: 5px;
    overflow: hidden;
`

export const Root: React.FC<Props> = ({ children }) => {
    return <StyledRoot>{children}</StyledRoot>
}