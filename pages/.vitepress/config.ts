import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'OpenGL Guide',
  description: 'A modern guide to OpenGL (with Rust as the source language), along with a collection of modern graphics topics/examples.',
  appearance: true, // Enable dark theme by default (this is true by default but I want to be explicit)
  lastUpdated: true, // Display the last updated time based on git timestamp
  themeConfig: {
    sidebar: [
      {
        text: 'Home',
        items: [
          { text: 'Introduction', link: '/introduction' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Andrew Mitchell'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/realandrew/opengl_guide' }
    ]
  }
})