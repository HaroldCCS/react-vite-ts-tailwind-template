import App from "../page/app/App.page"
import MainLayout from "../layout/Main.layout"
import NotFoundPage from "../page/notFound/NotFound.page"

import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import { routerPaths } from "./routerPaths"

export const routerBrowser = createBrowserRouter(
  createRoutesFromElements(
    <Route path={routerPaths.app} element={<MainLayout />}>
      <Route index element={<App />} />
      <Route path={routerPaths.notFound} element={<NotFoundPage />} />
    </Route>
  )
)