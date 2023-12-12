<div class="flex">
    <input type="checkbox" class="w-5 h-5 text-gray-600 form-checkbox" bind:checked={todo.checked} />
    <span class="ml-2 text-gray-700">{todo.text}</span>
</div>

<script lang="ts">
    import type { Todo } from "$lib/shared/interfaces/Todo";
    export let todo: Todo;

    // Error: Non-bound props cannot be mutated — use `bind:<prop>={...}` to make `checked` settable. Fallback values can never be mutated.
    // at Object.readonly_error
</script>