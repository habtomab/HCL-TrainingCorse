var Customer = /** @class */ (function () {
    function Customer(thefirst, thelast) {
        this.firstName = thefirst;
        this.lastName = thelast;
    }
    return Customer;
}());
var myCustomer = new Customer("Martin", "Tom");
//myCustomer.firstName="Martin";
//myCustomer.lastName="Tom";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
