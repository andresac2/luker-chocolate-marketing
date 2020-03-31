const emblueApi = 'https://api.embluemail.com/Services/Emblue3Service.svc/json/';
const linkCorss = 'https://cors-anywhere.herokuapp.com/'

export const Authenticate = () => {
  return fetch('https://cors-anywhere.herokuapp.com/https://api.embluemail.com/Services/Emblue3Service.svc/json/Authenticate', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      User: "michael.camacho@arepa.co",
      Pass: "Luker_2020",
      Token: "E83wkTmb-CpXE2-24IKb-uKPWcVxO4P"
    }),
  })
    .then((response) => response.json())
}

export async function NewContact(email) {
  return Authenticate().then(async response => {
    const _response = await fetch('https://cors-anywhere.herokuapp.com/https://api.embluemail.com/Services/Emblue3Service.svc/json/NewContact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: email,
        Token: response.Token,
        SelectGroups: "988045"
      }),
    });
    return await _response.json();
  })
}

export async function SendEmail(subject, body, sfState) {
  return Authenticate().then(async response => {
    const _response = await fetch(linkCorss + emblueApi + 'SendMailExpress', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Token: response.Token,
        ActionId: "1339145",
        Email: "siseñoragencia@gmail.co",
        //Email: "stivent367@gmail.com",
        Subject: subject,
        Message: `${body} <br/>
        <code> ${sfState} </code>
        `
      })
    });
    return await _response.json();
  })
}