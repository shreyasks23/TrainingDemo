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

    $("#Concatinate").on('click', function () {
        
        let firstName = $('#Num1').val();
        let lastName = $('#Num2').val();
    
        function Student( firstName, lastName) {            
            this.firstName = firstName;
            this.lastName = lastName;
            var obj = this;
            this.fullNameUsingAnonymous = function () {
                $("#sample3").text(this.firstName + " " + this.lastName) 
                setTimeout(function () {
                    //creates a new instance of this ,hides outer scope of this
                    $("#sample1").text(obj.firstName + " " + obj.lastName)                    
                }, 1000)
            }
            this.fullNameUsingArrow = function () {
                setTimeout(() => {
                    //uses this instance of outer scope
                    $("#sample2").text(this.firstName + " " + this.lastName)                    
                }, 3000)
            }
        }
        var s1 = new Student(firstName, lastName);
        s1.fullNameUsingAnonymous();
        s1.fullNameUsingArrow();     
        
    });
});