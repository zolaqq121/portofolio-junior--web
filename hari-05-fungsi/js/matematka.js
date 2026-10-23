export const hitungRataRata = (arr) => {
  if (arr.length === 0) return 0;
  return arr.reduce((acc, val) => acc + val, 0) / arr.length;
};

export const cariTertinggi = (arr) => {
  if (arr.length === 0) return 0;
  return Math.max(...arr);
};

export const cariTerendah = (arr) => {
  if (arr.length === 0) return 0;
  return Math.min(...arr);
};
