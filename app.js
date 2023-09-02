const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title:
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewellery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: "Solid Gold Petite Micropave ",
    price: 168,
    description:
      "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewellery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: "White Gold Plated Princess",
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewellery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    description:
      "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewellery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
  {
    id: 9,
    title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    price: 64,
    description:
      "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203,
    },
  },
  {
    id: 10,
    title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    description:
      "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470,
    },
  },
  {
    id: 11,
    title:
      "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    description:
      "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319,
    },
  },
  {
    id: 12,
    title:
      "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    description:
      "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 400,
    },
  },
  {
    id: 13,
    title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    description:
      "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 250,
    },
  },
  {
    id: 14,
    title:
      "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    price: 999.99,
    description:
      "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    rating: {
      rate: 2.2,
      count: 140,
    },
  },
  {
    id: 15,
    title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    description:
      "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    rating: {
      rate: 2.6,
      count: 235,
    },
  },
  {
    id: 16,
    title:
      "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    description:
      "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    rating: {
      rate: 2.9,
      count: 340,
    },
  },
  {
    id: 17,
    title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    description:
      "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    rating: {
      rate: 3.8,
      count: 679,
    },
  },
  {
    id: 18,
    title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    price: 9.85,
    description:
      "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    rating: {
      rate: 4.7,
      count: 130,
    },
  },
  {
    id: 19,
    title: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    description:
      "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    rating: {
      rate: 4.5,
      count: 146,
    },
  },
  {
    id: 20,
    title: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    description:
      "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    rating: {
      rate: 3.6,
      count: 145,
    },
  },
];

const categories = [
  "men's clothing",
  "electronics",
  "jewellery",
  "women's clothing",
];
categories.unshift("all");

// Config for item quantity
const config = {
  min: 1,
  max: 5,
  defaultUItemQuantity: 2,
};

// selectors

const app = document.querySelector("#app");
const search = document.querySelector("#search");
const cartBtn = document.querySelector("#cartBtn");
const categoriesList = document.querySelector("#categoriesList");
const categoryItem = document.querySelector(".category-item");
const productsList = document.querySelector("#productsList");
const carts = document.querySelector("#carts");
const cartCounterBadge = document.querySelectorAll(".cart-counter-badge");
const totalCost = document.querySelector("#totalCost");
const order = document.querySelector("#order");
const myCart = new bootstrap.Offcanvas("#myCart", {
  scroll: false,
});

// =========================================== Functions ============================================

// ----------------------- Calculate Total --------------------------

const calculateTotal = () => {
  totalCost.innerText = [...document.querySelectorAll(".item-in-cart-cost")]
    .reduce((pv, cv) => pv + parseFloat(cv.innerHTML), 0)
    .toFixed(2);
};

// --------------------------- Badge Count --------------------------

const cartCounter = () => {
  cartCounterBadge.forEach((el) => (el.innerText = carts.children.length));
};

// --------------- Adding items into cart (offcanvas) ---------------

const createItemInCart = (product) => {
  const itemInCart = document.createElement("div");
  itemInCart.classList.add("item-in-cart");
  itemInCart.setAttribute("item-in-cart-id", product.id); // custom attribute
  itemInCart.innerHTML = `

  <div class="mb-4">
    <img
      src="${product.image}"
      alt=""
      class="item-in-cart-img ms-3"
    />
    <div class="p-2 rounded-2 item-display shadow">
      <div
        class="d-flex justify-content-between align-items-center py-2 mt-2 overflow-hidden"
      >
        <p class="mb-0 text-truncate user-select-none item-in-cart-title">${
          product.title
        }</p>
        <i
          class="item-in-cart-del bi bi-trash3-fill text-danger fs-5 me-2"
        ></i>
      </div>
      <div
        class="d-flex justify-content-between align-items-center"
      >
        <p class="text-warning fs-5 fw-semibold mb-0 text-danger user-select-none">
          $
          <span class="item-in-cart-cost text-danger">${
            product.price * config.defaultUItemQuantity
          }</span>
        </p>
        <div class="input-group item-in-cart-control">
          <button class="btn btn-warning btn-sm item-decrement">
            <i class="bi bi-dash text-white"></i>
          </button>
          <input
            type="number"
            class="form-control form-control-sm text-center shadow-none item-quantity"
            value="${config.defaultUItemQuantity}"
            min="1"
          />
          <button class="btn btn-warning btn-sm item-increment">
            <i class="bi bi-plus text-white"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  `;

  const itemInCartDel = itemInCart.querySelector(".item-in-cart-del");
  itemInCartDel.addEventListener(
    "click",
    removeFromCart.bind(null, product.id)
  );

  // Increasing and Decreasing item quantity in Cart
  const itemDecrement = itemInCart.querySelector(".item-decrement");
  const itemQuantity = itemInCart.querySelector(".item-quantity");
  const itemIncrement = itemInCart.querySelector(".item-increment");
  const itemInCartCost = itemInCart.querySelector(".item-in-cart-cost");

  const updateCost = () => {
    itemInCartCost.innerText = (
      itemQuantity.valueAsNumber * product.price
    ).toFixed(2);
    calculateTotal();
  };

  itemIncrement.addEventListener("click", () => {
    itemQuantity.valueAsNumber < config.max &&
      (itemQuantity.valueAsNumber += 1);
    updateCost();
  });

  itemDecrement.addEventListener("click", () => {
    itemQuantity.valueAsNumber > config.min &&
      (itemQuantity.valueAsNumber -= 1);
    updateCost();
  });

  return itemInCart;
};

