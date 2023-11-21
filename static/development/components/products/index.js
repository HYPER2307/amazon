import "./index.scss";
import products from "../../../source/data/products.json";

const productsList = document.querySelector(".products__list");

export const renderPreparedGoods = (category = "all") => {
  productsList.innerHTML = "";

  const preparedProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);

  //
  preparedProducts.length !== 0
    ? preparedProducts.forEach((product) => {
        const productItemContainer = document.createElement("div");
        productItemContainer.className = "products__item-container";

        productItemContainer.insertAdjacentHTML(
          "beforeend",
          `
          <div class="products__item">
            <div class="products__item-img">
              <img src="${product.img}" alt="${product.category}">
            </div>
    
            <h5 class="products__item-category" data-category="Men Fashion">
              
            </h5>
    
            <h4 class="products__item-title">
              ${product.title}
            </h4>
    
            <div class="products__item-wrapper">
              <div class="products__item-price">
                $${product.price}
              </div>
    
              <div class="products__item-rating stars-container">
                <input type="radio" id="rate-5" name="rate">
                <label class="star fas fa-star" for="rate-5"></label>
                <input type="radio" id="rate-4" name="rate">
                <label class="star fas fa-star" for="rate-4"></label>
                <input type="radio" id="rate-3" name="rate">
                <label class="star fas fa-star" for="rate-3"></label>
                <input type="radio" id="rate-2" name="rate">
                <label class="star fas fa-star" for="rate-2"></label>
                <input type="radio" id="rate-1" name="rate">
                <label class="star fas fa-star" for="rate-1"></label>
              </div>
            </div>
    
            <div class="products__item-button-container">
              <button class="button button--blue">
                Add to Cart
              </button>
    
              <button class="button button--transparent">
                Quick view
              </button>
            </div>
          </div>
        `
        );

        productsList.append(productItemContainer);
      })
    : productsList.insertAdjacentHTML(
        "beforeend",
        `
        <p class="products__message">
          No products available 
        <p/>
      `
      );
};

renderPreparedGoods();
