import { Route, Routes } from "react-router-dom";
import AppView from "../views/app/AppView";
import HomeView from "../views/home/HomeView";

const Router = () => {
  return (
    <Routes>
      <Route element={<HomeView />} path="/" />
      <Route element={<AppView />} path="app" />
    </Routes>
  );
};

export default Router;
