$(".remove-item1").click(function(){
    $(".cart-item1").remove();
})
$(".remove-item2").click(function(){
    $(".cart-item2").remove();
})

function totalPrice(){
    var subTotal = parseFloat($(".price").text()) + parseFloat($(".price2").text());
    $("#sub-total").text(subTotal);
    var tax = Math.round(subTotal / 100 * 15);
    $("#tax").text(tax);
    var total = subTotal + tax;
    $("#total").text(total);
}
// function tax(){
//     var subTotal = parseFloat($(".price").text()) + parseFloat($(".price2").text());
//     return subTotal / 100 * 15;
// }

// cart
    $(".plus-cart1").click(function(){
        var inputValue = $("#cart1-input").val();
        var inputValueNumber = parseFloat(inputValue);
        $("#cart1-input").val(inputValueNumber + 1);
        
        var inputValue = parseFloat($("#cart1-input").val()) * 1219;
        $(".price").text(inputValue); 

        totalPrice();
    })

$(".minus-cart1").click(function(){
    var inputValue = $("#cart1-input").val();
    var inputValueNumber = parseFloat(inputValue);
    $("#cart1-input").val(inputValueNumber - 1);

    var inputValue = parseFloat($("#cart1-input").val()) * 1219;
    $(".price").text(inputValue);

    totalPrice();
})



    $(".plus-cart2").click(function(){
        var inputValue = parseFloat($("#cart2-input").val());
        $("#cart2-input").val(inputValue + 1);
        
        // var inputValue = ;
        $(".price2").text( parseFloat($("#cart2-input").val()) * 59 ); 

        totalPrice();
    })

$(".minus-cart2").click(function(){
    var inputValue = parseFloat($("#cart2-input").val());
        $("#cart2-input").val(inputValue - 1);
        $(".price2").text( parseFloat($("#cart2-input").val()) * 59 ); 

        totalPrice();
    // var inputValue = parseFloat($("#cart1-input").val()) * 1219;
    // $(".price").text(inputValue);
})


// total price   ;
        // 
