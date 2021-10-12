import TodoItem from "./TodoItem";

const Todo = ({ todoList, handleDelete, handleToggleComplete }) => {
  return ( 
    <div>
      <ul className="grid gap-1">
        { [...todoList].map((item, index) => 
          <TodoItem 
            key={index} 
            item={item}
            handleDelete={handleDelete}
            handleToggleComplete={handleToggleComplete}
          />
        ) }
      </ul>
    </div>
  );
}
 
export default Todo;