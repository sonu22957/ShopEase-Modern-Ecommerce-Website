import { ShoppingCart, Search, User, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        ShopEase.
      </Link>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
        <button aria-label="Search">
          <Search size={18} />
        </button>
      </div>

      <div className="nav-icons">
        <Link to="/wishlist" className="nav-icon-btn" aria-label="Wishlist">
          <Heart size={20} />
        </Link>

        <Link to="/login" className="nav-icon-btn" aria-label="Account">
          <User size={20} />
        </Link>

        <Link to="/cart" className="nav-icon-btn" aria-label="Cart">
          <ShoppingCart size={20} />
          {totalItems > 0 && (
            <span className="cart-badge">{totalItems}</span>
          )}
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;