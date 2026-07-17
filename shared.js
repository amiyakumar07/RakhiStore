// Shared E-commerce State Management for RakhiStore

// Product Catalog
const PRODUCTS = [
  {
    id: "luminous-gold",
    name: "Luminous Gold Rakhi",
    price: 1299,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRMbTvdZA7pdLm1iVnL8bWfdlt5I_t6DDq_MiinxeznmyfOGTv8vwk9pxUv92zjwd1muEApFsIOcFsUGP_PR1WzB8jgkW4kknYGsLnJlUH2jekBpH0iiDsFHEmaW4SJd_RBCpINsYNb9eDjx532rSAqe4kckGlla33YEsAAezr25a6EBnN2bBA_vK-FgAaDeo67jDTZHB8UxDtUDRkgTaS2ea9Y4l5g5YtWb3NZJymU-T5h65FJOAYM4jrc5NizRgD35ZiM-C-B_c",
    description: "Handcrafted with a centerpiece made of a polished gold disc and a single pearl, tied with a vibrant red silk thread. Perfect combination of modern elegance and rich cultural heritage.",
    category: "Designer",
    rating: "4.9",
    reviews: "248",
    badge: "Best Seller"
  },
  {
    id: "silver-om",
    name: "Sterling Silver OM Rakhi",
    price: 2499,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYm3Dw5xHLtera8TFkXS65lHIszm7RCwQK96dcMUgR_jFsm_ThIWpTJV8uyhOlUn1ttRHfEOfn4GSUFt6n84MXr7M-vEUVXBuJJIrxernKh2zjM6UgH2PlApd-_kKmz-otiK9TNGDLA93AuptNQxYrC8zfvFy9Q7bRTy5mLj8V_ybr1EeTZ16YZoenSTfkm1winv5CnvPFLhIPL0XZOdargCFQI9EBnNJWc4GXkot8mJ3wNMuPvdVfb9KOmoia7Ax5rS0idAUzuKE",
    description: "A designer spiritual Rakhi featuring a small silver OM pendant as the central motif, flanked by dark blue premium beads and high-quality thread.",
    category: "Pure Silver",
    rating: "5.0",
    reviews: "94",
    badge: "Limited Edition"
  },
  {
    id: "royal-zari",
    name: "Royal Zari Rakhi",
    price: 2450,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6fec4WnaEg_mOg59znG8mbBQmHIvYqbPwye_W1A-AU4FNnTLmo_kxGYozohiOM08vhVYmyj3StQUKfgqNeRXVRtQFPILVT5Xga5FJFDC5l7cw0KyDrJB4HK9XcvnBJcf6CBpR5F6PvNWnzrMgDWt0ypZqS1laU6FcsCpZejqPtKy5f5DhGY3UsQt3ua4VI5CV6MU-GIfOobVyg2xQzPzmNLnvalkSSoOf8uttKT5UjNu9fmAVPqvnEpRuCOCM5FsckIuUeR4gFx4",
    description: "Close-up macro shot of a handcrafted premium silk Rakhi with intricate gold zari work and a central semi-precious stone. Designed to represent the absolute peak of traditional craftsmanship.",
    category: "Traditional",
    rating: "4.8",
    reviews: "150",
    badge: "Classic"
  },
  {
    id: "sweet-box",
    name: "Heritage Sweet Box",
    price: 3200,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDWc81b1pYQzGLHTnMu9r-Q-aJGbJobe7ldgKp2Cu7FykZIVMjdbIIEKUfTbnZZ02Eb4N_S0s84B4drvvzVf04ib4Ga8n7yEqKCLxeZbSWLCiQB_ynQa2UOCspHmYb_95dWK1aKReYPf1zW1rh59bB6S7lC4tbJxRoBWUb4wuVc4md_n-JsvDjOitQRYtgXh9aCm9aG2-CgiceYD7BlyB6QSMw7oCcv2XEMkYj0X8z104noGIbhg6q_SXj21X1nprk9qUqfFGrERqA",
    description: "A luxurious festive gift hamper containing an assortment of gourmet Indian sweets and dried fruits in designer glass jars. Beautifully sealed with satin ribbons.",
    category: "Sweets",
    rating: "4.7",
    reviews: "80",
    badge: "Best Seller"
  },
  {
    id: "heritage-silver",
    name: "The Heritage Silver Filigree",
    price: 4250,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8GgoTAqGz32fwuYXlP_cbA30MZEmcFNlKhMz-qN65CK7D4H2_QdPHOMs8MM5Oxf8Qx_xEVY4nBFlYcwfNNXf4WPp0ksbygNbJ9BwTmUXlaArI6WsgEZWlfbaSBzN88ns6GfnzLMKPeian9VsJ0GLx-EI_PA9XnCxFBoHaHV3KH-tD-PR72x7Zjhx5usn7QSThgHJsu_HwTGC26pGAD03abNOFo4LNlDNKISGPRCwd9139Bc6AFSWJh2vMv6JxZAD4LjNO9r0Rcp8",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuBKXCarAKL5amVfKOy1YzfCK81J2625QGStfthhhwx9yWF3FA71CbgpZ_GnYl2jSfHGZEOS5GVaJP-L-sp3uPUBo67Fw8e8UDM074kz-p0cAwu_cNvuKlCiLXTatsuiMgE6XwaXyiYppdfWRHKigyiiKVMWGkylHwogEvu7cL1W3wp0K099iaoWZtL3LZnRRJNR2MNfHvFkyTK6xZxa4cNNLYVzJOXCl-M0zBGioDCNKQJSHPNX0s2yto7oPARbY-WmAc2t_58ncPE",
    description: "Pure 925 Sterling Silver with Hand-spun Mulberry Silk. Meticulously handcrafted by master artisans using ancient silver filigree patterns.",
    category: "Pure Silver",
    rating: "5.0",
    reviews: "48",
    badge: "Limited Edition"
  },
  {
    id: "royal-saffron",
    name: "Royal Saffron Gold Bloom",
    price: 2890,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYsZJ0mouu0h9dpIn4GN1ZA88ApGVehHRjSKTwbeRv9VN5PLiehfitz6kUCtJws_IfRgJ6ryVQC2NNE8GNvpFpViIwXCuJv9aRbgXtweJ1LhAa78bJKg66t7AWoakoxZkef_Rs7tjimrXTD6_IFGAfJ0wpmA9Gqk_5fJ6qXnKhnFWNUa9hoS9fou0oxN9mYAt-6vreBG641S9i2DHHaCeAK0rQ_3tlLRmmexkBnf43dXDbWPkOuJBcSQNhAv96JZ1SYlHo_gG69Xw",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA6g9_WJ9OsZ2s4CMlQ0EzFZODfhiC8GvNIEp7sK22_4hU93y0uDazH6-KjtrmpjRUbunRrbeAScvf5ieQY_eRj4WTxMCupWajZ5N2UDBUMMLVpIQvvnz8_PKKCdla0nI0Ws8ZUveizAZVN4RcvuYxXPltqxygfzO09ceF91GuJabLjr7ZdQtt-F1kmx1P4OQSnv4BADDUNpKJJpSNTuDES2mv70YGjlDgjdjoZ24Iaz4OdyfyjI2FV99Q1OY2P9NPX2aHyrI9yp8",
    description: "24K Gold Plated centerpiece with Hand-painted Meenakari Enamel. Features vibrant saffron and maroon hues representing prosperity and joy.",
    category: "Designer",
    rating: "4.9",
    reviews: "124",
    badge: "Best Seller"
  },
  {
    id: "pearl-aura",
    name: "Minimalist Pearl Aura",
    price: 1950,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9PxIk_h6StrfYLNnE8N_Jqr-JJm4VYIrwQCZ2VSfrQb88XTXziSSB2jzQUCzCa-EN0xddE5UO1KV2E1kRI6YB27hJX_R2n3iRerhR2kYXcW-sHe4O1_9OCEkEG_gKgz5-JewEc8cFek5ylmr3V4VLkb3zBb_1_Sg0AYvqWxROYGKkcg7WiMgPUFwo2_IEXdhZKmr6_LBNNjOnZnBiTx8FAwKvI7-8O-feGlB4TOyja17uR78Dw6hBKU0GvUfooWBF8XTRE111YaA",
    image2: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEYL_QlnW50sode1kIkFDc868UFv92G8JOMN6HNZOdFXJIPiABvrhMn_yVm6vIBLPQ4VTzK7FqFj6MAXYGzjBWYy82TyAQ7M6fMdAyi2HZuo_7WtPjLS9hSBoFI_x6-ATPCsnOasewXAaEA9oZn0WJqKbI63oaO27twJtxwN6hbTurvrpe7mD3KT7azbI0sxIhhStYYQbXfuFvU6YtAIalPfsBY0g-huQgUyFLdq0eVG9dF3RotpDR1pi041Lhq5EhpFCMBFda524",
    description: "Genuine Freshwater Pearl on Tuscan Silk Ribbon. Elegant simplicity combined with refined luxury design aesthetics.",
    category: "Personalized",
    rating: "4.8",
    reviews: "12",
    badge: "New Arrival"
  },
  {
    id: "royal-kundan",
    name: "Royal Kudan Hamper",
    price: 3850,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6cd4kmOIKmKjI423MwQGpMf6iNv-oWKt4EF7hysfcxJB_N3k57nAh40q8JQTjJOTZvKlL3D1x_8eCwpaD0jtzBkbWWXEYSbASWHC940vHVt9n8vQYZfysocROrXS7n40uAt98_PiGMsz1fix3xhgUN6L7xSgM2IA7MmoaMxrziBiLqA_Htn2YnsSYj6HCGRRZDdPtdVW4agUMscVzvKvnFrdQOINSWzDeeI4DsBGML9_vgcZ3iLRkCrd6JqDFeftD-A1uCvuDMr0",
    description: "A luxury gift box opened to reveal a beautiful Kundan work Rakhi alongside jars of gourmet almonds and pistachios. Elegant gold foiled packaging.",
    category: "Gift Hampers",
    rating: "4.8",
    reviews: "150",
    badge: "New Arrival"
  },
  {
    id: "custom-nameplate",
    name: "Custom Nameplate Rakhi",
    price: 1599,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKWfkpMG8_kjfV0gZO2s3Y3K9tTWjGiXJZkL3PCzGSfcBLC1dzt4Pfbhvl5ns-8Xs2ofFpmX7Ar2979b60FgyqLLi9H9QnYhZaqPq3ZMyXWp2Gu1z1MLf3LiHrtVDfgiBAhRWTg0VXgk6Ms3no9DKxKWB21zMlk_i1790Av660u_xBXhT8no6JdEsUqg0xOtmgbwFMhCeFtXD-KrnMH4YPjukuX6GUpi1p3YaBN863H3cQwHhwiNXjp0yqSGjsALGXgeBG8bRAP7o",
    description: "A minimalist personalized Rakhi with a small rectangular gold-plated bar that can be engraved with a name. Modern, sleek design.",
    category: "Personalized",
    rating: "4.7",
    reviews: "64",
    badge: "Personalized"
  }
];

