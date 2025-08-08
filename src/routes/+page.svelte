<script>
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
//   const confirmed = confirm('¿Estás seguro de que quieres borrar esta nota?')
//   if (!confirmed) return

  notes = notes.filter(n => n.id !== id)
  localStorage.setItem('notes', JSON.stringify(notes))
}


</script>

<main class="min-h-screen mx-auto py-20 px-15 bg-no-repeat bg-cover" style="background-image: url('/HackMePlzBackgroundv3.webp');">
	<div class="mb-10">
		<img src="/CompleteLogov4.webp" alt="Logo" class="drop-shadow-[0_3px_3px_rgba(0,0,0,0.3)] h-40 mx-auto mb-4"/>
		<p class="text-center text-[#37352f] font-[inter]">What ya thinkin’</p>
	</div>

	<NoteInput/>

	{#if notes.length > 0}
		<ul class="mt-8 space-y-3">
			{#each notes as note}
  <li class="relative group bg-white/100 border-[#d0d0d0] backdrop-blur-md p-4 border-[1.25px] rounded-[5px]">
    <button
  class="w-full text-left cursor-pointer"
  on:click={() => openNote(note.id)}
  aria-label="Open note"
>
  <h2 class="font-semibold text-lg text-[#37352f]">{note.title}</h2>
</button>

    <!-- Botón de borrar -->
    <button
      class="absolute top-3 right-2 btn-gray text-[#37352f]"
      style=""
      on:click|stopPropagation={() => deleteNote(note.id)}
      aria-label="Delete note"
    >
      🗑
    </button>
  </li>
{/each}

		</ul>
	{:else}
		<p class="mt-10 text-center text-[#37352f]">Looks like your brain is empty... for now.</p>
	{/if}
</main>
