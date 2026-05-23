const currencyFormat = new Intl.NumberFormat('nl-NL', {
	style: 'currency',
	currency: 'EUR',
	currencyDisplay: 'narrowSymbol',
});

export const toCurrency = (value: number) =>
	currencyFormat.format(value).replace(/\u00A0|\u202F/g, '');
