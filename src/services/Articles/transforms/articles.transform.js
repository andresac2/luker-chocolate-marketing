const months = {
  JANUARY: 1,
  FEBRUARY: 2,
  MARCH: 3,
  APRIL: 4,
  MAY: 5,
  JUNE: 6,
  JULY: 7,
  AUGUST: 8,
  SEPTEMBER: 9,
  OCTOBER: 10,
  NOVEMBER: 11,
  DECEMBER: 12
}

const monthsES = {
  ENERO: 1,
  FEBRERO: 2,
  MARZO: 3,
  ABRIL: 4,
  MAYO: 5,
  JUNIO: 6,
  JULIO: 7,
  AGOSTO: 8,
  SEPTIEMBRE: 9,
  OCTUBRE: 10,
  NOVIEMBRE: 11,
  DICIEMBRE: 12
}

export default (articles) => {
  return articles.map((data, i) => {
    let art = {}
    art['url'] = data.slug;
    art['fullUrl'] = data.acf.url;
    art['cover'] = data.acf.cover || 'banner-cocoa-forest.jpg';
    art['title'] = data.title.rendered;
    art['description'] = data.content.rendered.substr(0, 100);
    art['date'] = data.acf.date;

    const [ month, year ] = data.acf.date.split(' ');
    art._date = new Date(year + '-' + (months[month] || monthsES[month]) + '-02');

    art['content'] = data.content.rendered;
    art.autor = {
      name: data.acf.authorname,
      avatar: data.acf.avatar,
      details: data.acf.details,
      linkedin: data.acf.linkedin
    };
    art.breads = [
      { href: "/blog/", name: "Blog" },
      { href: "/blog/" + data.acf.categoria.slug, name: data.acf.categoria.name }
    ];
    return art
  })
}