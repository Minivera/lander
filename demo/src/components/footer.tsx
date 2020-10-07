/** @jsx h */
import { h, FunctionComponent, VirtualElement } from 'lander';
import classNames from 'classnames';

enum TodoState {
    ALL_TODOS = 'all',
    ACTIVE_TODOS = 'active',
    COMPLETED_TODOS = 'completed',
}

interface Props {
    count: number;
    completedCount: number;
    nowShowing: TodoState;
    setNowShowing: (val: TodoState) => void;
    clearCompleted: () => void;
}

export const Footer: FunctionComponent<Props> = ({
    count,
    completedCount,
    nowShowing,
    setNowShowing,
    clearCompleted,
}): VirtualElement => {
    const activeTodoWord = count > 1 ? 'items' : 'item';

    let clearButton = null;
    if (completedCount > 0) {
        clearButton = (
            <button class="clear-completed" onclick={clearCompleted}>
                Clear completed
            </button>
        );
    }

    return (
        <footer class="footer">
            <span class="todo-count">
                <strong>{count}</strong> {activeTodoWord} left
            </span>
            <ul class="filters">
                <li>
                    <a
                        onclick={() => setNowShowing(TodoState.ALL_TODOS)}
                        class={classNames({ selected: nowShowing === TodoState.ALL_TODOS })}
                    >
                        All
                    </a>
                </li>{' '}
                <li>
                    <a
                        onclick={() => setNowShowing(TodoState.ACTIVE_TODOS)}
                        class={classNames({ selected: nowShowing === TodoState.ACTIVE_TODOS })}
                    >
                        Active
                    </a>
                </li>{' '}
                <li>
                    <a
                        onclick={() => setNowShowing(TodoState.COMPLETED_TODOS)}
                        class={classNames({ selected: nowShowing === TodoState.COMPLETED_TODOS })}
                    >
                        Completed
                    </a>
                </li>
            </ul>
            {clearButton}
        </footer>
    );
};