// --------------------------- Removing from Cart ----------------------------

const removeFromCart = (productId) => {
  const currentItemInCart = document.querySelector(
    `[item-in-cart-id = "${productId}"]`
  );

  // To remove "active" from selected Add-To-Cart Button
  const currentProductCard = document.querySelector(
    `[createProduct-id = "${productId}"]`
  );
  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  Swal.fire({
    title: "Are you sure to remove ?",
    text: "This item will be discarded from your cart !",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#2a628f",
    cancelButtonColor: "#d72323",
    confirmButtonText: "Yes, remove it!",
  }).then((result) => {
    if (result.isConfirmed) {
      // item in cart removed - badgeCount - total
      currentItemInCart.classList.add("animate__animated", "animate__hinge");
      currentItemInCart.addEventListener("animationend", () => {
        currentItemInCart.remove();
        cartCounter();
        calculateTotal();

        // Removing 'active' from Add-To-Cart Button
        currentAddToCartBtn.classList.remove("active");
        currentAddToCartBtn.innerText = "Add to Cart";

        // item in cart deleted toast
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-start",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Item Removed",
        });
      });
    }
  });
};

// --------------- Adding and Removing items to cart (offcanvas)  --------------

const handleAddToCart = (productId) => {
  // To add and remove items into cart only using productId
  const currentProductCard = document.querySelector(
    `[createProduct-id = "${productId}"]`
  );
  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  // >>>>>>>>>>>>>>>>>>>>>> Product image for Animation >>>>>>>>>>>>>>>>>>>>>>

  // initial position
  const currentProductImg = currentProductCard.querySelector(".product-img");
  const tempImg = new Image();
  tempImg.src = currentProductImg.src;
  tempImg.height = currentProductImg.getBoundingClientRect().height;
  tempImg.style.position = "fixed";
  tempImg.style.top = currentProductImg.getBoundingClientRect().top + "px";
  tempImg.style.left = currentProductImg.getBoundingClientRect().left + "px";
  tempImg.style.zIndex = 2000;
  tempImg.style.scale = 0.6;
  tempImg.style.transition = 600 + "ms";

  // new position
  window.setTimeout(() => {
    tempImg.style.top = cartBtn.getBoundingClientRect().y + "px";
    tempImg.style.left = cartBtn.getBoundingClientRect().x + "px";
    // tempImg.style.scale = 0.2;
    tempImg.style.height = 10 + "px";
    // tempImg.style.opacity = 0;
  }, 100);

  tempImg.addEventListener("transitionend", () => {
    tempImg.remove();
    cartBtn.classList.add("animate__tada");

    cartBtn.addEventListener("animationend", () => {
      cartBtn.classList.remove("animate__tada");
    });
  });

  app.prepend(tempImg);

  // Remove from Cart if Add-to-Cart btn is clicked ~ if not, Add to Cart
  currentAddToCartBtn.classList.contains("active")
    ? removeFromCart(productId)
    : addToCart(productId);
};

// ---------------------- Adding items to Cart  --------------------------

const addToCart = (productId) => {
  const currentProductCard = document.querySelector(
    `[createProduct-id = "${productId}"]`
  );
  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  // if button not clicked => add
  currentAddToCartBtn.innerText = "Added";
  currentAddToCartBtn.classList.add("active");

  // finding the product added to cart with 'product id'
  carts.append(
    createItemInCart(products.find((product) => product.id === productId))
  );

  // Badge Count => To show number of items added in the cart
  cartCounter();

  // calculating total in cart
  calculateTotal();

  // Toast when item added
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Item Added successfully",
  });
};

// -------------------------- Creating Products ---------------------------

