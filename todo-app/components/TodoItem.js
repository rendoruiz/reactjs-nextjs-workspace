import clsx from "clsx";

const TodoItem = ({ item, handleToggleComplete, handleDelete, handleFocus }) => {
  return ( 
    <li className="grid grid-cols-[auto,1fr,auto] gap-1 items-center rounded p-1 bg-white text-gray-800 transition-colors hover:bg-gray-100 hover:shadow-lg">
      {/* complete todo button */}
      <button
        title={!item.isComplete ? "Mark as complete" : "Mark as incomplete"}
        onClick={() => handleToggleComplete(item.id)}
        className={clsx(
          "grid place-items-center p-2 w-10 h-full transition-colors",
          !item.isComplete ? "text-transparent hover:text-gray-500" : "text-white hover:opacity-70"
        )}
      >
        <svg 
          className={clsx(
            "w-5 h-5 border-2 border-gray-500 rounded-full p-[2px] transition-colors",
            {"bg-gray-500": item.isComplete}
          )} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="4" 
            d="M5 13l4 4L19 7"
          />
        </svg>
      </button>

      {/* todo text */}
      <p 
        title="Update todo"
        className={clsx(
          "py-1 break-all cursor-pointer",
          {"text-gray-800/60 line-through": item.isComplete}
        )}
        onClick={(e) => handleFocus(e, item)}
      >
        { item.content }
      </p>

      {/* delete todo */}
      <button
        title="Delete todo"
        onClick={() => handleDelete(item.id)}
        className="grid place-items-center rounded p-2 w-10 h-full text-gray-500 transition-colors hover:bg-gray-200 hover:text-red-400"
      >
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </li>
  );
}
 
export default TodoItem;