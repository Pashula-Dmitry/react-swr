import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SWRConfig } from 'swr';
import axios from 'axios';

const HTTP = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

export const fetcherAxios = (url: string) => HTTP.get(url).then(res => res.data);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SWRConfig value={{
      revalidateIfStale: true,
      revalidateOnFocus: true,
      fetcher: fetcherAxios,
    }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
);
