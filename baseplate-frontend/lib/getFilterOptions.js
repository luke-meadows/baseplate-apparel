export default function getFilterOptions(options) {
  const obj = {};
  obj.brands = [...new Set(options.map((item) => item.brand.brand))];
  obj.types = [...new Set(options.map((item) => item.productType.productType))];
  obj.colors = [
    ...new Set(
      options.reduce((arr, item) => {
        const colors = item.color.split(', ');
        colors.forEach((color) => arr.push(color));
        return arr;
      }, [])
    ),
  ];
  return obj;
}
