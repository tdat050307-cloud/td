// DỮ LIỆU ĐÃ TÍCH HỢP SẴN LINK ẢNH THẬT
const PRODUCTS = [
  {
    id: 1,
    title: "Bánh Tráng Trộn Thập Cẩm Khổng Lồ",
    category: "dac-san",
    categoryName: "Đặc Sản Trộn",
    originalPrice: 45000,
    salePrice: 36000,
    discount: "-20%",
    image:
      "https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2023/10/cach-lam-banh-trang-tron-thumb.jpg",
    description:
      "Bánh tráng trộn siêu tóp mỡ béo ngậy, khô bò, khô mực xé sợi vụn thơm cay, trứng cút lòng đào kèm nước sốt bò sa tế gia truyền đậm đà chuẩn vị phố đi bộ.",
  },

  {
    id: 2,
    title: "Nem Chua Rán Phố Cổ (Chục 10 Cái)",
    category: "an-vat",
    categoryName: "Món Ăn Vặt",
    originalPrice: null,
    salePrice: 50000,
    discount: null,
    image:
      "https://trumfood.vn/wp-content/uploads/2022/09/trumfood_decor00865-768x768.jpg",
    description:
      "Nem chua rán được bọc một lớp bột xù mỏng, chiên ráo dầu giòn tan bên ngoài nhưng vẫn giữ được độ mềm dẻo, ngọt thịt bên trong. Chấm cùng tương ớt cay nồng.",
  },
  {
    id: 3,
    title: "Chân Gà Rút Xương Sả Tắc Ngâm",
    category: "an-vat",
    categoryName: "Món Ăn Vặt",
    originalPrice: 85000,
    salePrice: 75000,
    discount: "HOT",
    image:
      "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/thumkt/pasgo/chan-ga-sa-tac/chan-ga-rut-xuong-ngam-sa-tac.jpg",
    description:
      "Chân gà rút xương loại chọn lọc, giòn sần sật ngâm đẫm trong nước cốt tắc thơm ngọt cùng sả, ớt xiêm xanh và lá chanh cực kì kích thích vị giác.",
  },
  {
    id: 4,
    title: "Trà Thạch Vải Hạt Chia Mát Lạnh Cực Khoái",
    category: "giai-nhiet",
    categoryName: "Đồ Uống Giải Nhiệt",
    originalPrice: null,
    salePrice: 28000,
    discount: null,
    image:
      "https://www.lorca.vn/wp-content/uploads/2024/05/maxresdefault-20.jpg",
    description:
      "Cốt trà thanh mát hòa cùng hương vải tươi ngọt ngào, kèm topping thạch dừa sần sật và hạt chia bổ dưỡng giúp đập tan cơn khát tức thì.",
  },
  {
    id: 5,
    title: "Mì Kay Hải Sản Cay Hơn Người Yêu Cũ",
    category: "an-vat",
    categoryName: "Đồ Ăn Vặt",
    originalPrice: null,
    salePrice: 50000,
    discount: null,
    image:
      "https://vcdn1-dulich.vnecdn.net/2023/12/04/my-cay-jpeg-4190-1701685273.jpg?w=680&h=0&q=100&dpr=2&fit=crop&s=tMVRlyOhhxuF8EYvIQfVrw",
    description:
      "Từng sợi mì dai ngon, thấm đấm nước dùng chua cay, cho thấy cảm giác thỏa mãn chiếc bụng đói, cùng với đó là sự kết hợp của các loại hải sản tươi ngon",
  },
  {
    id: 6,
    title: "Trà Sữa Trân Châu Hoàng Gia",
    category: "giai-nhiet",
    categoryName: "Đồ Uống Giải Nhiệt",
    originalPrice: 45000,
    salePrice: 35000,
    discount: "-22%",
    image:
      "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=500",
    description:
      "Trà sữa đậm vị trà hoàng gia Anh quốc, béo ngậy vị sữa hảo hạng kết hợp cùng trân châu đen nhập khẩu dẻo bùi, nhai cực đã miệng.",
  },
  {
    id: 7,
    title: "Trà Chanh Tươi Lạnh Băng Giá",
    category: "giai-nhiet",
    categoryName: "Đồ Uống Giải Nhiệt",
    originalPrice: null,
    salePrice: 15000,
    discount: "NEW",
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500",
    description:
      "Vị chua thanh mát từ những lát chanh tươi mọng nước, hòa quyện với hương trà xanh nhẹ nhàng và đá xay mát lạnh, đập tan mọi cơn nóng.",
  },
  {
    id: 8,
    title: "Cơm Rang Dưa Bò Mỹ Đình",
    category: "dac-san",
    categoryName: "Đặc Sản Trộn",
    originalPrice: 60000,
    salePrice: 50000,
    discount: "-16%",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=500",
    description:
      "Cơm được rang vàng ruộm, hạt cơm săn chắc không bị khô, ăn kèm với thịt bò xào lăn chín tới mềm ngọt và dưa cải muối chua ngọt đậm đà đúng vị Mỹ Đình.",
  },
  {
    id: 9,
    title: "Phở Gà Bắc Kinh Đậm Vị",
    category: "dac-san",
    categoryName: "Đặc Sản Trộn",
    originalPrice: null,
    salePrice: 55000,
    discount: "HOT",
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?q=80&w=500",
    description:
      "Bánh phở mềm dai ngập trong nước dùng hầm xương gà thanh ngọt, thớ thịt gà ta xé phay da giòn sần sật xen lẫn thảo mộc đặc trưng hương vị Bắc Kinh.",
  },
  {
    id: 10,
    title: "Vịt Quay Da Giòn Bì Vàng Ươm",
    category: "dac-san",
    categoryName: "Đặc Sản Trộn",
    originalPrice: 180000,
    salePrice: 150000,
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1518492104633-130d0cc84637?q=80&w=500",
    description:
      "Thịt vịt quay béo ngậy tẩm ướp mật ong rừng, lớp da bên ngoài được quay vàng ươm, giòn rụm, bên trong thịt vẫn giữ được độ mềm mọng nước, chấm cùng nước sốt tiều đặc chế.",
  },
  {
    id: 11,
    title: "Gà Rán Giòn Rùm Rụm Siêu Vị",
    category: "an-vat",
    categoryName: "Món Ăn Vặt",
    originalPrice: 35000,
    salePrice: 29000,
    discount: "-17%",
    image:
      "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?q=80&w=500",
    description:
      "Miếng gà lớn bọc lớp bột chiên xù giòn rụm rùm rụm khi cắn vào. Thịt gà bên trong nóng hổi, thơm phức hương gia vị, ăn kèm với tương cà hoặc tương ớt siêu cay.",
  },
];

