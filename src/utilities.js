export function GetBots() {
   return fetch("com/bots",{
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
    return fetch("army",{
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
    return fetch(`/bots/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
    }).then(response => response.json())
}

