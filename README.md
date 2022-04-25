# Real-Time-Websocket-Data
pages: https://igoralves1.github.io/Real-Time-Websocket-Data/

AWS: http://dg-iot-images-processes.s3-website-us-east-1.amazonaws.com/
AWS: http://ws-test-high-streamming.s3-website.us-east-2.amazonaws.com/

# Example - [wealth-lab](https://www.wealth-lab.com/Extension)

# Youtube Tutorials
- [Grid Bot [Part 1] - Real-Time Websocket Data with Alpaca Crypto API](https://www.youtube.com/watch?v=6U6NhKAbO5Y&t=25s)
- [Grid Bot [Part 2] - Real-Time Charting with JavaScript](https://www.youtube.com/watch?v=fHPPnZcsDEo)

### [DASHBOARD OVERVIEW](https://app.alpaca.markets/paper/dashboard/overview)
> This is the place where we retrieve our API keys.
> - Endpoint: `https://paper-api.alpaca.markets`
> - API Key ID: `PKLX4I0VBN1ZR3QGSL8R`
> - Secret Key: `3NrOWf3l1hliaHLp3xf9oPsg9xTEXHkOpoifUUwg`
### [ALPACA MY ACCOUNT DASHBOARD](https://app.alpaca.markets/brokerage/apps/manage)
>App succesfully created! Your credentials are below - store them somewhere only you can see them. If you lose your client secret, you'll need to generate a new one.
> - Client ID:
`f5faec9278fa532e5ec1e00988b59fe3`
> - Client Secret:
`aa4bd6e5944af63ba001f57f9e2305c5c12c81f5`

### [SANDBOX - ALPACA MY ACCOUNT DASHBOARD](https://broker-app.alpaca.markets/onboarding)
> You'll need API keys to operate with the system 
> - api_key: `CKX8UJ9AOUI0KE9RD5PC`
> - api_secret: `OLbn232fFQ1Y67gIUsa035JJeLeTju0W1Nt5hlZR`

Check out our
[Getting Started Guide](https://alpaca.markets/docs/broker/)
for more information on how to get up and running with Alpaca Broker API.

Will trading services provided by Alpaca be the focus of the app or a simple add-on?
Thank you!
Feel free to email us anytime at
support@alpaca.markets

[DEV - ALPACA MY ACCOUNT DASHBOARD](https://broker-app.alpaca.markets/dev)
>Please make sure to store those keys somewhere safe
api_key: CKQV0T4QGV9EQXLMCYR6
api_secret: KTFx2xml0oxf2dIBSmS69w9oI61vWZ8DspRxG7cf

# Alpaca GitHub
- [GitHub](https://github.com/alpacahq/)
- [Youtube](https://www.youtube.com/channel/UC_QGP6WixhTPGyypS4XuTmA)
  - [How to use Alpaca](https://www.youtube.com/watch?v=W6fVqbntvnI&list=PLfVbHYUC5FiJtW331vdY_6upmjIQxMhwu&index=1)
- Slack: 



# [Market Data API](https://alpaca.markets/docs/market-data/)
Access real-time and up to 6+ years of historical equities & crypto data.
> For the Unlimited plan, we receive direct feeds from the CTA (administered by NYSE) and UTP (administered by Nasdaq) SIPs. These 2 feeds combined offer 100% market volume.

### [Market Data API Reference](https://alpaca.markets/docs/api-references/market-data-api/)
Access Alpaca’s historical and real-time US stock market and crypto data through REST API and WebSocket.
- [alpaca-docs/content/market-data/](https://github.com/alpacahq/alpaca-docs/tree/master/content/market-data)



curl --location --request GET 'https://data.alpaca.markets/v1beta1/news' \
--header 'Apca-Api-Key-Id: CKQV0T4QGV9EQXLMCYR6' \
--header 'Apca-Api-Secret-Key: KTFx2xml0oxf2dIBSmS69w9oI61vWZ8DspRxG7cf'


### PostMan  
- https://identity.getpostman.com/login  
- igorAlvesColtene  
- aBc14012008!  
- igoralves1@gmail.com  
- aBc14012007!  

# Getting Started in a Browser Script AWS SDK
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html
```
<script src="https://sdk.amazonaws.com/js/aws-sdk-SDK_VERSION_NUMBER.min.js"></script>
<body>
  <script src="https://sdk.amazonaws.com/js/aws-sdk-2.410.0.min.js"></script>
  <script type="text/javascript">

      // Initialize the Amazon Cognito credentials provider
      AWS.config.region = 'REGION';
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({IdentityPoolId: 'IDENTITY_POOL_ID'});

      // Function invoked by button click
      function speakText() {
          // Create the JSON parameters for getSynthesizeSpeechUrl
          var speechParams = {
              OutputFormat: "mp3",
              SampleRate: "16000",
              Text: "",
              TextType: "text",
              VoiceId: "Matthew"
          };
          speechParams.Text = document.getElementById("textEntry").value;

          // Create the Polly service object and presigner object
          var polly = new AWS.Polly({apiVersion: '2016-06-10'});
          var signer = new AWS.Polly.Presigner(speechParams, polly)

          // Create presigned URL of synthesized speech file
          signer.getSynthesizeSpeechUrl(speechParams, function(error, url) {
          if (error) {
              document.getElementById('result').innerHTML = error;
          } else {
              document.getElementById('audioSource').src = url;
              document.getElementById('audioPlayback').load();
              document.getElementById('result').innerHTML = "Speech ready to play.";
          }
        });
      }
  </script>
</body>
```
### Log in to your Broker API account
https://broker-app.alpaca.markets/login

https://broker-app.alpaca.markets/dashboard

https://app.alpaca.markets/paper/dashboard/overview


### Lightweight Charts
- [Lightweight Charts](https://www.tradingview.com/lightweight-charts/)

-[lightweight-charts - OPTIONS](https://tradingview.github.io/lightweight-charts/docs/api)

- [Github ISSUE](https://github.com/tradingview/lightweight-charts/issues/1002)


# Python Bot - VirtualEnv-[Link](https://igoralves1workspace.slack.com/archives/C0183R7BVQA/p1642796672000100?thread_ts=1600646972.000500&cid=C0183R7BVQA)
- Create a new folder:
  ```
  mkdir pythonVirtualenv 
  ```
- Get access to this folder and create a new environment:
  ```
  virtualenv bot
  ```
- Activate the new environment:
  ```
  source bot/bin/activate
  ```
- Create the python files


[GitHub - Bot](https://github.com/search?q=bot)
https://ftx.us/settings/api
> New Read-Only API CREDENTIALS: Be sure to write down your API secret, as it will not be shown after you close this dialog.
  - API Key: 4dHM5X0WqHxrZjp0YxJX_dvLCJIljUckJDWsroBX
  - API Secret: iZt4EDZWgU-MstPKdvXwA16E9bylraoRQBIT8xhT