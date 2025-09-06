<template>
  <Layout>
    <template #doc-after>
      <div v-if="showComments" class="comments-wrapper">
        <Artalk />
      </div>
    </template>
  </Layout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Artalk from './Artalk.vue'

const { Layout } = DefaultTheme
const { page, frontmatter } = useData()

// 判断是否显示评论区
const showComments = computed(() => {
  // 如果 frontmatter 中明确设置了 comments: false，则不显示
  if (frontmatter.value.comments === false) {
    return false
  }
  
  // 只在文档页面显示评论，不在首页等特殊页面显示
  return page.value.isNotFound !== true && 
         !page.value.frontmatter.layout && 
         page.value.relativePath !== 'index.md'
})
</script>

<style scoped>
  .comments-wrapper {
    width: 100%;
    padding: 0 0px;
  }
</style>