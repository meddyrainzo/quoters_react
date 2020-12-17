export const wordValidator = (
  key: string,
  word: string,
  wordlimit: number = 25
): string => {
  if (word.trim().length < 1) {
    return `The ${key} is required`;
  }
  if (word.length > wordlimit) {
    return `The ${key} should be at most ${wordlimit} characters`;
  }
  return '';
};

export const emailValidator = (email: string): string => {
  // Very basic regex for email
  let regex: RegExp = /[A-Za-z0-9.-_]+@[A-Za-z0-9]+\.\w{2,3}(\.\w{2,3})/;
  if (!regex.test(email)) {
    return 'Invalid email';
  }
  return '';
};
