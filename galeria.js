(function () {
    const grid = document.querySelector('#galeria-grid-completa');
    const modal = document.querySelector('#visualizador-galeria');
    if (!grid || !modal) return;
    const image = modal.querySelector('.visualizador-imagem');
    const counter = modal.querySelector('.visualizador-contador');
    let photos = [], current = 0, lastFocused = null;
    const render = () => {
        grid.replaceChildren();
        if (!photos.length) { const empty = document.createElement('p'); empty.className = 'galeria-status'; empty.textContent = 'Ainda não há fotos disponíveis.'; grid.append(empty); return; }
        photos.forEach((photo, index) => {
            const button = document.createElement('button'); button.type = 'button'; button.className = 'galeria-card'; button.setAttribute('aria-label', `Ampliar ${photo.alt}`);
            const img = document.createElement('img'); img.src = photo.src; img.alt = photo.alt; img.loading = 'lazy'; img.decoding = 'async';
            button.append(img); button.addEventListener('click', () => open(index)); grid.append(button);
        });
    };
    const update = () => { const photo = photos[current]; image.src = photo.src; image.alt = photo.alt; counter.textContent = `${current + 1} de ${photos.length}`; };
    const open = index => { current = index; lastFocused = document.activeElement; update(); modal.hidden = false; document.body.classList.add('visualizador-aberto'); modal.querySelector('[data-acao="fechar"]').focus(); };
    const close = () => { modal.hidden = true; document.body.classList.remove('visualizador-aberto'); image.removeAttribute('src'); if (lastFocused) lastFocused.focus(); };
    const move = delta => { if (!photos.length) return; current = (current + delta + photos.length) % photos.length; update(); };
    modal.addEventListener('click', event => { if (event.target === modal) close(); const action = event.target.closest('[data-acao]')?.dataset.acao; if (action === 'fechar') close(); if (action === 'anterior') move(-1); if (action === 'proximo') move(1); });
    document.addEventListener('keydown', event => {
        if (modal.hidden) return;
        if (event.key === 'Escape') close();
        if (event.key === 'ArrowLeft') move(-1);
        if (event.key === 'ArrowRight') move(1);
        if (event.key === 'Tab') {
            const focusable = [...modal.querySelectorAll('button:not([disabled])')];
            const first = focusable[0], last = focusable.at(-1);
            if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
            else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
        }
    });
    fetch('assets/images/galeria-manifest.json', {cache: 'no-cache'}).then(response => { if (!response.ok) throw new Error('manifest'); return response.json(); }).then(data => { photos = Array.isArray(data.images) ? data.images.filter(photo => photo && typeof photo.src === 'string' && typeof photo.alt === 'string') : []; render(); }).catch(() => { grid.replaceChildren(); const error = document.createElement('p'); error.className = 'galeria-status'; error.textContent = 'Não foi possível carregar as fotos agora.'; grid.append(error); });
}());
