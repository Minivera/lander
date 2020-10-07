/** @jsx h */
import { h, FunctionComponent, VirtualElement } from 'lander';
import classNames from 'classnames';

import { Todo, TodoModel } from '../model/todoModel';

interface Props {
    todo: Todo;
    model: TodoModel;
}

interface State {
    isEditing: boolean;
    editTodo: string;
}

export const TodoItem: FunctionComponent<Props, State> = (
    { todo, model },
    { isEditing = false, editTodo = todo.title, setState }
): VirtualElement => {
    const setIsEditing = (val: boolean) => setState('isEditing', val);
    const setEditTodo = (val: string) => setState('editTodo', val);

    const handleSubmit = () => {
        const val = editTodo.trim();

        if (val) {
            model.editTodo(todo.id, val);
            setIsEditing(false);
        }
    };

    const handleChange = (event: Event) => {
        setEditTodo((event?.target as HTMLInputElement).value);
    };

    const handleStartEditing = () => {
        setEditTodo(todo.title);
        setIsEditing(true);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key !== 'Enter') {
            return;
        }

        event.preventDefault();
        handleSubmit();
    };

    return (
        <li
            class={classNames({
                completed: todo.completed,
                editing: isEditing,
            })}
        >
            <div class="view">
                <input class="toggle" type="checkbox" checked={todo.completed} onchange={() => model.toggle(todo.id)} />
                <label ondblclick={handleStartEditing}>{todo.title}</label>
                <button class="destroy" onclick={() => model.removeTodo(todo.id)} />
            </div>
            <input
                class="edit"
                value={editTodo}
                onblur={handleSubmit}
                oninput={handleChange}
                onkeydown={handleKeyDown}
            />
        </li>
    );
};
