import type { Todo } from "$lib/shared/interfaces/Todo";

export function useTodoStore() {
    const todos = $state<Todo[]>([{
        id: 1,
        text: "Learn Svelte",
        checked: false
    }, {
        id: 2,
        text: "Learn SvelteKit",
        checked: false
    }, {
        id: 3,
        text: "Build something awesome",
        checked: false
    }]);

    function addTodo() {
        todos.push({
            id: todos.length + 1,
            text: "New Todo",
            checked: false
        });
    }

    return {
        todos,
        addTodo
    };
}