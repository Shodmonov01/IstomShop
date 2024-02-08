import "./StoreProductCard.scss";
import cardcart from "../../assets/images/cardcart.svg";

export const StoreProductCard = ({
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
          <button onClick={handleAddToCart} className=" istom-btn">
            <img src={cardcart} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
