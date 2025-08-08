<script>
  import { goto } from '$app/navigation'
  import { onMount, onDestroy } from 'svelte'
  import { slide } from 'svelte/transition'

  export let note

  let lastSaved = null
  let elapsed = 0
  let interval
  let savedMessage = ''

  onMount(() => {
    interval = setInterval(() => {
      if (lastSaved) {
        const now = new Date()
        elapsed = Math.floor((now - lastSaved) / 1000)
      }
    }, 1000)
  })

  onDestroy(() => {
    clearInterval(interval)
  })

  function updateContent(e) {
    note.content = e.target.value

    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'

    const saved = localStorage.getItem('notes')
    const notes = saved ? JSON.parse(saved) : []
    const updated = notes.map(n => (n.id === note.id ? note : n))
    localStorage.setItem('notes', JSON.stringify(updated))

    lastSaved = new Date()
    elapsed = 0

    // Mostrar mensaje y luego quitarlo
    savedMessage = 'Guardado automáticamente'
    setTimeout(() => {
      savedMessage = ''
    }, 2000)
  }

  function goBack() {
    goto('/')
  }
</script>

<div>
  <div class="w-full p-3 border-[1.25px] rounded-[5px] bg-[#ffffff]/100 backdrop-blur-md border-[#d0d0d0] mb-1">
    <h1
    style="font-family: inter;"
    class="text-2xl font-bold text-[#37352f]">{note.title}</h1>
  </div>

  <textarea
    placeholder="Start typing..."
    style="font-family: inter;"
    class="w-full mb-1 focus:outline-[#c0c0c0] focus:outline-[1px] overflow-hidden resize-none p-4 border-[1.25px] rounded-[5px] bg-[#ffffff]/70 backdrop-blur-md border-gray-300"
    bind:value={note.content}
    on:input={updateContent}>
</textarea>
  

  <div class="flex">


        <button class="btn-gray mr-auto" on:click={goBack}>
        
    Back
  </button>


  {#if lastSaved}
    <p class=" btn-gray text-[#37352f] ml-auto">
      Saved {elapsed}s ago{elapsed === 1 ? '' : ''}
    </p>
  {/if}


  </div>




</div>
