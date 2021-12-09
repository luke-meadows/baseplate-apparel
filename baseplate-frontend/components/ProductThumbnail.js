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
    <Link href="/">
      <Thumbnail onMouseEnter={handleHover} onMouseLeave={handleHover}>
        <div className="img-container">
          <img src={product.photo.image.publicUrlTransformed} alt="" />
          <div className={hover ? 'show-sizes sizes' : 'sizes'}>
            Sizes:
            <br />
            {sizes.map((size, i) => (
              <span key={i}>
                {size}
                {i === sizes.length - 1 ? '' : ','}{' '}
              </span>
            ))}
          </div>
        </div>
        <h5 className="description">
          {product.name}
          <span>, {product.color}</span>
        </h5>
        <h5 className="price">£{product.price / 100}.00</h5>
      </Thumbnail>
    </Link>
  );
};

const Thumbnail = styled.a`
  cursor: pointer;
  * {
    font-size: 1.1rem;
    width: 100%;
    margin: 0;
  }

  .img-container {
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
    font-weight: 500;
    &:hover {
      color: #02e1f5;
    }
    span {
      font-weight: 300;
      color: rgba(0, 0, 0, 0.7);
    }
  }
  .price {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
`;
