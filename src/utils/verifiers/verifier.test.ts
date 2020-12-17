import { wordValidator, emailValidator } from './verifier';

describe('Test the word verificator', () => {
  test('An empty word should return an error message', () => {
    const result = wordValidator('name', '');
    expect(result).toBe('The name is required');
  });

  test('A word with just spaces should return an error message', () => {
    const word = '                      ';
    const result = wordValidator('name', word);
    expect(result).toBe('The name is required');
  });
  test('A very large word should return an error message', () => {
    const word =
      "This is a very large word that is expected to fail. Let's see how it goes";
    const result = wordValidator('name', word, 10);
    expect(result).toBe('The name should be at most 10 characters');
  });
  test('A valid word should return an empty string and not an error message', () => {
    const word = 'Hello world';
    const result = wordValidator('name', word);
    expect(result).toBe('');
  });
});

describe('Test the email validator', () => {
  test('An empty email should return an error message', () => {
    const email = '         ';
    const result = emailValidator(email);
    expect(result).toBe('Invalid email');
  });

  test('An invalid email should return an error message', () => {
    const email = 'trash@trash.trashTrash';
    const result = emailValidator(email);
    expect(result).toBe('Invalid email');
  });

  test('A valid email should return an empty string and not an error message', () => {
    const email = 'valid@email.co.la';
    const result = emailValidator(email);
    expect(result).toBe('');
  });
});
