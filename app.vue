<template>
  <div :class="{ 'dark': darkMode }">
    <div>
      <h1 class="text-red-500 dark:text-dim-500" >Twitter clone</h1> 
    </div>
  </div>
</template>
<script setup>
  const darkMode = ref(true)
</script>
