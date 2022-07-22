import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useNavigate, useLocation} from "react-router-dom";
import { createMemoryHistory } from "history";
import {
  useQueryParam,
  StringParam,
  QueryParamProvider,
} from "use-query-params";

const RouteAdapter = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const adaptedHistory = React.useMemo(
    () => ({
      replace(location) {
        navigate(location, { replace: true, state: location.state });
      },
      push(location) {
        navigate(location, { replace: false, state: location.state });
      },
    }),
    [navigate]
  );
  return children({ history: adaptedHistory, location });
};

const Home = () => {
  const [encoded] = useQueryParam("encoded", StringParam);
  const [decoded] = useQueryParam("decoded", StringParam);
  return <App encoded={encoded} decoded={decoded} />;
};

const history = createMemoryHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter location={history.location} navigator={history}>
        <QueryParamProvider ReactRouterRoute={RouteAdapter}>
          <Home />
        </QueryParamProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
