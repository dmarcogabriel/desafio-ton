import {Ship} from 'src/types';

const extractId = (productUrl: string) => {
  const withotLastSlash = productUrl.substr(0, productUrl.lastIndexOf('/'));
  return withotLastSlash.substr(withotLastSlash.lastIndexOf('/') + 1);
};

export const mapShips = (ships: Ship[]): Ship[] =>
  ships
    .filter(product => product.cost_in_credits !== 'unknown')
    .map(product => ({
      ...product,
      id: extractId(product.url),
    }));
