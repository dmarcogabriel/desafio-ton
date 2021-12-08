import {Ship} from 'src/types';

const extractId = (productUrl: string) => {
  const withotLastSlash = productUrl.substr(0, productUrl.lastIndexOf('/'));
  return withotLastSlash.substr(withotLastSlash.lastIndexOf('/') + 1);
};

export const mapProducts = (products: Ship[]): Ship[] =>
  products.map(product => ({
    ...product,
    id: extractId(product.url),
  }));
