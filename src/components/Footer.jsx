import React, { useState } from "react";
import { Link } from "react-router-dom";
import { showToast } from "./Toast";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast("Subscribed! Thank you for joining our festive circle.");
    setEmail("");
  };

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-gutter px-margin-desktop py-xl max-w-container-max mx-auto">
        <div className="lg:col-span-2">
          <div className="font-headline-sm text-headline-sm font-semibold text-primary mb-4">RakhiStore</div>
          <p class="font-body-sm text-body-sm text-on-surface-variant">
            Reviving the timeless beauty of tradition with a touch of modern luxury. Curated Rakhis for every brother, crafted with love.
          </p>
        </div>
        
        <div>
          <h4 className="font-headline-sm text-[16px] text-secondary mb-md">Collections</h4>
          <ul className="space-y-sm">
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/collection">Heritage Gold</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/collection">Silver Filigree</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/collection">Silk Threads</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/collection">Kids Special</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-headline-sm text-[16px] text-secondary mb-md">Customer Support</h4>
          <ul className="space-y-sm">
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/about">About Us</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/contact">Contact Us</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/privacy">Privacy Policy</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/terms">Terms & Conditions</Link></li>
            <li><Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary hover:underline transition-all" to="/refund">Refund & Cancellation</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h4 className="font-headline-sm text-[16px] text-secondary mb-md">Newsletter</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">Join our circle for exclusive festive collections and early access.</p>
          <form onSubmit={handleSubscribe} className="flex gap-xs">
            <input 
              className="flex-1 bg-surface-container-low border-outline-variant focus:ring-secondary focus:border-secondary rounded-lg px-3 py-2 font-body-sm" 
              placeholder="Email Address" 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-secondary text-white px-md py-2 rounded-lg font-button-text hover:bg-secondary/90 transition-all">Join</button>
          </form>
        </div>
      </div>
      
      <div className="px-margin-desktop py-md border-t border-outline-variant/30 text-center">
        <span className="font-label-caps text-label-caps text-on-surface-variant">
          © 2024 RakhiStore. All rights reserved. Crafted with Tradition.
        </span>
      </div>
    </footer>
  );
}
