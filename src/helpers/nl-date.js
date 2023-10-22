export function nlDate(dateString) {
    const year = parseInt(dateString.substring(0, 4));
    const month = parseInt(dateString.substring(4, 6)) - 1; // Months in JavaScript are 0-based
    const day = parseInt(dateString.substring(6, 8));
    const hour = parseInt(dateString.substring(8, 10));
    const minute = parseInt(dateString.substring(10, 12));
    const second = parseInt(dateString.substring(12, 14));

    // Create a Date object
    const dateObject = new Date(year, month, day, hour, minute, second);

    return dateObject.toLocaleDateString("nl-NL", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}