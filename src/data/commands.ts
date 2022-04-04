import { toast } from "react-toastify";
import { ApplicationState, Command, UpdateStateMethod } from "./types";
import { isResponseError } from "./utils";
import { loadCard, rentCard } from "../api";

export const loadCardCommand: Command = async (
  state: ApplicationState,
  updateState: UpdateStateMethod
) => {
  updateState({
    isLoading: true,
  });

  const { cardId } = state;

  const response = await loadCard(cardId);

  if (isResponseError(response)) {
    toast(response.error, { type: "error" });
  }

  updateState({
    ...(isResponseError(response) && { error: response.error }),
    ...(!isResponseError(response) && { cardData: response.card }),
    isLoading: false,
  });
};

export const rentCardCommand = async (
  state: ApplicationState,
  updateState: UpdateStateMethod,
  rentPrice: number
) => {
  const { cardId } = state;

  const response = await rentCard(cardId, rentPrice);

  isResponseError(response)
    ? toast(response.error, { type: "error" })
    : toast("Rented successfully", { type: "success" });

  updateState({
    ...(isResponseError(response) && { error: response.error }),
    ...(!isResponseError(response) && { cardData: response.card }),
  });
};
