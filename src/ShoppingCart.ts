import { LineItem } from './LineItem';
export class ShoppingCart {
    private created: string;
    private lineItem:LineItem[]=[]

    constructor(created:string) {
        this.created = created;
    }

    public getCreated(): string {
        return this.created;
    }
    public getlineItems():LineItem[]{
        return this.lineItem
    }
    public addLineItem(lineItem:LineItem):void{
        this.lineItem.push(lineItem)

    }
    public toString():string{
        return `Shopping[Create : ${this.created} Lineitem[${this.lineItem.toString()}]]`
    }
}