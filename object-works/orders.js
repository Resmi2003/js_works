
var orders = {
    pizza : 10,
    burger : 20,
    pepsi : 25,
    alfham : 27
}


var newOrderItem = "burger";
var qty = 2;


if(newOrderItem in orders){
       orders[newOrderItem] += qty;    // here burger is already there, so if block will work. it will update to 22. use square brackets instead of dot for adding and updating.
}

else{
      orders[newOrderItem] = qty;
}

console.log(orders);
