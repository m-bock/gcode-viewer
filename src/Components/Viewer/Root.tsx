import React from 'react';
import styled from '@emotion/styled';

const StyledRoot = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`

type Props = {
    children: React.ReactNode;
}

export const Root: React.FC<Props> = ({ children }) => {
    return <StyledRoot>{children}</StyledRoot>
}