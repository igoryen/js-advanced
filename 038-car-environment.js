function two() {
    var isValid;
}

function one() {
    var isValid = true;
    two();
}

var isValid = false;
one();

/**
 * cs[0] CREATION
 * cs[0].two: function(){...}
 * cs[0].one: function(){...}
 * cs[0].isValid: undefined
 * cs[0] EXECUTION
 * line 10: cs[0].isValid: false
 * line 11: cs[0]one(): invoked
 *
 * cs[1] = one() environment
 * cs[1] CREATION
 * cs[1].isValid: undefined
 * cs[1] EXECUTION
 * line 7: cs[1].two(): invoked
 *
 * cs[2] = two() environment
 * cs[2] CREATION
 * cs[2].isValid: undefined
 * cs[2] EXECUTION // nothing to do
 *
 * cs[2] clears
 * cs[1] clears
 * cs[0] clears
 */