// const and var
DEFAULT_BASE_CURRENCY_CODE='USD';

// API providers
const ipdata={
    key: `d389ca28db3758afa3fb8933a0b191b0c865bb07cdc0f3822be700ac`,
    baseurl: `https://api.ipdata.co`,

    currency: function(){
        return `${this.baseurl}/currency?api-key=${this.key}`;
    }
}
// get currency rate exchange
const currencylayer={
    key: `3485231a42a329bedc48b58ab45eb506`,
    baseurl: `https://api.currencylayer.com`,
    // convert furrency from to amount
    convert: function(from_currency, to_currency, amount){
        return `${this.baseurl}/convert?from=${from_currency}&to=${to_currency}&amount=${amount}&access_key=${this.key}`;
    },

    // currency list
    list: function(){
        return `${this.baseurl}/list?access_key=${this.key}`;
    }
}

//fetch api for users currency
 async function getusercurrency (){
    const res = await fetch(ipdata.currency());
    const usercurrency =await res.json();
    return usercurrency;
}

// fetch api to get currency list

async function getcurrencylist(){
    const res= await fetch(currencylayer.list());
    const data= await res.json();
    
    return data.currencies;
};

// get exchange rate

async function getexchangerate(from_currency, to_currency){
    const amount =1;
    const res = await fetch(currencylayer.convert(from_currency, to_currency, amount));
    const data =await res.json();
    return data.result;
}
getexchangerate('USD', 'UGX');

// Render exchange rate function
async function renderexhangerate(fromCurrencyCode, toCurrencyCode) {
    const exchangeRate = await getexchangerate(fromCurrencyCode, toCurrencyCode)
}

// init app
async function init(){
    const usercurrency= await getusercurrency();
// Render exchange rate
    renderexhangerate(DEFAULT_BASE_CURRENCY_CODE, usercurrency.code)
// Render select option
console.log(usercurrency)
}
init();
