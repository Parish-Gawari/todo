/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "react-bootstrap";
import styles from "./Input.module.css"

const Input = ({
  inputChangeHandler,
  btnClickHandler,
  inputKeydownHandler,
  inputValue,
  dateValue,
  isDisabled,
  dateChangeHandler,
}) => {
  const changeHandler = (e) => {
    inputChangeHandler(e.target.value);
  };
  return (
    <>
      <div className="d-flex flex-column p-2 flex-sm-row justify-content-sm-center">
        <input
          type="text"
          placeholder="Enter Todo Here"
          className="m-2 p-2"
          onChange={changeHandler}
          onKeyUp={inputKeydownHandler}
          value={inputValue}
        />
        <div className="d-flex justify-content-center">
          <input
            type="date"
            className="m-2 p-2 d-sm-inline"
            onChange={(e) => dateChangeHandler(e.target.value)}
            value={dateValue}
          />
          <Button
            className="m-2 p-2 d-sm-inline border border-primary-subtle rounded"
            variant="transparent"
            onClick={btnClickHandler}
            disabled={isDisabled}
            id={styles.AddtoDo}
          >
            Add Todo
          </Button>
        </div>
      </div>
    </>
  );
};

export default Input;
