import { WebUser } from "./WebUser";
import { UserState } from "./UserState";
import { Customer } from "./Customer";
import { Product } from './Product';
import { Order } from "./Order";
import { LineItem } from './LineItem';
import { ShoppingCart } from "./ShoppingCart";

console.log("############# สินค้าเครื่องเขียน #############");
const product1 = new Product(`001`, `ดินสอ`, `คุณปลื้ม`);
const product2 = new Product(`002`, `ยางลบ`, `คุณปลื้ม`);
const product3 = new Product(`003`, `หนังสือ`, `คุณปลื้ม`);
const product4 = new Product(`004`, `ไม้บรรทัด`, `คุณปลื้ม`);
const product5 = new Product(`005`, `ปากกา`, `คุณปลื้ม`);

const products = [product1, product2, product3, product4, product5];
products.forEach((product) => console.log(product.toString()));

console.log("############# Web Users #############");

// สร้าง Web User 2 คน
const User1 = new WebUser(`001`, `8957561241`, );
const User2 = new WebUser(`002`, `9652055225`,);

console.log(User1.toString());
console.log(User2.toString());

console.log("############# Customers #############");

// สร้าง Customer 2 คน
const Customer1 = new Customer(`001`, `Nakhon Pathom`, `0878796542`, `SatuNaja001@mail.com`, User1);
const Customer2 = new Customer(`002`, `Bangkok`, `0885893541`, `Makamaka002@mail.com`, User2);

console.log(Customer1.toString());
console.log(Customer2.toString());




console.log(
    "############# Product #############"
)
const product0= new Product(
    `001`,`lay`,`Ex`
)
console.log(product1.toString());

console.log(
    "############# LineItem #############"
)
const linettem1 = new LineItem(
    50,100,product1
)
console.log(linettem1.toString());