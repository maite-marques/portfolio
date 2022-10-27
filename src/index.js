import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseLine from '@mui/material/CssBaseline'

import './index.css';
import App from './App';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<BrowserRouter><CssBaseLine /><App /></BrowserRouter>);