function createOrder(b)
{
   
    console.log("Create Oder Function is Running");
    b(showOrderSummanry);
}

function proceed_to_payment(c)
{
    console.log("proceed To Payment Function is running");
    c();
}

function showOrderSummanry()
{
    console.log("Show Oder Summanry Function is running");

}
function myfun(fun)
{
    fun(proceed_to_payment);
    }
myfun(createOrder);