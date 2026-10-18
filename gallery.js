

function renderGallery(filter = "all") {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  const filtered = filter === "all"
    ? designs
    : designs.filter(d => d.category === filter);

  if (filtered.length === 0) {
    grid.innerHTML = `<p class="empty-state">No designs in this category yet.</p>`;
    return;
  }

  filtered.forEach(d => {
    const card = document.createElement("div");
    card.className = "design-card";
    card.innerHTML = `
      <img src="${d.image}" alt="${d.name}">
      <div class="info">
        <p class="name">${d.name}</p>
        <p class="price">${d.price}</p>
      </div>
    `;
    
    card.addEventListener("click", () => {
      window.location.href = `design.html?id=${d.id}`;
    });
    grid.appendChild(card);
  });
}

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGallery(btn.dataset.category);
  });
});


renderGallery();