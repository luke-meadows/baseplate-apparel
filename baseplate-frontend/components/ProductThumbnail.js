import { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

export const ProductThumbnail = ({ product }) => {
  const [hover, updateHover] = useState(false);
  const handleHover = () => {
    updateHover(!hover);
  };
  const sizes = Object.keys(JSON.parse(product.sizes));
  return (
    <Link href={`/product/${product.id}`}>
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

const Thumbnail = styled.div`
  cursor: pointer;
  * {
    font-size: 1.1rem;
    width: 100%;
    margin: 0;
  }

  .img-container {
    line-height: 0;
    position: relative;
    overflow: hidden;
    img {
      height: 100%;
      object-fit: fill;
    }
  }

  .sizes {
    width: 100%;
    position: absolute;
    transition: all 0.5s ease;
    padding: 0.75rem;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    line-height: 1.5;
    font-weight: 300;
  }
  .show-sizes {
    transform: translateY(-100%);
  }
  h5 {
    /* font-size: 1.1rem; */
  }
  .description {
    font-weight: 400;
    line-height: initial;
    margin-top: 5px;
    &:hover {
      color: #02e1f5;
    }
    span {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.7);
      /* color: #515151; */
    }
  }
  .price {
    font-weight: 400;
    color: rgba(0, 0, 0, 0.7);
  }
`;
