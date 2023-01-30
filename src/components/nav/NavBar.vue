<script setup>
import {useThemeStore} from "@/stores/ThemeStore";
import LangDropdown from "@/components/nav/LangDropdown.vue";
import ThemeSwitcher from "@/components/nav/ThemeSwitcher.vue";
import {computed} from "vue";

const themeStore = useThemeStore();
const navBarClass = computed(() => themeStore.isDark ? "navbar-dark bg-dark" : "navbar-light bg-light");
</script>

<template>
  <nav class="navbar sticky-top" :class="navBarClass">
    <div class="row w-100 align-items-center">
      <div class="col-auto me-auto">
        <a class="navbar-brand clickable text-primary">Template</a>
      </div>
      <div class="col-auto">
        <LangDropdown/>
        <ThemeSwitcher/>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>