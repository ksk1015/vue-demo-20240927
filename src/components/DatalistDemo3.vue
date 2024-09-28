<script setup>
import { ref, watchEffect, computed } from 'vue'
import Draggable from 'vuedraggable'
import { fetchPrefectures } from '../assets/fetchPrefectures'

const formData = ref([
  {
    id: 1,
    code: '',
    name: '',
  },
])
const addRow = () => {
  const id = Math.max(...formData.value.map((row) => row.id)) + 1
  formData.value.push({
    id,
    code: '',
    name: '',
  })
}
const removeRow = (id) => {
  const index = formData.value.findIndex((row) => row.id === id)
  formData.value.splice(index, 1)
}

const prefectures = ref([])

const focusedIndex = ref(-1)
const focusedRow = computed(() => {
  if (focusedIndex.value === -1) {
    return null
  }
  return formData.value[focusedIndex.value]
})

// コード入力欄の値が変わるたびに都道府県リストを取得
watchEffect(async () => {
  if (!focusedRow.value) {
    return
  }
  const code = focusedRow.value.code

  // 入力コードが2文字未満の場合は都道府県リストを空にする
  if (code.length < 2) {
    prefectures.value = []
    return
  }

  // 都道府県データを取得
  prefectures.value = await fetchPrefectures(code)

  // 入力コードに一致した都道府県があれば、都道府県名を入力欄にセット
  const matchedPrefecture = prefectures.value.find(
    (prefecture) => prefecture.code === code
  )
  if (matchedPrefecture) {
    focusedRow.value.name = matchedPrefecture.name
  }
})

// 実際にデータリストに表示する都道府県リスト
// 入力コードに一致した場合は空リストを返す
const datalistPrefectures = computed(() => {
  if (!focusedRow.value) {
    return []
  }
  const matchedPrefecture = prefectures.value.find(
    (prefecture) => prefecture.code === focusedRow.value.code
  )
  if (matchedPrefecture) {
    return []
  }
  return prefectures.value
})

const dragDisabled = ref(false)

const handlePointerdown = () => {
  dragDisabled.value = true
}
const handleFocusInputCode = (index) => {
  focusedIndex.value = index
}
const handleBlurInputCode = () => {
  focusedIndex.value = -1
  dragDisabled.value = false
}
</script>

<template>
  <div>
    <Draggable
      v-model="formData"
      tag="div"
      class="rows"
      item-key="id"
      :disabled="dragDisabled"
    >
      <template #item="{ element, index }">
        <div class="row">
          <button
            @click="removeRow(element.id)"
            :disabled="index === 0 && formData.length === 1"
          >
            X
          </button>
          <label>
            <span>都道府県コード：</span>
            <input
              type="text"
              :name="`code-${element.id}`"
              v-model.trim="element.code"
              list="prefectureList"
              @pointerdown="handlePointerdown"
              @focus="handleFocusInputCode(index)"
              @blur="handleBlurInputCode"
            />
          </label>
          <label>
            <span>都道府県名：</span>
            <input
              type="text"
              :name="`name-${element.id}`"
              v-model.trim="element.name"
            />
          </label>
        </div>
      </template>
    </Draggable>
    <p>
      <button @click="addRow">行を追加</button>
    </p>
    <datalist id="prefectureList">
      <option
        v-for="prefecture in datalistPrefectures"
        :value="prefecture.code"
      >
        {{ prefecture.name }}
      </option>
    </datalist>
  </div>
</template>

<style scoped>
.rows {
  display: grid;
  gap: 0.5rem;
}
.row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: #eee;
  & > label {
    display: flex;
    align-items: center;
  }
}
</style>
