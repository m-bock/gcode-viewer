import React, { useEffect, useState } from 'react';
import { useStateMachineApp, getQueryParams, mkUrl, selectFilteredFiles } from "@m-bock/gcode-viewer-core/StateMachines/App"
import { onRemoteData } from '@m-bock/gcode-viewer-core/RemoteData';
import { Layout } from '../components/Layout';
import { ViewerContainer } from './ViewerContainer';
import { ViewerCollection } from '../components/ViewerCollection';
import { SearchBar } from '../components/SearchBar';


const AppContainer: React.FC = () => {
  const { state, dispatch } = useStateMachineApp()

  useEffect(() => {
    const query = getQueryParams()
    dispatch.runFetchIndex({ label: "App", url: query.url })
  }, []);


  return (
    onRemoteData(state.index, {
      NotAsked: () =>
        <Layout />,
      Loading: () =>
        <Layout viewInfo={<>Loading</>} />,
      Loaded: (data) => {
        const filteredItems = selectFilteredFiles(state)
        return (
          <Layout
            viewHeader={<SearchBar value={state.filter} onSearch={(val) => dispatch.MsgSetFilter(val)} />}>
            <ViewerCollection>
              {
                filteredItems.map((item) =>
                  <ViewerContainer
                    key={item.name + item.gcode}
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

export default AppContainer;
