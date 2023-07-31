export function clearInputs(inputs) {
    inputs.forEach(inp => inp(''));
}

export function generateUniqueID() {
    return `${Math.random()}`.slice(4);
}
