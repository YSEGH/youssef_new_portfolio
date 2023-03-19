export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ROUTER":
      let url = window.location.origin;
      let updated_url = url + action.data;
      window.history.pushState({}, "", updated_url);
      return { ...state, route: action.data };
    case "UPDATE_FORM":
      let newForm = state.form;
      newForm[action.key].value = action.value;
      newForm[action.key].error = null;
      console.log(newForm);
      return { ...state, form: newForm };
    default:
      break;
  }
};
