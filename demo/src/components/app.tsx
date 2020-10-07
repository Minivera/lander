/** @jsx h */
import { h, FunctionComponent, VirtualElement } from 'lander';

import { Footer } from './footer';
import { TodoItem } from './todoItem';
import useTodoModel, { Todo } from '../model/todoModel';

enum TodoState {
    ALL_TODOS = 'all',
    ACTIVE_TODOS = 'active',
    COMPLETED_TODOS = 'completed',
}

interface Context {
    todos: Todo[];
    newTodo: string;
    nowShowing: TodoState;
}

export const App: FunctionComponent<unknown, Context> = (
    _,
    { todos = [], newTodo = '', nowShowing = TodoState.ALL_TODOS, setState }
): VirtualElement => {
    const setNowShowing = (val: TodoState) => setState('nowShowing', val);
    const setNewTodo = (val: string) => setState('newTodo', val);
    const setTodos = (val: Todo[]) => setState('todos', val);
    const model = useTodoModel(todos, setTodos);

    const handleChange = (event: Event) => {
        setNewTodo((event?.target as HTMLInputElement).value);
    };

    const handleNewTodoKeyDown = (event: KeyboardEvent) => {
        if (event.key !== 'Enter') {
            return;
        }

        event.preventDefault();

        const val = newTodo.trim();

        if (val) {
            model.addTodo(val);
            setNewTodo('');
        }
    };

    const allTodos = model.all();
    const shownTodos = allTodos.filter(todo => {
        switch (nowShowing) {
            case TodoState.ACTIVE_TODOS:
                return !todo.completed;
            case TodoState.COMPLETED_TODOS:
                return todo.completed;
            default:
                return true;
        }
    });

    const activeTodoCount = allTodos.reduce((accum, todo) => (todo.completed ? accum : accum + 1), 0);

    const completedCount = allTodos.length - activeTodoCount;

    return (
        <div>
            <header class="header">
                <h1>todos</h1>
                <input
                    class="new-todo"
                    placeholder="What needs to be done?"
                    value={newTodo}
                    onkeydown={handleNewTodoKeyDown}
                    oninput={handleChange}
                    autoFocus={true}
                />
            </header>
            {todos.length ? (
                <section class="main">
                    <input
                        id="toggle-all"
                        class="toggle-all"
                        type="checkbox"
                        onchange={() => model.toggleAll(activeTodoCount !== 0)}
                        checked={activeTodoCount === 0}
                    />
                    <label for="toggle-all" />
                    <ul class="todo-list">
                        {shownTodos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} model={model} />
                        ))}
                    </ul>
                </section>
            ) : null}
            {activeTodoCount || completedCount ? (
                <Footer
                    count={activeTodoCount}
                    completedCount={completedCount}
                    nowShowing={nowShowing}
                    setNowShowing={setNowShowing}
                    clearCompleted={() => model.toggleAll(false)}
                />
            ) : null}
        </div>
    );
};
