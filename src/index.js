import React from 'react';
import { createRoot } from 'react-dom/client';

//...we import the css style file...
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppManager from './app/manager/app.manager';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
      <AppManager />
    </React.StrictMode>
);