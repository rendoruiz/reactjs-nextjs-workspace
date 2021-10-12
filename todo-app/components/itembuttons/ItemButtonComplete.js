import clsx from "clsx"
import IconCheck from "../icons/IconCheck";

const ItemButtonComplete = ({ isItemComplete, onClick }) => {
  return (
    <button
      className={clsx(
        "grid place-items-center p-2 w-10 h-full transition-all duration-75",
        !isItemComplete ? "text-transparent hover:text-gray-500" : "text-white hover:opacity-70"
      )}
      title={!isItemComplete ? "Mark as complete" : "Mark as incomplete"}
      onClick={onClick}
    >
      <IconCheck 
        className={clsx(
          "w-5 h-5 border-2 border-gray-500 rounded-full p-[2px] transition-colors duration-75",
          {"bg-gray-500": isItemComplete}
        )} 
      />
    </button>
  );
}
 
export default ItemButtonComplete;