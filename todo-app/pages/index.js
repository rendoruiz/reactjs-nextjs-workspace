import { useState } from "react";
import TodoList from "../components/TodoList";
import TodoInput from "../components/TodoInput";
import TodoDetails from "../components/TodoDetails";

const todoTemplate = {
  id: null,
  content: null,
  isComplete: false,
  isDeleted: false,
  onCreated: null,
  onUpdated: null,
};

const defaultList = [
  { ...todoTemplate, id: 1, content: 'sample item 1' },
  { ...todoTemplate, id: 2, content: 'sample item 2' },
  { ...todoTemplate, id: 3, content: 'sample item 3' },
];

export default function Home() {
  const [focusedItem, setFocusedItem] = useState(null); 
  const [todoList, setTodoList] = useState(defaultList);
  const [isDetailsPaneOpen, setIsDetailsPaneOpen] = useState(false);

  const toggleDetailsPane = () => {
    setIsDetailsPaneOpen(!isDetailsPaneOpen);
  }

  // get item to be updated
  const handleFocus = (e, id) => {
    e.preventDefault();
    setFocusedItem(todoList.find((item) => item.id === id));
    toggleDetailsPane();
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
      const currentTime = Date.now();
      const newTodo = {
        ...todoTemplate,
        id: currentTime,
        content: content.trim(),
        onCreated: currentTime,
        onUpdated: currentTime,
      }
      setTodoList([...todoList, newTodo]);
    }
  }

  return (
    <div className="grid min-h-screen bg-gray-700 text-gray-100">
      <div className="grid grid-cols-[1fr,auto] mx-auto w-full">
        {/* todo list - main panel */}
        <div className="grid content-start gap-3 px-5 py-10 md:px-10">
          <h1 className="mb-2 text-3xl font-bold tracking-wide">Todo</h1>
          <TodoList
            todoList={todoList} 
            handleDelete={handleDelete}
            handleToggleComplete={handleToggleComplete}
            handleFocus={handleFocus}
          />
          <TodoInput handleAdd={handleAdd} />
        </div>

        {/* todo item detail - right side panel */}
        { isDetailsPaneOpen && (
          <TodoDetails todoItem={focusedItem} togglePane={toggleDetailsPane} />
        )}
      </div>
    </div>
  )
}
