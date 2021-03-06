type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type CartItemRelateToManyInput = {
  readonly create?: ReadonlyArray<CartItemCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CartItemWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly cartItem_every?: CartItemWhereInput | null;
  readonly cartItem_some?: CartItemWhereInput | null;
  readonly cartItem_none?: CartItemWhereInput | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'cartItem_ASC'
  | 'cartItem_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly cartItem?: CartItemRelateToManyInput | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly cartItem?: CartItemRelateToManyInput | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type ProductImageRelateToOneInput = {
  readonly create?: ProductImageCreateInput | null;
  readonly connect?: ProductImageWhereUniqueInput | null;
  readonly disconnect?: ProductImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type BrandRelateToOneInput = {
  readonly create?: BrandCreateInput | null;
  readonly connect?: BrandWhereUniqueInput | null;
  readonly disconnect?: BrandWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductTypeRelateToOneInput = {
  readonly create?: ProductTypeCreateInput | null;
  readonly connect?: ProductTypeWhereUniqueInput | null;
  readonly disconnect?: ProductTypeWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductWhereInput = {
  readonly AND?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly color?: Scalars['String'] | null;
  readonly color_not?: Scalars['String'] | null;
  readonly color_contains?: Scalars['String'] | null;
  readonly color_not_contains?: Scalars['String'] | null;
  readonly color_starts_with?: Scalars['String'] | null;
  readonly color_not_starts_with?: Scalars['String'] | null;
  readonly color_ends_with?: Scalars['String'] | null;
  readonly color_not_ends_with?: Scalars['String'] | null;
  readonly color_i?: Scalars['String'] | null;
  readonly color_not_i?: Scalars['String'] | null;
  readonly color_contains_i?: Scalars['String'] | null;
  readonly color_not_contains_i?: Scalars['String'] | null;
  readonly color_starts_with_i?: Scalars['String'] | null;
  readonly color_not_starts_with_i?: Scalars['String'] | null;
  readonly color_ends_with_i?: Scalars['String'] | null;
  readonly color_not_ends_with_i?: Scalars['String'] | null;
  readonly color_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly color_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: ProductImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly brand?: BrandWhereInput | null;
  readonly brand_is_null?: Scalars['Boolean'] | null;
  readonly productCategory?: Scalars['String'] | null;
  readonly productCategory_not?: Scalars['String'] | null;
  readonly productCategory_contains?: Scalars['String'] | null;
  readonly productCategory_not_contains?: Scalars['String'] | null;
  readonly productCategory_starts_with?: Scalars['String'] | null;
  readonly productCategory_not_starts_with?: Scalars['String'] | null;
  readonly productCategory_ends_with?: Scalars['String'] | null;
  readonly productCategory_not_ends_with?: Scalars['String'] | null;
  readonly productCategory_i?: Scalars['String'] | null;
  readonly productCategory_not_i?: Scalars['String'] | null;
  readonly productCategory_contains_i?: Scalars['String'] | null;
  readonly productCategory_not_contains_i?: Scalars['String'] | null;
  readonly productCategory_starts_with_i?: Scalars['String'] | null;
  readonly productCategory_not_starts_with_i?: Scalars['String'] | null;
  readonly productCategory_ends_with_i?: Scalars['String'] | null;
  readonly productCategory_not_ends_with_i?: Scalars['String'] | null;
  readonly productCategory_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly productCategory_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly productType?: ProductTypeWhereInput | null;
  readonly productType_is_null?: Scalars['Boolean'] | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly price?: Scalars['Int'] | null;
  readonly price_not?: Scalars['Int'] | null;
  readonly price_lt?: Scalars['Int'] | null;
  readonly price_lte?: Scalars['Int'] | null;
  readonly price_gt?: Scalars['Int'] | null;
  readonly price_gte?: Scalars['Int'] | null;
  readonly price_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly price_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly sizes?: Scalars['String'] | null;
  readonly sizes_not?: Scalars['String'] | null;
  readonly sizes_contains?: Scalars['String'] | null;
  readonly sizes_not_contains?: Scalars['String'] | null;
  readonly sizes_starts_with?: Scalars['String'] | null;
  readonly sizes_not_starts_with?: Scalars['String'] | null;
  readonly sizes_ends_with?: Scalars['String'] | null;
  readonly sizes_not_ends_with?: Scalars['String'] | null;
  readonly sizes_i?: Scalars['String'] | null;
  readonly sizes_not_i?: Scalars['String'] | null;
  readonly sizes_contains_i?: Scalars['String'] | null;
  readonly sizes_not_contains_i?: Scalars['String'] | null;
  readonly sizes_starts_with_i?: Scalars['String'] | null;
  readonly sizes_not_starts_with_i?: Scalars['String'] | null;
  readonly sizes_ends_with_i?: Scalars['String'] | null;
  readonly sizes_not_ends_with_i?: Scalars['String'] | null;
  readonly sizes_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly sizes_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly recommended?: Scalars['Boolean'] | null;
  readonly recommended_not?: Scalars['Boolean'] | null;
  readonly latest?: Scalars['Boolean'] | null;
  readonly latest_not?: Scalars['Boolean'] | null;
};

export type ProductWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'color_ASC'
  | 'color_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'brand_ASC'
  | 'brand_DESC'
  | 'productCategory_ASC'
  | 'productCategory_DESC'
  | 'productType_ASC'
  | 'productType_DESC'
  | 'status_ASC'
  | 'status_DESC'
  | 'price_ASC'
  | 'price_DESC'
  | 'sizes_ASC'
  | 'sizes_DESC'
  | 'recommended_ASC'
  | 'recommended_DESC'
  | 'latest_ASC'
  | 'latest_DESC';

export type ProductUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly brand?: BrandRelateToOneInput | null;
  readonly productCategory?: Scalars['String'] | null;
  readonly productType?: ProductTypeRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly sizes?: Scalars['String'] | null;
  readonly recommended?: Scalars['Boolean'] | null;
  readonly latest?: Scalars['Boolean'] | null;
};

export type ProductsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductUpdateInput | null;
};

export type ProductCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly description?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly photo?: ProductImageRelateToOneInput | null;
  readonly brand?: BrandRelateToOneInput | null;
  readonly productCategory?: Scalars['String'] | null;
  readonly productType?: ProductTypeRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
  readonly price?: Scalars['Int'] | null;
  readonly sizes?: Scalars['String'] | null;
  readonly recommended?: Scalars['Boolean'] | null;
  readonly latest?: Scalars['Boolean'] | null;
};

