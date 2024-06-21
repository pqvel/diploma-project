export const formDataToObject = (formData: FormData): Record<string, any> => {
  const obj: Record<string, any> = {};

  formData.forEach((value, key) => {
    // Check if the key already exists
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // If the key already exists, we need to handle multiple values
      const currentValue = obj[key];
      if (Array.isArray(currentValue)) {
        // If the current value is an array, push the new value
        currentValue.push(value);
      } else {
        // If the current value is not an array, convert it to an array and add the new value
        obj[key] = [currentValue, value];
      }
    } else {
      // If the key does not exist, simply add it to the object
      obj[key] = value;
    }
  });

  return obj;
};
