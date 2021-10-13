import TodoItem from "./TodoItem";

const Todo = ({ todoList, deleteItem, toggleComplete, handleFocus }) => {
  return ( 
    <div>
      <ul className="grid gap-1">
        { [...todoList].map((item, index) => !item.isDeleted && 
          (
            <TodoItem 
              key={index} 
              item={item}
              deleteItem={deleteItem}
              toggleComplete={toggleComplete}
              handleFocus={handleFocus}
            />
          )
        ) }
      </ul>
    </div>
  );
}
 
export default Todo;