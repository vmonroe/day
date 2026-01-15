const images = Array.from(document.querySelectorAll('.gallery img'));
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
let index = 0;

images.forEach((img, i) => {
  img.addEventListener('click', () => openModal(i));
});

function openModal(i) {
  index = i;
  modalImg.src = images[index].src;
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

function next() {
  index = (index + 1) % images.length;
  modalImg.src = images[index].src;
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  modalImg.src = images[index].src;
}

document.querySelector('.right').onclick = next;
document.querySelector('.left').onclick = prev;

modal.addEventListener('click', e => {
  if (e.target === modal) closeModal();
});

document.addEventListener('keydown', e => {
  if (modal.style.display !== 'flex') return;
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
  if (e.key === 'Escape') closeModal();
});