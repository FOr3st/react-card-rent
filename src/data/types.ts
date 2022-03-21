
export interface ApplicationState {
  isLoading: boolean;
  cardId: string;
  cardData?: CardData;
  loadCard(): void;
  rentCard(rentPrice: number): void;
}

export type Action = (state: ApplicationState, setState:(state: ApplicationState) => void, args?: any) => void;

export interface CardData {
  currentPrice: number;
  description: string;
  image: string;
  name: string;
}

export interface ResponseError {
  error: string;
}

export interface ResponseSuccess {
  card: CardData;
}
