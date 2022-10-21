import React from 'react';
import {Tab} from './components/Tab'
import { TabPane } from './components/TabPane';
import './App.css';

function App() {
  return (
    <div className="tabs">
      <h1>Tabulator</h1>
      <Tab>
        <TabPane title="India" >
        <div className="tab-content">

             <p>Tab 1 India</p>
           </div>
        </TabPane>
        <TabPane title='Kampala' >
          <div className="tab-content">
             <p>Tab is Kampla</p>
           </div>
        </TabPane>

        <TabPane title="Dublin">
            <div className="tab-content">
              <p>This is Dublin</p>
            </div>
        </TabPane>
      </Tab>
    </div>
  );
}

export default App;
