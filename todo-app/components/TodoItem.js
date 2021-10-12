import clsx from "clsx";
import IconCheck from "./icons/IconCheck";
import IconTrash from "./icons/IconTrash";
import ItemButtonComplete from "./itembuttons/ItemButtonComplete";
import ItemButtonDelete from "./itembuttons/ItemButtonDelete";

const TodoItem = ({ item, handleToggleComplete, handleDelete, handleFocus }) => {
  return ( 
    <li className="group grid grid-cols-[auto,1fr,auto] gap-1 items-center rounded p-1 bg-white text-gray-800 transition-colors hover:bg-gray-100 hover:shadow-lg">
      {/* complete todo button */}
      <ItemButtonComplete
        isItemComplete={item.isComplete}
        onClick={() => handleToggleComplete(item.id)}
      />

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
      <ItemButtonDelete onClick={() => handleDelete(item.id)} />
      {/* <button
        title="Delete todo"
        onClick={() => handleDelete(item.id)}
        className="group-hover:opacity-100 grid place-items-center rounded p-2 w-10 h-full text-gray-500 opacity-0 transition-all hover:bg-gray-200 hover:text-red-400"
      >
        <IconTrash className="w-5 h-5" />
      </button> */}
    </li>
  );
}
 
export default TodoItem;