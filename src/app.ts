export function isSquare(a: number) {

    const square = Math.sqrt(a);
    if (isNaN(square)) {
        return false
    }
    return Number.isInteger(square);

}