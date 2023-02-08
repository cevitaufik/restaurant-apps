import CacheHelper from './utils/cache-helper'

const assetsToCache = [
  './',
  './icons/favicon.png',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png',
  './icons/icon-384.png',
  './icons/icon-512.png',
  './images/heros/hero-image_4.jpg',
  './images/loading.webp',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js'
]

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache())
})

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request))
})
