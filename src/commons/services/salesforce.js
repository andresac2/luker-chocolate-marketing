import i18n from "../../i18n";
import { Modal } from 'antd';
import { SendEmail } from "./emblueService";


const sendEmail = (title, content, sfState) => {
  SendEmail(title, content, sfState).then((response) =>
    (response.TotalSendEmail > 0) ?
      showNotification(i18n.t('form.contact-email-send-ok-title'), 'We appreciate you contacting us. One of our colleagues will get back in touch with you soon!', response)
      :
      showNotification(i18n.t('errors.email-send-error'), i18n.t('errors.try-again'), response)
  )
}

const showNotification = (title, content, response) => {
  const modal = Modal.success({
    title: title,
    content: content,
  });
  console.log(response);
  setTimeout(() => {
    modal.destroy();
  }, 8000);
}


export async function RegisterCustomerSaleforce(payload, emailContent) {
  const titleEmail = 'A petition to Luker Chocolate';

  let stateSalesforce = '';

  const salesforceClient = payload

  let salesforce;
  salesforce = await fetch('https://poetri-middleware.herokuapp.com/v1/function/invoke/1107b0d8-a027-4463-944c-4952c3544ad7', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'Authorization': `Bearer 4xu7PghlWaSKClOugv0tN2+qa1voV47oFRU91W3aWn+gGeFatWYik+Dd99GcHMV7`
    },
    body: JSON.stringify(salesforceClient)
  }).then(async response => {
    if (response.status === 401) {
      console.log("401: ", response)
      return response;
    }
    response = await response.json()
    return response;
  }).catch(err => console.error("error", err))

  console.log(salesforce)

  if (salesforce.success) {
    stateSalesforce = "The user has been registered in Salesforce correctly."
    sendEmail(titleEmail, emailContent, "The user has been registered in Salesforce correctly.")
  } else if (salesforce[0].errorCode === "DUPLICATES_DETECTED") {
    stateSalesforce = "The user was already registered in Salesforce."
    sendEmail(titleEmail, emailContent, "The user was already registered in Salesforce.")
    console.warn("Correo duplicado en salesforce")
  } else {
    stateSalesforce = "User failed to registered in salesforce. Error: " + salesforce[0].message
    sendEmail(titleEmail, emailContent, "User failed to registered in salesforce. Error: " + salesforce[0].message)
    console.error("Error salesforce: ", salesforce[0].message)
  }

}

