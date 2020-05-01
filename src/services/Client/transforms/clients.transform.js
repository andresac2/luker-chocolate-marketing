export default (clients) => {
  return clients.map((data, i) => {
    const client = {}
    client['url'] = data.acf.url;
    client['cover'] = data.acf.cover || 'banner-cocoa-forest.jpg';
    client['title'] = data.acf.title;
    client['banner'] = data.acf.banner;
    client['flag'] = data.acf.flag;
    client['content'] = data.acf.content;
    client.breads = [
      { href: data.acf.href, name: data.acf.categoryname || "Nuestros clientes" }
    ]
    return client
  })
}