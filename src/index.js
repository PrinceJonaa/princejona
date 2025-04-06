import { html, render, state } from 'nue'
import anime from 'animejs'

const count = state(0)

const App = () => html`
  <div class="container">
    <h1 onclick=${() => {
      count.value++
      anime({
        targets: 'h1',
        translateY: -10,
        direction: 'alternate',
        duration: 300,
        easing: 'easeInOutQuad'
      })
    }}>
      Click Count: ${count.value}
    </h1>
  </div>
`

render(App, document.body)
