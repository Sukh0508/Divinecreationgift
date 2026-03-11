let categoriecon = [
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/category-None/Idol.jpg",
    head: "Idol",
    Description:
      "Divine Creations Idol Categories Divine Creation Specializes In Cr...",
    total: "Total 45 Product",
    btn: "View More",
  },
  {
    image:
      "	https://divinecreationsgift.com/media/shop-72/category-576/1000035628.png",
    head: "Krishna Hands",
    Description:
      "Divine Creations Idol Categories Divine Creation Specializes In Cr...",
    total: "Total 2 Product",
    btn: "View More",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/category-None/Photo_Frame.jpg",
    head: "Photo Frame",
    Description:
      "Divine Creations Idol Categories Divine Creation Specializes In Cr...",
    total: "Total 4 Product",
    btn: "View More",
  },
];

let cate = document.querySelector(".add-cate-content");

categoriecon.forEach((pro) => {
  const divcontent = `
    <div class="productadd">
        <img src="${pro.image}" alt="" loading="lazy">
        <h3>${pro.head}</h3>
        <p>${pro.Description}</p>
        <span>${pro.total}</span>
        <button>${pro.btn}</button>
    </div>
    `;

  cate.innerHTML += divcontent;
});

let featurepro = [
  {
    image:
      "	https://divinecreationsgift.com/media/shop-72/product-lord-ram/lord-ram-8a34ef.jpg",
    categorytitle: "Lord Rama",
    original: "₹1299.0",
    categoryprize: 899.0,
    disscount: "Save 30%",
    ratting: "4",
  },
  {
    image:
      "	https://divinecreationsgift.com/media/shop-72/product-shiv-ling/shiv-ling-4164d9.jpg",
    categorytitle: "Shiv Ling",
    original: "₹1299.0",
    categoryprize: "899",
    disscount: "Save 30%",
  },
  {
    image:
      "	https://divinecreationsgift.com/media/shop-72/product-lord-ganesh/lord-ganesh-a7a450.jpg",
    categorytitle: "Lord Ganesh",
    original: "₹1299.0",
    categoryprize: "899",
    disscount: "Save 30%",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-tirupati-balaji/tirupati-balaji-43fce4.jpg",
    categorytitle: "Tirupati Balaji",
    original: "₹1299.0",
    categoryprize: "899",
    disscount: "Save 30%",
  },
];

let productadd = document.querySelector(".product-grid");

featurepro.forEach((featureprduct) => {
  const feature = `
     <div class="product-card-fea">
      <div class="image-wrapper">
       <img src="${featureprduct.image}" alt="" loading="lazy">
      </div>
        <div class="product-title">${featureprduct.categorytitle}</div>
        <div class="product-price">${featureprduct.categoryprize}<small>${featureprduct.original}</small></div>
        <div class="social">
          <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
        </div>
        <div class="product-category">${featureprduct.disscount}</div>
        <a href="" style = "text-decoration: none; margin: 15px 0px;" ><button class="add-to-cart">View More</button></a>
            
     </div>
     `;
  productadd.innerHTML += feature;
});

let newproduct = [
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-lord-hanuman-ji-idol-in-yog-mudra-marble-powder-23-cm/lord-hanuman-ji-id_ScOXDVk.jpg",
    tittle: "Lord Hanuman Ji Idol in Yog Mudra",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-divine-dhanushdhari-lord-ram-idol-gold-plated-finish/divine-dhanushdhari_8DJ3JpT.jpg",
    tittle: "Divine Dhanushdhari Lord Ram Idol – Gold Plated Finish",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-lord-krishna-idol-24-inches/lord-krishna-idol-24-inches-bc7fb0.jpg",
    tittle: "Lord Krishna Idol – 24 Inches",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-saraswati-maa-idol-14-inches/saraswati-maa-idol-14-inches-6c1fc5.jpg",
    tittle: "Saraswati Maa Idol – 14 Inches",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-chhatrapati-shivaji-maharaj-idol-10-inches/chhatrapati-shivaji-maharaj-i_Q2B1mTM.jpg",
    tittle: "Chhatrapati Shivaji Maharaj Idol – 10 Inches",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-divine-lord-shiva-idol/divine-lord-shiva-idol-824a3b.jpg",
    tittle: "Divine Lord Shiva Idol",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-divine-ram-parivaar-idol-compact-edition/divine-ram-parivaar-idol-compac_FIrHbse.jpg",
    tittle: "Divine Ram Parivaar Idol – Compact Edition",
  },
  {
    image:
      "https://divinecreationsgift.com/media/shop-72/product-lord-krishna-with-cow-idol-16-inch/lord-krishna-with-cow-idol-16-inch-e0ed91.jpg",
    tittle: "Lord Krishna with Cow Idol – 16 Inch",
  },
];

let latestproduct = document.querySelector(".product-grid-latest");

newproduct.forEach((ele) => {
  const latest = `
     <div class="product-card-latest">
      <div class="image-wrapper">
       <img src="${ele.image}" alt="" loading="lazy">
      </div>
        <div class="product-title">${ele.tittle}</div>
        <div class="social">
          <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
              <i class="ri-star-s-fill" style="color: gold;"></i>
        </div>
     </div>
    `;
  latestproduct.innerHTML += latest;
});

let ans = document.querySelectorAll(".second-que")
let minu = document.querySelectorAll(".minu")
let showque = document.querySelectorAll(".add-q")

showque.forEach((btn, index) => {

  btn.addEventListener("click", function () {

    ans[index].style.display = "flex"
    showque[index].style.display = "none"
    minu[index].style.display = "inline"

  })

})

minu.forEach((btn, index) => {

  btn.addEventListener("click", function () {

    ans[index].style.display = "none"
    showque[index].style.display = "inline"
    minu[index].style.display = "none"

  })

})