// Helper Functions
function getCart() {
  const cart = localStorage.getItem("rakhi_cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("rakhi_cart", JSON.stringify(cart));
  updateCartBadge();
  // Dispatch dynamic event for page sync
  window.dispatchEvent(new CustomEvent("cartUpdated", { detail: cart }));
}

function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  let cart = getCart();
  const existingItemIndex = cart.findIndex(item => item.id === productId);
  
  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      badge: product.badge,
      description: product.description,
      quantity: quantity
    });
  }
  
  saveCart(cart);
  showToast(`Added ${quantity} x ${product.name} to cart!`);
}

function updateCartBadge() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  // Find all badge elements
  // Standard header cart badge is inside the cart button
  document.querySelectorAll('header button[onclick*="shopping-cart.html"] span.absolute, button[onclick*="shopping-cart"] span.absolute').forEach(badge => {
    badge.textContent = count;
    if (count === 0) {
      badge.classList.add("hidden");
    } else {
      badge.classList.remove("hidden");
    }
  });

  // Supporting fallback selectors for different page navbar markup:
  document.querySelectorAll('.cart-count-badge').forEach(badge => {
    badge.textContent = count;
    if (count === 0) {
      badge.classList.add("hidden");
    } else {
      badge.classList.remove("hidden");
    }
  });
}

