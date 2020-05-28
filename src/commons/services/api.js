export async function getPages() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/pages?per_page=100');
  return await response.json();
}

export async function getPosts() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/posts?per_page=100');
  return await response.json();
}

export async function getPostsEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/posts?per_page=100');
  return await response.json();
}

export async function getClients() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/clients?per_page=100');
  return await response.json();
}
export async function getClientsEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/clients?per_page=100');
  return await response.json();
}

export async function getDistributors() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/distributor?per_page=100');
  return await response.json();
}

export async function getItemsMaracas() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/itemsmaracas?per_page=100');
  return await response.json();
}

export async function getItemsMaracasEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/itemsmaracas?per_page=100');
  return await response.json();
}

export async function getDosing() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/dosing?per_page=100');
  return await response.json();
}

export async function getDosingEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/dosing?per_page=100');
  return await response.json();
}

export async function getPanning() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/panning?per_page=100');
  return await response.json();
}

export async function getPanningEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/panning?per_page=100');
  return await response.json();
}

export async function getMoulding() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/moulding?per_page=100');
  return await response.json();
}

export async function getMouldingEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/moulding?per_page=100');
  return await response.json();
}

export async function getMouldingBars() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/mouldingBars?per_page=100');
  return await response.json();
}

export async function getMouldingBarsEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/mouldingBars?per_page=100');
  return await response.json();
}

export async function getMouldingShapes() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/mouldingShapes?per_page=100');
  return await response.json();
}

export async function getMouldingShapesEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/mouldingShapes?per_page=100');
  return await response.json();
}

export async function getDesignProcess() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/designprocess?per_page=100');
  return await response.json();
}

export async function getDesignProcessEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/designprocess?per_page=100');
  return await response.json();
}

export async function getItemsOurServices() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/itemsourservices?per_page=100');
  return await response.json();
}

export async function getItemsOurServicesEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/itemsourservices?per_page=100');
  return await response.json();
}

export async function getFinishedChocolateProducts() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/finishedchocolatepro?per_page=100');
  return await response.json();
}

export async function getFinishedChocolateProductsEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/finishedchocolatepro?per_page=100');
  return await response.json();
}

export async function getModalReportItems() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/modalreportitems?per_page=100');
  return await response.json();
}

export async function getModalReportItemsEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/modalreportitems?per_page=100');
  return await response.json();
}

export async function getArticlesSustain(lng) {
  const response = await fetch(`https://www.back.lukerchocolate.com${lng === 'en'? '': '/' + lng}/wp-json/wp/v2/sustainability?per_page=100`);
  return await response.json();
}

export async function getArticlesSustainEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/sustainability?per_page=100');
  return await response.json();
}

export async function getIngredients() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/ingredients?per_page=100');
  return await response.json();
}

export async function getIngredientsEs() {
  const response = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/ingredients?per_page=100');
  return await response.json();
}