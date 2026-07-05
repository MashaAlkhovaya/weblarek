import "./scss/styles.scss";
import { CatalogProducts } from "./components/Models/CatalogProducts";
import { BasketProducts } from "./components/Models/BasketProducts";
import { BuyerProduct } from "./components/Models/BuyerProduct";
import { apiProducts } from "./utils/data";
import { ProductsApi } from "./components/Api/ProductsApi";
import { Api } from "./components/base/Api";
import { API_URL } from "./utils/constants";

const productsModel = new CatalogProducts();
productsModel.setProducts(apiProducts.items);
console.log(`Массив товаров из каталога: `, productsModel.getProducts());

console.log(
  `Выбранный товар: `,
  productsModel.getProductById(apiProducts.items[0].id),
);

console.log(
  `Выбранный товар: `,
  productsModel.getProductById("несуществующий-id-12345"),
);

const basketProducts = new BasketProducts();
basketProducts.addProduct(apiProducts.items[0]);
console.log(`Товары в корзине: `, basketProducts.getItems());

basketProducts.addProduct(apiProducts.items[1]);
console.log(`Товары в корзине: `, basketProducts.getItems());

console.log(`Количество товаров в корзине: `, basketProducts.getItemCount());
console.log(
  `Общая стоимость товаров в корзине: `,
  basketProducts.getTotalPrice(),
);
console.log(
  `Проверка наличия товара в корзине: `,
  basketProducts.hasProduct(apiProducts.items[0].id),
);

basketProducts.removeProduct(apiProducts.items[0].id);
console.log(`Товары в корзине после удаления: `, basketProducts.getItems());
console.log(
  `Проверка наличия товара в корзине: `,
  basketProducts.hasProduct("несуществующий-id-12345"),
);

basketProducts.clearBasket();
console.log(`Корзина после очистки: `, basketProducts.getItems());

const buyerProduct = new BuyerProduct();

console.log(`Данные покупателя: `, buyerProduct.getData());
console.log(`Ошибки валидации данных покупателя: `, buyerProduct.validate());

buyerProduct.saveData({
  email: "maria@mail.ru",
});

console.log(`Данные покупателя после сохранения: `, buyerProduct.getData());
console.log(
  `Ошибки валидации данных покупателя после сохранения: `,
  buyerProduct.validate(),
);
buyerProduct.saveData({
  payment: "card",
  address: "Санкт-Петербург",
  phone: "+79999999999",
});

console.log(
  `Ошибки валидации данных покупателя после сохранения всех данных: `,
  buyerProduct.validate(),
);
buyerProduct.clearBuyer();
console.log(`Данные покупателя после очистки: `, buyerProduct.getData());

const api = new Api(API_URL);
const productsApi = new ProductsApi(api);
productsApi.getProductsList().then((response) => {
  productsModel.setProducts(response.items);
  console.log('Каталог с сервера:', productsModel.getProducts());
});
