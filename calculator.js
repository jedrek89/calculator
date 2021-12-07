
function keypad() 
{
    document.getElementById("but_1").addEventListener("click", function()
    {
    console.log("Button 1 click");
    });
    
    document.getElementById("but_2").addEventListener("click", function()
    {
    console.log("Button 2 click");
    });   

    document.getElementById("but_3").addEventListener("click", function()
    {
    console.log("Button 3 click");
    }); 

    document.getElementById("but_4").addEventListener("click", function()
    {
    console.log("Button 4 click");
    }); 
}

keypad(); 