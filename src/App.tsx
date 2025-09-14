import React, { useState, useEffect, useRef, useReducer } from 'react';
import * as GCodePreview from 'gcode-preview';
import { useViewer } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/Viewer"
import { mkMsg, useStateMachineApp } from "@m-bock/gcode-viewer-core/GCodeViewer/StateMachines/App"
import { trunc, toNumber } from "@m-bock/gcode-viewer-core/Data/Int";
import { mkRemoteData, onRemoteData, RemoteData } from '@m-bock/gcode-viewer-core/GCodeViewer/RemoteData';
import { IndexFileItem } from '@m-bock/gcode-viewer-core/TypeAliases';
import { useEffectEq } from '@m-bock/gcode-viewer-core/react-utils';




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
    <div>
      {data.name}
    </div>
  )
}


const App2: React.FC<{ data: IndexFileItem[] }> = ({ data }) => {

  return (
    <div>
      {data.map((item) => <App3 data={item} />)}
    </div>
  )
}


const App: React.FC = () => {

  const { state, dispatch } = useStateMachineApp()

  useEffect(() => {
    console.log("render", state);
  });

  useEffect(() => {
    dispatch.runFetchIndex({ url: "/out/index.json" })
  }, []);

  return (
    <div>
      {onRemoteData(state.index, {
        NotAsked: () => <>Not Asked</>,
        Loading: () => <>Loading</>,
        Loaded: (data) => <App2 data={data} />,
        Error: (err) => <>{"Error: " + err}</>
      })}
    </div>
  )
}

export default App;
