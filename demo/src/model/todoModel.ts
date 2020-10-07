let currentId = 0;

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export interface TodoModel {
    addTodo: (title: string) => void;
    editTodo: (id: number, title: string) => void;
    removeTodo: (id: number) => void;
    all: () => Todo[];
    toggleAll: (checked: boolean) => void;
    toggle: (id: number) => void;
}

export default (todos: Todo[], setTodos: (todos: Todo[]) => void): TodoModel => {
    return {
        addTodo(title) {
            currentId++;

            setTodos(todos.concat({ id: currentId, title, completed: false }));
        },

        editTodo(id, newTitle) {
            setTodos(todos.map(todo => (todo.id === id ? { ...todo, title: newTitle } : todo)));
        },

        removeTodo(id) {
            setTodos(todos.filter(todo => todo.id !== id));
        },

        all() {
            return [...todos];
        },

        toggleAll(checked = true) {
            setTodos(todos.map(todo => ({ ...todo, completed: checked })));
        },

        toggle(id) {
            setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
        },
    };
};
