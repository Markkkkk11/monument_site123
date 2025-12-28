import './style.css'
import Alpine from 'alpinejs'

window.Alpine = Alpine
Alpine.start()

// Force video playback for Yandex Browser and other strict browsers
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('hero-video')
  if (video) {
    const playVideo = () => {
      if (video.paused) {
        video.play().catch(e => console.log('Autoplay blocked:', e))
      }
    }
    
    // Try immediate play
    playVideo()
    
    // Try on interaction
    document.addEventListener('click', playVideo, { once: true })
    document.addEventListener('touchstart', playVideo, { once: true })
    
    // Retry when visible (e.g. after tab switch)
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) playVideo()
    })
  }
})

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
if (!prefersReduced && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
} else {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'))
}
