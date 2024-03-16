export const exclude = (
  object: Record<string, any>,
  keys: string[]
): Record<string, any> => {
  for (let key of keys) {
    delete object[key];
  }
  return object;
};
