var one = 1;
var one = 2;

/**
 * creation phase:
 * JS engine sees var, and allocates memory for variable 'one', its value is 'undefined'.
 * Then JS sees var, and then 'one' again...
 * JS engine IGNORES the second 'one'.
 */