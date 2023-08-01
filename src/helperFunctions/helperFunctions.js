/*  

    File for random helper functions 
    The functions names MUST be self explanatory

*/

export function clearInputs(inputs) {
    inputs.forEach(inp => inp(''));
}

export function generateUniqueID() {
    return `${Math.random()}`.slice(4);
}
