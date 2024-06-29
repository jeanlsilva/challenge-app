import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getErrorMessage(err: Error) {
  let message = 'Ocorreu um erro inesperado. Por favor, tente novamente.'

  if (err?.message) {
    message = err.message
  }

  if (err?.cause) {
    const cause = err.cause as {
      [key: string]: string | string[] | object
    }
    const key = Object.keys(cause)[0]

    const firstKeyValue = cause[key]

    if (firstKeyValue && typeof firstKeyValue === 'string') {
      message = firstKeyValue
    }
  }

  return message
}
