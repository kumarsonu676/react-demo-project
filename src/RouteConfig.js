import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/views/home/Home";
import About from "./components/views/home/About";
import Contact from "./components/views/home/Contact";
import Layout from "./components/views/shared/Layout";
import LayoutInner from "./components/views/shared/LayoutInner";
import Teams from "./components/views/home/Teams";
import NotFound from "./components/views/home/NotFound";
import Team from "./components/views/home/Team";
import Login from "./components/views/account/Login";
import { PrivateRoute } from "./components/views/shared/PrivateRoute";

export default function RouteConfig() {
  return (
    <>
      <BrowserRouter>
        <div className="container my-3">
          <Routes>
            <Route element={<Layout />}>
              <Route index path="/" element={<Home />} />
            </Route>

            <Route element={<LayoutInner />}>
              <Route
                path="/about-us"
                element={
                  <PrivateRoute roles={["User", "Admin"]}>
                    <About />
                  </PrivateRoute>
                }
              />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/app/login" element={<Login />} />
              <Route path="/teams">
                <Route
                  path=":teamid"
                  element={
                    <PrivateRoute roles={["Admin"]}>
                      <Team />
                    </PrivateRoute>
                  }
                />
                <Route
                  path=""
                  element={
                    <PrivateRoute roles={["Admin"]}>
                      <Teams />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Route>

            <Route element={<LayoutInner />}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}
