import { AxiosError } from "axios";

export function getErrorMessage(error: any): string {
  const errorAxios = error as AxiosError<Error>;

  if (typeof errorAxios.response?.data === 'undefined')
    return errorAxios.message

  let message = ""
  for (const key of Object.keys(errorAxios.response.data)) {
    if (message)
      message += "\n";
    message += `[${key}]: ${Object(errorAxios.response.data)[key]}`;
  }

  return message
}