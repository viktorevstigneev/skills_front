import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const Translator = lazy(() => import("./containers/Translator"));
const Favorites = lazy(() => import("./containers/Favorites"));
const Tests = lazy(() => import("./containers/Tests"));
const SignIn = lazy(() => import("./containers/SignIn"));
const Teachers = lazy(() => import("./containers/Teachers"));
const Books = lazy(() => import("./containers/Books"));
const Games = lazy(() => import("./containers/Games"));
import Spinner from "./components/Spinner/index";

const JavaScriptCourse = lazy(() =>
  import("./components/Courses/JavaScriptCourse")
);
const CssCourse = lazy(() =>
  import("./components/Courses/CssCourse")
);


const App = () => {
  let a;
  console.log("a: ", a);
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/courses" component={Translator} />
          <Route path="/translator" component={Favorites} />
          <Route path="/tests" component={Tests} />
          <Route path="/teachers" component={Teachers} />
          <Route path="/books" component={Books} />
           <Route path="/games" component={Games} />
          <Route path="/signin" component={SignIn} />

          <Route path="/JavaScript" component={JavaScriptCourse} />
          <Route path="/css" component={CssCourse} />

          <Redirect to="/courses" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
