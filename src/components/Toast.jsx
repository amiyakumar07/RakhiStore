import React, { useState, useEffect } from "react";

export default function Toast() {
  const [toast, setToast] = useState({ message: "", visible: false, isError: false });

  useEffect(() => {
    const handleToast = (e) => {
      setToast({
        message: e.detail.message,
        visible: true,
        isError: !!e.detail.isError
      });
    };

    window.addEventListener("rakhi_toast", handleToast);
    return () => window.removeEventListener("rakhi_toast", handleToast);
  }, []);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, visible: false }));
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [toast.visible]);

  return (
    <div
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 py-3.5 px-6 rounded-full shadow-2xl flex items-center gap-3 transform transition-all duration-500 z-[9999] max-w-sm text-center ${
        toast.visible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      } ${toast.isError ? "bg-red-50 border border-red-200 text-red-700" : "bg-[#1b1b1c] text-[#fcf9f8]"}`}
    >
      <span className={`material-symbols-outlined ${toast.isError ? "text-red-600" : "text-secondary-fixed"}`}>
        {toast.isError ? "error" : "check_circle"}
      </span>
      <span className="font-body-md message-text">{toast.message}</span>
    </div>
  );
}

// Utility function to trigger the toast from anywhere
export function showToast(message, isError = false) {
  window.dispatchEvent(new CustomEvent("rakhi_toast", { detail: { message, isError } }));
}
