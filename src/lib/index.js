export const mayuscula = (str) => str.toUpperCase();

export const capitalize = (str) => {
  const arr = str.split(' ');
  if (arr.length === 4) {
    arr.pop();
    arr.pop();
  } else if (arr.length === 3) {
    arr.pop();
  }
  const arr2 = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  return arr2.join(' ');
};
