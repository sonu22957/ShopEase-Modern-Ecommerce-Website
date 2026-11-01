import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  { id: 1, name: "Men's Fashion", count: "120+ items", icon: "👔", cls: "category-card-1" },
  { id: 2, name: "Women's Fashion", count: "200+ items", icon: "👗", cls: "category-card-2" },
  { id: 3, name: "Electronics", count: "80+ items", icon: "🎧", cls: "category-card-3" },
  { id: 4, name: "Accessories", count: "150+ items", icon: "⌚", cls: "category-card-4" },
];

function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-content">
          <p className="subtitle">
            <Zap size={12} />
            NEW COLLECTION 2026
          </p>

          <h1>
            Discover Your
            <br />
            <span className="highlight">Perfect Style</span>
          </h1>

          <p>
            Explore the latest fashion trends and find products you love —
            delivered fast, priced right.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="shop-btn">
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link to="/products" className="shop-btn-outline">
              Browse All
            </Link>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Avg. Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="categories">
        <div className="section-header">
          <div>
            <p className="section-label">Browse</p>
            <h2 className="section-title">Shop By Category</h2>
          </div>
          <Link to="/products" className="view-all-link">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="category-list">
          {categories.map((cat) => (
            <Link to="/products" key={cat.id} className={`category-card ${cat.cls}`}>
              <div>
                <div className="category-icon">{cat.icon}</div>
                <div className="category-name">{cat.name}</div>
                <div className="category-count">{cat.count}</div>
              </div>
              <div className="category-arrow">→</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="products-section">
        <div className="section-header">
          <div>
            <p className="section-label">Handpicked</p>
            <h2 className="section-title">Featured Products</h2>
          </div>
          <Link to="/products" className="view-all-link">
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Home;