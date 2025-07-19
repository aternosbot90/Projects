const display = document.getElementById('display');
const buttons = document.querySelectorAll('button[data-value]');
const equalsBtn = document.getElementById('equals');
const clearBtn = document.getElementById('clear');

const toggle = document.getElementById('darkModeToggle');
const modeText = document.getElementById('modeText');

function updateModeText(isDark) {
  if (isDark) {
    modeText.textContent = 'Light Mode';
    modeText.style.color = '#eee'; // light text in dark mode
  } else {
    modeText.textContent = 'Dark Mode';
    modeText.style.color = '#222'; // dark text in light mode
  }
}

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode', toggle.checked);
  localStorage.setItem('darkMode', toggle.checked);
  updateModeText(toggle.checked);
});

// On page load, restore preference and update label
window.addEventListener('load', () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  toggle.checked = darkMode;
  document.body.classList.toggle('dark-mode', darkMode);
  updateModeText(darkMode);
});

// Append value to the display
buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.value += button.getAttribute('data-value');
  });
});

// Calculate result
equalsBtn.addEventListener('click', () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
});

// Clear display
clearBtn.addEventListener('click', () => {
  display.value = '';
});

document.addEventListener('keydown', (event) => {
  const key = event.key;
  const display = document.getElementById('display');

  // Allowed keys: digits, operators, decimal point
  const allowedKeys = ['0','1','2','3','4','5','6','7','8','9',
                       '+','-','*','/','.'];

  if (allowedKeys.includes(key)) {
    // Append the pressed key to the display
    display.value += key;
  } else if (key === 'Enter') {
    // Calculate result
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  } else if (key === 'Backspace') {
    // Remove last character
    display.value = display.value.slice(0, -1);
  }
});

