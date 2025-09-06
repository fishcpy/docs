declare module 'artalk' {
  interface ArtalkConfig {
    el: string | HTMLElement
    pageKey?: string
    pageTitle?: string
    server: string
    site: string
    darkMode?: string | boolean
    locale?: string
    placeholder?: string
    noComment?: string
    sendBtn?: string
    editorTravel?: boolean
    flatMode?: string | boolean
    nestMax?: number
    nestSort?: string
    versionCheck?: boolean
    useBackendConf?: boolean
    gravatar?: {
      mirror?: string
      default?: string
    }
    pagination?: {
      pageSize?: number
      autoLoad?: boolean
    }
    heightLimit?: {
      content?: number
      children?: number
      scrollable?: boolean
    }
    imgUpload?: boolean
    preview?: boolean
    countEl?: string
    pvEl?: string
    statPageKeyAttr?: string
    listSort?: boolean
    reqTimeout?: number
    scrollRelativeTo?: () => HTMLElement
  }

  interface ArtalkInstance {
    destroy(): void
    setDarkMode(isDark: boolean): void
  }

  class Artalk {
    static init(config: ArtalkConfig): ArtalkInstance
  }

  export default Artalk
}