<script setup>
import { ref, watch, computed } from 'vue'
import { fetchPrefectures } from '../assets/fetchPrefectures'

const codeInput = ref('')
const nameInput = ref('')

const prefectures = ref([])

// コード入力欄の値が変わるたびに都道府県リストを取得
watch(codeInput, async (newValue) => {
  if (newValue.length < 2) {
    prefectures.value = []
    return
  }

  // 都道府県データを取得
  prefectures.value = await fetchPrefectures(newValue)

  // 入力コードに一致した都道府県があれば、都道府県名を入力欄にセット
  const matchedPrefecture = prefectures.value.find(
    (prefecture) => prefecture.code === newValue
  )
  if (matchedPrefecture) {
    nameInput.value = matchedPrefecture.name
  }
})

// 実際にデータリストに表示する都道府県リスト
// 入力コードに一致した場合は空リストを返す
const datalistPrefectures = computed(() => {
  const matchedPrefecture = prefectures.value.find(
    (prefecture) => prefecture.code === codeInput.value
  )
  if (matchedPrefecture) {
    return []
  }
  return prefectures.value
})
</script>

<template>
  <div>
    <div class="row">
      <label>
        <span>都道府県コード：</span>
        <input
          type="text"
          name="code"
          v-model.trim="codeInput"
          list="prefectureList"
        />
      </label>
      <label>
        <span>都道府県名：</span>
        <input type="text" name="name" v-model.trim="nameInput" />
      </label>
    </div>
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
.row {
  display: flex;
  align-items: center;
  gap: 1rem;
  & > label {
    display: flex;
    align-items: center;
  }
}
</style>
