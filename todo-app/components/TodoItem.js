import clsx from "clsx";

const TodoItem = ({ item, handleComplete, handleDelete, handleFocus }) => {
  return ( 
    <li className={clsx(
      "grid grid-cols-[1fr,auto,auto] gap-2 content-center rounded m-1 px-3 py-2 transition-all hover:bg-blue-400/50 hover:shadow-md", 
      (!item.isDeleted && !item.isComplete ? 'bg-gray-100' : item.isDeleted ? 'bg-red-200' : 'bg-green-200')
      )}>
      <p onClick={(e) => handleFocus(e, item)}>
        { item.content }
      </p>
      <button
        title="Set todo item status to complete."
        onClick={() => handleComplete(item.id)}
        className="p-[2px] rounded transition-colors hover:bg-green-400 disabled:pointer-events-none disabled:text-gray-300"
        disabled={item.isComplete}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
      </button>
      <button
        title="Set todo item status to deleted."
        onClick={() => handleDelete(item.id)}
        className="p-[2px] rounded transition-colors hover:bg-red-400 disabled:pointer-events-none disabled:text-gray-300"
        disabled={item.isDeleted}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
      </button>
    </li>
  );
}
 
export default TodoItem;