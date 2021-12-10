function sayMyName() {
    debugger;
    var a = 'a';
    return function findName() {
        var b = 'b';
        return function printName() {
            var c = 'c';
            console.log(a);
            return 'igoryen';
        }
    }
}

sayMyName()()();

/**
 * cs[0] CREATION/PARSING
 * cs[0].sayMyName = f-object
 * cs[0] EXECUTION
 * L12: sayMyName()
 *
 * cs[1] = sayMyName() environment
 * cs[1] CREATION
 * cs[1].a = 'undefined'
 * cs[1] EXECUTION
 * L2: cs[1].a = 'a' <--- corrected from previous commit
 * L3: return text of findName()
 * [???] add '()' and run
 *
 * cs[2] = findName() environment
 * cs[2] CREATION
 * cs[2].b = 'undefined'
 * cs[2] EXECUTION
 * L4: cs[2].b = 'b'
 * L5: printName()
 * [???] add '()' and run
 *
 * cs[3] = printName() environment
 * cs[3] CREATION
 * cs[3].c = 'undefined'
 * cs[3] EXECUTION
 * L6: cs[3].c = 'c'
 * L8: cs[3].a: not found
 *     cs[2].a: not found
 *     cs[1].a: "a" // --> a
 *
 */

//====================
// var x = 'x';

// function findName() {
//     console.log(x);
//     var b = 'b';
//     return printName();
// }

// function printName() {
//     var c = 'c';
//     return 'igoryen';
// }

// function sayMyName() {
//     var a = 'a';
//     return findName();
// }

// sayMyName();

/**
 * cs[0] CREATION/PARSING
 * cs[0].x: undefined
 * cs[0].findName: all f-object
 * cs[0].sayMyName: all f-object
 * cs[0] EXECUTION
 * L1: cs[0].x = 'x'
 * L19: sayMyName()
 *
 * cs[1] = sayMyName() environment
 * cs[1] CREATION/PARSING
 * cs[1].a = 'undefined'
 * cs[1] EXECUTION
 * L16: findName()
 *
 * cs[2] = findName() env
 * cs[2] CREATION/PARSING
 * cs[2].b = 'undefined'
 * cs[2] EXECUTION
 * L4: search for cs[2].x: not found
 *         search for cs[1].x: not found
 *         search for cs[0].x: found 'x' // --> x
 * L5: cs[2].b = 'b'
 * L6: printName()
 *
 * cs[3] printName() environment
 * cs[3] CREATION/PARSING
 * cs[3].c = 'undefined'
 * cs[3] EXECUTION
 * L10: cs[3].c = 'c'
 * L11: // --> igoryen
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