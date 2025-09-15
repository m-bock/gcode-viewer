import React, { useState, useEffect, useRef, useReducer } from 'react';
import * as GCodePreview from 'gcode-preview';
import { useViewer } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer"
import { mkMsg, useStateMachineApp, getQueryParams } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App"
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




const eqString = (a: string, b: string) => a === b

const App3: React.FC<{ data: IndexFileItem }> = ({ data }) => {

  const { state, dispatch } = useViewer()

  useEffectEq(() => {
    console.log("useEffectEq", data.gcode)
    dispatch.runLoadGcodeLines({ url: data.gcode })

    return () => {
      console.log("cleanup")
    }
  }, eqString, data.gcode)

  return (
    <Viewer
      viewPictures={<PicturesViewer pictures={data.pictures} />}
      viewGcode={<GCodeViewer gcode={onRemoteData(state.gcodeLines, {
        NotAsked: () => [],
        Loading: () => [],
        Loaded: (data) => data,
        Error: (err) => []
      })} />}
      item={data} />
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
          <CollectionViewer items={data.map((item) => <App3 data={item} />)} />
        </Layout>,
      Error: (err) =>
        <Layout viewErrors={<>{"Error: " + err}</>} />
    })
  )
}

export default App;
