import { Component } from "../base/Component";
import { ICard } from "../../types/view";
import { ensureElement } from "../../utils/utils";

export class Card<T extends ICard = ICard> extends Component<T> {
  protected titleElement: HTMLElement;
  protected priceElement: HTMLElement;
  protected imageElement: HTMLImageElement | null;
  protected categoryElement: HTMLElement | null;

  constructor(container: HTMLElement) {
    super(container);

    this.titleElement = ensureElement<HTMLElement>(
      ".card__title",
      this.container,
    );
    this.priceElement = ensureElement<HTMLElement>(
      ".card__price",
      this.container,
    );
    this.imageElement =
      this.container.querySelector<HTMLImageElement>(".card__image");
    this.categoryElement =
      this.container.querySelector<HTMLElement>(".card__category");
  }

  set image(value: string) {
    if (this.imageElement) {
      this.setImage(this.imageElement, value);
    }
  }

  set title(value: string) {
    this.titleElement.textContent = value;
  }

  set price(value: number | null) {
    if (value === null) {
      this.priceElement.style.display = "none";
    } else {
      this.priceElement.style.display = "";
      this.priceElement.textContent = `${value} синапсов`;
    }
  }

  set category(value: string) {
    if (this.categoryElement) {
      this.categoryElement.textContent = value;
    }
  }
}
