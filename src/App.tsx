import React, { useEffect } from 'react';
import { useStateMachineApp, getQueryParams, mkUrl } from "@m-bock/gcode-viewer-core/StateMachines/App"
import { onRemoteData } from '@m-bock/gcode-viewer-core/RemoteData';
import { Layout } from './Components/Layout';
import './index.css';
import { AppViewer } from './AppViewer';
import { ViewerCollection } from './Components/ViewerCollection';


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
      Loaded: (data) =>
        <Layout>
          <ViewerCollection>
            {data.content.map((item) =>
              <AppViewer
                fileName={item.name}
                gcodeUrl={mkUrl({ absUrl: data.url, relUrl: item.gcode })}
                pictures={item.pictures} />)
            }
          </ViewerCollection>
        </Layout>,
      Error: (err) =>
        <Layout viewErrors={<>{"Error: " + err}</>} />
    })
  )
}

export default App;