const createProducts = (product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "col-12 col-md-6 col-lg-4";
  productDiv.setAttribute("createProduct-id", product.id); // custom attribute

  // detecting items in carts to set the buttons "added" if existed // line 544
  const isInCart = [...document.querySelectorAll("[item-in-cart-id]")].find(
    (el) => el.getAttribute("item-in-cart-id") == product.id
  );

  const normalBtn = `<button class="add-to-cart-btn btn btn-outline-primary w-100 d-block"> Add to Cart </button>`;
  const activeBtn = `<button class="active add-to-cart-btn btn btn-outline-primary w-100 d-block"> Added </button>`;

  // console.log(isInCart ? true : false);

  productDiv.innerHTML = `

  <div class="product-item mb-4">
  <img
    src="${product.image}"
    class="product-img"
    alt=""
  />
  <div class="p-3 bg-light shadow">
    <h6 class="product-title fw-bold text-truncate">${product.title}</h6>
    <p
      class="product-description small text-black-50 border-1 mb-0 user-select-none"
    >
      ${product.description.slice(0, 200)}
    </p>

    <div class="d-flex justify-content-between">
    <div class="stars">
    ${createStars(product.rating.rate.toFixed(0))}
    </div>
    <p class="fw-semibold mb-0">
      ( ${product.rating.rate} / 5 )
    </p>
    </div>

    <hr /> 
    <p class="product-price fw-bold">
      $ <span class="price">${product.price}</span>
    </p>
  
    ${isInCart ? activeBtn : normalBtn}

  </div>
</div>

    `;

  const addToCartBtn = productDiv.querySelector(".add-to-cart-btn");
  addToCartBtn.addEventListener(
    "click",
    handleAddToCart.bind(null, product.id)
  );

  return productDiv;
};

// ------------------ Categorizing - showing active category -------------------

const categorize = (li, title) => {
  // console.log(title);
  // if before ? is object => will work => class 'active' added
  document.querySelector(".category-item.active")?.classList.remove("active");

  // adding 'active' class to current clicked category
  li.classList.add("active");

  // filtering products according to category selected
  productRender(
    products.filter((el) => title === "all" || el.category === title)
  );
};

// ---------------------- Creating Categories ------------------------

const createCategoryItem = (title) => {
  const li = document.createElement("li");
  li.className = "category-item btn btn-outline-primary me-2 text-capitalize mb-3";
  li.innerText = title;

  li.addEventListener("click", categorize.bind(null, li, title)); // line 291 function invoked

  return li;
};

// ------------------------- Creating Stars --------------------------

const createStars = (rate) => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result +=
      i <= rate
        ? `<i class="bi bi-star-fill me-2"></i>`
        : `<i class="bi bi-star me-2"></i>`;
  }
  return result;
};

// ------------------ Product Rendering - Generating Products  --------------------

const productRender = (productsToRender) => {
  // Clearing products before selecting category
  productsList.innerHTML = null;

  productsToRender.forEach((el) => productsList.append(createProducts(el)));
};

// ----------------- Category Rendering - Generating Categories  -------------------

const categoryRender = (categoriesToRender) => {
  categoriesToRender.forEach((item) =>
    categoriesList.append(createCategoryItem(item))
  );
};

// =========================================== Process =================================================

const searchProduct = (keyword) => {
  productRender(
    products.filter((product) => {
      // -1 not found (filter not found)
      const reg = new RegExp(keyword, "i"); // using regular expression
      return (
        product.title.search(reg) != -1 || product.description.search(reg) != -1
      );
    })
  );
};

// place order button functional
const placeOrder = () => {
  const itemInCart = document.querySelectorAll(".item-in-cart");
  if (itemInCart.length === 0) {
    Swal.fire(
      "Your Cart is Empty!",
      "Please select at least one product.",
      "warning"
    );
  } else {
    Swal.fire({
      title: "Do you confirm to place order?",
      text: "Please double-check all items in the cart.",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2a628f",
      cancelButtonColor: "#d72323",
      confirmButtonText: "Confirm Order",
    }).then((result) => {
      if (result.isConfirmed) {
        // showing output on console
        const allItemsInCart = carts.querySelectorAll(".item-in-cart");
        const items = [];
        const myOrder = {};

        allItemsInCart.forEach((el) => {
          const item = {};
          item.productId = el.getAttribute("item-in-cart-id");
          item.quantity = el.querySelector(".item-quantity").valueAsNumber;
          items.push(item);
        });

        // Adding ordered items to myOrder object
        myOrder.items = items;
        myOrder.total = totalCost.innerText;
        myOrder.user_id = 25;
        myOrder.order_id = "FGW342UOL76Y";
        myOrder.user_name = "Okkar Aung";

        console.log(myOrder);
        carts.innerHTML = null;
        calculateTotal();
        cartCounter();

        myCart.hide();

        Swal.fire(
          "Order Placement is Completed!",
          "Your order has been placed successfully.",
          "success"
        );
      }
    });
  }
};

// Project starts here (using IIFE)

(() => {
  // original categories[] array inserted as argument - dynamic
  categoryRender(categories);

  // setting category 'all' active as default
  categoriesList.children[0].classList.add("active");

  // original products[] array inserted as argument - dynamic
  productRender(products);

  // updating config max
  config.max = 10;
  config.defaultUItemQuantity = 1;

  // Placing Order
  order.addEventListener("click", placeOrder);
})();
