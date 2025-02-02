const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            listTodos: [] 
        },
        actions: {
  
            getTodos: () => {
                fetch("https://playground.4geeks.com/todo/users/nachodev", {
                    method: "GET"
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                            setStore({ listTodos: data.todos
                             })
                        }
                    })
                    .catch((error => console.log(error)))
            },

            addTodoToList: (todo) => {
                const store = getStore();
                setStore({ ...store, listTodos: [...store.listTodos, todo] })
            },

            createTodo: (payload) => {
                fetch("https://playground.4geeks.com/todo/todos/nachodev", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(
                        payload
                    ),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        const actions = getActions(); 
                        actions.addTodoToList(data);
                        console.log("Todo added:", data);
                    })
                    .catch((error) => console.log(error));
            },
            deleteTodo: (id) => {
                fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
                    method: "DELETE",
                })
                    .then((response) => {
                        console.log(response)
                        if (response.ok) {
                            const store = getStore();
                            const updatedTodos = store.listTodos.filter(todo => todo.id !== id);
                            setStore({ listTodos: updatedTodos });
                            console.log(`Todo with ID ${id} deleted`);
                        } else {
                            console.log("Error deleting contact");
                        }
                    })
                    .catch((error) => console.log(error));
            },
        }
    }
};

export default getState;