                <script>
                    export let content = 'idk'
                    export let date = '8000/01/2'
                    import { createEventDispatcher } from 'svelte'

                    const dispatch = createEventDispatcher();

                    function handleDelete() {
                    dispatch('delete')
                }

                </script>


                <div class=' p-5 mb-3 mt-3 bg-gray-100 rounded-md border-2 border-black'>
                    <p>{content}</p>
                    <small>{date}</small>
                    <button
                    class="btn-red ml-100"
                    on:click={handleDelete}
                    >
                    🗑️
                    </button>
                </div>