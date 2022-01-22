const env = (key: string) => {
  const value = process.env[key]

  if (!value) {
    throw new Error(`Missing environment variable for ${key}`)
  }

  return value
}

export const GMAIL_USER = env("GMAIL_USER")
export const GMAIL_PASS = env("GMAIL_PASS")
