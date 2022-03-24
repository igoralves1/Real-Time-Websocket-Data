
const url = 'wss://stream.data.alpaca.markets/v1beta1/crypto'
const socket = new WebSocket(url)
const authMsg = {"action": "auth", "key": "{APCA-API-KEY-ID}", "secret": "{APCA-API-SECRET-KEY}"}
socket.onmessage = function (event){
  const data = JSON.parse(event.data)
  // console.log(data)
  // console.log(data[0].msg)
  // console.log(data[0]['msg'] === 'connected')
  
  if(data[0]['msg'] === 'connected'){
    console.log('DO AUTH')
  }
}
