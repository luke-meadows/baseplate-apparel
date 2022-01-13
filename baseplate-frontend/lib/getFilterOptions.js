export default function getFilterOptions(options) {
  return options.reduce((obj, item) => {
    if (!obj.brands) {
      obj.brands = [item.brand.brand];
    }
    if (obj.brands.includes(item.brand.brand)) {
      return obj;
    }
    obj.brands.push(item.brand.brand);

    if (!obj.colors) {
      obj.colors = [...item.color.split(', ')];
    }
    if (obj.colors.includes(item.color.split(', '))) {
      return obj;
    }
    obj.colors.push(...item.color.split(', '));

    if (!obj.types) {
      obj.types = [item.productType.productType];
    }
    if (obj.types.includes(item.productType.productType)) {
      return obj;
    }
    obj.types.push(item.productType.productType);

    return obj;
  }, {});
}
