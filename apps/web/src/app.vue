<script setup lang="ts">
import { Page } from "ui";
import { name } from "../package.json";
</script>

<template>
  <div>Vue</div>
  <Page :app-name="name" />
</template>
