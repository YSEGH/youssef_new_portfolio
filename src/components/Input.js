import React, { memo, useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Input = ({ field }) => {
  const { actions } = useContext(AppContext);
  const [focus, setFocus] = useState(false);

  const onFocusHandler = () => {
    setFocus(true);
  };
  const onBlurHandler = (e) => {
    if (!e.target.value) {
      setFocus(false);
    }
  };
  const onChangeHandler = (e) => {
    if (e.target.value) {
      setFocus(true);
    }
    actions.updateForm({ key: field.name, value: e.target.value });
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div
      data-name={field.name}
      className={`form--field--wrapper ${field.type} ${
        focus || field.value ? "is_active" : ""
      } ${field.error ? "is_error" : ""}`}
    >
      <h4 className="form--field--title">
        {field.label} {field.isRequired ? <span>*</span> : null}
      </h4>
      <div className="form--field--input_wrapper">
        <input
          spellCheck="false"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          type={field.input_type}
          name={field.name}
          value={field.value}
        />
      </div>
      <div className="form--field--message">
        {!field.error ? (
          <p className="">{field.description}</p>
        ) : (
          <p className="">{field.error}</p>
        )}
      </div>
    </div>
  );
};

export default memo(Input);
