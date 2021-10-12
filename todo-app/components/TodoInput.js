import { useRef, useState } from "react";

const TodoInput = ({ handleAdd }) => {
  const [content, setContent] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const contentInput = useRef(null);

  const handleInputChange = (e) => {
    setContent(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isContentValid()) {
      handleAdd(content.trim());
      setContent('');
    } else {
      contentInput.current.focus();
    }
  }

  const isContentValid = () => {
    return content.trim().length > 0 ? true : false;
  }

  return ( 
    <form 
      className="grid grid-cols-[auto,1fr] rounded p-1 bg-black/50 text-white backdrop-blur"
      onSubmit={handleSubmit}
    >
      {/* Add new todo */}
      <button 
        title={isInputFocused && !isContentValid() ? "Cannot add empty todo" : "Add new todo"}
        className="w-10 h-full rounded p-2 transition-opacity disabled:opacity-10 disabled:cursor-not-allowed"
        disabled={isInputFocused && !isContentValid()}
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>

      {/* New todo content */}
      <input 
        type="text" 
        autoComplete="off"
        placeholder="Add a todo"
        className="pr-3 pl-1 py-2 rounded bg-transparent text-white placeholder-gray-100 cursor-pointer focus:cursor-text focus:placeholder-opacity-0 focus:outline-none"
        value={content} 
        title={!isInputFocused ? "Add new todo" : "New todo content"}
        ref={contentInput}
        onChange={handleInputChange}
        onFocus={() => setIsInputFocused(true)}
        onBlur={() => setIsInputFocused(false)}
      />
    </form>
  );
}
 
export default TodoInput;