function weird() {
    height = 50;
    return height;
}
weird();

/**
 * cs[0] CREATION
 * L1: cs[0].weird = f-object
 * cs[0] EXECUTION
 * L5: run cs[0].weird
 *
 * cs[1] = weird() environment
 * cs[1] CREATION
 * L2: 'height'???
 * cs[0].height = 'undefined'
 * cs[1] EXECUTION
 * cs[0].height = 50
 * L3: cs[1].height: not found
 *     cs[0].height: 50 // --> 50
 * cs[1] clears
 * cs[0] clears
 *
 */