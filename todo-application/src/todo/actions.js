//add
export const CREATE_TODO = "CREATE_TODO";
export const createTodo = text => ({
    type : CREATE_TODO,
    payload : {text},
});


//remove
export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = text => ({
    type : REMOVE_TODO,
    payload :{text},

});

//mark
export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markToDoAsCompleted = text => ({
    type : MARK_TODO_AS_COMPLETED,
    payload :{text},

});