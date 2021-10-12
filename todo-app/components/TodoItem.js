import clsx from "clsx";

const TodoItem = ({ item, handleToggleComplete, handleDelete, handleFocus }) => {
  return ( 
    <li className="grid grid-cols-[auto,1fr,auto] gap-3 items-center rounded px-3 py-2 bg-white text-gray-800 transition-all hover:bg-gray-100 hover:shadow-lg">
      {/* complete todo button */}
      <button
        title={!item.isComplete ? "Set todo item status to complete." : "Set todo item status to incomplete."}
        onClick={() => handleToggleComplete(item.id)}
        className={clsx(
          "grid place-items-center w-5 h-5 border-2 border-gray-500 rounded-full transition-all",
          !item.isComplete ? "text-transparent hover:text-gray-500" : "bg-gray-500 text-white hover:opacity-70"
        )}
      >
        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
      </button>

      {/* todo text */}
      <p 
        className={clsx(
          {"line-through": item.isComplete}
        )}
        onClick={(e) => handleFocus(e, item)}
      >
        { item.content }
      </p>

      {/* delete todo */}
      <button
        title="Set todo item status to deleted."
        onClick={() => handleDelete(item.id)}
        className="p-[2px] rounded text-gray-500 transition-colors hover:bg-gray-200 hover:text-red-400"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    </li>
  );
}
 
export default TodoItem;