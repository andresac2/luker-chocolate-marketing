export async function parseArticle(articles, url, articlesEs) {
	let breads = [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }]
	let autor = { name: '', avatar: '', details: '', linkedin: '' }
	//let art = examArt;
	let art = {};
	let arts = [{}];
	articles.map((e, i) => {
		art['url'] = e.slug;
		art['fullUrl'] = e.acf.url;
		art['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
		art['imagen_open_graph'] = e.acf.imagen_open_graph || e.acf.cover
		art['title'] = e.title.rendered;
		art['description'] = e.content.rendered.substr(0, 100);
		art['date'] = e.acf.date;
		art['content'] = e.content.rendered;
		art['meta_descripcion'] = e.acf.meta_descripcion;
		autor['name'] = e.acf.authorname;
		autor['avatar'] = e.acf.avatar;
		autor['details'] = e.acf.details;
		autor['linkedin'] = e.acf.linkeind;
		breads[0]['href'] = "/blog/";
		breads[0]['name'] = "Blog";
		breads[1]['href'] = "/blog/" + e.acf.categoria?.slug;
		breads[1]['name'] = e.acf.categoria?.name;
		art['autor'] = autor;
		art['breads'] = breads;
		arts.push(art);
		art = {};
		breads = [{}, {}];
		autor = {};
	})
	articlesEs.map((e, i) => {
		art['url'] = e.slug;
		art['fullUrl'] = e.acf.url;
		art['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
		art['title'] = e.title.rendered;
		art['meta_descripcion'] = e.acf.meta_descripcion;
		art['description'] = e.content.rendered.substr(0, 100);
		art['date'] = e.acf.date;
		art['content'] = e.content.rendered;
		autor['name'] = e.acf.authorname;
		autor['avatar'] = e.acf.avatar;
		autor['details'] = e.acf.details;
		autor['linkedin'] = e.acf.linkeind;
		breads[0]['href'] = "/blog/";
		breads[0]['name'] = "Blog";
		breads[1]['href'] = "/blog/" + e.acf.categoria?.slug;
		breads[1]['name'] = e.acf.categoria?.name;
		art['autor'] = autor;
		art['breads'] = breads;
		arts.push(art);
		art = {};
		breads = [{}, {}];
		autor = {};
	})
	return arts.find(art => art.url === url.substr(url.lastIndexOf("/") + 1))
};