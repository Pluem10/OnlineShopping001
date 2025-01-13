class Customer {
    private id:string;
    private address:string
    private phone:string
    private email:string

    constructor (id:string,address:string,phone:string,email:string){
        this.id=id
        this.address=address
        this.phone=phone
        this.email=email
    }
    public getID():string{
        return this.id;
    }
    // public setID(id:string):void{
    //     this.id = id 
    // }
    public getAddress():string{
        return this.address;
    }
    public setAddress(address:string):void{
         this.address = address
    }
    public getEmail():string{
        return this.email
    }
    public setEmail(email:string):void{
         this.email = email
    }
    public gePhone():string{
        return this.phone;
    }
    public setPhone(phone:string):void{
         this.phone = phone
    }
    toString():string{
return `[Customer ID = ${this.getID}(${this.address})(${this.email})(${this.phone})]`
    }
}
