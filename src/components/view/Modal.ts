import { IModal } from "../../types/view";
import { Component } from "../base/Component";
import { IEvents } from "../base/Events";
import { ensureElement } from "../../utils/utils";

export class Modal extends Component<IModal> {
  protected modalButton: HTMLButtonElement;
  protected contentElement: HTMLElement;

  constructor(
    container: HTMLElement,
    protected events: IEvents,
  ) {
    super(container);

    this.contentElement = ensureElement<HTMLElement>(
      ".modal__content",
      this.container,
    );
    this.modalButton = ensureElement<HTMLButtonElement>(
      ".modal__close",
      this.container,
    );

    this.modalButton.addEventListener("click", () => {
      this.events.emit("modal:close");
    });

    this.container.addEventListener("click", (event) => {
      if (event.target === event.currentTarget) {
        this.events.emit("modal:close");
      }
    });
  }

  open() {
    this.container.classList.add("modal_active");
  }

  close() {
    this.container.classList.remove("modal_active");
  }

  set content(value: HTMLElement) {
    this.contentElement.replaceChildren(value);
  }
}
