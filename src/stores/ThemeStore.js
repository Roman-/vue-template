/*
* Dynamically change themes downloaded from https://bootswatch.com/.
* Usage: in main.js, do:
*  import "bootstrap"
*
* And then in App.vue, do:
*  import {useThemeStore} from "@/stores/ThemeStore";
*  useThemeStore().applyCurrentTheme();
*
* Then, whenever you want to change theme, do this:
* useThemeStore().toggleDayNight();
*/
import {computed, ref} from 'vue'
import { defineStore } from 'pinia'

// local storage keys
const isDarkKey = "theme.is_dark";

export const lightThemesSet = ["cerulean", "cosmo", "flatly", "litera", "lux", "materia", "minty", "morph", "quartz", "sandstone", "sketchy", "zephyr"];
const lightThemeName = "flatly";
export const darkThemesSet = ["cyborg", "darkly", "slate", "solar", "superhero"];
const darkThemeName = "darkly";

const getInitialIsDark = ()=>{
  if (!localStorage || !localStorage.getItem(isDarkKey)) {
    return false; // light by default
  }
  return localStorage.getItem(isDarkKey) === "true";
}

const biIconByTheme = (isDark) => {
  return isDark ? "bi-moon" : "bi-sun";
}

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(getInitialIsDark())
  const name = computed(()=> isDark.value ? darkThemeName : lightThemeName);
  const icon = computed(()=>biIconByTheme(isDark.value));
  function applyCurrentTheme() {
    const link_id = "bootstrap_stylesheet";
    // find link with id="bootstrap_stylesheet"; if not found, create one
    const link = document.getElementById(link_id);
    if (!link) {
      const link = document.createElement('link');
      link.id = link_id;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    document.getElementById("bootstrap_stylesheet").href = getThemeCssUrl(name.value);
  }
  function toggleDayNight() {
    isDark.value = !isDark.value;
    applyCurrentTheme();
    if (localStorage) {
      localStorage.setItem(isDarkKey, ""+isDark.value);
    }
  }

  const getThemeCssUrl = (name) => {
    return new URL(`../assets/bootstrap_themes/${name}.min.css`, import.meta.url).href
  }

  return { isDark, icon, toggleDayNight, applyCurrentTheme }
});
