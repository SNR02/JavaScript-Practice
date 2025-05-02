import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//  import Prodcuts from "./components/products/Products";
import PageNotFound from "./components/PagenotFound/PageNotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";

const Prodcuts = React.lazy(() => import("./components/products/Products"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} 
      <Route path="prodcuts"
        element={
          <React.Suspense fallback={<>...</>}>
            <Prodcuts />
          </React.Suspense>
        }
      />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));