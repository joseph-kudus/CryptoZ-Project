let primarykeyforapi ='117483d04f4f4e4e825a813dc24b9c55';



              function httpGetAsync(url, callback) {
                  const xmlHttp = new XMLHttpRequest();
                  xmlHttp.onreadystatechange = function() {
                      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                      callback(xmlHttp.responseText);
                  }
                  xmlHttp.open("GET", url, true); // true for asynchronous
                  xmlHttp.send(null);
              }

              const url = "https://exchange-rates.abstractapi.com/v1/live/?api_key=117483d04f4f4e4e825a813dc24b9c55&base=USD&target=EUR"

              httpGetAsync(url)