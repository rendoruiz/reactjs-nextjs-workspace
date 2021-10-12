import TodoItem from "./TodoItem";

const Todo = ({ todoList, handleDelete, handleToggleComplete, handleFocus }) => {
  return ( 
    <div>
      <ul className="grid gap-1">
        { [...todoList].map((item, index) => !item.isDeleted && 
          (
            <TodoItem 
              key={index} 
              item={item}
              handleDelete={handleDelete}
              handleToggleComplete={handleToggleComplete}
              handleFocus={handleFocus}
            />
          )
        ) }
      </ul>
    </div>
  );
}
 
export default Todo;