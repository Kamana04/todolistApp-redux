import React, { useState } from 'react';
import './todo.css';
import {addToDo,deleteToDo,removeToDo} from '../actions/index';
import { useDispatch, useSelector} from 'react-redux';

const Todo = () => {
    
    const dispatch =  useDispatch();

    const [inputData,setInputData] = useState('');
    const list =  useSelector((state) => state.todoreducer.list);
    return(
        <>
         <div className="main-div">
         <div className="child-div">
         <figure>
           <figcaption>Add your list here ✌️</figcaption>
           </figure>

           <div className="addItems">
             <input type="text" placeholder="✍️ Add Items" 
                    value= {inputData}
                    onChange={(event) => setInputData(event.target.value)} />
             <i className="fa fa-plus add-btn" title="Add item"
                onClick={() => dispatch(addToDo(inputData),setInputData('')) }></i>
           </div>

           <div className="showItems">

             {
                 list.map((ele) => {
                     return(
                      <div className="eachItem" key ={ele.id}>
                         <h3>{ele.data}</h3>
                         <div className="todo-btn">
                         <i className="fa fa-trash-alt add-btn" title="Delete item"
                           onClick={() => dispatch(deleteToDo(ele.id)) }></i>
                     </div>
                     </div>
                     )

                 })
             }
               
           </div>

           <div className="showItems">
             <button className="btn effect04" data-sm-link-text="remove all" 
                      onClick={() => dispatch(removeToDo())}
                       ><span>Check List</span>
                     </button>

           </div>

         </div>
       </div>

        </>
    )
}

export default Todo;