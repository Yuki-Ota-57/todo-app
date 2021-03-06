import React, {useState} from 'react';
import './NewTodoForm.css'
import { connect } from 'react-redux';
import { createTodo } from './actions';
const NewTodoForm = ({todos , onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');
    return(
        <div className='new-todo-form'>
            <input type="text" 
            className="new-todo-input"
            value={inputValue}
            placeholder =" type your todo !!!"
            onChange = { e => setInputValue(e.target.value)}
            />
            <button 
            onClick ={ ()=>{
                //check for duplicate text
                const isDuplicateText =
                    todos.some(todo => todo.text === inputValue);
                if (!isDuplicateText){
                    onCreatePressed(inputValue);
                    setInputValue("")
                }
                
            }}
            
            className="new-todo-button">
                Create Todo
                
            </button>
        </div>
    );
 }

 
 const mapStateToProps = state =>({
     todos :state.todos,
 });

 
 const mapDispatchToProps = dispatch =>({
    onCreatePressed : text => dispatch(createTodo(text))
 });

 
export default connect(mapStateToProps,mapDispatchToProps) (NewTodoForm);