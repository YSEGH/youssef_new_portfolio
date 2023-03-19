import { createContext, useMemo, useReducer } from "react";
import { setRoute, submitForm, updateForm } from "./AppActions";
import { AppReducer } from "./AppReducer";
import { AppState } from "./AppState";

export const AppContext = createContext(undefined);
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [app, dispatch] = useReducer(AppReducer, AppState);
  const setRouteHandler = (route) => {
    setRoute(route, dispatch);
  };
  const updateFormHandler = (input) => {
    updateForm(input, dispatch);
  };
  const submitFormHandler = (data) => {
    submitForm(data, dispatch);
  };

  const state = {
    state: {
      route: app.route,
      form: app.form,
    },
    actions: {
      setRoute: (route) => setRouteHandler(route),
      updateForm: (input) => updateFormHandler(input),
      submitForm: (data) => submitFormHandler(data),
    },
  };

  const value = useMemo(() => state, [app]);

  return <Provider value={value}>{children}</Provider>;
};
