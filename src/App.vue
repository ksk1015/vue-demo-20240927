<script setup>
import { ref } from 'vue'
import DatalistDemo from './components/DatalistDemo.vue'
import DraggableDemo1 from './components/DraggableDemo1.vue'
import DraggableDemo2 from './components/DraggableDemo2.vue'

const viewList = [
  { value: 'DraggableDemo1', label: 'vuedraggable ドラッグできる箇所を指定' },
  {
    value: 'DraggableDemo2',
    label: 'vuedraggable inputにfocusしたときドラッグできないように',
  },
  { value: 'DatalistDemo', label: 'datalistのデモ' },
]
const view = ref(viewList[0].value)
</script>

<template>
  <div>
    <p>
      <a href="https://github.com/ksk1015/vue-demo-20240927">
        https://github.com/ksk1015/vue-demo-20240927
      </a>
    </p>
    <p>
      <select v-model="view">
        <option v-for="item in viewList" :value="item.value">
          {{ item.label }}
        </option>
      </select>
    </p>
    <DatalistDemo v-if="view === 'DatalistDemo'" />
    <DraggableDemo1 v-if="view === 'DraggableDemo1'" />
    <DraggableDemo2 v-else-if="view === 'DraggableDemo2'" />
  </div>
</template>

<style scoped></style>
