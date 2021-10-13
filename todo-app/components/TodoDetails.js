import TextareaAutosize from '@mui/material/TextareaAutosize';
import { useEffect, useState } from 'react';
import IconChevronRight from './icons/IconChevronRight';

import ItemButtonComplete from "./itembuttons/ItemButtonComplete";
import ItemButtonDelete from './itembuttons/ItemButtonDelete';

const TodoDetails = ({ todoItem, togglePane, toggleComplete, updateItem, deleteItem }) => {
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
      <div className="grid grid-rows-[1fr,auto] items-start bg-white text-gray-800">
        {/* complete toggle + content */}
        <div className="flex px-2 pt-10 pb-2 overflow-auto">
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

        {/* sidebar toggle + delete */}
        <div className="flex justify-between items-center border-t-2 border-gray-200/60 p-1 bg-gray-100 text-gray-600">
          {/* close details sidebar */}
          <button 
            className="grid place-items-center rounded w-10 h-10 transition-colors hover:bg-gray-300"
            title="Hide details view"
            onClick={togglePane}
          >
            <IconChevronRight />
          </button>
          
          {/* delete item */}
          <ItemButtonDelete 
            className="grid place-items-center rounded w-10 h-10 text-red-600/80 transition-colors hover:bg-gray-300"
            onClick={() => deleteItem(todoItem.id)}
          />
        </div>
      </div>
    </div>
  );
}
 
export default TodoDetails;