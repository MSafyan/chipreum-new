var BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_DEV;

if (process.env.NEXT_PUBLIC_NDOE_ENV === "staging") {
  BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_STAGING;
}
if (process.env.NEXT_PUBLIC_NDOE_ENV === "production") {
  BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_PROD;
}

// export const nftLink = 'https://nft-marketplace-msafyan.vercel.app';
export const nftLink = "https://nft.cipherem.com";
// export const nftLink = 'http://localhost:3001';
// export const dootLink = 'https://dootfe.vercel.app/auth-login';
export const dootLink = "https://chat.cipherem.com/auth-login";
// export const dootLink = 'http://localhost:3002';
export const homeLink = "https://cipherem.com";

export default { BASE_URL };
