export class Product {
  ID_Product: string;
  productName: string;
  productImg: string;
  Size: number;
  Color: string;
  Quantity: number
  Sex: string;
  Price: string;
  Description: string;
  Brand: string;

  constructor(ID_Product: string, productName: string, productImg: string, Size: number,
     Color: string, Quantity: number,Sex: string,Price: string, Description: string, Brand: string){
    this.ID_Product = ID_Product;
    this.productName = productName;
    this.productImg = productImg;
    this.Size = Size;
    this.Color = Color;
    this.Quantity = Quantity;
    this.Sex = Sex;
    this.Price = Price;
    this.Description = Description;
    this.Brand = Brand;
  }
}
export var products: Product[] = [
  new Product('P01', 'Hat','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',40,'White',10,'Male','400000','Sneaker Adidas','Adidas'),
  new Product('P02', 'Jeans','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',41,'Black',10,'Male','400000','Sneaker','Nike'),
  new Product('P02', 'Jeans','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',42,'White',10,'Male','400000','Sneaker','Puma'),
  new Product('P02', 'Jeans','https://assets.adidas.com/images/w_600,f_auto,q_auto/7ed0855435194229a525aad6009a0497_9366/Giay_Superstar_trang_EG4958_01_standard.jpg',39,'White',10,'Female','400000','Sneaker','Puma'),
];