let cart = [];
let currentSelectedProductId = null;

// DOM ELEMENT SELECTORS
const productGrid = document.getElementById("productGrid");
const cartOverlay = document.getElementById("cartOverlay");
const cartSidebar = document.getElementById("cartSidebar");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartTotalPrice = document.getElementById("cartTotalPrice");
const cartCountTop = document.getElementById("cartCountTop");
const checkoutBtn = document.getElementById("checkoutBtn");

const productModal = document.getElementById("productModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalDescription = document.getElementById("modalDescription");
const modalOriginalPrice = document.getElementById("modalOriginalPrice");
const modalSalePrice = document.getElementById("modalSalePrice");
const modalBadge = document.getElementById("modalBadge");
const modalAddToCartBtn = document.getElementById("modalAddToCartBtn");
const modalBuyNowBtn = document.getElementById("modalBuyNowBtn");

function initApp() {
  renderProducts(PRODUCTS);
  setupEventListeners();
}

// HIỂN THỊ SẢN PHẨM NGOÀI MÀN HÌNH CHÍNH
function renderProducts(productsList) {
  productGrid.innerHTML = "";
  productsList.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") openProductModal(product.id);
    });

    const badgeHtml = product.discount
      ? `<div class="discount-badge">${product.discount}</div>`
      : "";
    const originalPriceHtml = product.originalPrice
      ? `<span class="original-price">${product.originalPrice.toLocaleString()}đ</span>`
      : "<span></span>";

    card.innerHTML = `
            ${badgeHtml}
            <div class="image-container">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <span class="category-tag">${product.categoryName}</span>
            <h2 class="heading-2">${product.title}</h2>
            <div class="price-section">
                ${originalPriceHtml}
                <span class="sale-price">${product.salePrice.toLocaleString()}đ</span>
            </div>
            <button class="btn-primary add-to-cart-quick" data-id="${product.id}">THÊM VÀO GIỎ</button>
        `;
    productGrid.appendChild(card);
  });
}

