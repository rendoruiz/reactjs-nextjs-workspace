const TodoDetails = ({ todoItem, togglePane }) => {
  return ( 
    <div className="relative grid w-[330px] h-full">
      {/* dismissible shade */}
      <div className="absolute"></div>

      {/* side panel */}
      <div className="px-2 py-10 bg-white text-gray-800">
        <div></div>

      </div>
    </div>
  );
}
 
export default TodoDetails;