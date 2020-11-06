import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";
import { GlobalStyle } from "./statics/styles/global";

const Splash = lazy(() => import("./routes/Splash"));
const Home = lazy(() => import("./routes/Home"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/home" exact component={Home} />
      </Switch>
      <GlobalStyle />
    </Suspense>
  );
}

export default App;
