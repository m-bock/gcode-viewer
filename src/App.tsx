import React, { useState, useEffect, useRef, useReducer } from 'react';
import * as GCodePreview from 'gcode-preview';
import { useStateMachineViewer } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer"
import { mkMsg, useStateMachineApp, getQueryParams, mkUrl } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App"
import * as SMA from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App"
import * as SMV from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer"
import { trunc, toNumber } from "@m-bock/gcode-viewer-core/Extra/Data/Int";
import { mkRemoteData, onRemoteData, RemoteData } from '@m-bock/gcode-viewer-core/GCodeViewer/RemoteData';
import { useEffectEq } from '@m-bock/gcode-viewer-core/react-utils';
import { IndexFileItem } from '@m-bock/gcode-viewer-core/GCodeViewer/Api';
import { Layout } from './Layout';
import { CollectionViewer } from './CollectionViewer';
import { PicturesViewer } from './PicturesViewer';
import './index.css';
import { LayerCountBox } from './LayerCountBox';
import { Viewer } from './Viewer';
import { GCodeViewer2 } from './GcodeViewer2';







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
          <CollectionViewer items={data.content.map((item) => <GCodeViewer2
            fileName={item.name}
            gcodeUrl={mkUrl({ absUrl: data.url, relUrl: item.gcode })}
            pictures={item.pictures} />)} />
        </Layout>,
      Error: (err) =>
        <Layout viewErrors={<>{"Error: " + err}</>} />
    })
  )
}

// <App3 url={data.url} data={item} />

export default App;
