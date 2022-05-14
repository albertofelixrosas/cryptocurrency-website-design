// Documentation
// https://www.coingecko.com/en/api/documentation
const bitcoin = document.getElementById('bitcoin');
const ethereum = document.getElementById('ethereum');
const dogecoin = document.getElementById('dogecoin');

const COINGECKO_URL =
    'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd';

const coingeckoJSONRequest = async () => {
    try {
        const response = await fetch(COINGECKO_URL);
        return await response.json();
    } catch (error) {
        console.error(error);
        return {};
    }
};

const setCryptocoinsValues = async () => {
    const jsonResponse = await coingeckoJSONRequest();
    if (!jsonResponse) {
        return;
    }
    bitcoin.innerHTML = jsonResponse['bitcoin']['usd'];
    ethereum.innerHTML = jsonResponse['ethereum']['usd'];
    dogecoin.innerHTML = jsonResponse['dogecoin']['usd'];
};

setCryptocoinsValues();
