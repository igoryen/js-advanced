var heyhey = function doodle() {
    return 'heyhey';
}

heyhey();
doodle();

/**
 * cs[0] CREATION
 * L1: cs[0].heyhey = f-object whole
 * cs[0] EXECUTION
 * L5: run cs[0].heyhey()
 *
 * cs[1] heyhey() environment
 * cs[1] CREATION
 * nothing to do
 * cs[1] EXECUTION
 * L2: return 'heyhey' // heyhey
 * cs[1] clears
 *
 * cs[0].doodle // ReferenceError: doodle is not defined
 */

//===================================
// 'use strict'

// function weird() {
//     height = 50;
//     return height;
// }
// weird();

/**
 * cs[0] CREATION
 * L1: cs[0].weird = f-object
 * cs[0] EXECUTION
 * L5: run cs[0].weird
 *
 * cs[1] = weird() environment
 * cs[1] CREATION
 * L2: 'height'??? --> ReferenceError: height is not defined
 *
 */