<script setup>
import { ref, watch } from 'vue'
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
  prefectures.value = await fetchPrefectures(newValue)
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
          v-model="codeInput"
          list="prefectureList"
        />
      </label>
      <label>
        <span>都道府県名：</span>
        <input type="text" name="name" v-model="nameInput" />
      </label>
    </div>
    <datalist id="prefectureList">
      <option v-for="prefecture in prefectures" :value="prefecture.code">
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
