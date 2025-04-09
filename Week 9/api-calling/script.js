const new_quote_button = document.getElementById("getQuote")
const text_area = document.getElementById("Quote")

async function getdata(){
    const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
    const result = await fetch(url)

    return await result.json()
}

async function updateQuote(){
    const quote = await getdata()

    text_area.innerText = quote.data.content
}

updateQuote()
new_quote_button.addEventListener("click",updateQuote)