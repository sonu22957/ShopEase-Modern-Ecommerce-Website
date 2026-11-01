import { useState } from "react";
import { ShoppingCart, Heart, Star, Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  function handleAddToCart() {
    addToCart(product);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  }

  const isNew = product.id <= 3;
  const isSale = product.id === 4 || product.id === 7;

  return (
    <>
      <div className="product-card">

        <div className="product-image">
          <img src={product.image} alt={product.name} loading="lazy" />

          {/* Badges */}
          {isNew && <span className="badge badge-new">NEW</span>}
          {isSale && <span className="badge badge-sale">SALE</span>}

          {/* Hover overlay */}
          <div className="product-image-overlay">
            <Link to={`/product/${product.id}`}>
              <button className="overlay-btn" title="Quick View" type="button">
                <Eye size={17} />
              </button>
            </Link>
            <button
              className="overlay-btn"
              title="Add to Cart"
              type="button"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={17} />
            </button>
          </div>

          {/* Wishlist */}
          <button
            className="wishlist-btn"
            type="button"
            onClick={() => setWishlisted(!wishlisted)}
            aria-label="Add to wishlist"
          >
            <Heart
              size={17}
              fill={wishlisted ? "#ef4444" : "none"}
              color={wishlisted ? "#ef4444" : "currentColor"}
            />
          </button>
        </div>

        <div className="product-info">
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>

          <div className="rating">
            <Star size={14} fill="#f59e0b" color="#f59e0b" />
            <span>{product.rating} (reviews)</span>
          </div>

          <div className="product-bottom">
            <h3>₹{product.price.toLocaleString("en-IN")}</h3>
            <button
              className="cart-btn"
              onClick={handleAddToCart}
              type="button"
            >
              <ShoppingCart size={15} />
              Add
            </button>
          </div>
        </div>

      </div>

      {/* Toast */}
      {toastVisible && (
        <div className="toast">
          <CheckCircle size={18} className="toast-icon" />
          <span><strong>{product.name}</strong> added to cart!</span>
        </div>
      )}
    </>
  );
}

export default ProductCard;