import { defineStore } from 'pinia';

interface Currency {
  r030: number;
  txt: string;
  rate: number;
  cc: string;
  exchangedate: string;
}

export const useCurrencyStore = defineStore('currency', {
  state: () => ({
    currencies: [] as Currency[],
    editedCurrencies: JSON.parse(localStorage.getItem('editedCurrencies') || '[]') as Currency[],
    date: new Date().toISOString().split('T')[0],
  }),
  actions: {
    async fetchCurrencies(this: { currencies: Currency[]; date: string }, date: string = this.date) {
      try {
        const formattedDate = date.replace(/-/g, '');
        const response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${formattedDate}&json`);
        if (!response.ok) throw new Error(`Failed to fetch currencies: ${response.statusText}`);
        const data = await response.json();
        this.currencies = data;
      } catch (error) {
        console.error('Error fetching currencies:', error);
      }
    },
    addEditedCurrency(currency: Currency) {
      const index = this.editedCurrencies.findIndex(item => item.r030 === currency.r030);
      if (index === -1) {
        this.editedCurrencies.push(currency);
      } else {
        this.editedCurrencies[index] = currency;
      }
      this.saveEditedCurrencies();
    },
    resetEditedCurrencies() {
      this.editedCurrencies = [];
      localStorage.removeItem('editedCurrencies');
    },
    saveEditedCurrencies() {
      localStorage.setItem('editedCurrencies', JSON.stringify(this.editedCurrencies));
    },
  },
});
