import clsx from "clsx";
import ItemButtonComplete from "./itembuttons/ItemButtonComplete";
import ItemButtonDelete from "./itembuttons/ItemButtonDelete";

const TodoItem = ({ item, toggleComplete, deleteItem, handleFocus }) => {
  return ( 
    <li className="group grid grid-cols-[auto,1fr,auto] gap-1 items-center rounded p-1 bg-white text-gray-800 transition-colors hover:bg-gray-100 hover:shadow-lg">
      {/* complete todo button */}
      <ItemButtonComplete
        isItemComplete={item.isComplete}
        onClick={() => toggleComplete(item.id)}
      />

      {/* todo text */}
      <p 
        title="Update todo"
        className={clsx(
          "py-1 break-all cursor-pointer",
          {"text-gray-800/60 line-through": item.isComplete}
        )}
        onClick={() => handleFocus(item.id)}
      >
        { item.content }
      </p>

      {/* delete todo */}
      <ItemButtonDelete onClick={() => deleteItem(item.id)} />
    </li>
  );
}
 
export default TodoItem;