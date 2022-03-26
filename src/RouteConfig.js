import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyLoad } from "./components/views/shared/LazyLoading";
import { PrivateRoute } from "./components/views/shared/PrivateRoute";

const Layout = lazy(() => import("./components/views/shared/Layout"));
const LayoutInner = lazy(() => import("./components/views/shared/LayoutInner"));
const Home = lazy(() => import("./components/views/home/Home"));
const About = lazy(() => import("./components/views/home/About"));
const Contact = lazy(() => import("./components/views/home/Contact"));
const Teams = lazy(() => import("./components/views/home/Teams"));
const Team = lazy(() => import("./components/views/home/Team"));
const NotFound = lazy(() => import("./components/views/home/NotFound"));
const Login = lazy(() => import("./components/views/account/Login"));

export default function RouteConfig() {
  return (
    <>
      <BrowserRouter>
        <div className="container my-3">
          <Suspense fallback={<LazyLoad />}>
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
          </Suspense>
        </div>
      </BrowserRouter>
    </>
  );
}
