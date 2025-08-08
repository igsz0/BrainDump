<script>
    import {createEventDispatcher} from 'svelte'
    // import Cbutton from '$lib/Components/Button.svelte'
    const dispatch = createEventDispatcher();

    let newIdea = ''

    function submitIdea(){
        if (!newIdea.trim()) return
        dispatch("submitIdea", {
            content: newIdea,
            date: new Date().toLocaleString()

        })
        newIdea=''
    }
</script>

<div>
    <textarea class='bg-gray-200' bind:value={newIdea}>

    </textarea>

    
    <button
     class='btn-blue'
     onclick={submitIdea}
     >
        Submit
    </button>
</div>