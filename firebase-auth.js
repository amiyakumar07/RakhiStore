// ============================================================
//  RakhiStore – Firebase Authentication Module
//  Uses Firebase v9 compat (CDN) for seamless HTML page usage
// ============================================================

// Firebase configuration – provided by project owner
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBczsNIB2NQ1KMphv7zXxFVlFgINCMKGuY",
  authDomain: "rakhi-stores.firebaseapp.com",
  projectId: "rakhi-stores",
  storageBucket: "rakhi-stores.firebasestorage.app",
  messagingSenderId: "1057252758103",
  appId: "1:1057252758103:web:ab6beee20b9a37edd84912",
  measurementId: "G-E3L0V0Q2QR"
};

// ---- Initialise Firebase (idempotent guard) ----
let _firebaseApp = null;
let _auth = null;
let _googleProvider = null;

function ensureFirebase() {
  if (_auth) return; // already initialised
  try {
    if (!firebase.apps.length) {
      _firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);
    } else {
      _firebaseApp = firebase.app();
    }
    _auth = firebase.auth();
    _googleProvider = new firebase.auth.GoogleAuthProvider();
    _googleProvider.setCustomParameters({ prompt: 'select_account' });
    // Persistence: keep user logged-in across tabs/sessions
    _auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
  } catch (err) {
    console.error("[RakhiStore Firebase] Init error:", err);
  }
}

// ---- Public API ----

/**
 * Sign in with Google popup.
 * Returns a Promise resolving to the Firebase User on success.
 */
async function signInWithGoogle() {
  ensureFirebase();
  try {
    const result = await _auth.signInWithPopup(_googleProvider);
    return result.user;
  } catch (err) {
    if (err.code !== 'auth/popup-closed-by-user') {
      console.error("[RakhiStore] Google sign-in error:", err);
    }
    throw err;
  }
}

/**
 * Sign in with email + password.
 */
async function signInWithEmail(email, password) {
  ensureFirebase();
  try {
    const credential = await _auth.signInWithEmailAndPassword(email, password);
    return credential.user;
  } catch (err) {
    console.error("[RakhiStore] Email sign-in error:", err);
    throw err;
  }
}

/**
 * Register a new account with email + password.
 */
async function createAccount(email, password, displayName) {
  ensureFirebase();
  try {
    const credential = await _auth.createUserWithEmailAndPassword(email, password);
    if (displayName) {
      await credential.user.updateProfile({ displayName });
    }
    return credential.user;
  } catch (err) {
    console.error("[RakhiStore] Register error:", err);
    throw err;
  }
}

/**
 * Send password-reset email.
 */
async function sendPasswordReset(email) {
  ensureFirebase();
  await _auth.sendPasswordResetEmail(email);
}

/**
 * Sign out the current user.
 */
async function firebaseSignOut() {
  ensureFirebase();
  try {
    await _auth.signOut();
  } catch (err) {
    console.error("[RakhiStore] Sign-out error:", err);
  }
  // Always clear local cart / order data on logout for privacy
  localStorage.removeItem("rakhi_user");
  window.location.href = "index.html";
}

/**
 * Get the currently authenticated Firebase user (or null).
 */
function getFirebaseUser() {
  if (!_auth) return null;
  return _auth.currentUser;
}

/**
 * Register a callback that fires whenever auth state changes.
 * Returns the unsubscribe function.
 */
function onAuthStateChange(callback) {
  ensureFirebase();
  return _auth.onAuthStateChanged(callback);
}

/**
 * Map Firebase error codes to friendly messages.
 */
function friendlyAuthError(code) {
  const MAP = {
    'auth/email-already-in-use': 'This email is already registered. Try signing in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-not-found': 'No account found with this email. Please register first.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Please check your connection.',
    'auth/popup-blocked': 'Popup was blocked by your browser. Allow popups for this site.',
    'auth/cancelled-popup-request': 'Sign-in was cancelled.',
    'auth/internal-error': 'An internal error occurred. Please try again.'
  };
  return MAP[code] || 'Something went wrong. Please try again.';
}

// ---- Initialise on script load ----
document.addEventListener('DOMContentLoaded', () => {
  ensureFirebase();
});
