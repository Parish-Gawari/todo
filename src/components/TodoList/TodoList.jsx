/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import List from "../List/List";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

const LS_TODO_LIST = "todoList";
const TodoList = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [delConfirm, setDelConfirm] = useState(false);
  const [todoIndex, setTodoIndex] = useState(null);
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
          dueDate: date,
          editDate: date
        },
      ]);
      setText("");
      setDate("");
    }
  };

  

  const isCheckHandler = (index)=>{
    const items = [...list];
    items[index].isDone = true;
    setList(items);
  }

  const isEditingHandler = (index)=>{
    const items = [...list];
    items[index].isEditing = true;
    setList(items);
  }

  const cancelHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    items[index].editingItem = items[index].item;
    items[index].editDate = items[index].dueDate
    setList(items);
  };

  const itemListChangeHandler = (index, value) => {
    const items = [...list];
    items[index].editingItem = value;
    setList(items);
  };

  const itemListDateChangeHandler = (index, value) => {
    const items = [...list];
    items[index].editDate = value;
    setList(items);
  };

  const itemSaveHandler = (index) => {
    const items = [...list];
    items[index].isEditing = false;
    const item = items[index].editingItem.trim();
    const ddate = items[index].editDate;

    if (item && ddate) {
      items[index].item = item;
      items[index].editingItem = item;
      items[index].dueDate = ddate;
      items[index].editDate = ddate;
    }
    setList(items);
  };

  const deleteHandler = (index) => {
    setDelConfirm(true);
    setTodoIndex(index);
  };

  return (
    <>
      <Input
        inputValue={text}
        dateValue={date}
        inputChangeHandler={inputChangeHandler}
        btnClickHandler={btnClickHandler}
        dateChangeHandler={dateChangeHandler}
        isDisabled={text.trim().length === 0 || date.length === 0}
        
      />
      <List tasks={list} isCheckHandler={isCheckHandler} isEditingHandler={isEditingHandler} cancelHandler={cancelHandler} itemSaveHandler={itemSaveHandler} itemListDateChangeHandler={itemListDateChangeHandler} itemListChangeHandler={itemListChangeHandler} deleteHandler={deleteHandler}/>

      {delConfirm && (
        <ConfirmDialog
          confirmShow={delConfirm}
          Message="Do You Really Want To Delete This Todo ?"
          Title="Delete Confirmation"
          onYesClickHandler={(index = todoIndex) => {
            const items = [...list];
            items.splice(index, 1);
            setList(items);
            setDelConfirm(false);
          }}
          onCancelClickHandler={() => {
            setDelConfirm(false);
          }}
        />
      )}
    </>
  );
};

export default TodoList;
