/**
 * An array of routes that are accessible to the public
 * These route to not require authentification
 * @type {string[]}
 */
export const publicRoutes = [
   "/",
   "/auth/new-verification",
]

/**
 * An array of routes that are used for authentification
 * These route will redirect logged in users to /settings
 * @type {string[]}
 */
export const authRoutes = [
   "/auth/login",
   "/auth/register",
   "/auth/error",
   "/auth/new-verification",
   "/auth/reset",
   "/auth/new-password",   
]

/**
 * The prefix for API authentification routes
 * Routes that start with this prefix are used for API authentification purposes
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";