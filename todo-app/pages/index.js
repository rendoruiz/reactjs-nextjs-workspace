import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import TodoInput from "../components/TodoInput";

export default function Home() {
  const [focusedItem, setFocusedItem] = useState(null); 

  const [todoList, setTodoList] = useState([
    { 
      id: 1,
      content: 'content 1',
      isComplete: false,
      isDeleted: false,
    },
    { 
      id: 2,
      content: 'content 2',
      isComplete: false,
      isDeleted: false,
    },
    { 
      id: 3,
      content: 'content 3',
      isComplete: false,
      isDeleted: false,
    },
  ]);

  // get item to be updated
  const handleFocus = (id) => {
    const selectedItem = todoList.find((item) => item.id === id);
    setFocusedItem(selectedItem);
  }

  // set todo item status to "complete"
  const handleComplete = (id) => {
    console.log('completeing', id);
    const updatedList = [...todoList];
    const updatedItem = updatedList.find((item) => item.id === id)
    if (!updatedItem.isComplete) {
      updatedItem.isComplete = true;
      setTodoList(updatedList);
    }
  }

  // set todo item status to "deleted"
  const handleDelete = (id) => {
    console.log('deleting', id);
    const updatedList = [...todoList];
    const updatedItem = updatedList.find((item) => item.id === id)
    if (!updatedItem.isDeleted) {
      updatedItem.isDeleted = true;
      setTodoList(updatedList);
    }
  }

  const handleAdd = (content) => {
    console.log('adding');
    if (content.trim().length > 0) {
      const newTodo = {
        id: Date.now(),
        content: content.trim(),
        isComplete: false,
        isDeleted: false,
      }
      setTodoList([...todoList, newTodo]);
    }
  }

  return (
    <div className="grid content-start gap-5 p-5 min-h-screen bg-gray-700 text-gray-100">
      <h1>Todo</h1>
      <Todo 
        todoList={todoList} 
        handleDelete={handleDelete}
        handleComplete={handleComplete}
        handleFocus={handleFocus}
      />
      <TodoInput 
        handleAdd={handleAdd}
      />
    </div>
  )
}
