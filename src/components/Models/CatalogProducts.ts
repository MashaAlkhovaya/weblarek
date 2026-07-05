import { IProduct } from "../../types";

export class CatalogProducts {
  protected products: IProduct[] = [];
  protected selectedProduct: IProduct | null = null;

  getProducts(): IProduct[] {
    return this.products;
  }

  saveSelected(product: IProduct): void {
    this.selectedProduct = product;
  }

  setProducts(products: IProduct[]): void {
    this.products = products;
  }

  getSelected(): IProduct | null {
    return this.selectedProduct;
  }

  getProductById(id: string): IProduct | undefined {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return this.products[i];
      }
    }
  }
}
