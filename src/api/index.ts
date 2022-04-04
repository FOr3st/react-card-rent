import { BASE_URL } from "../constants";
import { ResponseSuccess, ResponseError } from "../data";
import { get, post } from "./http";

export async function loadCard(
  cardId: string
): Promise<ResponseError | ResponseSuccess> {
  try {
    return await (
      await get(`${BASE_URL}/card/${cardId}`)
    ).data;
  } catch (error: any) {
    return error.response.data;
  }
}

export async function rentCard(
  cardId: string,
  rentAmount: number
): Promise<ResponseError | ResponseSuccess> {
  try {
    return await (
      await post(`${BASE_URL}/card/${cardId}`, { rentAmount })
    ).data;
  } catch (error: any) {
    return error.response.data;
  }
}
