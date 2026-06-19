// ==========================================
// 1. DỮ LIỆU SẢN PHẨM (MÓN ĂN VẶT)
// ==========================================
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
      "Nem chua được bọc lớp bột chiên xù giòn rụm rùm rụm khi cắn vào, bên trong dẻo thơm, nóng hổi chấm tương ớt siêu vị.",
  },
  {
    id: 3,
    title: "Chân Gà Rút Xương Sả Tắc Ngâm",
    category: "an-vat",
    categoryName: "Món Ăn Vặt",
    originalPrice: 85000,
    salePrice: 75000,
    discount: "-11%",
    image:
      "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/thumkt/pasgo/chan-ga-sa-tac/chan-ga-rut-xuong-ngam-sa-tac.jpg",
    description:
      "Chân gà rút xương giòn sần sật thấm đẫm nước sốt sả tắc chua ngọt, thơm nức mùi lá chanh và ớt tươi băm.",
  },
  {
    id: 4,
    title: "Trà Thạch Vải Hạt Chia Mát Lạnh",
    category: "giai-nhiet",
    categoryName: "Đồ Uống Giải Nhiệt",
    originalPrice: null,
    salePrice: 28000,
    discount: "NEW",
    image:
      "https://eggyolk.vn/wp-content/uploads/2026/04/cach-lam-tra-vai-hat-chia.jpg",
    description:
      "Vị trà vải thanh ngọt thanh mát, topping thạch vải giòn dai kết hợp cùng hạt chia siêu bổ dưỡng giải nhiệt mùa hè.",
  },
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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

// ==========================================
// 2. KHỞI TẠO BIẾN TOÀN CỤC & TRẠNG THÁI
// ==========================================
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentSelectedProductId = null;
let currentCategoryFilter = "all"; // Mặc định hiển thị tất cả danh mục

// ==========================================
// 3. CÁC HÀM XỬ LÝ QUẢN LÝ GIAO DIỆN & GIỎ HÀNG
// ==========================================

// Hàm hiển thị danh sách sản phẩm (Có kết hợp Lọc Danh Mục + Tìm Kiếm từ khóa)
window.renderProducts = function () {
  const productGridContainer = document.getElementById("productGridContainer");
  const searchInput = document.getElementById("searchInput");
  if (!productGridContainer) return;
  productGridContainer.innerHTML = "";

  const keyword = searchInput ? searchInput.value.trim().toLowerCase() : "";

  // Thực hiện lọc kép: Đúng danh mục đồng thời chứa từ khóa tìm kiếm
  const filtered = PRODUCTS.filter((p) => {
    const matchesCategory =
      currentCategoryFilter === "all" || p.category === currentCategoryFilter;
    const matchesKeyword =
      p.title.toLowerCase().includes(keyword) ||
      p.description.toLowerCase().includes(keyword);
    return matchesCategory && matchesKeyword;
  });

  if (filtered.length === 0) {
    productGridContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--color-medium-gray); padding: 40px 0;">Không tìm thấy món ăn nào phù hợp với từ khóa của bạn...</p>`;
    return;
  }

  filtered.forEach((p) => {
    const discountBadge = p.discount
      ? `<span class="product-card-badge-sale">${p.discount}</span>`
      : "";
    const oldPriceSpan = p.originalPrice
      ? `<span class="old-price-cross">${p.originalPrice.toLocaleString("vi-VN")}đ</span>`
      : "";

    productGridContainer.innerHTML += `
      <div class="product-card-item">
        <div class="product-card-image-box" onclick="openDetailModal(${p.id})">
          ${discountBadge}
          <img src="${p.image}" alt="${p.title}" class="product-image">
        </div>
        <div class="product-card-info-box">
          <span class="product-card-tag">${p.categoryName}</span>
          <h4 class="product-title-text" onclick="openDetailModal(${p.id})">${p.title}</h4>
          <div class="product-card-price-row">
            ${oldPriceSpan}
            <span class="current-price-bold">${p.salePrice.toLocaleString("vi-VN")}đ</span>
          </div>
          <button class="btn-primary-cart" onclick="addToCart(${p.id})" style="width:100%; margin-top:10px;">THÊM VÀO GIỎ</button>
        </div>
      </div>
    `;
  });
};

// Hàm thêm món ăn vào giỏ hàng + Kèm hiệu ứng thông báo đẹp mắt
window.addToCart = function (id) {
  const product = PRODUCTS.find((p) => p.id === id);
  const existing = cart.find((c) => c.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  // Hiển thị hộp thông báo tự biến mất ở góc phải màn hình
  showToastNotification(`${product.title} đã được thêm vào giỏ hàng của bạn`);

  updateCartUI();
};

// Hàm bổ trợ tạo và hiển thị thông báo Toast trượt ra
function showToastNotification(message) {
  let toast = document.createElement("div");
  toast.textContent = "🎉 " + message;

  // Custom CSS trực tiếp cho khung thông báo vuông vức, nổi bật
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.backgroundColor = "#2b2121";
  toast.style.color = "white";
  toast.style.padding = "12px 24px";
  toast.style.border = "2px solid #8a1000";
  toast.style.zIndex = "9999";
  toast.style.fontWeight = "bold";
  toast.style.fontSize = "14px";

  document.body.appendChild(toast);

  // Tự động xóa thông báo sau 2.5 giây
  setTimeout(() => {
    toast.remove();
  }, 2500);
}

// Thay đổi số lượng tăng/giảm món trong giỏ hàng nhanh
window.changeQty = function (id, delta) {
  const item = cart.find((c) => c.id === id);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter((c) => c.id !== id);
    }
  }
  updateCartUI();
};

