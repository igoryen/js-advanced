var x = 'x';

function findName() {
    console.log(x);
    var b = 'b';
    return printName();
}

function printName() {
    var c = 'c';
    return 'igoryen';
}

function sayMyName() {
    var a = 'a';
    return findName();
}

sayMyName();

/**
 * cs[0] CREATION/PARSING
 * cs[0].x: undefined
 * cs[0].findName: all f-object
 * cs[0].sayMyName: all f-object
 * cs[0] EXECUTION
 * line 1: cs[0].x = 'x'
 * line 19: sayMyName()
 *
 * cs[1] = sayMyName() environment
 * cs[1] CREATION/PARSING
 * cs[1].a = 'undefined'
 * cs[1] EXECUTION
 * line 16: findName()
 *
 * cs[2] = findName() env
 * cs[2] CREATION/PARSING
 * cs[2].b = 'undefined'
 * cs[2] EXECUTION
 * line 4: search for cs[2].x: not found
 *         search for cs[1].x: not found
 *         search for cs[0].x: found 'x' // --> x
 * line 5: cs[2].b = 'b'
 * line 6: printName()
 *
 * cs[3] printName() environment
 * cs[3] CREATION/PARSING
 * cs[3].c = 'undefined'
 * cs[3] EXECUTION
 * line 10: cs[3].c = 'c'
 * line 11: // --> igoryen
 *
 * cs[3] clears
 * cs[2] clears
 * cs[1] clears
 * cs[0] clears
 *
 */



//==================
// var num0 = '0'

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

// function f1_say_my_name() {
//     var num1 = '1'

//     return function f2_find_my_name() {

//         var num2 = '2';
//         return function f3_print_my_name() {
//             console.log(num1)
//             console.log(num2)
//             console.log(num3)
//             var num3 = '3';
//             console.log("igoryen")
//         }

//     }
// }



// f1_say_my_name()()()