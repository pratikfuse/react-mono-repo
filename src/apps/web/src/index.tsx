import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { persistor, store } from './Common/redux/store';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import ProtectedRoute from './Common/components/ProtectedRoute';
import AsyncComponent from './Hoc/AsyncComponent';
import { ToastContainer } from '@lf-mono-web/components';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './main';

import '@lf-mono-web/scss/lib/global.css';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Main>
            <Routes>
              {/* Redirect to /app from / */}
              <Route
                index
                element={<Navigate to="/app" />}
              />
              <Route
                path="/app/*"
                element={
                  <ProtectedRoute>
                    <AsyncComponent
                      component={() => import('./App')}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/auth/*"
                element={
                  <AsyncComponent
                    component={() => import('./Auth')}
                  />
                }
              />
              <Route path="*" element={<div>404</div>} />
            </Routes>
          </Main>
        </PersistGate>
      </Provider>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
