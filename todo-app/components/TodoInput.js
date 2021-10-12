import { useState } from "react";

const TodoInput = ({ handleAdd }) => {
  const [content, setContent] = useState(null);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(content)
  }

  return ( 
    <form 
      className="grid grid-cols-[1fr,auto] gap-1 p-1 rounded bg-gray-200 text-gray-700"
      onSubmit={handleSubmit}
    >
      <input 
        type="text" 
        name="todo" 
        title="New todo item content."
        className="px-3 py-2 rounded"
        onChange={handleInputChange}
      />
      <button 
        title="Add new todo item."
        className="p-2 rounded bg-white transition-colors hover:bg-blue-400/50"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
      </button>
    </form>
  );
}
 
export default TodoInput;