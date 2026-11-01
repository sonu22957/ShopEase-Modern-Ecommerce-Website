import { useParams, Link } from "react-router-dom";
import { Star, ShoppingCart, Heart, ArrowLeft } from "lucide-react";
import { useCart } from "../context/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="empty-cart">
        <h2>Product not found</h2>
        <Link to="/" className="continue-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="product-details-page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to Products
      </Link>

      <div className="product-details-layout">
        <div className="product-details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-details-info">
          <p className="product-category">{product.category}</p>
          <h1>{product.name}</h1>

          <div className="rating">
            <Star size={18} fill="orange" color="orange" />
            <span>{product.rating} / 5.0</span>
          </div>

          <h2 className="details-price">₹{product.price}</h2>

          <p className="product-description">
            A high-quality {product.category.toLowerCase()} product, crafted for comfort and style.
            Built to last, this is a great addition to your collection.
          </p>

          <div className="details-actions">
            <button className="cart-btn" onClick={() => addToCart(product)}>
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <button className="wishlist-outline-btn">
              <Heart size={20} />
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;