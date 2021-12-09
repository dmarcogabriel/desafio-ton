const MAX_LENGTH = 17;
export const breakLongText = (text: string): string => {
  return text.length > MAX_LENGTH ? `${text.substr(0, MAX_LENGTH)}...` : text;
};
