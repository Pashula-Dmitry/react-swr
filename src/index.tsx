import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { HTTP } from 'src/core/api';
import { SWRConfig } from 'swr';

export const fetcherAxios = (url: string) => HTTP.get(url).then((res) => res.data);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig
        value={{
          revalidateIfStale: true,
          revalidateOnFocus: true,
          fetcher: fetcherAxios,
        }}>
        <App />
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
);
