const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = "prod";
const prodUrl = "https://cooperhollmaier.com";
const devUrl = "https://localhost:8080";
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

const folder = {
  assets: "assets",
};

const dir = {
  img: `/${folder.assets}/img/`,
};

module.exports = {
  siteName: "Cooper Hollmaier",
  author: "Cooper Hollmaier",
  environment,
  isProd,
  folder,
  base: {
    site: baseUrl,
    img: `${baseUrl}${dir.img}`,
  },
};
