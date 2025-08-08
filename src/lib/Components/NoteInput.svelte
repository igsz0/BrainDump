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


    const saved = localStorage.getItem('notes')
    const notes = saved ? JSON.parse(saved) : []
    localStorage.setItem('notes', JSON.stringify([note, ...notes]))

    onNoteCreated(note)


    goto(`/note/${id}`)
  }
</script>

<input
  placeholder="New note title..."
  class="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white/100 backdrop-blur text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
  style="font-family: 'Inter', sans-serif;"
    bind:value={title}
  on:keydown={(e) => e.key === 'Enter' && createNote()}
/>


