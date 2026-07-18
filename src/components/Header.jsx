import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const { cartCount } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (currentUser) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="bg-surface/80 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm h-20">
      <div className="flex justify-between items-center w-full px-margin-desktop max-w-container-max mx-auto h-full">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
          RakhiStore
        </Link>
        
        <nav className="hidden lg:flex items-center space-x-8">
          <Link to="/collection" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Shop</Link>
          <Link to="/collection?category=Designer" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Rakhi</Link>
          <Link to="/collection?category=Gift%20Hampers" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Gift Hampers</Link>
          <Link to="/collection?category=Personalized" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Personalized</Link>
          <Link to="/collection?category=Sweets" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Sweets</Link>
          <Link to="/contact" className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors duration-300">Corporate</Link>
        </nav>

        <div className="flex items-center space-x-6">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-transform active:scale-95 duration-200">search</button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-transform active:scale-95 duration-200">favorite</button>
          
          <Link to="/cart" className="relative p-1">
            <span className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-transform active:scale-95 duration-200">shopping_bag</span>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <button 
            onClick={handleProfileClick}
            className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-transform active:scale-95 duration-200"
          >
            person
          </button>
        </div>
      </div>
    </header>
  );
}
