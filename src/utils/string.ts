export const capitalizeFirstLetters = (str: string) => {
  const words = str.toLowerCase().split(' ');

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
