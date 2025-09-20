import React from 'react';
import styled from '@emotion/styled';

const StyledRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    padding: 20px;
`

type Props = {
    children: React.ReactNode[]
}

export const ViewerCollection: React.FC<Props> = ({ children }) => {
    return <StyledRoot>{children}</StyledRoot>
}