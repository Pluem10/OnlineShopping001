import { Customer } from "./Customer";
import { Order } from './Order';
import { Payment } from './Payment';
import { Product } from './Product';
import { ShoppingCart } from './ShoppingCart';
export class Account {
    private payments:Payment[] = []
    private orders: Order[] = []
    private id: string;
    private billing_address: string;
    private is_closed: boolean;
    private open: string;
    private closed: string;    

    constructor(id: string, billing_address: string,is_closed:boolean,open:string,closed:string) {
    
        this.id = id;
        this.billing_address = billing_address;
        this.is_closed = is_closed;
        this.open = open;
        this.closed = closed;
    }

    public getId(): string {
        return this.id;
    }

    public getBilling_address(): string {
        return this.billing_address;
    }

    public setBilling_address(billing_address: string): void {
        this.billing_address = billing_address;
    }

    public getIs_closed(): boolean {
        return this.is_closed;
    }

    public setIs_closed(is_closed: boolean): void {
        this.is_closed = is_closed;
        if (is_closed) {
            this.closed 
        }
    }

    public getOpen(): string {
        return this.open;
    }

    public getClosed(): string {    
        return this.closed;
    }
    public addOrder(order:Order):void{
        this.orders.push(order)
    }
    public addPayment(payments:Payment):void{
        this.payments.push(payments)
    }
    public getPayment():Payment[]{
          return this.payments
    }
    public getOrders():Order[]{
        return this.orders
    }
}