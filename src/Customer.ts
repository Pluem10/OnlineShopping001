import { WebUser } from './WebUser';
import { Account } from './Account';
export class Customer {
    private account : Account
    private webUser : WebUser
    private id: string
    private address:string
    private phone:string
    private email:string


    constructor(account:Account,id:string,address:string,phone:string,email:string,webUser:WebUser){
        this.account = account
        this.id = id
        this.address  = address
        this.phone  = phone 
        this.email = email
        this.webUser = webUser
    }
    public getID():string{
        return this.id
    }

    public getAddress():string{
        return this.address
    }

    public setAddress(address:string):void{
        this.address = address
    }

    public getPhone():string{
        return this.phone
    }

    public setPhone(phone:string):void{
        this.phone = phone
    }

    public getEmail():string{
        return this.email
    }

    public setEmail(email:string):void{
        this.email = email
    }
    toString(): string {
    return `Customer [ID = ${this.id}],[Address = ${this.address}],[Phone = ${this.phone}],[Email = ${this.email}]`;
    }
}