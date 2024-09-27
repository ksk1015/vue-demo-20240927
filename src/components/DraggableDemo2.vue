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

const dragDisabled = ref(false)

// focusだとdragできてしまうのでpointerdownを使ってるがやり過ぎ感あって少し怖い
const handlePointerdown = () => {
  dragDisabled.value = true
}
const handleBlur = () => {
  dragDisabled.value = false
}
</script>

<template>
  <div>
    <p>inputでdragをできないようにする</p>
    <draggable
      v-model="list"
      tag="ul"
      class="List"
      item-key="id"
      :disabled="dragDisabled"
    >
      <template #item="{ element }">
        <li class="ListItem">
          <span>{{ element.id }}</span>
          <input
            type="text"
            draggable="false"
            @pointerdown="handlePointerdown"
            @blur="handleBlur"
          />
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
