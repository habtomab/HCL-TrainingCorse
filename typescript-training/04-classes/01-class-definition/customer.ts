class Customer {
    firstName:string;
    lastName:string;
    constructor(thefirst:string,thelast:string){
        this.firstName=thefirst;
        this.lastName=thelast;
    }
}
let myCustomer =new Customer("Martin","Tom");
//myCustomer.firstName="Martin";
//myCustomer.lastName="Tom";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);