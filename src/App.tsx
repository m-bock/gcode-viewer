import React, { useState, useEffect, useRef, useReducer } from 'react';
import * as GCodePreview from 'gcode-preview';
import { useStateMachineViewer } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer"
import { mkMsg, useStateMachineApp, getQueryParams, mkUrl } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App"
import * as SMA from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App"
import * as SMV from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer"
import { trunc, toNumber } from "@m-bock/gcode-viewer-core/Data/Int";
import { mkRemoteData, onRemoteData, RemoteData } from '@m-bock/gcode-viewer-core/GCodeViewer/RemoteData';
import { useEffectEq } from '@m-bock/gcode-viewer-core/react-utils';
import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import { Layout } from './Layout';
import { CollectionViewer } from './CollectionViewer';
import { Viewer } from './Viewer';
import { PicturesViewer } from './PicturesViewer';
import { GCodeViewer } from './GCodeViewer';

import './index.css';
import { Slider } from './Slider';




const eqString = (a: string, b: string) => a === b

const App3: React.FC<{ url: string, data: IndexFileItem }> = ({ url, data }) => {

  const { state, dispatch } = useStateMachineViewer()

  useEffectEq(() => {
    dispatch.runLoadGcodeLines({ url: mkUrl({ absUrl: url, relUrl: data.gcode }) })


    return () => {
      console.log("cleanup")
    }
  }, eqString, data.gcode)

  return (
    <Viewer
      viewPictures={
        <PicturesViewer
          pictures={data.pictures} />}
      viewGcode={
        <GCodeViewer
          gcode={onRemoteData(state.gcodeLines, {
            NotAsked: () => [],
            Loading: () => [],
            Loaded: (data) => data,
            Error: (err) => []
          })}
          endLayer={toNumber(state.endLayer)}
          onMaxLayerIndex={(maxLayerIndex) => { dispatch.msg(SMV.mkMsg.MsgSetMaxLayer(trunc(maxLayerIndex))) }}
        />}
      item={data}
      viewSlider={
        <Slider
          value={toNumber(state.endLayer)}
          onChange={([s]) => { dispatch.emitSetEndLayer(trunc(s)) }}
          min={toNumber(state.minLayer)}
          max={toNumber(state.maxLayer)}
        />}
    />
  )
}



const App: React.FC = () => {

  const { state, dispatch } = useStateMachineApp()

  useEffect(() => {
    console.log("render", state);
  });

  useEffect(() => {
    const query = getQueryParams()
    dispatch.runFetchIndex({ url: query.url })
  }, []);

  return (
    onRemoteData(state.index, {
      NotAsked: () =>
        <Layout />,
      Loading: () =>
        <Layout viewInfo={<>Loading</>} />,
      Loaded: (data) =>
        <Layout>
          <CollectionViewer items={data.content.map((item) => <App3 url={data.url} data={item} />)} />
        </Layout>,
      Error: (err) =>
        <Layout viewErrors={<>{"Error: " + err}</>} />
    })
  )
}

export default App;
