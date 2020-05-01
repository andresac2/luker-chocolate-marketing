export default (articles) => {
  return articles.map((data, i) => {
    let art = {}
    art['url'] = data.slug;
    art['fullUrl'] = data.acf.url;
    art['cover'] = data.acf.cover || 'banner-cocoa-forest.jpg';
    art['title'] = data.title.rendered;
    art['description'] = data.content.rendered.substr(0, 100);
    art['date'] = data.acf.date;
    art['content'] = data.content.rendered;
    art.autor = {
      name: data.acf.authorname,
      avatar: data.acf.avatar,
      details: data.acf.details,
      linkedin: data.acf.linkeind
    };
    art.breads = [
      { href: "/blog/", name: "Blog" },
      { href: "/blog/" + data.acf.categoria.slug, name: data.acf.categoria.name }
    ];
    return art
  })
}