// Preloader Words Data
const preloaderWords = [
  'Hello',
  'Halo',
  'Bonjour',
  'Ciao',
  'Olà',
  'سلام',
  'やあ',
  'Hallå',
  'Guten tag',
  'Welcome to maulana-tech'
];

// Create Preloader HTML
function createPreloader() {
  const preloaderHTML = `
    <div id="preloader" class="preloader-container">
      <style>
        .preloader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          flex-direction: column;
          gap: 30px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          opacity: 1;
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .preloader-container.fade-out {
          opacity: 0;
          pointer-events: none;
          transform: translateY(-100px);
          animation: slideUpFadeOut 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes slideUpFadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px);
          }
        }

        .preloader-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          font-size: 36px;
          font-weight: 700;
          color: #fff;
          min-height: 60px;
        }

        .preloader-dot {
          width: 14px;
          height: 14px;
          background: #C1FF72;
          border-radius: 50%;
          animation: dotPulse 1.4s ease-in-out infinite;
          flex-shrink: 0;
        }

        .preloader-word {
          min-width: 250px;
          text-align: center;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          letter-spacing: 0.5px;
        }

        .preloader-progress-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .preloader-progress {
          width: 320px;
          height: 4px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
          overflow: hidden;
          box-shadow: none;
        }

        .preloader-progress-bar {
          height: 100%;
          background: #C1FF72;
          border-radius: 10px;
          box-shadow: none;
          width: 0%;
          transition: width 0.1s linear;
        }

        .preloader-percentage {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 500;
          letter-spacing: 1px;
        }

        @keyframes dotPulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @media (max-width: 768px) {
          .preloader-content {
            font-size: 28px;
            gap: 15px;
          }

          .preloader-word {
            min-width: 180px;
            font-size: 24px;
          }

          .preloader-progress {
            width: 250px;
          }

          .preloader-dot {
            width: 12px;
            height: 12px;
          }
        }

        @media (max-width: 480px) {
          .preloader-content {
            font-size: 24px;
            gap: 12px;
          }

          .preloader-word {
            min-width: 150px;
            font-size: 20px;
          }

          .preloader-progress {
            width: 200px;
          }
        }
      </style>
      <div class="preloader-content">
        <span class="preloader-dot"></span>
        <span class="preloader-word" id="preloader-word">Hello</span>
      </div>
      <div class="preloader-progress-container">
        <div class="preloader-progress">
          <div class="preloader-progress-bar" id="preloader-progress-bar"></div>
        </div>
        <span class="preloader-percentage" id="preloader-percentage">0%</span>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('afterbegin', preloaderHTML);
}

// Initialize Preloader
function initPreloader() {
  createPreloader();

  const preloaderElement = document.getElementById('preloader');
  const wordElement = document.getElementById('preloader-word');
  const percentageElement = document.getElementById('preloader-percentage');
  const progressBarElement = document.getElementById('preloader-progress-bar');
  
  let currentWordIndex = 0;
  let isRemoving = false;
  let hasUserInteracted = false;
  
  // Total duration calculation based on word changes
  // First word: 500ms, then each word: 250ms
  // Total: 500 + (9 * 250) = 500 + 2250 = 2750ms (~2.75 seconds)
  const firstWordDuration = 500;
  const otherWordDuration = 250;
  const totalWords = preloaderWords.length;
  const totalPreloaderDuration = firstWordDuration + ((totalWords - 1) * otherWordDuration);
  
  // Update progress and word based on time
  function updatePreloaderState() {
    if (isRemoving || hasUserInteracted) return;
    
    const elapsedTime = Date.now() - startTime;
    
    // Calculate which word should be displayed
    let calculatedIndex = 0;
    let timeTracker = 0;
    
    for (let i = 0; i < totalWords; i++) {
      const wordDuration = i === 0 ? firstWordDuration : otherWordDuration;
      if (elapsedTime < timeTracker + wordDuration) {
        calculatedIndex = i;
        break;
      }
      timeTracker += wordDuration;
      calculatedIndex = i + 1;
    }
    
    // Ensure index doesn't exceed array length
    if (calculatedIndex >= totalWords) {
      calculatedIndex = totalWords - 1;
    }
    
    // Update word if changed
    if (calculatedIndex !== currentWordIndex) {
      currentWordIndex = calculatedIndex;
      wordElement.textContent = preloaderWords[currentWordIndex];
    }
    
    // Update progress bar
    const progressPercentage = Math.min((elapsedTime / totalPreloaderDuration) * 100, 99);
    progressBarElement.style.width = progressPercentage + '%';
    percentageElement.textContent = Math.floor(progressPercentage) + '%';
  }
  
  const startTime = Date.now();
  
  // Update state every 50ms for smooth animation
  const updateInterval = setInterval(() => {
    updatePreloaderState();
  }, 50);

  // Function to remove preloader smoothly
  function removePreloader() {
    if (isRemoving) return;
    isRemoving = true;
    
    clearInterval(updateInterval);
    
    // Remove event listeners
    document.removeEventListener('scroll', scrollListener);
    document.removeEventListener('wheel', scrollListener);
    document.removeEventListener('touchmove', scrollListener);
    
    // Add fade-out class with slide-up animation
    preloaderElement.classList.add('fade-out');
    
    // Remove from DOM after animation completes
    setTimeout(() => {
      if (preloaderElement && preloaderElement.parentNode) {
        preloaderElement.remove();
      }
    }, 600);
  }

  // Handle user scroll to stop preloader early
  function handleUserScroll() {
    if (!hasUserInteracted) {
      hasUserInteracted = true;
      // Immediately remove preloader on scroll
      removePreloader();
    }
  }

  // Add scroll event listeners to detect any user interaction
  const scrollListener = (e) => {
    // Only trigger if scrollbar actually moved
    if (window.scrollY > 0 || window.pageYOffset > 0) {
      handleUserScroll();
      document.removeEventListener('scroll', scrollListener);
      document.removeEventListener('wheel', scrollListener);
      document.removeEventListener('touchmove', scrollListener);
    }
  };

  document.addEventListener('scroll', scrollListener);
  document.addEventListener('wheel', scrollListener);
  document.addEventListener('touchmove', scrollListener);

  // Auto-remove after preloader completes all words
  setTimeout(() => {
    if (!isRemoving) {
      removePreloader();
    }
  }, totalPreloaderDuration + 500); // Add 500ms buffer to show last word

  // Also remove when page fully loads (if faster than preloader duration)
  window.addEventListener('load', () => {
    if (!isRemoving && (Date.now() - startTime) > (totalPreloaderDuration + 500)) {
      removePreloader();
    }
  }, { once: true });

  // Fallback: Remove after max 8 seconds
  setTimeout(() => {
    if (!isRemoving && preloaderElement && preloaderElement.parentNode) {
      removePreloader();
    }
  }, 8000);
}

// Start preloader immediately when script loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initPreloader, 0);
  });
} else {
  // If DOM is already loaded, still initialize
  initPreloader();
}
