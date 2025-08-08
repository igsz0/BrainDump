<!-- src/lib/components/NoteInput.svelte -->
<script>
  import { goto } from '$app/navigation'
  export let onNoteCreated = () => {}

  let title = ''

  function createNote() {
    const trimmed = title.trim()
    if (!trimmed) return

    const id = Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
    const note = {
      id,
      title: trimmed,
      content: '',
      date: new Date().toLocaleString()
    }

    // Guardar
    const saved = localStorage.getItem('notes')
    const notes = saved ? JSON.parse(saved) : []
    localStorage.setItem('notes', JSON.stringify([note, ...notes]))

    // Llamar callback si se pasa
    onNoteCreated(note)

    // Redirigir
    goto(`/note/${id}`)
  }
</script>

<input
  type="text"
  bind:value={title}
  on:keydown={(e) => e.key === 'Enter' && createNote()}
  placeholder="new note title"
  style="font-family: inter;"
  class=" w-full focus:outline-[#c0c0c0] focus:outline-[1px] overflow-hidden resize-none p-4 border-[1.25px] rounded-[5px] bg-[#ffffff]/70 backdrop-blur-md border-gray-300 "
/>
