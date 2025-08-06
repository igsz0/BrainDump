<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher();

    let newIdea = ''

    function submitIdea(){
        if (!newIdea.trim()) return
        dispatch("submitIdea", {
            content: newIdea
            date: new Date().toLocaleString()

        })
    }
</script>