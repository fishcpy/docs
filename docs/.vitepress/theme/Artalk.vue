<template>
  <div id="artalk" class="artalk-container"></div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

const { page } = useData()

let artalk: any = null

onMounted(async () => {
  // 动态导入 Artalk
  const { default: Artalk } = await import('artalk')
  
  // 初始化 Artalk
  artalk = Artalk.init({
    el: '#artalk',
    pageKey: page.value.relativePath,
    pageTitle: page.value.title,
    server: 'https://artalk.fis.ink',
    site: 'fishcpy文档',
    darkMode: document.documentElement.classList.contains('dark'),
    locale: 'zh-CN',
    placeholder: '来都来了，不如留个言？',
    noComment: '快来成为第一个评论的人吧~',
    sendBtn: '发送评论',
    editorTravel: true,
    flatMode: 'auto',
    nestMax: 2,
    nestSort: 'DATE_ASC',
    versionCheck: true,
    useBackendConf: true,
    gravatar: {
      mirror: 'https://cravatar.cn/avatar/',
      default: 'mp'
    },
    pagination: {
      pageSize: 20,
      autoLoad: true
    },
    heightLimit: {
      content: 300,
      children: 400,
      scrollable: true
    },
    imgUpload: true,
    preview: true,
    countEl: '#artalk-count',
    pvEl: '#artalk-pv',
    statPageKeyAttr: 'data-page-key',
    listSort: true,
    reqTimeout: 15000,
    scrollRelativeTo: () => document.body
  })
  
  // 监听主题变化
  const observer = new MutationObserver(() => {
    const isDark = document.documentElement.classList.contains('dark')
    if (artalk) {
      artalk.setDarkMode(isDark)
    }
  })
  
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['class']
  })
  
  // 保存 observer 以便清理
  ;(artalk as any)._observer = observer
})

onUnmounted(() => {
  if (artalk) {
    // 清理主题监听器
    if ((artalk as any)._observer) {
      ;(artalk as any)._observer.disconnect()
    }
    artalk.destroy()
    artalk = null
  }
})
</script>

<style>
.artalk-container {
  margin-top: 2rem;
  padding: 0;
  width: 100%;
}

/* 适配 VitePress 主题样式 */
.atk-main {
  font-family: var(--vp-font-family-base);
}

.atk-editor {
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
}

.atk-editor:focus-within {
  border-color: var(--vp-c-brand-1);
}

.atk-btn {
  background: var(--vp-c-brand-1);
  border-radius: 6px;
  transition: background-color 0.25s;
}

.atk-btn:hover {
  background: var(--vp-c-brand-2);
}

.atk-comment {
  border-bottom: 1px solid var(--vp-c-divider);
}

.atk-comment:last-child {
  border-bottom: none;
}

/* 暗色模式适配 */
html.dark .atk-main {
  color: var(--vp-c-text-1);
}

html.dark .atk-editor {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-border);
}

html.dark .atk-comment {
  border-color: var(--vp-c-divider);
}
</style>