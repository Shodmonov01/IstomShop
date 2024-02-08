import "./ProductCard.scss";
import cardcart from "../../assets/images/cardcart.svg";

export const ProductCard = ({
  onCardClick,
  productimg,
  price,
  name,
  quant,
  subtitle,
  addToCart,
}) => {
  const handleAddToCart = () => {
    addToCart({ productimg, price, name, quant, subtitle });
  };
  return (
    <>
      <div className="productcard">
        <img
          className="productcard-img"
          onClick={onCardClick}
          src={productimg}
          alt=""
        />

        <p className="productcard-name">{name}</p>
        <p className="productcard-quan">Кол-во {quant} шт</p>

        <p className="productcard-subtitle">{subtitle}</p>

        <div className="productcard-bottom">
          <div className="productcard-price">
            <p className="card-price-text">Цена</p>
            <p className="istom-text">{price} ₽</p>
          </div>
          <button onClick={handleAddToCart} className="cart-btn istom-btn">
            <img src={cardcart} alt="" className="cart-btn "/>
          </button>
        </div>
        
      </div>
    </>
  );
};
