export function GetBots() {
   return fetch("https://bot-server-mauve.vercel.app/bots",{
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    }
    )
    .then(res => res.json())
}

export function GetArmy() {
    return fetch("https://bot-server-mauve.vercel.app/bots/army",{
         method: "GET",
         headers: {
             "Content-Type": "application/json",
             "Accept": "application/json"
         }
     }
     )
     .then(res => res.json())
 }
 
 export function getBotsById(id){
    return fetch(`https://bot-server-mauve.vercel.app/bots/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

