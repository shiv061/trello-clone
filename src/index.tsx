import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { AppStateProvider } from './AppStateContext';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';

ReactDOM.render(
  <DndProvider backend={Backend}>
    <React.StrictMode>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </React.StrictMode>
  </DndProvider>,
  document.getElementById('root')
);
