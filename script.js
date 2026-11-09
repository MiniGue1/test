document.querySelectorAll('.btn').forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.add('pulse');
    setTimeout(() => button.classList.remove('pulse'), 220);
  });
});

const style = document.createElement('style');
style.textContent = `
  .pulse {
    animation: pulse 0.22s ease;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(0.97); }
    100% { transform: scale(1); }
  }
`;
document.head.appendChild(style);
