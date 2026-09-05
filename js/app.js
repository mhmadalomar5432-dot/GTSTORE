const games = [
  {
    id: "pubg",
    name: "PUBG Mobile",
    icon: "🎮",
    packages: [
      { amount: "60 شدة", price: 1 },
      { amount: "325 شدة", price: 5 },
      { amount: "660 شدة", price: 11 },
      { amount: "1800 شدة", price: 30 },
      { amount: "8100 شدة", price: 95 }
    ]
  },
  {
    id: "freefire",
    name: "Free Fire",
    icon: "💎",
    packages: [
      { amount: "110 جوهرة", price: 1 },
      { amount: "220 جوهرة", price: 2.50 }
    ]
  }
];

function renderGames() {
  const gamesGrid = document.getElementById("games-grid");
  if (!gamesGrid) return;

  gamesGrid.innerHTML = games.map(game => `
    <div class="game-card">
      <div class="game-icon">${game.icon}</div>
      <h3>${game.name}</h3>
      <button class="btn btn-primary" onclick="showPage('${game.id}')">
        عرض الباقات
      </button>
    </div>
  `).join("");
}

function renderPackages(gameId, elementId) {
  const game = games.find(g => g.id === gameId);
  const container = document.getElementById(elementId);

  if (!game || !container) return;

  container.innerHTML = game.packages.map(pkg => `
    <div class="package-card">
      <h3>${pkg.amount}</h3>
      <div class="package-price">$${pkg.price.toFixed(2)}</div>
      <button class="btn btn-primary"
        onclick="addToCart('${game.name}', '${pkg.amount}', ${pkg.price})">
        شراء
      </button>
    </div>
  `).join("");
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });

  const target = document.getElementById(`page-${page}`);
  if (target) {
    target.classList.add("active");
  }

  if (page === "pubg") {
    renderPackages("pubg", "pubg-packages");
  }

  if (page === "freefire") {
    renderPackages("freefire", "freefire-packages");
  }
}

function addToCart(game, amount, price) {
    let cart = JSON.parse(localStorage.getItem("gt_cart") || "[]");

    cart.push({
        game: game,
        amount: amount,
        price: Number(price)
    });

    localStorage.setItem("gt_cart", JSON.stringify(cart));

    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total-price");

    if (cartItems) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <strong>${item.game}</strong>
                    <div>${item.amount}</div>
                </div>
                <div>$${item.price.toFixed(2)}</div>
            </div>
        `).join("");
    }

    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = `$${total.toFixed(2)}`;
    }

    alert(`تمت إضافة ${amount} من ${game} إلى السلة`);

}  


document.addEventListener("DOMContentLoaded", function() {
  renderGames();
  renderPackages("pubg", "pubg-packages");
  renderPackages("freefire", "freefire-packages");
});
