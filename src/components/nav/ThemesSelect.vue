<script setup>
import {darkThemesSet, lightThemesSet} from "@/stores/ThemeStore";

// this is work-in-progress
const props = defineProps(["isDark"]);
const themes = props.isDark === "true" ? darkThemesSet : lightThemesSet;
console.log("props.isDark", props.isDark);

</script>

<template>
<!--  v-model = name of dark theme -->
  <select class="form-control" id="exampleFormControlSelect1">
    <option v-for="t in themes">{{t}}</option>
  </select>
</template>

<style scoped>
</style>