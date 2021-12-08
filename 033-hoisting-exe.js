a();

function a() {
    console.log('hi');
}

function a() {
    console.log('bye');
}

/**
 * Creation phase:
 * The JS engine comes to Line 3,
 * sees 'function', allocates memory for the whole f-object.
 * At line 7, it sees 'function' with the same name,
 * allocates memory/overrides what was there before.
 * Execution phase:
 * At line 1,
 * the f-object is invoked,
 * using the data allocated in memory,
 * returning 'bye'
 *
 */