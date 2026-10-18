

const params = new URLSearchParams(window.location.search);
const designId = Number(params.get("id"));
const design = designs.find(d => d.id === designId);

const container = document.getElementById("designDetail");

if (!design) {
  
  container.innerHTML = `
    <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0;">
      <h1>Design not found</h1>
      <p style="color: var(--moss); margin: 12px 0 24px;">
        That design doesn't exist or may have been removed.
      </p>
      <a href="gallery.html" class="back-link">&larr; Back to gallery</a>
    </div>
  `;
} else {
  container.innerHTML = `
    <div>
      <img src="${design.image}" alt="${design.name}" style="height: max-content;">
    </div>
    <div>
      <a href="gallery.html" class="back-link">&larr; Back to gallery</a>
      <div class="category-tag">${design.category}</div>
      <h1>${design.name}</h1>
      <p class="price">${design.price}</p>
      <p class="description">${design.description}</p>
      <button class="whatsapp-btn" id="whatsappBtn">
        <i class="fa-brands fa-whatsapp"></i>
        Chat about this design
      </button>
    </div>
  `;

  document.getElementById("whatsappBtn").addEventListener("click", () => {
    const message = `Hi! I'm interested in the "${design.name}" design.`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  });

  
  document.title = `${design.name} — Euul Embroidery`;
}