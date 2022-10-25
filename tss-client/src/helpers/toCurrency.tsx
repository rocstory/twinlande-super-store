
export function toCurrency(currency: number) {
    const formattedCurrency = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(currency);
    return formattedCurrency;
}