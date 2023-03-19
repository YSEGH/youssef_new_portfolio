const setRoute = (route, dispatch) => {
  dispatch({ type: "ROUTER", data: route });
};
const updateForm = (input, dispatch) => {
  dispatch({ type: "UPDATE_FORM", key: input.key, value: input.value });
};
const submitForm = async (data, dispatch) => {
  console.log(data);
  dispatch({ type: "SUBMIT_FORM" });
};
export { setRoute, updateForm, submitForm };