// Mở cửa sổ Popup Modal xem chi tiết món ăn vặt
window.openDetailModal = function (id) {
  const p = PRODUCTS.find((prod) => prod.id === id);
  currentSelectedProductId = id;

  document.getElementById("modalImage").src = p.image;
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalCategory").textContent = p.categoryName;
  document.getElementById("modalDescription").textContent = p.description;
  document.getElementById("modalCurrentPrice").textContent =
    p.salePrice.toLocaleString("vi-VN") + "đ";
  document.getElementById("modalOldPrice").textContent = p.originalPrice
    ? p.originalPrice.toLocaleString("vi-VN") + "đ"
    : "";

  const badge = document.getElementById("modalBadge");
  if (p.discount) {
    badge.textContent = p.discount;
    badge.style.display = "block";
  } else {
    badge.style.display = "none";
  }

  document.getElementById("productDetailModal").classList.add("active");
};

// Đóng cửa sổ Popup Modal chi tiết
window.closeModal = function () {
  document.getElementById("productDetailModal").classList.remove("active");
};

// Cập nhật giao diện danh sách giỏ hàng và lưu trữ vào LocalStorage
window.updateCartUI = function () {
  localStorage.setItem("cart", JSON.stringify(cart));
  const cartItemsList = document.getElementById("cartItemsList");
  if (!cartItemsList) return;
  cartItemsList.innerHTML = "";

  let total = 0;
  let totalCount = 0;

  cart.forEach((c) => {
    total += c.salePrice * c.quantity;
    totalCount += c.quantity;

    cartItemsList.innerHTML += `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px; padding-bottom:10px; border-bottom:1px solid #eee;">
        <div>
          <h5 style="margin:0; font-size:14px;">${c.title}</h5>
          <span style="font-size:12px; color:gray;">${c.salePrice.toLocaleString("vi-VN")}đ x ${c.quantity}</span>
        </div>
        <div style="display:flex; gap:5px;">
          <button onclick="changeQty(${c.id}, -1)" style="padding:2px 8px;">-</button>
          <button onclick="changeQty(${c.id}, 1)" style="padding:2px 8px;">+</button>
        </div>
      </div>
    `;
  });

  document.getElementById("cartCountTop").textContent = totalCount;
  document.getElementById("cartTotalPrice").textContent =
    total.toLocaleString("vi-VN") + "đ";
};

// ==========================================
// 4. LẮNG NGHE CÁC SỰ KIỆN KHI TRANG WEB SẴN SÀNG
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  // Bắt sự kiện gõ phím vào ô tìm kiếm sản phẩm
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      renderProducts();
    });
  }

  // Đóng mở Giỏ hàng Sidebar Slide
  document.getElementById("cartToggleBtn").addEventListener("click", () => {
    document.getElementById("cartSidebar").classList.add("active");
    document.getElementById("cartOverlay").classList.add("active");
  });

  const closeCart = () => {
    document.getElementById("cartSidebar").classList.remove("active");
    document.getElementById("cartOverlay").classList.remove("active");
  };

  document.getElementById("cartCloseBtn").addEventListener("click", closeCart);
  document.getElementById("cartOverlay").addEventListener("click", closeCart);
  document
    .getElementById("modalCloseBtn")
    .addEventListener("click", closeModal);

  // Nút thêm giỏ hàng từ Popup Modal chi tiết
  document.getElementById("modalAddToCartBtn").addEventListener("click", () => {
    if (currentSelectedProductId) {
      addToCart(currentSelectedProductId);
      closeModal();
    }
  });

  // Nút Mua ngay từ Popup Modal chi tiết
  document.getElementById("modalBuyNowBtn").addEventListener("click", () => {
    if (currentSelectedProductId) {
      addToCart(currentSelectedProductId);
      closeModal();
      window.location.href = "checkout.html";
    }
  });

  // Nút Tiến hành thanh toán từ giỏ hàng
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (cart.length === 0) {
      alert("Giỏ hàng đang trống, chọn vài món ăn vặt đã bạn ơi!");
      return;
    }
    localStorage.setItem(
      "pendingTotalPrice",
      document.getElementById("cartTotalPrice").textContent,
    );
    window.location.href = "checkout.html";
  });

  // Sự kiện Click lọc danh mục ở thanh Sidebar
  document.querySelectorAll(".category-btn").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelectorAll(".category-btn")
        .forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      currentCategoryFilter = link.getAttribute("data-category");
      renderProducts(); // Render lại danh sách sau khi đổi danh mục
    });
  });

  // Kiểm tra hiển thị trạng thái tài khoản Đăng Nhập / Đăng Xuất
  const userMenuLink = document.getElementById("userMenuLink");
  if (userMenuLink) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      userMenuLink.textContent = `Hi, ${currentUser.username} (Thoát)`;
      userMenuLink.href = "#";
      userMenuLink.addEventListener("click", (e) => {
        e.preventDefault();
        if (confirm("Bạn có chắc chắn muốn đăng xuất tài khoản không?")) {
          localStorage.removeItem("currentUser");
          window.location.reload();
        }
      });
    }
  }

  // Khởi chạy kết xuất dữ liệu ban đầu khi vừa tải trang xong
  renderProducts();
  updateCartUI();
});
