<script setup>
import errorImage from './assets/images/404.svg?raw'
</script>

<template>
    <a
      class="w-full h-full max-w-[600px] mx-auto flex items-center justify-center [&_svg]:w-full"
      href="/"
      v-html="errorImage"
    />
</template>
