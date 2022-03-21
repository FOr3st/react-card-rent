import { ResponseError } from "./types";

export function noop(...args: any): any {
  return;
}

export function isResponseError(response: object): response is ResponseError {
  return (response as ResponseError).error !== undefined;
}
