import IconTrash from "../icons/IconTrash";

const ItemButtonDelete = ({ onClick }) => {
  return ( 
    <button
      title="Delete todo"
      onClick={onClick}
      className="group-hover:opacity-100 grid place-items-center rounded p-2 w-10 h-full text-gray-500 opacity-0 transition-all hover:bg-gray-200 hover:text-red-400"
    >
      <IconTrash className="w-5 h-5" />
    </button>
  );
}
 
export default ItemButtonDelete;