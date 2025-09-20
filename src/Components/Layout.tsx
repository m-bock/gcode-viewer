import React from 'react';
import * as pkgJson from '../../package.json';
import * as corePkgJson from '@m-bock/gcode-viewer-core/package.json';
import * as styles from './Layout.module.css';
import styled from '@emotion/styled';

type Props = {
    children?: React.ReactNode,
    viewErrors?: React.ReactNode,
    viewInfo?: React.ReactNode
}

const StyledRoot = styled.div`
    background-color: #1d1f22;
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

export const Layout: React.FC<Props> = ({ children, viewErrors, viewInfo }) => {
    return (
        <StyledRoot>
            <div>{children}</div>
            <div>{viewErrors}</div>
            <div>{viewInfo}</div>
            <StyledVersion>{pkgJson.version} / {corePkgJson.version}</StyledVersion>
        </StyledRoot>)
}