export default function populateSubnavOptions(data, setNavCategories) {
  if (!data) return;
  const allBrands = [
    ...new Set(data?.allBrands.map((brand) => brand.brand.brand)),
  ];
  const shoeBrands = [
    ...new Set(data?.allShoeBrands.map((brand) => brand.brand.brand)),
  ];
  const clothingTypes = [
    ...new Set(
      data?.allClothingTypes.map((type) => type.productType.productType)
    ),
  ];

  setNavCategories({
    brands: allBrands,
    shoes: shoeBrands,
    clothing: clothingTypes,
  });
}