function showToast(message) {
  // Check if toast element exists, if not create it
  let toast = document.getElementById("global-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "global-toast";
    toast.className = "fixed bottom-10 left-1/2 -translate-x-1/2 bg-on-surface text-surface py-3.5 px-6 rounded-full shadow-2xl flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-500 z-[9999]";
    toast.innerHTML = `
      <span class="material-symbols-outlined text-secondary-fixed">check_circle</span>
      <span class="font-body-md message-text"></span>
    `;
    document.body.appendChild(toast);
  }
  
  toast.querySelector(".message-text").textContent = message;
  
  // Animate in
  toast.classList.remove("translate-y-20", "opacity-0");
  toast.classList.add("translate-y-0", "opacity-100");
  
  setTimeout(() => {
    toast.classList.add("translate-y-20", "opacity-0");
    toast.classList.remove("translate-y-0", "opacity-100");
  }, 2500);
}

// User Authentication state
function getCurrentUser() {
  return localStorage.getItem("rakhi_user");
}

function setCurrentUser(email) {
  localStorage.setItem("rakhi_user", email);
  updateProfileNav();
}

function logoutUser() {
  localStorage.removeItem("rakhi_user");
  window.location.href = "index.html";
}

function updateProfileNav() {
  const user = getCurrentUser();
  document.querySelectorAll('header button[onclick*="user-dashboard.html"], button[onclick*="user-dashboard"]').forEach(btn => {
    if (!user) {
      btn.setAttribute("onclick", "window.location.href='login-signup.html'");
    } else {
      btn.setAttribute("onclick", "window.location.href='user-dashboard.html'");
    }
  });
}

