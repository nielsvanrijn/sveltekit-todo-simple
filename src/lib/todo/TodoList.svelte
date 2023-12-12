<div class="flex flex-col">
    <ul>
        {#each todoStore.todos as todo (todo.id)}
            <TodoItem {todo} />
        {/each}
    </ul>
</div>

<script lang="ts">
    import TodoItem from '$lib/todo/TodoItem.svelte';
    import { useTodoStore } from '$lib/stores/useTodoStore.svelte';

    const todoStore = useTodoStore();
</script>