import IconTrash from "../icons/IconTrash";

const ItemButtonDelete = ({ onClick, className }) => {
  return ( 
    <button
      title="Delete todo"
      onClick={onClick}
      className={className}
    >
      <IconTrash className="w-5 h-5" />
    </button>
  );
}
 
export default ItemButtonDelete;