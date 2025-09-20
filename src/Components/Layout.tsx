import React from 'react';
import * as pkgJson from '../../package.json';
import * as corePkgJson from '@m-bock/gcode-viewer-core/package.json';
import styled from '@emotion/styled';


type Props = {
    children?: React.ReactNode,
    viewErrors?: React.ReactNode,
    viewInfo?: React.ReactNode,
    viewHeader?: React.ReactNode
}

const StyledRoot = styled.div`
    background-color: #1d1f22;
    display: flex;
    flex-direction: column;
    //align-items: center;
    //justify-content: center;
    height: 100%;
`

const StyledVersion = styled.div`
    color: #fff;
    position: absolute;
    bottom: 10px;
    right: 30px;
    background-color: #081f36;
    padding: 10px;
    font-size: 12px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #94a6b9;
`

const StyledHeader = styled.div`
    color: #fff;
    background-color: #14141160;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: right;
`

const StyledContent = styled.div`
    padding: 40px;
    flex: 1;
    width: 100%;
    overflow-y: auto;
`

export const Layout: React.FC<Props> = ({ children, viewErrors, viewInfo, viewHeader }) => {
    return (
        <StyledRoot>
            <StyledHeader>{viewHeader}</StyledHeader>
            <StyledContent>{children}</StyledContent>
            <StyledVersion>{pkgJson.version} / {corePkgJson.version}</StyledVersion>
        </StyledRoot>)
}

