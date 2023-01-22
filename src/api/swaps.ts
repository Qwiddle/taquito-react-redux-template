// eslint-disable-next-line import/prefer-default-export
export const getSwaps = async () => {
  const url = '';

  const res = await fetch(url);
  const json = await res.json();

  return json.pair_info;
};
