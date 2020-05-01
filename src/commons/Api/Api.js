import { apiUrl } from '../Config/Environments.js';

export class Api {

  post(url, data, formData) {
    let dataBody

    if(formData){
      dataBody = new FormData();
      Object.keys(data).map(key => {
        if(!Array.isArray(data[key])){
          const isFile = data[key] && data[key].size
          const isJson = typeof data[key] === 'object'
          
          dataBody.append(key, isFile || !isJson ? data[key]: JSON.stringify(data[key]));
        } else 
          data[key].forEach(item => dataBody.append(key, item))
      })
    } else
      dataBody = JSON.stringify(data);

    return fetch(`${apiUrl}${url}`, {
      method: 'POST',
      body: dataBody
    }).then(async response => {
      response.payload = await response.json()
      return response;
    }).catch(err => err)
  }

  isJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

  put(url, data, header) {
    let isFormData = data instanceof FormData;

    return fetch(`${apiUrl}${url}`, {
      method: 'PUT',
      body: isFormData ? data : JSON.stringify(data)
    }).then(async response => {
      response.payload = await response.json()
      return response;
    }).catch(err => err)
  }

  get(url, params) {
    /*url = new URL(`${apiUrl}${url}`);
    if (params)
      Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))*/
    return fetch(`${apiUrl}${url}`, { method: 'GET' })
    .then(async response => {
      console.log('GET success', response)
      response.payload = await response.json()
      return response;
    }).catch(err => {
      console.log('GET error', err)
      return err
    })
  }

}

export default new Api();