export interface ApplicationState {
  isLoading: boolean;
  cardId: string;
  cardData?: CardData;
}

export interface ApplicationCommands {
  loadCard(): void;
  rentCard(rentPrice: number): void;
}

export type ApplicationModel = ApplicationState & ApplicationCommands;

export type UpdateStateMethod = (state: Partial<ApplicationState>) => void;

export type Command = (
  state: ApplicationState,
  updateState: UpdateStateMethod,
  ...args: any
) => void;

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
