import { useEffect, useState } from "react";
import TodoList from "../components/TodoList";
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
  const handleToggleComplete = (id) => {
    console.log('completeing', id);
    const updatedList = [...todoList];
    const updatedItem = updatedList.find((item) => item.id === id);
    updatedItem.isComplete = !updatedItem.isComplete;
    setTodoList(updatedList);
  }

  // set todo item status to "deleted"
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      console.log('deleting', id);
      const updatedList = [...todoList];
      const updatedItem = updatedList.find((item) => item.id === id)
      if (!updatedItem.isDeleted) {
        updatedItem.isDeleted = true;
        setTodoList(updatedList);
      }
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
    <div className="grid min-h-screen bg-gray-700 text-gray-100">
      <div className="grid content-start gap-3 mx-auto px-5 py-10 w-full max-w-3xl">

      <h1 className="mb-2 text-3xl font-bold tracking-wide">Todo</h1>
      <TodoList
        todoList={todoList} 
        handleDelete={handleDelete}
        handleToggleComplete={handleToggleComplete}
        handleFocus={handleFocus}
      />
      <TodoInput 
        handleAdd={handleAdd}
      />
      </div>
    </div>
  )
}
