<script setup>
import { useI18n } from 'vue-i18n';
import Test from './components/Test.vue';

const { t, locale } = useI18n({ useScope: 'global' });

function changeLanguage() {
  locale.value = locale.value === 'en' ? 'ja' : 'en';
  console.log(locale.value);
}
</script>

<template>
  <button @click="changeLanguage">change</button>
  <span v-t="'hello'"></span>
</template>
