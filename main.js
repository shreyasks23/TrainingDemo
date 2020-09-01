$(function () {
    $("#Multiply").on('click', function () {

        let a = $('#Num1').val();
        let b = $('#Num2').val();

        $.get('/FuncFromTxt', function (data) {
            
            var func = new Function('x','y',data);
            //console.log(func(a,b));  
           $("#sample").text(func(a,b));
        });
    });
});