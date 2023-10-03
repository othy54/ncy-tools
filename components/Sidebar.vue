<template>
  <div class="bg-greenncy pt-8 px-8">
    <header class="text-center text-white uppercase text-2xl">
      <nuxt-link to="/"><img src="/ncy-tools.svg" alt="" /></nuxt-link>
    </header>
    <div class="mt-8">
      <ul>
        <li
          class="text-white opacity-50 hover:opacity-100"
          v-for="(link, i) in links"
          :key="'link-' + i"
        >
          <NuxtLink :to="link.link">
            <component :is="link.icon" />
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import IconAccessibility from "~icons/mdi/accessibility";

const links = ref([
  {
    label: "Mentions légales",
    link: "/mentions-legales",
    icon: resolveComponent("IconAccessibility"),
  },
]);
</script>
