let products: any[] = [];

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

  save() {
    products.push(this);
  }

  update() {
    const index = products.findIndex(p => p.id === this.id);
    if (index !== -1) {
      products[index] = this;
    }
  }

  static fetchAll() {
    return products;
  }

  static findById(productId: number) {
    return products.find(p => p.id === productId);
  }

  static deleteById(productId: number) {
    products = products.filter(p => p.id !== productId);
  }
}

export default Product;
