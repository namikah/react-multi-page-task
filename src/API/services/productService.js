import { HttpClient } from "../httpClient";

class ProductService extends HttpClient {
 
    constructor(){
        super("https://reqres.in/api/");
    }

  async getProducts(props=""){
      return await this.get("products/" + props);
  };
}

export const productService = new ProductService()