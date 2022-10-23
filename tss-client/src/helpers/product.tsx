export function getFormattedCurrency(currency: number) {
    const formattedCurrency = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currency);
    return formattedCurrency;
}