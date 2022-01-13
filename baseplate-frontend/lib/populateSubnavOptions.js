import { useContext } from 'react';
import { NavCtx } from './NavCtxProvider';

export default function populateSubnavOptions(data, setNavCategories) {
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
  const accessoryTypes = [
    ...new Set(
      data?.allAccessoryTypes.map((type) => type.productType.productType)
    ),
  ];

  setNavCategories({
    brands: allBrands,
    shoes: shoeBrands,
    clothing: clothingTypes,
    accessories: accessoryTypes,
  });
}
