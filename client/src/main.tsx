import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import { DashBoard } from './pages/DashBoard.tsx';
import HomeLayout from './layouts/HomeLayout.tsx';
import Compare from './pages/Compare.tsx';

  
const routes = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      { index: true, Component: App },
      { path: "dashboard", Component: DashBoard },
      { path: "compare", Component: Compare },
    ],
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
