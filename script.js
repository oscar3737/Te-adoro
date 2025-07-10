
document.body.addEventListener('click', (e) => {
  const texto = document.createElement('div');
  texto.className = 'teadoro';
  texto.innerText = 'TE ADORO 💖';
  texto.style.left = e.clientX + 'px';
  texto.style.top = e.clientY + 'px';
  document.body.appendChild(texto);

  setTimeout(() => {
    texto.remove();
  }, 2000);
});
