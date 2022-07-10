import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./Common/redux/store";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Public from "./Public";
import App from "./App";
import Main from "./main";
import ProtectedRoute from "./components/ProtectedRoute";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Main>
          <Routes>
            {/* Redirect to /app from / */}
            <Route index element={<Navigate to="/app" />} />
            <Route
              path="/app/*"
              element={<ProtectedRoute>{App}</ProtectedRoute>}
            />
            <Route path="/auth/*" element={Public} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Main>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
