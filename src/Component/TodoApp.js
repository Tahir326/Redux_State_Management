import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from '../features/todos/todosSlice';
import bg from '../assets/bg.jpg'

export function TodoApp() {
  const [input, setInput] = useState('');
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <>
    <img className='md:w-[100vw] md:h-[50vw] w-screen h-screen object-cover blur-[3px] ' src={bg} alt="" />
    <h1 className='md:text-9xl text-6xl text-[#2a2c2f] font-bold fixed md:ml-5 md:-mt-[36rem] -mt-[39rem]'>TODO-LIST</h1>
    <form onSubmit={handleSubmit} className="md:mb-[25rem] mb-[28rem] ml-4 mr-3.5 md:mr-0 fixed ">
        <input 
          type="text"
          value={input}
          placeholder='Enter Your Task'
          onChange={(e) => setInput(e.target.value)}
          className="border-2 bg-transparent rounded-full w-[14rem] md:w-auto p-2 px-5 mr-2 outline-none border-black text-black mt-44 top-0 left-0 "
        />
        <button type="submit" className=" bg-[#4B5563] text-black font-semibold  rounded-full px-3 py-2">Add Todo</button>
      </form>

    <div className="  md:mt-48 mt-32 mr-2.5 overflow-x-hidden md:w-auto h-auto md:mr-0 fixed ">
  
      

      <div className="table-container ml-5 no-scrollbar " style={{ maxHeight: '300px', overflowY: 'auto' }}>
        <table  className="border-collapse border  md:w-[36rem] w-[21rem] mr-2 md:mr-0 border-black">
          <thead>
            <tr>
              <th className="border-2 text-black border-black p-2">Task</th>
              <th className="border-2 text-black border-black p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td className="border-2 text-black border-black p-2 overflow-x-auto" style={{ wordWrap: 'break-word' }}>{todo.text}</td>
                <td className="border-2 border-black p-2">
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-black bg-red-600 px-4 py-1 text-sm rounded-full"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
}
