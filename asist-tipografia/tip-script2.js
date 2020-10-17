$(document).ready(function () {
    
    $("#list-tip>li").each(function (index) { 
         //console.log(index + ": " + $(this).text());
         let i = $(this).text();
         $(this).click(function () { 
            $("div#tablero").css("font-family", `${i}`);
             
         });

    });

    $("#list-color>li").each(function (index) { 
        //console.log(index + ": " + $(this).text());
        let i = $(this).text();
        $(this).click(function () { 
           $("div#tablero").css("color", `${i}`);
        });
        $(this).css("background-color", `${i}`);

   });
   
   $("#claro").click(function () { 
        $("div#tablero").css("background-color", "#fff");
    });

    $("#oscuro").click(function () { 
        $("div#tablero").css("background-color", "#030303");
    });


});