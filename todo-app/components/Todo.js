import TodoItem from "./TodoItem";

const Todo = ({ todoList, handleDelete, handleComplete }) => {
  return ( 
    <div>
      <ul className="rounded bg-gray-200 text-gray-700 overflow-hidden">
        { [...todoList].map((item, index) => 
          <TodoItem 
            key={index} 
            item={item}
            handleDelete={handleDelete}
            handleComplete={handleComplete}
          />
        ) }
      </ul>
    </div>
  );
}
 
export default Todo;