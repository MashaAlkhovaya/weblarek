import "./scss/styles.scss";
import { CatalogProducts } from "./components/Models/CatalogProducts";
import { BasketProducts } from "./components/Models/BasketProducts";
import { BuyerProduct } from "./components/Models/BuyerProduct";
import { ProductsApi } from "./components/Api/ProductsApi";
import { Api } from "./components/base/Api";
import { API_URL } from "./utils/constants";
import { ensureElement } from "./utils/utils";
import { Header } from "./components/view/Header";
import { EventEmitter } from "./components/base/Events";
import { Gallery } from "./components/view/Gallery";
import { Modal } from "./components/view/Modal";

const events = new EventEmitter();

const productsModel = new CatalogProducts(events);
const basketProducts = new BasketProducts(events);
const buyerProduct = new BuyerProduct(events);

const api = new Api(API_URL);
const productsApi = new ProductsApi(api);

const headerContainer = ensureElement(".header");
const header = new Header(headerContainer, events);

const galleryContainer = ensureElement(".gallery");
const gallery = new Gallery(galleryContainer);

const modalContainer = ensureElement("#modal-container");
const modal = new Modal(modalContainer, events);