// Initialization on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  updateProfileNav();
  
  // Setup nice CSS styles for global toast if tailwind isn't handling it fully
  const style = document.createElement("style");
  style.innerHTML = `
    #global-toast {
      background-color: #1b1b1c;
      color: #fcf9f8;
    }
  `;
  document.head.appendChild(style);

  // Bind Homepage / Product Details product cards
  document.querySelectorAll(".group").forEach(card => {
    const titleEl = card.querySelector("h4");
    if (!titleEl) return;
    const title = titleEl.textContent.trim();
    const product = PRODUCTS.find(p => p.name.toLowerCase() === title.toLowerCase());
    if (product) {
      card.style.cursor = "pointer";
      
      // Navigate on card click (excluding button/icon clicks)
      card.addEventListener("click", (e) => {
        if (e.target.closest("button") || e.target.closest(".material-symbols-outlined")) return;
        window.location.href = `product-details.html?id=${product.id}`;
      });
      
      // Connect Quick Add button
      card.querySelectorAll("button").forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === "quick add") {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            addToCart(product.id, 1);
          });
        }
      });
    }
  });

  // Bind Collection page product cards
  document.querySelectorAll(".product-card").forEach(card => {
    const titleEl = card.querySelector("h3");
    if (!titleEl) return;
    const title = titleEl.textContent.trim();
    const product = PRODUCTS.find(p => p.name.toLowerCase() === title.toLowerCase());
    if (product) {
      card.style.cursor = "pointer";
      
      // Click on card goes to details
      card.addEventListener("click", (e) => {
        if (e.target.closest("button") || e.target.closest(".material-symbols-outlined")) return;
        window.location.href = `product-details.html?id=${product.id}`;
      });
      
      // Click on Quick View button goes to details
      card.querySelectorAll("button").forEach(btn => {
        if (btn.textContent.trim().toLowerCase() === "quick view") {
          btn.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = `product-details.html?id=${product.id}`;
          });
        }
      });
    }
  });
});