// ĐIỀU KHIỂN POPUP CHI TIẾT MÓN ĂN
function openProductModal(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  currentSelectedProductId = id;
  if (modalImage) modalImage.src = product.image;
  modalTitle.textContent = product.title;
  modalCategory.textContent = product.categoryName;
  modalDescription.textContent = product.description;
  modalSalePrice.textContent = `${product.salePrice.toLocaleString()}đ`;

  if (product.originalPrice) {
    modalOriginalPrice.style.display = "inline";
    modalOriginalPrice.textContent = `${product.originalPrice.toLocaleString()}đ`;
  } else {
    modalOriginalPrice.style.display = "none";
  }

  if (product.discount) {
    modalBadge.style.display = "block";
    modalBadge.textContent = product.discount;
  } else {
    modalBadge.style.display = "none";
  }

  productModal.classList.add("active");
}

function closeModal() {
  productModal.classList.remove("active");
}

// XỬ LÝ LOGIC GIỎ HÀNG
function addToCart(id) {
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

function changeQuantity(id, delta) {
  const item = cart.find((item) => item.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    cart = cart.filter((item) => item.id !== id);
  }
  updateCartUI();
}

function updateCartUI() {
  cartItemsContainer.innerHTML = "";
  let totalItems = 0;
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p class="empty-cart-text">Giỏ hàng đang trống.</p>';
  } else {
    cart.forEach((item) => {
      totalItems += item.quantity;
      totalPrice += item.salePrice * item.quantity;

      const cartItemRow = document.createElement("div");
      cartItemRow.className = "cart-item";
      cartItemRow.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <span class="cart-item-price">${(item.salePrice * item.quantity).toLocaleString()}đ</span>
                </div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, -1)">-</button>
                    <span class="label-text">${item.quantity}</span>
                    <button class="quantity-btn" onclick="changeQuantity(${item.id}, 1)">+</button>
                </div>
            `;
      cartItemsContainer.appendChild(cartItemRow);
    });
  }

  cartCountTop.textContent = totalItems;
  cartTotalPrice.textContent = `${totalPrice.toLocaleString()}đ`;
}

// EVENT LISTENERS
function setupEventListeners() {
  cartToggleBtn.addEventListener("click", () => {
    cartSidebar.classList.add("active");
    cartOverlay.classList.add("active");
  });
  closeCartBtn.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
  });
  cartOverlay.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    cartOverlay.classList.remove("active");
    closeModal();
  });
  closeModalBtn.addEventListener("click", closeModal);

  productGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-quick")) {
      addToCart(parseInt(e.target.getAttribute("data-id")));
    }
  });

  modalAddToCartBtn.addEventListener("click", () => {
    if (currentSelectedProductId) {
      addToCart(currentSelectedProductId);
      closeModal();
      cartSidebar.classList.add("active");
      cartOverlay.classList.add("active");
    }
  });

  modalBuyNowBtn.addEventListener("click", () => {
    if (currentSelectedProductId) {
      addToCart(currentSelectedProductId);
      closeModal();
      alert("Đang chuyển hướng đến cổng thanh toán cho đơn hàng của bạn!");
      cart = [];
      updateCartUI();
    }
  });

  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Giỏ hàng đang rỗng, chọn vài món ăn vặt đã bạn ơi!");
      return;
    }

    // Lưu số tiền vào localStorage để trang checkout.html lấy ra dùng
    localStorage.setItem("pendingTotalPrice", cartTotalPrice.textContent);

    // Chuyển hướng sang trang thanh toán
    window.location.href = "checkout.html";
  });

  const sidebarLinks = document.querySelectorAll(".sidebar-item a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      sidebarLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      const cat = link.getAttribute("data-category");
      renderProducts(
        cat === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat),
      );
    });
  });
}

document.addEventListener("DOMContentLoaded", initApp);
