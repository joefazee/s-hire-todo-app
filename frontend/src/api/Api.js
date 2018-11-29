import axios from 'axios';

export const getTodos = (status="all") => {
    return new Promise((resolve, reject) => {
        axios.get('/todos?status=' + status).then((res) => {
            resolve(res.data.todos);
        }).catch((err) => reject(err));
    }); 
}

export const addTodo = (task) => {
    return new Promise((resolve, reject) => {
        axios.post('/todos', {task})
          .then( (res) =>  {
            resolve(res.data);
          }).catch((err) => reject(err));
    });
};

export const removeTodo = (id) => {
    
    return new Promise((resolve, reject) => {
         axios.delete(`/todos/${id}`)
             .then((res) => {
                 resolve(res.data.todo);
             }).catch((err) => reject(err));
     });
 };

 export const toggleTodo = (id) => {
    
    return new Promise((resolve, reject) => {
         axios.patch(`/todos/toggle/${id}`)
             .then((res) => {
                 resolve(res.data.todo);
             }).catch((err) => reject(err));
     });
 };