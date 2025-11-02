const waNumber = "6282283996884";

const categories = {
  "🤖 CHATGPT": [
    { name: "ChatGPT 1 Minggu — Diskon", price: 15000, image: "https://i.ibb.co/QQ6x8Gb/chatgpt.jpg" },
    { name: "ChatGPT 1 Bulan — Diskon", price: 30000, image: "https://i.ibb.co/QQ6x8Gb/chatgpt.jpg" },
    { name: "ChatGPT 1 Bulan Private — Promo", price: 70000, image: "https://i.ibb.co/QQ6x8Gb/chatgpt.jpg" }
  ],
  "📺 YOUTUBE PREMIUM": [
    { name: "YouTube FamPlan — 5k", price: 5000, image: "https://i.ibb.co/hCSjDpV/youtube.jpg" },
    { name: "YouTube FamHead — 8k", price: 8000, image: "https://i.ibb.co/hCSjDpV/youtube.jpg" },
    { name: "YouTube IndPlan — 10k", price: 10000, image: "https://i.ibb.co/hCSjDpV/youtube.jpg" }
  ],
  "🎨 CANVA PRO": [
    { name: "Canva 1 Bulan — 3k", price: 3000, image: "https://i.ibb.co/5kKpR9h/canva.jpg" },
    { name: "Canva 2 Bulan — 5k", price: 5000, image: "https://i.ibb.co/5kKpR9h/canva.jpg" },
    { name: "Canva 5 Bulan — 10k", price: 10000, image: "https://i.ibb.co/5kKpR9h/canva.jpg" }
  ],
  "🍿 NETFLIX": [
    { name: "Netflix SemiPrivate — 30k", price: 30000, image: "https://i.ibb.co/Drz8gMt/netflix.jpg" },
    { name: "Netflix Private — 130k", price: 130000, image: "https://i.ibb.co/Drz8gMt/netflix.jpg" }
  ],
  "🎧 SPOTIFY PREMIUM": [
    { name: "Spotify IndPlan (1 Bulan)", price: 8000, image: "https://i.ibb.co/4ZW4LfG/spotify.jpg" },
    { name: "Spotify FamPlan (1 Bulan)", price: 20000, image: "https://i.ibb.co/4ZW4LfG/spotify.jpg" }
  ]
};

const container = document.getElementById("product-container");

for (const [category, products] of Object.entries(categories)) {
  const section = document.createElement("section");
  section.classList.add("category");

  const title = document.createElement("h2");
  title.textContent = category;
  section.appendChild(title);

  const productGrid = document.createElement("div");
  productGrid.classList.add("products");

  products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("product");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="info">
        <h3>${product.name}</h3>
        <p>Rp ${product.price.toLocaleString("id-ID")}</p>
        <button onclick="orderProduct('${product.name}')">Beli Sekarang</button>
      </div>
    `;
    productGrid.appendChild(card);
  });

  section.appendChild(productGrid);
  container.appendChild(section);
}

function orderProduct(name) {
  const text = encodeURIComponent(`oi mau beli *${name}*`);
  window.open(`https://wa.me/${waNumber}?text=${text}`, "_blank");
}

// Animasi fade-in saat scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".product").forEach(el => observer.observe(el));
