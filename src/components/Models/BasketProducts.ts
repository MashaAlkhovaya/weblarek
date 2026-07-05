import { IProduct } from "../../types";

export class BasketProducts {
  protected products: IProduct[] = [];

  addProduct(product: IProduct): void {
    if (product.price === null) {
      return;
    }
    this.products.push(product);
  }

  removeProduct(productId: string): void {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  getItemCount(): number {
    return this.products.length;
  }

  getItems(): IProduct[] {
    return this.products;
  }

  getTotalPrice(): number {
    return this.products.reduce(
      (total, product) => total + (product.price || 0),
      0,
    );
  }

  hasProduct(productId: string): boolean {
    return this.products.some((product) => product.id === productId);
  }

  clearBasket(): void {
    this.products = [];
  }
}
