import { Card } from "./Card";
import { ICardPreview } from "../../types/view";
import { ensureElement } from "../../utils/utils";

export class CardPreview extends Card<ICardPreview> {
  protected descriptionElement: HTMLElement;
  protected buttonElement: HTMLButtonElement;

  constructor(container: HTMLElement, onClick: () => void) {
    super(container);

    this.descriptionElement = ensureElement<HTMLElement>(
      ".card__text",
      this.container,
    );
    this.buttonElement = ensureElement<HTMLButtonElement>(
      ".card__button",
      this.container,
    );

    this.buttonElement.addEventListener("click", onClick);
  }

  set description(value: string) {
    this.descriptionElement.textContent = value;
  }
  set buttonText(value: string) {
    this.buttonElement.textContent = value;
  }

  set buttonDisabled(value: boolean) {
    this.buttonElement.disabled = value;
  }
}
