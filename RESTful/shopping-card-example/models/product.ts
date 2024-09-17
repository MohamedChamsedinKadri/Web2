let products: Product[] =[];

class Product{
    id:number;
    title: string;
    price: number;
    description:string;

    constructor(id:number, title: string ,price: number ,description:string ){
        this.id = id;
        this.title = title;
        this.price = price;
        this.description=description;
    }
    save(){
        this.id=Math.random();
        products.push(this);
        return this;
    }
    update(){
        const index=products.findIndex(p=>p.id === this.id)
        if (index > -1) {
            products.splice(index, 1, this);
            return this;
        } else {
            throw new Error('NOT Found');
        }
    }
    static fetchAll() {
        return products;    
    }

    static findById(productId: number) {
        const index = products.findIndex(p => p.id === productId);
        if (index > -1) {
            return products[index];
        } else {
            throw new Error('NOT Found');
        }
    }
    static deleteById(productId: number) {
        const index = products.findIndex(p => p.id === productId);
        if (index > -1) {
            products = products.filter(p => p.id !== productId);
        } else {
            throw new Error('NOT Found');
        }
    }


}
export default Product;
