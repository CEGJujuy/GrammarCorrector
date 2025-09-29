import { sentences } from '../data/sentences.js'

export class GrammarGame {
  constructor(progressTracker) {
    this.progressTracker = progressTracker
    this.currentSentence = null
    this.selectedWords = new Set()
    this.gameContainer = null
    this.feedbackTimeout = null
  }

  init() {
    this.gameContainer = document.getElementById('game-container')
    this.loadNewSentence()
  }

  reset() {
    this.selectedWords.clear()
    this.loadNewSentence()
  }

  loadNewSentence() {
    // Get a random sentence
    const randomIndex = Math.floor(Math.random() * sentences.length)
    this.currentSentence = sentences[randomIndex]
    this.selectedWords.clear()
    this.renderSentence()
  }

  renderSentence() {
    const { text, errors } = this.currentSentence
    const words = text.split(' ')
    
    this.gameContainer.innerHTML = `
      <div class="sentence-container">
        <div class="instruction">Tap the words that contain grammar errors</div>
        <div class="sentence" id="sentence">
          ${words.map((word, index) => 
            `<span class="word" data-index="${index}">${word}</span>`
          ).join(' ')}
        </div>
        <div class="action-buttons">
          <button class="btn btn-primary" id="check-btn">Check Answer</button>
          <button class="btn btn-secondary" id="skip-btn">Skip</button>
        </div>
        <div class="feedback" id="feedback"></div>
      </div>
    `

    this.setupSentenceEventListeners()
  }

  setupSentenceEventListeners() {
    const words = document.querySelectorAll('.word')
    const checkBtn = document.getElementById('check-btn')
    const skipBtn = document.getElementById('skip-btn')

    words.forEach(word => {
      word.addEventListener('click', () => this.toggleWordSelection(word))
    })

    checkBtn.addEventListener('click', () => this.checkAnswer())
    skipBtn.addEventListener('click', () => this.skipSentence())
  }

  toggleWordSelection(wordElement) {
    const index = parseInt(wordElement.dataset.index)
    
    if (this.selectedWords.has(index)) {
      this.selectedWords.delete(index)
      wordElement.classList.remove('selected')
    } else {
      this.selectedWords.add(index)
      wordElement.classList.add('selected')
    }
  }

  checkAnswer() {
    const { errors } = this.currentSentence
    const correctErrors = new Set(errors)
    const userSelection = this.selectedWords
    
    // Check if the selection is correct
    const isCorrect = this.setsEqual(correctErrors, userSelection)
    
    // Update progress
    this.progressTracker.addAttempt(isCorrect)
    
    // Show feedback
    this.showFeedback(isCorrect, correctErrors)
    
    // Update stats in the main app
    this.updateStats()
  }

  setsEqual(set1, set2) {
    if (set1.size !== set2.size) return false
    for (let item of set1) {
      if (!set2.has(item)) return false
    }
    return true
  }

  showFeedback(isCorrect, correctErrors) {
    const feedbackElement = document.getElementById('feedback')
    const words = document.querySelectorAll('.word')
    
    // Clear any existing timeout
    if (this.feedbackTimeout) {
      clearTimeout(this.feedbackTimeout)
    }

    // Highlight correct answers
    words.forEach((word, index) => {
      word.classList.remove('correct-error', 'missed-error', 'wrong-selection')
      
      if (correctErrors.has(index)) {
        if (this.selectedWords.has(index)) {
          word.classList.add('correct-error')
        } else {
          word.classList.add('missed-error')
        }
      } else if (this.selectedWords.has(index)) {
        word.classList.add('wrong-selection')
      }
    })

    // Show feedback message
    if (isCorrect) {
      feedbackElement.innerHTML = `
        <div class="feedback-message success">
          <div class="feedback-icon">✓</div>
          <div>Excellent! You found all the errors.</div>
        </div>
      `
    } else {
      const explanation = this.currentSentence.explanation || 'Review the highlighted words.'
      feedbackElement.innerHTML = `
        <div class="feedback-message error">
          <div class="feedback-icon">✗</div>
          <div>
            <div>Not quite right. ${explanation}</div>
            <div class="error-legend">
              <span class="legend-item">
                <span class="legend-color correct-error"></span>
                Correct selections
              </span>
              <span class="legend-item">
                <span class="legend-color missed-error"></span>
                Missed errors
              </span>
              <span class="legend-item">
                <span class="legend-color wrong-selection"></span>
                Incorrect selections
              </span>
            </div>
          </div>
        </div>
      `
    }

    // Auto-advance to next sentence after showing feedback
    this.feedbackTimeout = setTimeout(() => {
      this.loadNewSentence()
    }, 3000)
  }

  skipSentence() {
    this.loadNewSentence()
  }

  updateStats() {
    // Trigger stats update in main app
    const event = new CustomEvent('statsUpdate')
    document.dispatchEvent(event)
  }
}