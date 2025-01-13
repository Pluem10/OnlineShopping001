import {Product} from '/.Product';

export class LineItem{
    private quantity:number;
    private price:number;
    private product:CSSMathProduct;
constructor(quantiy:number,price:number,product:Product){
    this.quantity =   quantiy ;
    this.price = price ; 
    this.product = product ;
}
 public getQuantiy():number{
    return this.quantity
    }
 public setQuantiy(quantiy:number):void{
         this.quantity = quantiy
    }
public getPrice():number{
     return this.price
}
public setPrice(price:number):void{
    this.price = price
}
}
