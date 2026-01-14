document.addEventListener('click', function (e) {
  const el = e.target;
  if (!el.classList.contains('cite-toggle')) return;

  const id = el.dataset.target;
  const box = document.getElementById(id);
  if (!box) return;

  box.hidden = !box.hidden;
});


