import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

export const ProductThumbnail = ({ product }) => {
  const [hover, updateHover] = useState(false);
  const handleHover = () => {
    updateHover(!hover);
  };
  const sizes = Object.keys(JSON.parse(product.sizes));
  return (
    <Thumbnail onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <Link href="/products" style={{ background: 'blue' }}>
        <>
          <div className="img-container">
            <>
              <Image
                layout="fill"
                src={product.photo.image.publicUrlTransformed}
                alt=""
              />
            </>
            <div className={hover ? 'show-sizes sizes' : 'sizes'}>
              Sizes:
              <br />
              {sizes.map((size) => (
                <span key={size}>{size}, </span>
              ))}
            </div>
          </div>
          <h5 className="description">
            {product.name} <span>, {product.color}</span>{' '}
          </h5>
          <h5 className="price">£{product.price / 100}.00</h5>
        </>
      </Link>
    </Thumbnail>
  );
};

const Thumbnail = styled.div`
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.03);
  line-height: 0;
  * {
    font-size: 1.1rem;
    width: 100%;
    padding: 0;
  }
  .img-container {
    margin: 0;
    width: 100%;
    position: relative;
    overflow: hidden;
  }
  .sizes {
    width: 100%;
    position: absolute;
    transform: translateY(0);
    transition: all 0.5s ease;
    padding: 0.75rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;

    line-height: 2;
  }
  .show-sizes {
    transform: translateY(-100%);
  }
  .description {
    /* line-height: 0; */
    font-weight: 500;
    &:hover {
      color: #02e1f5;
      /* @media screen and (max-width: 700px) {
        color: black;
      } */
    }
    span {
      font-weight: 300;
      color: rgba(0, 0, 0, 0.7);
      /* @media screen and (max-width: 700px) {
        display: none;
      } */
    }
  }
  .price {
    padding: 0 0.5rem 0.25rem 0.5rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
`;
