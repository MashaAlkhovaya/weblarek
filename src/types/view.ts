export interface IHeader {
  counter: number;
}

export interface IGallery {
  catalog: HTMLElement[];
}

export interface IModal {
  content: HTMLElement;
}

export interface ICard {
  image: string;
  title: string;
  price: number | null;
  category: string;
}

export interface ICardPreview extends ICard {
  description: string;
  buttonText: string;
  buttonDisabled: boolean;
}

export interface ICardBasket extends ICard {
  index: number;
}

export interface IBasket {
  price: number;
  items: HTMLElement[];
  valid: boolean;
}
