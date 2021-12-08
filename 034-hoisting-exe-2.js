var faveFood = "grapes";

var foodThoughts = function () {
    console.log("Original fave food: " + faveFood);

    var faveFood = "lobster";

    console.log("New fave food: " + faveFood);
}

foodThoughts();

/**
 * cs == call stack
 *
 * cs[0] = global environment
 *
 * cs[0].creationPhase starts.
 * line 1: var! cs[0].faveFood = undefined.
 * line 3: var! cs[0].foodThoughts = undefined.
 *
 * cs[0].executionPhase:
 * line 1: cs[0].faveFood = "grapes"
 * line 2: cs[0].foodThoughts = f-object.
 * line 11: run cs[0].foodThoughts()
 *
 * cs[1] = foodThoughts environment
 * cs[1].creationPhase starts.
 * line6: var! cs[1].faveFood: undefined.
 *
 * cs[1].executionPhase:
 * line 4: output "Original fave food: undefined. // cs[1].faveFood
 * line 6: cs[1].faveFood = "lobster"
 * line 8: output "New fave food: lobster // cs[1].faveFood
 *
 * cs[1] clears.
 * cs[0] clears.
 *
 *
 */