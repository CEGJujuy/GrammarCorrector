export class ProgressTracker {
  constructor() {
    this.storageKey = 'grammarCorrectorProgress'
    this.loadProgress()
  }

  loadProgress() {
    const saved = localStorage.getItem(this.storageKey)
    if (saved) {
      this.progress = JSON.parse(saved)
    } else {
      this.progress = {
        correct: 0,
        total: 0,
        history: []
      }
    }
  }

  saveProgress() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.progress))
  }

  addAttempt(isCorrect) {
    this.progress.total++
    if (isCorrect) {
      this.progress.correct++
    }
    
    this.progress.history.push({
      correct: isCorrect,
      timestamp: Date.now()
    })

    // Keep only last 100 attempts
    if (this.progress.history.length > 100) {
      this.progress.history = this.progress.history.slice(-100)
    }

    this.saveProgress()
  }

  getStats() {
    const accuracy = this.progress.total > 0 
      ? Math.round((this.progress.correct / this.progress.total) * 100)
      : 0

    return {
      correct: this.progress.correct,
      total: this.progress.total,
      accuracy: accuracy
    }
  }

  getRecentPerformance(count = 10) {
    const recent = this.progress.history.slice(-count)
    const recentCorrect = recent.filter(attempt => attempt.correct).length
    const recentAccuracy = recent.length > 0 
      ? Math.round((recentCorrect / recent.length) * 100)
      : 0

    return {
      correct: recentCorrect,
      total: recent.length,
      accuracy: recentAccuracy
    }
  }

  reset() {
    this.progress = {
      correct: 0,
      total: 0,
      history: []
    }
    this.saveProgress()
  }
}