export enum WriteAQuoteErrors {
  QUOTE_TOO_LONG = 'The quote should be at most 250 characters',
  QUOTE_TOO_SHORT = 'The quote should be at least 1 character',
  AUTHOR_TOO_LONG = 'The author should be at most 50 characters',
  AUTHOR_TOO_SHORT = 'The author should be at least 1 character',
  REQUIRED = 'Required',
}
