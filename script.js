
var productTotalAmt = document.getElementById('product-total-amt');
var shippingCharge = document.getElementById('shipping-charge');
var totalCartAmt = document.getElementById('total-cart-amt');


const decrease = (incdec, itemprice) => {
    var itemVal = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    console.log(itemVal.value);

    if (itemVal.value <= 0) {
        itemVal.value = 0;
        alert('Negative value not allowed :(');
        itemVal.style.background = 'white';
        itemVal.style.color = 'black';
    }
    else {
        itemVal.value = parseInt(itemVal.value) - 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) - 15;
        productTotalAmt.innerHTML = parseInt(productTotalAmt.innerHTML) - 15;
        totalCartAmt.innerHTML = parseInt(productTotalAmt.innerHTML) + parseInt(shippingCharge.innerHTML);


    }
}


const increase = (incdec, itemprice) => {
    var itemVal = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);

    console.log(itemVal.value);

    if (itemVal.value >= 5) {
        itemVal.value = 5;
        alert('maximum 5 will allowed :)');
        itemVal.style.background = 'red';
        itemVal.style.color = 'white';
    }
    else {
        itemVal.value = parseInt(itemVal.value) + 1;
        itemprice.innerHTML = parseInt(itemprice.innerHTML) + 15;
        productTotalAmt.innerHTML = parseInt(productTotalAmt.innerHTML) + 15;
        totalCartAmt.innerHTML = parseInt(productTotalAmt.innerHTML) + parseInt(shippingCharge.innerHTML);
    }
}