export type ProductsCreateInput = {
  readonly data?: ProductCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type ProductRelateToOneInput = {
  readonly create?: ProductCreateInput | null;
  readonly connect?: ProductWhereUniqueInput | null;
  readonly disconnect?: ProductWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ProductImageWhereInput = {
  readonly AND?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type ProductImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type ProductImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductImageUpdateInput | null;
};

export type ProductImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type ProductImagesCreateInput = {
  readonly data?: ProductImageCreateInput | null;
};

export type BrandWhereInput = {
  readonly AND?: ReadonlyArray<BrandWhereInput | null> | null;
  readonly OR?: ReadonlyArray<BrandWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly brand?: Scalars['String'] | null;
  readonly brand_not?: Scalars['String'] | null;
  readonly brand_contains?: Scalars['String'] | null;
  readonly brand_not_contains?: Scalars['String'] | null;
  readonly brand_starts_with?: Scalars['String'] | null;
  readonly brand_not_starts_with?: Scalars['String'] | null;
  readonly brand_ends_with?: Scalars['String'] | null;
  readonly brand_not_ends_with?: Scalars['String'] | null;
  readonly brand_i?: Scalars['String'] | null;
  readonly brand_not_i?: Scalars['String'] | null;
  readonly brand_contains_i?: Scalars['String'] | null;
  readonly brand_not_contains_i?: Scalars['String'] | null;
  readonly brand_starts_with_i?: Scalars['String'] | null;
  readonly brand_not_starts_with_i?: Scalars['String'] | null;
  readonly brand_ends_with_i?: Scalars['String'] | null;
  readonly brand_not_ends_with_i?: Scalars['String'] | null;
  readonly brand_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly brand_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type BrandWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortBrandsBy = 'id_ASC' | 'id_DESC' | 'brand_ASC' | 'brand_DESC';

export type BrandUpdateInput = {
  readonly brand?: Scalars['String'] | null;
};

export type BrandsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: BrandUpdateInput | null;
};

export type BrandCreateInput = {
  readonly brand?: Scalars['String'] | null;
};

export type BrandsCreateInput = {
  readonly data?: BrandCreateInput | null;
};

export type ProductTypeWhereInput = {
  readonly AND?: ReadonlyArray<ProductTypeWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ProductTypeWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly productType?: Scalars['String'] | null;
  readonly productType_not?: Scalars['String'] | null;
  readonly productType_contains?: Scalars['String'] | null;
  readonly productType_not_contains?: Scalars['String'] | null;
  readonly productType_starts_with?: Scalars['String'] | null;
  readonly productType_not_starts_with?: Scalars['String'] | null;
  readonly productType_ends_with?: Scalars['String'] | null;
  readonly productType_not_ends_with?: Scalars['String'] | null;
  readonly productType_i?: Scalars['String'] | null;
  readonly productType_not_i?: Scalars['String'] | null;
  readonly productType_contains_i?: Scalars['String'] | null;
  readonly productType_not_contains_i?: Scalars['String'] | null;
  readonly productType_starts_with_i?: Scalars['String'] | null;
  readonly productType_not_starts_with_i?: Scalars['String'] | null;
  readonly productType_ends_with_i?: Scalars['String'] | null;
  readonly productType_not_ends_with_i?: Scalars['String'] | null;
  readonly productType_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly productType_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type ProductTypeWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortProductTypesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'productType_ASC'
  | 'productType_DESC';

export type ProductTypeUpdateInput = {
  readonly productType?: Scalars['String'] | null;
};

export type ProductTypesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ProductTypeUpdateInput | null;
};

export type ProductTypeCreateInput = {
  readonly productType?: Scalars['String'] | null;
};

export type ProductTypesCreateInput = {
  readonly data?: ProductTypeCreateInput | null;
};

export type UserRelateToOneInput = {
  readonly create?: UserCreateInput | null;
  readonly connect?: UserWhereUniqueInput | null;
  readonly disconnect?: UserWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CartItemWhereInput = {
  readonly AND?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CartItemWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly quantity?: Scalars['Int'] | null;
  readonly quantity_not?: Scalars['Int'] | null;
  readonly quantity_lt?: Scalars['Int'] | null;
  readonly quantity_lte?: Scalars['Int'] | null;
  readonly quantity_gt?: Scalars['Int'] | null;
  readonly quantity_gte?: Scalars['Int'] | null;
  readonly quantity_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly quantity_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly size?: Scalars['String'] | null;
  readonly size_not?: Scalars['String'] | null;
  readonly size_contains?: Scalars['String'] | null;
  readonly size_not_contains?: Scalars['String'] | null;
  readonly size_starts_with?: Scalars['String'] | null;
  readonly size_not_starts_with?: Scalars['String'] | null;
  readonly size_ends_with?: Scalars['String'] | null;
  readonly size_not_ends_with?: Scalars['String'] | null;
  readonly size_i?: Scalars['String'] | null;
  readonly size_not_i?: Scalars['String'] | null;
  readonly size_contains_i?: Scalars['String'] | null;
  readonly size_not_contains_i?: Scalars['String'] | null;
  readonly size_starts_with_i?: Scalars['String'] | null;
  readonly size_not_starts_with_i?: Scalars['String'] | null;
  readonly size_ends_with_i?: Scalars['String'] | null;
  readonly size_not_ends_with_i?: Scalars['String'] | null;
  readonly size_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly size_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly user?: UserWhereInput | null;
  readonly user_is_null?: Scalars['Boolean'] | null;
  readonly product?: ProductWhereInput | null;
  readonly product_is_null?: Scalars['Boolean'] | null;
};

export type CartItemWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCartItemsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'quantity_ASC'
  | 'quantity_DESC'
  | 'size_ASC'
  | 'size_DESC'
  | 'user_ASC'
  | 'user_DESC'
  | 'product_ASC'
  | 'product_DESC';

export type CartItemUpdateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly size?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type CartItemsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CartItemUpdateInput | null;
};

export type CartItemCreateInput = {
  readonly quantity?: Scalars['Int'] | null;
  readonly size?: Scalars['String'] | null;
  readonly user?: UserRelateToOneInput | null;
  readonly product?: ProductRelateToOneInput | null;
};

export type CartItemsCreateInput = {
  readonly data?: CartItemCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'cartItem'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly cartItem?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type ProductListTypeInfo = {
  key: 'Product';
  fields:
    | 'id'
    | 'name'
    | 'description'
    | 'color'
    | 'photo'
    | 'brand'
    | 'productCategory'
    | 'productType'
    | 'status'
    | 'price'
    | 'sizes'
    | 'recommended'
    | 'latest';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly description?: string | null;
    readonly color?: string | null;
    readonly photo?: string | null;
    readonly brand?: string | null;
    readonly productCategory?: string | null;
    readonly productType?: string | null;
    readonly status?: string | null;
    readonly price?: number | null;
    readonly sizes?: string | null;
    readonly recommended?: boolean | null;
    readonly latest?: boolean | null;
  };
  inputs: {
    where: ProductWhereInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductListTypeInfo,
    ProductListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductListTypeInfo,
  ProductListTypeInfo['fields']
>;

export type ProductImageListTypeInfo = {
  key: 'ProductImage';
  fields: 'id' | 'image' | 'altText' | 'product';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly product?: string | null;
  };
  inputs: {
    where: ProductImageWhereInput;
    create: ProductImageCreateInput;
    update: ProductImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductImageListTypeInfo,
    ProductImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductImageListTypeInfo,
  ProductImageListTypeInfo['fields']
>;

export type BrandListTypeInfo = {
  key: 'Brand';
  fields: 'id' | 'brand';
  backing: {
    readonly id: string;
    readonly brand?: string | null;
  };
  inputs: {
    where: BrandWhereInput;
    create: BrandCreateInput;
    update: BrandUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: BrandWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortBrandsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type BrandListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    BrandListTypeInfo,
    BrandListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  BrandListTypeInfo,
  BrandListTypeInfo['fields']
>;

export type ProductTypeListTypeInfo = {
  key: 'ProductType';
  fields: 'id' | 'productType';
  backing: {
    readonly id: string;
    readonly productType?: string | null;
  };
  inputs: {
    where: ProductTypeWhereInput;
    create: ProductTypeCreateInput;
    update: ProductTypeUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ProductTypeWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortProductTypesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ProductTypeListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ProductTypeListTypeInfo,
    ProductTypeListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ProductTypeListTypeInfo,
  ProductTypeListTypeInfo['fields']
>;

export type CartItemListTypeInfo = {
  key: 'CartItem';
  fields: 'id' | 'quantity' | 'size' | 'user' | 'product';
  backing: {
    readonly id: string;
    readonly quantity?: number | null;
    readonly size?: string | null;
    readonly user?: string | null;
    readonly product?: string | null;
  };
  inputs: {
    where: CartItemWhereInput;
    create: CartItemCreateInput;
    update: CartItemUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CartItemWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCartItemsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CartItemListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CartItemListTypeInfo,
    CartItemListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CartItemListTypeInfo,
  CartItemListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Product: ProductListTypeInfo;
  readonly ProductImage: ProductImageListTypeInfo;
  readonly Brand: BrandListTypeInfo;
  readonly ProductType: ProductTypeListTypeInfo;
  readonly CartItem: CartItemListTypeInfo;
};
