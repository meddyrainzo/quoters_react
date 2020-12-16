export const nameAbbreviator = (
  firstname: string,
  lastname: string
): string => {
  let firstNameAbbr = '';
  let lastNameAbbr = '';

  if (firstname && firstname.length > 0) {
    firstNameAbbr = firstname.charAt(0);
  }

  if (lastname && lastname.length > 0) {
    lastNameAbbr = lastname.charAt(0);
  }
  if (firstNameAbbr.length === 1 && lastNameAbbr.length === 1) {
    return `${firstNameAbbr}${lastNameAbbr}`;
  }
  return '';
};
