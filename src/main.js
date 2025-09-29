import './style.css'
import { GrammarGame } from './components/GrammarGame.js'
import { ProgressTracker } from './utils/ProgressTracker.js'

class App {
  constructor() {
    this.progressTracker = new ProgressTracker()
    this.grammarGame = new GrammarGame(this.progressTracker)
    this.init()
  }

  init() {
    const app = document.querySelector('#app')
    app.innerHTML = `
      <div class="container">
        <header class="header">
          <h1 class="title">Corrector Gramatical</h1>
          <p class="subtitle">Encuentra y corrige los errores gramaticales</p>
        </header>
        
        <div class="progress-section">
          <div class="stats">
            <div class="stat">
              <span class="stat-number" id="correct-count">0</span>
              <span class="stat-label">Correctas</span>
            </div>
            <div class="stat">
              <span class="stat-number" id="total-count">0</span>
              <span class="stat-label">Total</span>
            </div>
            <div class="stat">
              <span class="stat-number" id="accuracy">0%</span>
              <span class="stat-label">Precisión</span>
            </div>
          </div>
        </div>

        <div class="game-container" id="game-container">
          <!-- Game content will be inserted here -->
        </div>

        <div class="controls">
          <button class="btn btn-secondary" id="reset-btn">Reiniciar Progreso</button>
        </div>
      </div>
    `

    this.setupEventListeners()
    this.grammarGame.init()
    this.updateStats()
  }

  setupEventListeners() {
    const resetBtn = document.getElementById('reset-btn')
    resetBtn.addEventListener('click', () => {
      if (confirm('¿Estás seguro de que quieres reiniciar tu progreso?')) {
        this.progressTracker.reset()
        this.updateStats()
        this.grammarGame.reset()
      }
    })
  }

  updateStats() {
    const stats = this.progressTracker.getStats()
    document.getElementById('correct-count').textContent = stats.correct
    document.getElementById('total-count').textContent = stats.total
    document.getElementById('accuracy').textContent = stats.accuracy + '%'
  }
}

// Initialize the app
new App()