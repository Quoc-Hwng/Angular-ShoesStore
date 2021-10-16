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
