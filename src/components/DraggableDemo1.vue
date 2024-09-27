<script setup>
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list = ref([
  { id: '🍏', name: 'Apple' },
  { id: '🍌', name: 'Banana' },
  { id: '🍊', name: 'Orange' },
  { id: '🍉', name: 'Watermelon' },
  { id: '🍍', name: 'Pineapple' },
  { id: '🥭', name: 'Mango' },
  { id: '🍑', name: 'Peach' },
  { id: '🍒', name: 'Cherry' },
  { id: '🍓', name: 'Strawberry' },
])
</script>

<template>
  <div>
    <p>handeを指定</p>
    <draggable
      v-model="list"
      tag="ul"
      class="List"
      item-key="id"
      handle=".ListItemId"
    >
      <template #item="{ element }">
        <li class="ListItem">
          <span class="ListItemId">{{ element.id }}</span>
          <input type="text" />
          <span>{{ element.name }}</span>
        </li>
      </template>
    </draggable>
    <pre>{{ JSON.stringify(list, null, 2) }}</pre>
  </div>
</template>

<style scoped>
.List {
  display: grid;
  gap: 0.5em;
  padding: 0;
}
.ListItem {
  display: grid;
  grid-template-columns: 1em 10em auto;
  gap: 0.5em;
  padding: 0.5em;
  background: #eee;
}
.ListItemId {
  cursor: grab;
}
</style>
