import { Component } from "../base/Component";
import { IForm } from "../../types/view";
import { IEvents } from "../base/Events";
import { ensureElement } from "../../utils/utils";

export class Form<T extends IForm = IForm> extends Component<T> {
  protected submitButton: HTMLButtonElement;
  protected errorsElement: HTMLElement;

  constructor(container: HTMLElement, events: IEvents) {
    super(container);

    this.submitButton = ensureElement<HTMLButtonElement>(
      '[type="submit"]',
      this.container,
    );
    this.errorsElement = ensureElement<HTMLElement>(
      ".form__errors",
      this.container,
    );

    this.container.addEventListener("submit", (event: Event) => {
      event.preventDefault();
      events.emit(`${(this.container as HTMLFormElement).name}:submit`);
    });

    this.container.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLInputElement;
      events.emit(`${(this.container as HTMLFormElement).name}:change`, {
        field: target.name,
        value: target.value,
      });
    });
  }

  set valid(value: boolean) {
    this.submitButton.disabled = !value;
  }
  set errors(value: string) {
    this.errorsElement.textContent = value;
  }
}
