import { Router } from './router.js'

const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const btn3 = document.querySelector('#btn-3')

const router = new Router()
router.add('/', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/explorer', './pages/explorer.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

btn1.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./images/mountains-universe-1\ 1.jpg')"
})
btn2.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./images/mountains-universe-2.jpg')"
})
btn3.addEventListener('click', () => {
    document.body.style.backgroundImage = "url('./images/mountains-universe-3.jpg')"
})
