import axios from "axios";
import React, { lazy, Suspense } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Translator = lazy(() => import("./containers/Translator"));
const Favorites = lazy(() => import("./containers/Favorites"));
const Tests = lazy(() => import("./containers/Tests"));
const SignIn = lazy(() => import("./containers/SignIn"));
const SignUp = lazy(() => import("./containers/SignUp"));
const Teachers = lazy(() => import("./containers/Teachers"));
const Books = lazy(() => import("./containers/Books"));
const Games = lazy(() => import("./containers/Games"));
const Profile = lazy(() => import("./containers/Profile"));

import Spinner from "./components/Spinner/index";
import { API_URL } from "./constants";

const JavaScriptCourse = lazy(() =>
  import("./components/Courses/JavaScriptCourse")
);
const CssCourse = lazy(() => import("./components/Courses/CssCourse"));
const HtmlCourse = lazy(() => import("./components/Courses/HtmlCourse"));
const BootstrapCourse = lazy(() =>
  import("./components/Courses/BootstrapCourse")
);
const ReactCourse = lazy(() => import("./components/Courses/ReactCourse"));
const PythonCourse = lazy(() => import("./components/Courses/Python"));

const App = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const getCurrentUser = async () => {
      const responseData = await axios
        .get(`${API_URL}/profile`, { withCredentials: true })
        .then((response) => setUser(response.data));
    };
    getCurrentUser();
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/courses" component={Translator} />
          <Route path="/translator" component={Favorites} />
          <Route path="/tests" component={Tests} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/books" component={Books} />
          <Route path="/games" component={Games} />
          <Route path="/profile" component={Profile} />
          <Route path="/signup" component={SignUp} />

          <Route path="/JavaScript" component={JavaScriptCourse} />
          <Route path="/css" component={CssCourse} />
          <Route path="/html" component={HtmlCourse} />
          <Route path="/bootstrap" component={BootstrapCourse} />
          <Route path="/react" component={ReactCourse} />
          <Route path="/python" component={PythonCourse} />

          {user && user._id ? (
            <Redirect from="*" to="/courses" />
          ) : (
            <Redirect from="*" to="/signin" />
          )}
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
