// document.getElementById("textArea").value = "xd";

const input ="null";

function keypad() 
{
    document.getElementById("but_percent").addEventListener("click", function()
        {
            input = "%";
            console.log(input);
        });
    
    document.getElementById("but_ce").addEventListener("click", function()
        {
            input = "CE";
            console.log(input);
        });   

    document.getElementById("but_c").addEventListener("click", function()
        {
            input = "C";
            console.log(input);
        });

    document.getElementById("but_bsp").addEventListener("click", function()
        {
            input = "<";
            console.log(input);
        });

    document.getElementById("but_x1").addEventListener("click", function()
        {
            input = "x1";
            console.log(input);
        });

    document.getElementById("but_x2").addEventListener("click", function()
        {
            input = "x2";
            console.log(input);
        });

    document.getElementById("but_x3").addEventListener("click", function()
        {
            input = "x3";
            console.log(input);
        });

    document.getElementById("but_x4").addEventListener("click", function()
        {
            input = "x4";
            console.log(input);
        });

    document.getElementById("but_7").addEventListener("click", function()
        {
            input = 7;
            console.log(input);
        }); 

    document.getElementById("but_8").addEventListener("click", function()
        {
            input = 8;
            console.log(input);
        }); 

    document.getElementById("but_9").addEventListener("click", function()
        {
            input = 9;
            console.log(input);
        }); 

    document.getElementById("but_x").addEventListener("click", function()
        {
            input = "x";
            console.log(input);
        }); 

    document.getElementById("but_4").addEventListener("click", function()
        {
            input = 4;
            console.log(input);
        }); 

    document.getElementById("but_5").addEventListener("click", function()
        {
            input = 5;
            console.log(input);
        }); 

    document.getElementById("but_6").addEventListener("click", function()
        {
            input = 6;
            console.log(input);
        }); 

    document.getElementById("but_-").addEventListener("click", function()
        {
            input = "-";
            console.log(input);
        }); 

    document.getElementById("but_1").addEventListener("click", function()
        {
            input = 1;
            console.log(input);
        }); 

    document.getElementById("but_2").addEventListener("click", function()
        {
            input = 2;
            console.log(input);
        }); 

    document.getElementById("but_3").addEventListener("click", function()
        {
            input = 3;
            console.log(input);
        }); 

    document.getElementById("but_plus").addEventListener("click", function()
        {
            input ="+";
            console.log(input);
        }); 

    document.getElementById("but_plus_minus").addEventListener("click", function()
        {
            input = "+/-"
            console.log(input);
        }); 

    document.getElementById("but_0").addEventListener("click", function()
        {
            input = 0;
            console.log(input);
        }); 

    document.getElementById("but_dot").addEventListener("click", function()
        {
            input = ","
            console.log(input);
        })

    document.getElementById("but_equal").addEventListener("click", function()
        {
            input = "="
            // console.log(input);
        }); 

        
    }; 

keypad(); 

console.log(input);

function checkInt () {
    
}
