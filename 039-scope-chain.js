// ===
var num0 = '0'

// function f1_say_my_name() {
//     var num1 = '1'
//     console.log(num0)
//     return f2_find_my_name()
// }

// function f2_find_my_name() {
//     console.log(num0)
//     var num2 = '2';
//     return f3_print_my_name();
// }

// function f3_print_my_name() {
//     console.log(num0)
//     var num3 = '3';
//     console.log("igoryen")
// }


// f1_say_my_name();

//============================

function f1_say_my_name() {
    var num1 = '1'
    
    return function f2_find_my_name() {
        
        var num2 = '2';
        return function f3_print_my_name() {
            console.log(num1)
            console.log(num2)
            console.log(num3)
            var num3 = '3';
            console.log("igoryen")
        }

    }
}



f1_say_my_name()()()