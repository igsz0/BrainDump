<script>
    import Icon from "heroicons-for-svelte"
	import { Trash as OutlineTrash } from "heroicons-for-svelte/icons/outline"

  import NoteInput from '$lib/Components/NoteInput.svelte'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  

  let notes = []

  onMount(() => {
    const saved = localStorage.getItem('notes')
    notes = saved ? JSON.parse(saved) : []
  })

  function openNote(id) {
    goto(`/note/${id}`)
  }

  function deleteNote(id) {
    notes = notes.filter(n => n.id !== id)
    localStorage.setItem('notes', JSON.stringify(notes))
  }
</script>

<style>
	:global(.icon) {
		font-size: 3rem;
	}
</style>


<main
  class="min-h-screen bg-no-repeat bg-fixed bg-cover bg-center px-4 sm:px-6 py-20"
  style="background-image: url('/GreenSantaClarav4.webp'); font-family: 'Inter', sans-serif;"
>

  <div class="max-w-2xl mx-auto space-y-6">
    


    <div class="text-center mb-4">
      <img src="/CompleteLogov4.webp" alt="Logo" class="h-36 mx-auto drop-shadow-md mb-2" />
      <p class="text-gray-700 text-lg">What ya thinkin’</p>
    </div>


    <NoteInput onNoteCreated={(newNote) => notes = [newNote, ...notes]} />


    {#if notes.length > 0}
      <ul class="space-y-1.5">
        {#each notes as note}
          <li
            class="relative bg-white/85 backdrop-blur-sm border border-gray-300 rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition duration-200 ease-in-out"
          >
            <button
              class="w-full text-left"
              on:click={() => openNote(note.id)}
              aria-label="Open note"
            >
              <h2 class="text-gray-800 font-medium text-base truncate">{note.title}</h2>
            </button>

            <button
                class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500 transition"
              on:click|stopPropagation={() => deleteNote(note.id)}
              aria-label="Delete note"
            >

              <Icon icon={OutlineTrash} style="font-size: 24px" />
            </button>
          </li>
        {/each}
      </ul>
    {:else}
      <p 
      style="font-family: inter;"
      class="mt-10 text-center text-gray-700 text-lg italic max-w-md mx-auto">
        Looks like your brain is empty... for now.
       
      </p>
    {/if}

  </div>
</main>
