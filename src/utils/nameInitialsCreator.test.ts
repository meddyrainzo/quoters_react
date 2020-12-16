import { nameAbbreviator } from './nameInitialsCreator';

describe('Testing the name abbreviator', () => {
  test('should return an empty string if there is no firstname and lastname', () => {
    const abbrvName = nameAbbreviator('', '');

    expect(abbrvName).toEqual('');
  });

  test('should return the abbreviation of the name provided', () => {
    const abbrv = nameAbbreviator('First', 'Last');

    expect(abbrv).toEqual('FL');
  });
});
