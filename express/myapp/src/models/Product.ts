let products = [];

class Product {
  id: number;
  title: string;
  price: number;
  description: string;

  constructor(id: number, title: string, price: number, description: string) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
  }

  async save() {
    this.id = products.length + 1;
    products.push(this);
  }

  async update() {
    const index = products.findIndex((product) => product.id === this.id);
    if (index !== -1) {
      products[index] = this;
    }
  }

  static async fetchAll() {
    return products;
  }

  static async findById(productId: number) {
    return products.find((product) => product.id === productId);
  }

  static async deleteById(productId: number) {
    products = products.filter((product) => product.id !== productId);
  }
}

export default Product;