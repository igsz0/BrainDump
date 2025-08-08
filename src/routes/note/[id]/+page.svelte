<script>
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import NoteEditor from '$lib/components/NoteEditor.svelte'

  let note = null


  $: id = $page.params.id

  onMount(() => {
    const saved = localStorage.getItem('notes')
    const notes = saved ? JSON.parse(saved) : []
    note = notes.find(n => n.id === id)
  })
</script>

<main class="p-15 bg-fixed min-h-screen w-full bg-no-repeat bg-center bg-cover" style="background-image: url('/GreenSantaClarav2.webp');">
{#if note}
  <NoteEditor {note} />
{:else}
  <p>Nota no encontrada</p>
{/if}
</main>

