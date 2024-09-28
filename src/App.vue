<script setup>
import { ref } from 'vue'
import DraggableDemo1 from './components/DraggableDemo1.vue'
import DraggableDemo2 from './components/DraggableDemo2.vue'
import DatalistDemo from './components/DatalistDemo.vue'
import DatalistDemo2 from './components/DatalistDemo2.vue'
import DatalistDemo3 from './components/DatalistDemo3.vue'

const viewList = [
  { value: 'DraggableDemo1', label: 'vuedraggable ドラッグできる箇所を指定' },
  {
    value: 'DraggableDemo2',
    label: 'vuedraggable inputにfocusしたときドラッグできないように',
  },
  { value: 'DatalistDemo', label: 'datalistのデモ' },
  { value: 'DatalistDemo2', label: 'datalistのデモ2' },
  { value: 'DatalistDemo3', label: 'datalistのデモ3' },
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
    <DraggableDemo1 v-if="view === 'DraggableDemo1'" />
    <DraggableDemo2 v-else-if="view === 'DraggableDemo2'" />
    <DatalistDemo v-else-if="view === 'DatalistDemo'" />
    <DatalistDemo2 v-else-if="view === 'DatalistDemo2'" />
    <DatalistDemo3 v-else-if="view === 'DatalistDemo3'" />
  </div>
</template>

<style scoped></style>
