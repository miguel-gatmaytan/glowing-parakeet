export class ProductItemEntity {
  constructor(product) {
    this.title = product.title;
    this.image = product.image;
    this.price = product.price;
    this.description = product.description;
    this.category = product.category;
    this.id = product.id;
  }
}

export default ProductItemEntity;
