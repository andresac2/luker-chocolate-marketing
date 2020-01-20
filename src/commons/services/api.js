export async function getPages() {
  const response = await fetch('http://www.back.lukerchocolate.com/wp-json/wp/v2/pages?per_page=100');
  return await response.json();
}

export async function getPosts() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/posts?per_page=100');
  return await response.json();
}

export async function getClients() {
  const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/clients?per_page=100');
  return await response.json();
}