export function getFormattedCurrency(currency) {
    const formattedCurrency = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currency);
    return formattedCurrency;
}