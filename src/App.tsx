import React, { useEffect, useState } from 'react';
import { useStateMachineApp, getQueryParams, mkUrl } from "@m-bock/gcode-viewer-core/StateMachines/App"
import { onRemoteData } from '@m-bock/gcode-viewer-core/RemoteData';
import { Layout } from './Components/Layout';
import './index.css';
import { AppViewer } from './AppViewer';
import { ViewerCollection } from './Components/ViewerCollection';
import { SearchBar } from './Components/SearchBar';


const App: React.FC = () => {
  const { state, dispatch } = useStateMachineApp()

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
      Loaded: (data) => {
        const filteredItems = data.content.filter((item) => item.name.toLowerCase().includes(state.filter.toLowerCase()))
        return (
          <Layout
            viewHeader={<SearchBar value={state.filter} onSearch={(val) => dispatch.MsgSetFilter(val)} />}>
            <ViewerCollection>
              {

                filteredItems.map((item) =>
                  <AppViewer
                    fileName={item.name}
                    gcodeUrl={mkUrl({ absUrl: data.url, relUrl: item.gcode })}
                    pictures={item.pictures} />)
              }
            </ViewerCollection>
          </Layout>)
      },
      Error: (err) =>
        <Layout viewErrors={<>{"Error: " + err}</>} />
    })
  )
}

export default App;
