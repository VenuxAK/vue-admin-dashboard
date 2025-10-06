<script setup>
import SidebarProvider from "@/components/layout/SidebarProvider.vue";
import ThemeProvider from "@/components/layout/ThemeProvider.vue";
</script>

<template>
  <ThemeProvider>
    <SidebarProvider>
      <RouterView />
    </SidebarProvider>
  </ThemeProvider>
</template>

<style scoped></style>
