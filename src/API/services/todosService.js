import { HttpClient } from "../httpClient";

class Todos extends HttpClient {
 
    constructor(){
        super("https://jsonplaceholder.typicode.com/");
    }

  async getTodos(){
      return await this.get("todos");
  };
}

export const todos = new Todos()