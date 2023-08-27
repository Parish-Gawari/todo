/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import List from "../List/List";

const LS_TODO_LIST = "todoList";
const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  useEffect(() => {
    // read the local storage
    const listItems = JSON.parse(localStorage.getItem(LS_TODO_LIST)) || [];
    setList(listItems);
  }, []);

  useEffect(() => {
    localStorage.setItem(LS_TODO_LIST, JSON.stringify(list));
  }, [list]);

  const inputChangeHandler = (str) => setText(str);
  const dateChangeHandler = (val) => setDate(val);

  const btnClickHandler = () => {
    const trimText = text.trim();
    console.log(date, text);
    if (trimText) {
      setList([
        ...list,
        {
          item: trimText,
          editingItem: trimText,
          isDone: false,
          isEditing: false,
          isSearch: true,
          dueDate: date,
        },
      ]);
      setText("");
      setDate("");
    }
  };

  const inputKeydownHandler = (e) => {
    if (e.key === "Enter") {
      btnClickHandler();
    }
  };

  return (
    <>
      <Input
        inputValue={text}
        dateValue={date}
        inputChangeHandler={inputChangeHandler}
        btnClickHandler={btnClickHandler}
        inputKeydownHandler={inputKeydownHandler}
        dateChangeHandler={dateChangeHandler}
        isDisabled={text.trim().length === 0 || date.length === 0}
      />
      <List />
    </>
  );
};

export default TodoList;
