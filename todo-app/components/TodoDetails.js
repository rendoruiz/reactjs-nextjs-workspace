import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useEffect, useState } from 'react';

import ItemButtonComplete from "./itembuttons/ItemButtonComplete";

const TodoDetails = ({ todoItem, togglePane, toggleComplete, updateItem }) => {
  const [content, setContent] = useState(todoItem.content)

  useEffect(() => {
    console.log('details ue')
    setContent(todoItem.content)
  }, [todoItem])

  const handleContentChange = (e) => {
    setContent(e.target.value)
    updateItem({...todoItem, content: e.target.value})
  }

  return ( 
    <div className="relative grid w-[330px] h-full">
      {/* dismissible shade */}
      <div className="absolute"></div>

      {/* side panel */}
      <div className="px-2 py-10 bg-white text-gray-800">
        <div className="flex overflow-auto">
          <ItemButtonComplete 
            isItemComplete={todoItem.isComplete}
            onClick={() => toggleComplete(todoItem.id)}
          />
          {/* <textarea className="mt-1 ml-1 w-full text-lg font-bold resize-none focus:outline-none max-h-80" value={todoItem.content}></textarea> */}
          <TextareaAutosize
            maxRows={10}
            className="mt-1 ml-2 pr-2 w-full text-lg font-bold resize-none focus:outline-none"
            value={content}
            onChange={handleContentChange}
          />
        </div>

      </div>
    </div>
  );
}
 
export default TodoDetails;