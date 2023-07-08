var BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_DEV;

if (process.env.NEXT_PUBLIC_NDOE_ENV === "staging") {
  BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_STAGING;
}
if (process.env.NEXT_PUBLIC_NDOE_ENV === "production") {
  BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_PROD;
}

export default { BASE_URL };
