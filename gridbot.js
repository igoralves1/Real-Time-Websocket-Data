
const url = 'wss://stream.data.alpaca.markets/v1beta1/crypto'
const socket = new WebSocket(url)
const authMsg = {"action": "auth", "key": "PKLX4I0VBN1ZR3QGSL8R", "secret": "3NrOWf3l1hliaHLp3xf9oPsg9xTEXHkOpoifUUwg"}
const subscribeMsg = {"action":"subscribe","trades":["ETHUSD"],"quotes":["ETHUSD"],"bars":["ETHUSD"]}
const quotesElement = document.getElementById('quotes')
const tradesElement = document.getElementById('trades')
const barsElement = document.getElementById('bars')


socket.onmessage = function (event){
  const data = JSON.parse(event.data)
  // console.log(data)
  // console.log(data[0].msg)
  // console.log(data[0]['msg'] === 'connected')
  if(data[0]['msg'] === 'connected'){
    socket.send(JSON.stringify(authMsg))
  }
  if(data[0]['msg'] === 'authenticated'){
    socket.send(JSON.stringify(subscribeMsg))
  }

  for (let key in data){
    // console.log(data[key])
    const type = data[key].T
    if(type === 't'){
      // console.log('trade')
      // console.log(data[key])
      const tradeElement = document.createElement('div')
      tradeElement.className = 'trade'
      tradeElement.innerHTML = `<b>${data[key].t}</b> - ${data[key].p} - ${data[key].s}`
      tradesElement.appendChild(tradeElement)
      // Counting element 'trade' in the page.
      // const elements = document.getElementsByClassName('trade')
      // if (elements.length > 10) {
      //   tradesElement.removeChild(elements[0])
      // }
      // console.log(tradesElement.children.length)
      // console.log(tradesElement.children[0])
      // Remove the 1st child inside the '.trades' div child list. AllWays keep 10
      if (tradesElement.children.length > 10) {
        tradesElement.removeChild(tradesElement.children[0])
      } 
    }
    if(type === 'q'){
      // console.log('quote')
      console.log(data[key])
      const quoteElement = document.createElement('div')
      quoteElement.className = 'quote'
      quoteElement.innerHTML = `<b>${data[key].t}</b> - ${data[key].bp} - ${data[key].ap}`
      quotesElement.appendChild(quoteElement)
      // Counting element 'trade' in the page.
      // const elements = document.getElementsByClassName('trade')
      // if (elements.length > 10) {
      //   quotesElement.removeChild(elements[0])
      // }
      // console.log(quotesElement.children.length)
      // console.log(quotesElement.children[0])
      // Remove the 1st child inside the '.trades' div child list. AllWays keep 10
      if (quotesElement.children.length > 10) {
        quotesElement.removeChild(quotesElement.children[0])
      }
    }
    if(type === 'b'){
      // console.log('bar')
      // console.log(data[key])
    }
  }
}

