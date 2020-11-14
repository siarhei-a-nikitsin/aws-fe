import { generatePath } from "react-router";

enum Environment {
  Development = "dev"
}

const services = {
  products: {
    baseUrl: "products",
    methods: {
      allProducts: "",
      productById: "/:id"
    }
  },
  importProducts: {
    baseUrl: "import",
    methods: {
      getSignedUrl: "?:name"
    },
  },
}

const getUrl = (service: string, method: string, params: { [key: string]: any } = {}, environment = Environment.Development) =>
  generatePath(`/${environment}/${service}${method}`, params);

const ApiRoutes = {
  products: getUrl(services.products.baseUrl, services.products.methods.allProducts),
  productById: (productId: string) => getUrl(services.products.baseUrl, services.products.methods.productById, { id: productId }),

  // import: (fileName: string) => getUrl(services.importProducts.baseUrl, services.importProducts.methods.getSignedUrl, { name: fileName }),
  import: 'https://y4tw06shu3.execute-api.eu-west-1.amazonaws.com/dev',

  product: 'https://89u84drm88.execute-api.eu-west-1.amazonaws.com/dev',
  order: 'https://.execute-api.eu-west-1.amazonaws.com/dev',
  bff: 'https://.execute-api.eu-west-1.amazonaws.com/dev'
};

export default ApiRoutes;
