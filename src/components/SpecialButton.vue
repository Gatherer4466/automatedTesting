<template>
  <button></button>
</template>

<script setup lang="ts">
interface Props {
  label: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'clicked'): void
}>()
</script>
