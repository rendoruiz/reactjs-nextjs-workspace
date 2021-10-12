import clsx from "clsx";
import IconCheck from "./icons/IconCheck";
import IconTrash from "./icons/IconTrash";

const TodoItem = ({ item, handleToggleComplete, handleDelete, handleFocus }) => {
  return ( 
    <li className="group grid grid-cols-[auto,1fr,auto] gap-1 items-center rounded p-1 bg-white text-gray-800 transition-colors hover:bg-gray-100 hover:shadow-lg">
      {/* complete todo button */}
      <button
        title={!item.isComplete ? "Mark as complete" : "Mark as incomplete"}
        onClick={() => handleToggleComplete(item.id)}
        className={clsx(
          "grid place-items-center p-2 w-10 h-full transition-all duration-75",
          !item.isComplete ? "text-transparent hover:text-gray-500" : "text-white hover:opacity-70"
        )}
      >
        <IconCheck 
          className={clsx(
            "w-5 h-5 border-2 border-gray-500 rounded-full p-[2px] transition-colors duration-75",
            {"bg-gray-500": item.isComplete}
          )} 
        />
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
        className="group-hover:opacity-100 grid place-items-center rounded p-2 w-10 h-full text-gray-500 opacity-0 transition-all hover:bg-gray-200 hover:text-red-400"
      >
        <IconTrash className="w-5 h-5" />
      </button>
    </li>
  );
}
 
export default TodoItem;