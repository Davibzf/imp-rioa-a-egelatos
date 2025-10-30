// Product Data
const productsData = {
  acai: [
    {
      id: 1,
      title: "AÇAÍ 210 GRAMAS",
      description: "Escolha até 2 opções entre Açaí e Cremes, 3 adicionais e 1 cobertura",
      price: 10.0,
      category: "acai",
      options: {
        "acai-cremes": { max: 2 },
        adicionais: { max: 3 },
        coberturas: { max: 1 },
        extra: { max: 2 },
      },
    },
    {
      id: 2,
      title: "AÇAÍ 290 GRAMAS",
      description: "Escolha até 2 opções entre Açaí e Cremes, 4 adicionais e 1 cobertura",
      price: 13.0,
      category: "acai",
      options: {
        "acai-cremes": { max: 2 },
        adicionais: { max: 4 },
        coberturas: { max: 1 },
        extra: { max: 2 },
      },
    },
    {
      id: 3,
      title: "AÇAÍ 384 GRAMAS",
      description: "Escolha até 3 opções entre Açaí e Cremes, 5 adicionais e 2 coberturas",
      price: 17.0,
      category: "acai",
      options: {
        "acai-cremes": { max: 3 },
        adicionais: { max: 5 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
    {
      id: 4,
      title: "AÇAÍ 500 GRAMAS",
      description: "Escolha até 4 opções entre Açaí e Cremes, 6 adicionais e 2 coberturas",
      price: 21.99,
      category: "acai",
      options: {
        "acai-cremes": { max: 4 },
        adicionais: { max: 6 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
    {
      id: 5,
      title: "AÇAÍ 689 GRAMAS",
      description: "Escolha até 5 opções entre Açaí e Cremes, 6 adicionais e 2 coberturas",
      price: 30.0,
      category: "acai",
      options: {
        "acai-cremes": { max: 5 },
        adicionais: { max: 6 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
    {
      id: 6,
      title: "AÇAÍ 1 KG",
      description: "Escolha até 8 opções entre Açaí e Cremes, 8 adicionais e 2 coberturas",
      price: 43.99,
      category: "acai",
      options: {
        "acai-cremes": { max: 8 },
        adicionais: { max: 8 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
  ],
  gelatos: [
    {
      id: 7,
      title: "GELATO 210 GRAMAS",
      description: "Escolha até 2 opções entre Açaí e Cremes, 3 adicionais e 1 cobertura",
      price: 10.0,
      category: "gelatos",
      options: {
        "acai-cremes": { max: 2 },
        adicionais: { max: 3 },
        coberturas: { max: 1 },
        extra: { max: 2 },
      },
    },
    {
      id: 8,
      title: "GELATO 290 GRAMAS",
      description: "Escolha até 2 opções entre Açaí e Cremes, 4 adicionais e 1 cobertura",
      price: 13.0,
      category: "gelatos",
      options: {
        "acai-cremes": { max: 2 },
        adicionais: { max: 4 },
        coberturas: { max: 1 },
        extra: { max: 2 },
      },
    },
    {
      id: 9,
      title: "GELATO 384 GRAMAS",
      description: "Escolha até 3 opções entre Açaí e Cremes, 5 adicionais e 2 coberturas",
      price: 17.0,
      category: "gelatos",
      options: {
        "acai-cremes": { max: 3 },
        adicionais: { max: 5 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
    {
      id: 10,
      title: "GELATO 500 GRAMAS",
      description: "Escolha até 4 opções entre Açaí e Cremes, 6 adicionais e 2 coberturas",
      price: 21.99,
      category: "gelatos",
      options: {
        "acai-cremes": { max: 4 },
        adicionais: { max: 6 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
    {
      id: 11,
      title: "GELATO 689 GRAMAS",
      description: "Escolha até 5 opções entre Açaí e Cremes, 6 adicionais e 2 coberturas",
      price: 29.99,
      category: "gelatos",
      options: {
        "acai-cremes": { max: 5 },
        adicionais: { max: 6 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
    {
      id: 12,
      title: "GELATO 1 KG",
      description: "Escolha até 8 opções entre Açaí e Cremes, 8 adicionais e 2 coberturas",
      price: 43.99,
      category: "gelatos",
      options: {
        "acai-cremes": { max: 8 },
        adicionais: { max: 8 },
        coberturas: { max: 2 },
        extra: { max: 2 },
      },
    },
  ],
  bebidas: [
    { id: 13, title: "Água com gás", description: "Refrescante água com gás", price: 3.0, category: "bebidas" },
    { id: 14, title: "Fanta laranja lata", description: "350 ml", price: 5.0, category: "bebidas" },
    { id: 15, title: "Guaraná Antártica lata", description: "350 ml", price: 5.0, category: "bebidas" },
    { id: 16, title: "Coca lata zero", description: "350 ml", price: 5.0, category: "bebidas" },
    { id: 17, title: "Coca lata", description: "350 ml", price: 5.0, category: "bebidas" },
    { id: 18, title: "ÁGUA 500 ML", description: "Água mineral 500ml", price: 3.0, category: "bebidas" },
  ],
};

const optionsData = {
  "acai-cremes": {
    title: "AÇAÍ E CREMES",
    items: [
      { id: 1, name: "AÇAÍ", price: 0 },
      { id: 2, name: "CREME CASTANHA", price: 0 },
      { id: 3, name: "CREME DE AVELÃ", price: 0 },
      { id: 4, name: "CREME DE MARACUJÁ", price: 0 },
      { id: 5, name: "CREME DE MORANGO", price: 0 },
      { id: 6, name: "CREME DE NINHO", price: 0 },
      { id: 7, name: "CREME DE OREO", price: 0 },
      { id: 8, name: "CREME DE PACOQUITA", price: 0 },
      { id: 9, name: "CUPUAÇU", price: 0 },
      { id: 10, name: "DELÍCIA DE ABACAXI", price: 0 },
      { id: 11, name: "NINHO COM MORANGO", price: 0 },
    ],
  },
  adicionais: {
    title: "ADICIONAIS",
    items: [
      { id: 12, name: "LEITE EM PÓ", price: 1.0 },
      { id: 13, name: "AMENDOIM", price: 1.5 },
      { id: 14, name: "AMENDOIM CONFEITADO", price: 1.5 },
      { id: 15, name: "AMENDOIM CROCANTE", price: 1.5 },
      { id: 16, name: "AVEIA", price: 1.0 },
      { id: 17, name: "BALAS FINNIS", price: 1.5 },
      { id: 18, name: "BANANA", price: 1.5 },
      { id: 19, name: "CALDA DE AMEIXA", price: 1.5 },
      { id: 20, name: "CALDA DE MORANGO", price: 1.5 },
      { id: 21, name: "CANUDINHO", price: 1.0 },
      { id: 22, name: "CASTANHA", price: 2.5 },
      { id: 23, name: "CASTANHA CARAMELIZADA", price: 2.5 },
      { id: 24, name: "CASTANHA TRITURADA", price: 2.5 },
      { id: 25, name: "CEREAL BAAL", price: 1.5 },
      { id: 26, name: "CEREJA", price: 2.0 },
      { id: 27, name: "CHOCOBOOL", price: 1.5 },
      { id: 28, name: "CREME COOKIES", price: 1.5 },
      { id: 29, name: "CREME COOKIES CHOCOLATE BRANCO", price: 1.5 },
      { id: 30, name: "CREME COOKIES CHOCOLATE PRETO", price: 1.5 },
      { id: 31, name: "DOCE DE LEITE", price: 1.5 },
      { id: 32, name: "FARINHA LACTEA", price: 1.0 },
      { id: 33, name: "FLOCOS DE ARROZ", price: 1.0 },
      { id: 34, name: "FLOCOS DE TAPIOCA", price: 1.0 },
      { id: 35, name: "GANACHE", price: 1.5 },
      { id: 36, name: "GOTAS DE CHOCOLATE", price: 1.5 },
      { id: 37, name: "GRANOLA", price: 1.0 },
      { id: 38, name: "GRANULADO COLORIDO", price: 1.0 },
      { id: 39, name: "GRANULADO DE CHOCOLATE", price: 1.0 },
      { id: 40, name: "JUJUBA", price: 1.5 },
      { id: 41, name: "KIWI", price: 2.0 },
      { id: 42, name: "LEITE CONDENSADO", price: 1.5 },
      { id: 43, name: "MARSHMALLOW", price: 1.5 },
      { id: 44, name: "MINI CEREAL COLORIDO", price: 1.5 },
      { id: 45, name: "MMS GRANDE", price: 2.0 },
      { id: 46, name: "MMS PEQUENO", price: 1.5 },
      { id: 47, name: "MORANGO", price: 2.0 },
      { id: 48, name: "OVOMALTINE", price: 1.5 },
      { id: 49, name: "PAÇOQUITA", price: 1.5 },
      { id: 50, name: "SUCRILHO", price: 1.0 },
      { id: 51, name: "UVA", price: 2.0 },
    ],
  },
  coberturas: {
    title: "COBERTURAS",
    items: [
      { id: 52, name: "CARAMELO", price: 1.5 },
      { id: 53, name: "CEREJA", price: 1.5 },
      { id: 54, name: "CHOCOLATE", price: 1.5 },
      { id: 55, name: "DOCE DE LEITE", price: 1.5 },
      { id: 56, name: "KIWI", price: 1.5 },
      { id: 57, name: "MENTA", price: 1.5 },
      { id: 58, name: "MORANGO", price: 1.5 },
      { id: 59, name: "TUTTI FRUTTI", price: 1.5 },
    ],
  },
  extra: {
    title: "EXTRA",
    items: [
      { id: 60, name: "CASQUINHA", price: 1.0 },
      { id: 61, name: "SERENATA DO AMOR", price: 2.0 },
    ],
  },
};

// Checkout Data
const deliveryFees = {
  "aco_cearense": 9.00,
  "bom_jesus": 4.00,
  "cabatan": 6.00,
  "capuan": 3.00,
  "coite_pedeiras": 10.00,
  "genipabu": 5.00,
  "jardim_do_amor": 4.00,
  "pabussu": 5.00,
  "padre_julio_maria": 4.00,
  "palmirim": 4.00,
  "planalto_caucaia": 4.00,
  "retomada": 4.00
};

// =============================================
// SISTEMA AUTOMÁTICO SEM REDIRECIONAMENTO
// =============================================

// Configuração - SEU NÚMERO JÁ ESTÁ AQUI
const CONFIG = {
  WHATSAPP_NUMBER: "558591937183", // Número fornecido: 55 85 9193-7183
  STORE_NAME: "Império Açaí & Gelatos"
};

// State
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let currentProduct = null;
let currentStep = 1;
let selectedOptions = {
  step1: [],
  step2: [],
  step3: [],
  step4: [],
};
let observations = "";
let deliveryFee = 0;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartCount();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  // Search
  document.getElementById("searchInput").addEventListener("input", (e) => {
    renderProducts(e.target.value);
  });

  // Category Navigation
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
      e.target.classList.add("active");

      const category = e.target.dataset.category;
      if (category === "tudo") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(category).scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Modals
  document.getElementById("cartBtn").addEventListener("click", openCartModal);
  document.getElementById("storeInfoBtn").addEventListener("click", openStoreInfoModal);
  document.getElementById("privacyBtn").addEventListener("click", openPrivacyModal);
  document.getElementById("termsBtn").addEventListener("click", openTermsModal);

  // Cart Modal
  document.getElementById("closeCustomizeModal").addEventListener("click", closeCustomizeModal);
  document.getElementById("closeCartModal").addEventListener("click", closeCartModal);
  document.getElementById("closeStoreInfoModal").addEventListener("click", closeStoreInfoModal);
  document.getElementById("closePrivacyModal").addEventListener("click", closePrivacyModal);
  document.getElementById("closeTermsModal").addEventListener("click", closeTermsModal);

  document.getElementById("continueShoppingBtn").addEventListener("click", closeCartModal);
  document.getElementById("checkoutBtn").addEventListener("click", openCheckoutModal);

  // Customize Modal
  document.getElementById("prevStepBtn").addEventListener("click", prevStep);
  document.getElementById("nextStepBtn").addEventListener("click", nextStep);
  document.getElementById("addToCartBtn").addEventListener("click", addToCartFromModal);

  // Checkout Modal
  document.getElementById("closeCheckoutModal").addEventListener("click", closeCheckoutModal);
  document.getElementById("backToCartBtn").addEventListener("click", backToCartFromCheckout);
  document.getElementById("submitOrderBtn").addEventListener("click", handleSubmitOrder);

  // Confirmation Modal
  document.getElementById("closeConfirmationModal").addEventListener("click", closeConfirmationModal);
  document.getElementById("newOrderBtn").addEventListener("click", handleNewOrder);

  // Checkout Form Events
  document.querySelectorAll('input[name="orderType"]').forEach(radio => {
    radio.addEventListener('change', handleOrderTypeChange);
  });
  
  document.getElementById('neighborhood').addEventListener('change', handleNeighborhoodChange);
  document.getElementById('customerPhone').addEventListener('input', formatPhone);
  document.getElementById('customerBirthday').addEventListener('input', formatBirthday);

  // Close modals on background click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });
  });

  // Painel Admin Simplificado
  document.getElementById('floatingAdminBtn').addEventListener('click', openSimpleAdmin);
}

// Render Products
function renderProducts(searchTerm = "") {
  const categories = ["acai", "gelatos", "bebidas"];

  categories.forEach((category) => {
    const grid = document.getElementById(`${category}Grid`);
    if (!grid) return;
    
    const products = productsData[category].filter((product) => {
      if (!searchTerm) return true;
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    grid.innerHTML = products
      .map(
        (product) => `
            <div class="product-card">
                <div class="product-image">${category === 'bebidas' ? '🥤' : '🍨'}</div>
                <div class="product-body">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-footer">
                        <div class="product-price">R$ ${product.price.toFixed(2)}</div>
                        <button class="btn btn-primary" onclick="openCustomizeModal(${product.id})">
                            Adicionar
                        </button>
                    </div>
                </div>
            </div>
        `
      )
      .join("");
  });
}

// Customize Modal
function openCustomizeModal(productId) {
  const allProducts = [...productsData.acai, ...productsData.gelatos, ...productsData.bebidas];
  currentProduct = allProducts.find((p) => p.id === productId);

  if (!currentProduct) return;

  // Simple product without customization (bebidas)
  if (!currentProduct.options) {
    addToCart({
      id: Date.now(),
      product: currentProduct,
      options: { step1: [], step2: [], step3: [], step4: [] },
      observations: "",
      totalPrice: currentProduct.price,
    });
    showNotification(`Adicionado ao carrinho: ${currentProduct.title} - R$ ${currentProduct.price.toFixed(2)}`);
    return;
  }

  currentStep = 1;
  selectedOptions = { step1: [], step2: [], step3: [], step4: [] };
  observations = "";

  document.getElementById("modalProductTitle").textContent = currentProduct.title;
  document.getElementById("modalProductDescription").textContent = currentProduct.description;

  updateStepIndicators();
  renderStep();

  document.getElementById("customizeModal").classList.add("active");
}

function closeCustomizeModal() {
  document.getElementById("customizeModal").classList.remove("active");
  currentProduct = null;
}

function updateStepIndicators() {
  document.querySelectorAll(".step-indicator").forEach((indicator, index) => {
    if (index + 1 === currentStep) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}

function renderStep() {
  const modalBody = document.getElementById("customizeModalBody");
  if (!modalBody) return;
  
  const stepKeys = ["acai-cremes", "adicionais", "coberturas", "extra"];

  if (currentStep <= 4) {
    const stepKey = stepKeys[currentStep - 1];
    const optionGroup = optionsData[stepKey];
    const maxSelections = currentProduct.options[stepKey].max;
    const selectedStep = selectedOptions[`step${currentStep}`];

    modalBody.innerHTML = `
            <div class="step-content">
                <h3>${optionGroup.title}</h3>
                <p>Escolha até ${maxSelections} opções</p>
                <div class="options-grid">
                    ${optionGroup.items
                      .map((item) => {
                        const selected = selectedStep.find((s) => s.id === item.id);
                        const quantity = selected ? selected.quantity : 0;

                        return `
                            <div class="option-item ${quantity > 0 ? "selected" : ""}">
                                <div class="option-info">
                                    <div class="option-name">${item.name}</div>
                                    <div class="option-price">+ R$ ${item.price.toFixed(2)}</div>
                                </div>
                                <div class="option-controls">
                                    <button class="qty-btn" onclick="decreaseQuantity(${item.id})">-</button>
                                    <span class="qty-display">${quantity}</span>
                                    <button class="qty-btn" onclick="increaseQuantity(${item.id}, ${item.price}, ${maxSelections})">+</button>
                                </div>
                            </div>
                        `;
                      })
                      .join("")}
                </div>
            </div>
        `;

    updateSelectionCount();
  } else {
    // Step 5: Observations and Summary
    modalBody.innerHTML = `
            <div class="observations-section">
                <h3>Observações</h3>
                <p>Alguma observação sobre o seu pedido?</p>
                <textarea id="observationsInput" rows="4" placeholder="Ex: Sem açúcar, entrega sem talheres, etc.">${observations}</textarea>
            </div>
            <div class="order-summary">
                <h3>Resumo do Pedido</h3>
                ${generateOrderSummary()}
            </div>
        `;

    const observationsInput = document.getElementById("observationsInput");
    if (observationsInput) {
      observationsInput.addEventListener("input", (e) => {
        observations = e.target.value;
      });
    }
  }

  // Update buttons
  const prevBtn = document.getElementById("prevStepBtn");
  const nextBtn = document.getElementById("nextStepBtn");
  const addBtn = document.getElementById("addToCartBtn");
  
  if (prevBtn) prevBtn.style.display = currentStep > 1 ? "block" : "none";
  if (nextBtn) nextBtn.style.display = currentStep < 5 ? "block" : "none";
  if (addBtn) addBtn.style.display = currentStep === 5 ? "block" : "none";
}

function increaseQuantity(id, price, maxSelections) {
  const stepKey = `step${currentStep}`;
  const currentTotal = selectedOptions[stepKey].reduce((sum, opt) => sum + opt.quantity, 0);

  if (currentTotal >= maxSelections) {
    showNotification(`Você já selecionou o máximo de ${maxSelections} opções para esta etapa.`);
    return;
  }

  const existing = selectedOptions[stepKey].find((opt) => opt.id === id);
  if (existing) {
    existing.quantity++;
  } else {
    const item = findOptionItem(id);
    if (item) {
      selectedOptions[stepKey].push({ 
        id: item.id, 
        name: item.name, 
        price: item.price, 
        quantity: 1 
      });
    }
  }

  renderStep();
}

function decreaseQuantity(id) {
  const stepKey = `step${currentStep}`;
  const existing = selectedOptions[stepKey].find((opt) => opt.id === id);

  if (existing) {
    existing.quantity--;
    if (existing.quantity === 0) {
      selectedOptions[stepKey] = selectedOptions[stepKey].filter((opt) => opt.id !== id);
    }
  }

  renderStep();
}

function findOptionItem(id) {
  for (const category in optionsData) {
    const item = optionsData[category].items.find(item => item.id === id);
    if (item) return item;
  }
  return null;
}

function updateSelectionCount() {
  const stepKey = `step${currentStep}`;
  const maxSelections = currentProduct.options[["acai-cremes", "adicionais", "coberturas", "extra"][currentStep - 1]].max;
  const currentTotal = selectedOptions[stepKey].reduce((sum, opt) => sum + opt.quantity, 0);

  const selectionCount = document.getElementById("selectionCount");
  const currentTotalEl = document.getElementById("currentTotal");
  
  if (selectionCount) {
    selectionCount.textContent = `Selecionados: ${currentTotal} / ${maxSelections}`;
  }

  if (currentTotalEl) {
    if (currentStep === 4) {
      currentTotalEl.textContent = `Total: R$ ${calculateTotal().toFixed(2)}`;
    } else {
      currentTotalEl.textContent = "";
    }
  }
}

function calculateTotal() {
  let total = currentProduct.price;
  Object.values(selectedOptions).forEach((stepOptions) => {
    stepOptions.forEach((opt) => {
      total += opt.price * opt.quantity;
    });
  });
  return total;
}

function generateOrderSummary() {
  const allOptions = [
    ...selectedOptions.step1,
    ...selectedOptions.step2,
    ...selectedOptions.step3,
    ...selectedOptions.step4,
  ].filter((opt) => opt.quantity > 0);

  return `
        <div class="summary-item">
            <span>${currentProduct.title}</span>
            <span>R$ ${currentProduct.price.toFixed(2)}</span>
        </div>
        ${allOptions
          .map(
            (opt) => `
            <div class="summary-item">
                <span>+ ${opt.name} (${opt.quantity}x)</span>
                <span>R$ ${(opt.price * opt.quantity).toFixed(2)}</span>
            </div>
        `
          )
          .join("")}
        <div class="summary-total">
            <span>Total:</span>
            <span>R$ ${calculateTotal().toFixed(2)}</span>
        </div>
    `;
}

function nextStep() {
  if (currentStep < 5) {
    currentStep++;
    updateStepIndicators();
    renderStep();
  }
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateStepIndicators();
    renderStep();
  }
}

function addToCartFromModal() {
  const cartItem = {
    id: Date.now(),
    product: currentProduct,
    options: {...selectedOptions},
    observations: observations,
    totalPrice: calculateTotal(),
  };

  addToCart(cartItem);
  showNotification(`Adicionado ao carrinho: ${currentProduct.title} - R$ ${calculateTotal().toFixed(2)}`);
  closeCustomizeModal();
}

// Cart Functions
function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  renderCart();
}

function clearCart() {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cartCount = document.getElementById("cartCount");
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.totalPrice, 0);
}

function openCartModal() {
  renderCart();
  document.getElementById("cartModal").classList.add("active");
}

function closeCartModal() {
  document.getElementById("cartModal").classList.remove("active");
}

function renderCart() {
  const modalBody = document.getElementById("cartModalBody");
  const totalValue = document.getElementById("cartTotalValue");
  
  if (!modalBody || !totalValue) return;
  
  const total = getCartTotal();

  if (cart.length === 0) {
    modalBody.innerHTML = '<div class="cart-empty">Seu carrinho está vazio</div>';
    totalValue.textContent = "R$ 0,00";
    return;
  }

  modalBody.innerHTML = `
        <div class="cart-items">
            ${cart
              .map((item) => {
                const allOptions = [
                  ...item.options.step1,
                  ...item.options.step2,
                  ...item.options.step3,
                  ...item.options.step4,
                ].filter((opt) => opt.quantity > 0);

                return `
                    <div class="cart-item">
                        <div class="cart-item-info">
                            <div class="cart-item-title">${item.product.title}</div>
                            ${
                              allOptions.length > 0
                                ? `
                                <div class="cart-item-options">
                                    ${allOptions.map((opt) => `${opt.name} (${opt.quantity}x)`).join(", ")}
                                </div>
                            `
                                : ""
                            }
                            ${item.observations ? `<div class="cart-item-obs">Obs: ${item.observations}</div>` : ""}
                        </div>
                        <div class="cart-item-price">R$ ${item.totalPrice.toFixed(2)}</div>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">&times;</button>
                    </div>
                `;
              })
              .join("")}
        </div>
    `;

  totalValue.textContent = `R$ ${total.toFixed(2)}`;
}

// Checkout Functions
function openCheckoutModal() {
  const total = getCartTotal();
  if (total < 10) {
    showNotification(`Pedido mínimo é R$ 10,00. Seu pedido atual é R$ ${total.toFixed(2)}. Adicione mais itens para continuar.`);
    return;
  }

  renderCheckoutItems();
  updateCheckoutTotals();
  document.getElementById("checkoutModal").classList.add("active");
  closeCartModal();
}

function closeCheckoutModal() {
  document.getElementById("checkoutModal").classList.remove("active");
}

function backToCartFromCheckout() {
  closeCheckoutModal();
  openCartModal();
}

function renderCheckoutItems() {
  const checkoutItems = document.getElementById('checkoutItems');
  if (!checkoutItems) return;
  
  if (cart.length === 0) {
    checkoutItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio</p>';
    return;
  }
  
  checkoutItems.innerHTML = cart.map(item => {
    const allOptions = [
      ...item.options.step1,
      ...item.options.step2,
      ...item.options.step3,
      ...item.options.step4,
    ].filter(opt => opt.quantity > 0);
    
    return `
      <div class="cart-item">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.product.title}</div>
          ${allOptions.length > 0 ? 
            `<div class="cart-item-options">${allOptions.map(opt => `${opt.name} (${opt.quantity}x)`).join(', ')}</div>` : 
            ''
          }
          ${item.observations ? `<div class="cart-item-obs">Obs: ${item.observations}</div>` : ''}
        </div>
        <div class="cart-item-price">R$ ${item.totalPrice.toFixed(2)}</div>
      </div>
    `;
  }).join('');
}

function updateCheckoutTotals() {
  const subtotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const total = subtotal + deliveryFee;
  
  const subtotalValue = document.getElementById('subtotalValue');
  const deliveryFeeEl = document.getElementById('deliveryFee');
  const totalValue = document.getElementById('totalValue');
  
  if (subtotalValue) subtotalValue.textContent = `R$ ${subtotal.toFixed(2)}`;
  if (deliveryFeeEl) deliveryFeeEl.textContent = `R$ ${deliveryFee.toFixed(2)}`;
  if (totalValue) totalValue.textContent = `R$ ${total.toFixed(2)}`;
}

function handleOrderTypeChange(e) {
  const addressSection = document.getElementById('addressSection');
  if (!addressSection) return;
  
  if (e.target.value === 'delivery') {
    addressSection.style.display = 'block';
    handleNeighborhoodChange();
  } else {
    addressSection.style.display = 'none';
    deliveryFee = 0;
    updateCheckoutTotals();
  }
}

function handleNeighborhoodChange() {
  const neighborhoodSelect = document.getElementById('neighborhood');
  if (!neighborhoodSelect) return;
  
  const neighborhood = neighborhoodSelect.value;
  
  if (neighborhood && deliveryFees[neighborhood]) {
    deliveryFee = deliveryFees[neighborhood];
  } else {
    deliveryFee = 0;
  }
  
  updateCheckoutTotals();
}

function formatPhone(e) {
  let value = e.target.value.replace(/\D/g, '');
  
  if (value.length > 11) {
    value = value.substring(0, 11);
  }
  
  if (value.length > 10) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (value.length > 6) {
    value = value.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
  } else if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
  } else if (value.length > 0) {
    value = value.replace(/^(\d*)/, '($1');
  }
  
  e.target.value = value;
}

function formatBirthday(e) {
  let value = e.target.value.replace(/\D/g, '');
  
  if (value.length > 4) {
    value = value.substring(0, 4);
  }
  
  if (value.length > 2) {
    value = value.replace(/^(\d{2})(\d{0,2})/, '$1/$2');
  }
  
  e.target.value = value;
}

// =============================================
// SISTEMA DE ENVIO AUTOMÁTICO
// =============================================

// Função principal automática
function sendAutoOrder(orderData) {
  // 1. Salvar no histórico local
  saveToLocalAdmin(orderData);
  
  // 2. Enviar para seu WhatsApp (em background)
  sendWhatsAppBackground(orderData);
  
  // 3. Alertas visuais e sonoros
  playOrderSound();
  showSuccessNotification(orderData);
  
  // 4. Mostrar confirmação para o cliente
  showOrderConfirmation(orderData);
}

// Envio automático SEM abrir WhatsApp
function sendWhatsAppBackground(orderData) {
  const message = formatOrderMessage(orderData);
  const encodedMessage = encodeURIComponent(message);
  
  // Método 1: Usando API do WhatsApp (abre em segundo plano)
  const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  // Criar iframe invisível para enviar
  const iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  document.body.appendChild(iframe);
  
  // Remover after um tempo
  setTimeout(() => {
    document.body.removeChild(iframe);
  }, 1000);
  
  console.log('📱 Pedido enviado automaticamente para WhatsApp');
}

// Formatar mensagem do pedido
function formatOrderMessage(orderData) {
  const itemsText = orderData.items.map(item => {
    const options = [
      ...item.options.step1,
      ...item.options.step2,
      ...item.options.step3,
      ...item.options.step4,
    ].filter(opt => opt.quantity > 0);
    
    let itemText = `🛒 ${item.product.title} - R$ ${item.totalPrice.toFixed(2)}`;
    if (options.length > 0) {
      itemText += `\n   ➕ ${options.map(opt => `${opt.name} (${opt.quantity}x)`).join(', ')}`;
    }
    if (item.observations) {
      itemText += `\n   📝 ${item.observations}`;
    }
    return itemText;
  }).join('\n\n');

  return `🎉 *PEDIDO AUTOMÁTICO - ${CONFIG.STORE_NAME}*

📋 *ITENS DO PEDIDO:*
${itemsText}

👤 *DADOS DO CLIENTE:*
• Nome: ${orderData.customerName}
• WhatsApp: ${orderData.customerPhone}
${orderData.customerBirthday ? `• Aniversário: ${orderData.customerBirthday}` : ''}

${orderData.orderType === 'delivery' ? 
`📍 *ENTREGA:*
• Endereço: ${orderData.address.street}, ${orderData.address.number}
• Bairro: ${getNeighborhoodName(orderData.address.neighborhood)}
${orderData.address.complement ? `• Complemento: ${orderData.address.complement}` : ''}` : 
`🏪 *RETIRADA NA LOJA*`}

💰 *VALORES:*
• Subtotal: R$ ${orderData.subtotal.toFixed(2)}
${orderData.orderType === 'delivery' ? `• Taxa de entrega: R$ ${orderData.deliveryFee.toFixed(2)}` : ''}
• *TOTAL: R$ ${orderData.total.toFixed(2)}*

💳 *PAGAMENTO: ${getPaymentMethodName(orderData.paymentMethod)}*

${orderData.observations ? `📌 OBSERVAÇÕES: ${orderData.observations}` : ''}

⏰ *HORÁRIO: ${new Date(orderData.timestamp).toLocaleString('pt-BR')}*

✅ *PEDIDO RECEBIDO AUTOMATICAMENTE*`;
}

// Notificação de sucesso para o cliente
function showSuccessNotification(orderData) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #10b981;
    color: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 10000;
    max-width: 350px;
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
    animation: slideInRight 0.5s ease;
    border-left: 5px solid #059669;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
      <div style="font-size: 24px;">✅</div>
      <strong style="font-size: 16px;">Pedido Enviado com Sucesso!</strong>
    </div>
    <div style="font-size: 14px; opacity: 0.9;">
      Seu pedido de <strong>R$ ${orderData.total.toFixed(2)}</strong> foi recebido!<br>
      Em breve entraremos em contato.
    </div>
  `;
  
  document.body.appendChild(notification);
  
  // Remover após 5 segundos
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.5s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 500);
  }, 5000);
}

// Salvar pedido no histórico
function saveToLocalAdmin(orderData) {
  const orders = JSON.parse(localStorage.getItem("orderHistory")) || [];
  orders.push(orderData);
  localStorage.setItem("orderHistory", JSON.stringify(orders));
}

// Alertas sonoros
function playOrderSound() {
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
    gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  } catch (e) {
    console.log('Áudio não suportado');
  }
}

function handleSubmitOrder() {
  if (!validateCheckoutForm()) return;
  
  const orderData = {
    items: [...cart],
    orderType: document.querySelector('input[name="orderType"]:checked').value,
    paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
    customerName: document.getElementById('customerName').value,
    customerPhone: document.getElementById('customerPhone').value,
    customerBirthday: document.getElementById('customerBirthday').value,
    observations: document.getElementById('checkoutObservations').value,
    subtotal: cart.reduce((sum, item) => sum + item.totalPrice, 0),
    deliveryFee: deliveryFee,
    total: cart.reduce((sum, item) => sum + item.totalPrice, 0) + deliveryFee,
    timestamp: new Date().toISOString()
  };
  
  if (orderData.orderType === 'delivery') {
    orderData.address = {
      street: document.getElementById('street').value,
      number: document.getElementById('number').value,
      neighborhood: document.getElementById('neighborhood').value,
      complement: document.getElementById('complement').value
    };
  }
  
  // ENVIO AUTOMÁTICO - SEM REDIRECIONAMENTO
  sendAutoOrder(orderData);
  
  // Limpar carrinho
  clearCart();
  
  // Fechar modal de checkout
  closeCheckoutModal();
}

function validateCheckoutForm() {
  const customerName = document.getElementById('customerName');
  const customerPhone = document.getElementById('customerPhone');
  const orderType = document.querySelector('input[name="orderType"]:checked');
  
  if (!customerName || !customerName.value.trim()) {
    showNotification('Por favor, informe seu nome.');
    customerName.focus();
    return false;
  }
  
  if (!customerPhone || !customerPhone.value.trim()) {
    showNotification('Por favor, informe seu WhatsApp.');
    customerPhone.focus();
    return false;
  }
  
  const phoneDigits = customerPhone.value.replace(/\D/g, '');
  if (phoneDigits.length < 10) {
    showNotification('Por favor, informe um WhatsApp válido com DDD.');
    customerPhone.focus();
    return false;
  }
  
  if (orderType.value === 'delivery') {
    const street = document.getElementById('street');
    const number = document.getElementById('number');
    const neighborhood = document.getElementById('neighborhood');
    
    if (!street || !street.value.trim()) {
      showNotification('Por favor, informe a rua/avenida.');
      street.focus();
      return false;
    }
    
    if (!number || !number.value.trim()) {
      showNotification('Por favor, informe o número.');
      number.focus();
      return false;
    }
    
    if (!neighborhood || !neighborhood.value) {
      showNotification('Por favor, selecione o bairro.');
      neighborhood.focus();
      return false;
    }
  }
  
  return true;
}

function showOrderConfirmation(orderData) {
  const orderDetails = document.getElementById('orderDetails');
  
  orderDetails.innerHTML = `
    <div style="background: white; border-radius: 8px; padding: 15px; border: 1px solid #e0e0e0;">
      <h4 style="margin: 0 0 10px 0; color: #8a2be2;">Resumo do Pedido</h4>
      <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
        <span>Cliente:</span>
        <span><strong>${orderData.customerName}</strong></span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
        <span>WhatsApp:</span>
        <span>${orderData.customerPhone}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
        <span>Total:</span>
        <span style="font-weight: bold; color: #10b981;">R$ ${orderData.total.toFixed(2)}</span>
      </div>
      <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
        <span>Tipo:</span>
        <span>${orderData.orderType === 'delivery' ? '🚚 Delivery' : '🏪 Retirada'}</span>
      </div>
      <div style="display: flex; justify-content: space-between;">
        <span>Pagamento:</span>
        <span>${getPaymentMethodName(orderData.paymentMethod)}</span>
      </div>
    </div>
  `;
  
  document.getElementById('confirmationModal').classList.add('active');
}

function closeConfirmationModal() {
  document.getElementById("confirmationModal").classList.remove("active");
}

function handleNewOrder() {
  closeConfirmationModal();
  // Opcional: rolar para o topo para ver produtos
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Funções auxiliares
function getNeighborhoodName(neighborhoodValue) {
  const neighborhoods = {
    "aco_cearense": "Aço Cearense",
    "bom_jesus": "Bom Jesus",
    "cabatan": "Cabatan",
    "capuan": "Capuan",
    "coite_pedeiras": "Coite Pedeiras",
    "genipabu": "Genipabu",
    "jardim_do_amor": "Jardim do Amor",
    "pabussu": "Pabussu",
    "padre_julio_maria": "Padre Júlio Maria",
    "palmirim": "Palmirim",
    "planalto_caucaia": "Planalto Caucaia",
    "retomada": "Retomada"
  };
  
  return neighborhoods[neighborhoodValue] || neighborhoodValue;
}

function getPaymentMethodName(method) {
  switch(method) {
    case 'cash': return 'Dinheiro';
    case 'pix': return 'PIX';
    case 'debit': return 'Cartão de Débito';
    case 'credit': return 'Cartão de Crédito';
    default: return method;
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #8a2be2;
    color: white;
    padding: 15px;
    border-radius: 8px;
    z-index: 10000;
    max-width: 300px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Store Info Modal
function openStoreInfoModal() {
  document.getElementById("storeInfoModal").classList.add("active");
}

function closeStoreInfoModal() {
  document.getElementById("storeInfoModal").classList.remove("active");
}

// Privacy Policy Modal
function openPrivacyModal() {
  document.getElementById("privacyModal").classList.add("active");
}

function closePrivacyModal() {
  document.getElementById("privacyModal").classList.remove("active");
}

// Terms of Use Modal
function openTermsModal() {
  document.getElementById("termsModal").classList.add("active");
}

function closeTermsModal() {
  document.getElementById("termsModal").classList.remove("active");
}

// Painel Admin Simplificado
function openSimpleAdmin() {
  const modal = document.getElementById('simpleAdminModal');
  const ordersList = document.getElementById('simpleOrdersList');
  
  const orders = JSON.parse(localStorage.getItem("orderHistory")) || [];
  
  if (orders.length === 0) {
    ordersList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">Nenhum pedido recebido ainda</p>';
  } else {
    ordersList.innerHTML = orders.reverse().map(order => `
      <div style="
        border: 1px solid #e0e0e0;
        border-radius: 10px;
        padding: 15px;
        margin: 10px 0;
        background: #f8f9fa;
      ">
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
          <strong style="color: #8a2be2;">${order.customerName}</strong>
          <strong style="color: #10b981;">R$ ${order.total.toFixed(2)}</strong>
        </div>
        <div style="font-size: 12px; color: #666; margin-bottom: 5px;">
          📞 ${order.customerPhone}
        </div>
        <div style="font-size: 12px; color: #666; margin-bottom: 5px;">
          ⏰ ${new Date(order.timestamp).toLocaleString('pt-BR')}
        </div>
        <div style="font-size: 12px; color: #666;">
          ${order.orderType === 'delivery' ? '🚚 Delivery' : '🏪 Retirada'}
        </div>
      </div>
    `).join('');
  }
  
  modal.style.display = 'flex';
}

function closeSimpleAdmin() {
  document.getElementById('simpleAdminModal').style.display = 'none';
}

// Fechar modal clicando fora
document.getElementById('simpleAdminModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeSimpleAdmin();
  }
});

console.log('✅ Sistema Automático SEM Redirecionamento Carregado!');