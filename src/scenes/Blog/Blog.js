import React from 'react';
import { Layout, Input, Select } from 'antd';
import Footer from '../../components/layout/footer/footer';
import { Link } from 'react-router-dom';
import item1 from '../../assets/img/doisy-milk.png'
import item2 from '../../assets/img/blog-item1.png'
import item3 from '../../assets/img/blog-item2.png'
import item4 from '../../assets/img/blog-item3.png'
import item5 from '../../assets/img/blog-item4.png'

import logo from '../../assets/img/Lukerlogo.svg'
import TakeStand from '../../components/blog/take-stand/take-stand';
import Article from '../../components/blog/article/article';
import FloatLogo from '../../components/layout/float-logo/float-logo';


class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false
    };
  }
  clients = [{
    breads: [{ href: '/customer', name: 'Customers' }],
    url: 'doisy-dam',
    title: 'Doisy & Dam',
    flag: 'uk',
    content: `<p>When it comes to sourcing cocoa, Doisy & Dam only wants the best of the best. For them, it’s very important to understand exactly how the supply chain works and where exactly the totally delish cocoa comes from. They also want to make sure that the chocolate they work with is ethically sourced and has a positive impact on the dedicated farmers who depend on growing great crops.</p>
<p>For their newest creations Crunchy Almond Butter and SNAPS, they wanted to get even deeper in to the heart of tracing the  cocoa, which us why they've decided to use single-origin chocolate from us, not only because grow some of the tastiest cocoa beans in the land but also because we work very hard to improve the local community.</p>
  <div class="blog-article-content--img" ><img src="/static/media/doisy-milk.de250ec7.png" alt="" ><span></span></div>`,
    recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/customer/pots-co' }, { img: 'york.png', title: '', subtitle: 'YORK COCOA HOUSE', url: '/blog/customer/york-cocoa-house' }, { img: 'dengel.png', title: '', subtitle: 'Dengel Shokolade', url: '/blog/customer/dengel-shokolade' }]
  }, {
    breads: [{ href: '/customer', name: 'Customers' }],
    url: 'daniels-delights',
    title: 'Daniel’s Delights',
    flag: 'uk',
    content: `<p>Daniel’s Delights is a family owned Chocolatier that was launched in 2007 in Stoke On Trent by our CEO Ken Harrison and his wife Jen at their kitchen table, when Ken, a trained chef, began making Chocolate Favours for Jen to sell at local farmers markets. They are able to produce in excess of 20,000 bars per day as well as small-volume batches of hand-finished chocolate, which makes us quite unique within the UK.</p>
<p>In 2015 Daniel’s Delights agreed a strategic partnership with Luker Chocolate. In their own words, they see us as a business wholly focused on investing in local rural communities and creating long term sustainable relationships with farmers and growers and moving them away formless sustainable farming practices and into Cacao production. Working tirelessly in rebuilding communities previously blighted by the trade-in coca leaves and through their work throughout Colombia has helped those communities by building schools and developing social enterprise schemes to allow them to become sustainable through the production of Cacao. That’s only a part of what made them choose Luker Chocolate as their provider. They also know that the Cacao we produce is classified by the ICCO as being in the top 8% of the global production in terms of quality and has the Cacao fino de aroma classification.</p>
<p>Delivering superior product quality is of primary importance for Daniel’s Delights, which is supported by fully understanding our supply chain and supporting a ‘Farm to Bar’ supply chain, which is achieved through our partnership. </p>
  <div class="blog-article-content--img" ><img src="/static/media/5thdimensions.d697a540.png" alt="" ><span></span></div>`,
    recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/customer/pots-co' }, { img: 'york.png', title: '', subtitle: 'YORK COCOA HOUSE', url: '/blog/customer/york-cocoa-house' }, { img: 'dengel.png', title: '', subtitle: 'Dengel Shokolade', url: '/blog/customer/dengel-shokolade' }]
  }, {
    breads: [{ href: '/customer', name: 'Customers' }],
    url: 'pots-co',
    title: 'Pots & Co',
    flag: 'uk',
    content: `<p>At Pots & Co they love making timeless classics. Their goal is to work with traditional recipes and elevate them into modern, restaurant-quality puddings that hero the classic ingredients and culinary techniques used to make them.</p>
<p>All of their base ingredients are sourced with attention and care, which is why at Luker Chocolate get to provide them. There are no additives or taste enhances needed, or allowed in their kitchen. The majority of their products are chocolate-based and the highest quality is required to produce them. </p>
<p>Since the team at Pots & Co tried Colombian chocolate, they knew the quality and flavour could not be compared to anything else in the world, and thus they decided to make us their provider, ensuring a fantastic flavour and special value.</p><div class="blog-article-content--img" ><img src="/static/media/pots-blog.6f7212f8.png" alt="Pots Cover"><span>POTS & CO</span></div></div>`,
    recommended: [{ img: 'Doisy&Dam.png', title: '', subtitle: 'Doisy & Dam', url: '/blog/customer/doisy-dam' }, { img: 'york.png', title: '', subtitle: 'YORK COCOA HOUSE', url: '/blog/customer/york-cocoa-house' }, { img: 'dengel.png', title: '', subtitle: 'Dengel Shokolade', url: '/blog/customer/dengel-shokolade' }]
  }, {
    breads: [{ href: '/customer', name: 'Customers' }],
    url: 'atelier-rodier',
    title: 'Atelier Rodier',
    flag: 'uk',
    content: `<p>Santiago Torrijos, owner of Atelier Roder became interested in chocolate, from a very early age. After trying different chocolates from France and Italy, in 2014 he coincidentally tried a homemade-style hot chocolate made by a Colombian chef in a culinary event in the Netherlands. He couldn’t believe that the flavour in the chocolate he was drinking could come from his very own country, while being so far away from the homeland. Since then, all the chocolate sufflés he makes at his restaurant are made with ingredients provided by Luker Chocolate.</p>`,
    recommended: [{ img: 'Doisy&Dam.png', title: '', subtitle: 'Doisy & Dam', url: '/blog/customer/doisy-dam' }, { img: 'york.png', title: '', subtitle: 'YORK COCOA HOUSE', url: '/blog/customer/york-cocoa-house' }, { img: 'dengel.png', title: '', subtitle: 'Dengel Shokolade', url: '/blog/customer/dengel-shokolade' }]
  }, {
    breads: [{ href: '/customer', name: 'Customers' }],
    url: 'dengel-shokolade',
    title: 'Dengel Shokolade',
    flag: 'uk',
    content: `<p>What Dengel Shokolade in Germany likes about our products is that every cocoa bean is closely related to the producers. Dengel Shokolade launched a raw material concept in 2015. This is under the motto "honest and fair direct from the producer". Thus, the raw materials needed for chocolate production (cocoa beans, cane sugar, and milk) are purchased directly from cocoa farmers from Colombia. They produce noble and fine chocolates since 1992. For them, the purchase of Cacao Fino de Aroma directly from Colombia without intermediate trade and at a fair fixed price is unbeatable, allowing us to makes sure that equivalent funds are paid directly to the cocoa farmers.</p>
  <div class="blog-article-content--img" ><img src="/static/media/dengel-blog.068660b3.png" alt="Dengel Shokolade" /><span></span></div>`,
    recommended: [{ img: 'Doisy&Dam.png', title: '', subtitle: 'Doisy & Dam', url: '/blog/customer/doisy-dam' }, { img: 'york.png', title: '', subtitle: 'YORK COCOA HOUSE', url: '/blog/customer/york-cocoa-house' }, { img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/customer/pots-co' }]
  }, {
    breads: [{ href: '/customer', name: 'Customers' }],
    url: 'york-cocoa-house',
    title: 'York Cocoa House',
    flag: 'uk',
    content: `<p>Sophie Jewett says she fell in love with chocolate at an early age. She made chocolate cakes and fudge for friends and family as a child, eventually melting Christmas chocolates in an attempt to create her own Easter Eggs. Since then, her interest in chocolate grew into an obsession, and so she set out to learn everything possible about chocolate. Every new thing she’s discovered drawn her deeper into the world of chocolate and introduced her to chocolate lovers, chocolate makers, chocolatiers and experts from around the world, including us. </p>
<p>For her, it’s very important to work with products that involve communities working side-by-side, giving her and other chocolate professionals to tell new stories through a positive experience, which is what we try to accomplish every day at Luker Chocolate.</p>
  <div class="blog-article-content--img" ><img src="/static/media/york-blog.d8a0ee79.png" alt="York Cocoa House" /><span></span></div>`,
    recommended: [{ img: 'dengel.png', title: '', subtitle: 'Dengel Shokolade', url: '/blog/customer/dengel-shokolade' }, { img: 'Doisy&Dam.png', title: '', subtitle: 'Doisy & Dam', url: '/blog/customer/doisy-dam' }, { img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/customer/pots-co' }]
  },
  {
    breads: [{ href: '/customer', name: 'Customers' }],
    url: 'royce',
    title: 'ROYCE\'',
    flag: 'uk',
    content: `ROYCE' was founded in Sapporo, Japan, in 1983. They are able to make chocolate of world-class quality in Hokkaido by having acquired the best techniques and enriching their experience through the years. The fundamental principle of Royce' has been and will always be the painstaking sourcing of high-quality ingredients, and so, we are the ones that provide those for them. They take pride in having their own farm in Colombia, which we run for them, allowing their customers and consumers to know that the origin of their products is from a great quality source.`,
    recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
  }]
  articles = [
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'manifesto–under-the-tree',
      title: 'MANIFESTO – UNDER THE TREE',
      date: 'APRIL 2019',
      content: `<p>Our existence is condensed into a collection of moments, experiences, anecdotes, and conversations.  For us, it is the latter that makes things happen; memorable events that you never forget, events that transcend, that mark the difference and change the world. At Luker Chocolate, we believe that memorable conversations do not happen just anywhere. Ours, for example, have taken place under a tree.</p>
<p>Most of the people that work here grew up under cocoa trees, just like the thousands of farmers that work with us today spend much of their lives in their shade. At Granja Luker, our cocoa research centre, visitors from all over the world have been able to have hot chocolate for breakfast under gigantic legendary trees, many of which they have planted with their own hands.</p>
<p>But why do we place so much importance on the trees? Because the great conversations of our grandparents and parents on the future, those from which they found inspiration and made transcendental decisions, did not take place in an office with them dressed in a suit and tie; quite the contrary, they took place under the leaves of trees as they wore their ponchos and hats.</p>
<p>In our Cocoa Forest in Necoclí, we have been witness to the shade of the mythic Campano; an old tree that has sheltered different communities for generations, from the indigenous to the cocoa farmers, offering a space in its shade where people could sit to converse. We have dreamt, laughed, and cried under this tree.  We have found something relating to our humanity, we have connected with our roots, culture, and history. It is under this tree that we have forgotten our titles and our social condition, we have been equal; we have been sincere, we have confessed our greatest secrets and happily shared our differences.</p>
<p>We have been chocolatiers in Colombia for 113 years and, even so, sometimes we forget that it is thanks to a tree that we can do what we do. There are no cocoa trees in Switzerland, in Belgium or France. They are here in Colombia, and they are part of our history.</p>
<p>We hope that the readers of this blog find an open space in which to talk and to share and build ideas. A safe place, where they can take off their masks as though they were under the shade of a great tree.</p>
`,
      autor: { name: 'SERGIO RESTREPO', avatar: 'https://media.licdn.com/dms/image/C4E03AQEU_fSBYnqwnw/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=pqJb74EtssHW43ajcC8aeRAErFY_wdDFWW8NCbfjXzE', details: 'Marketing Vice-president', description: 'I see chocolate as a tool of change. I am interested in sharing experiences with entrepreneurs, entrepreneurs and leaders who bet and believe in disruptive innovation, in shared value, in technology and in putting people at the center of the conversation.', linkedin: ['https://www.linkedin.com/in/sergiorestrepogutierrez/', 'Sergio Restrepo'] },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'the-birth-of-a-dream',
      title: 'THE BIRTH OF A DREAM',
      date: 'JUNE 2019',
      content: `<quote>“I have a dream for which we need the joint effort of many… I want to set up a chocolate factory”.</quote>
<p>It was with this statement that José Jesús Restrepo founded Luker Chocolate 113 years ago. A company with a vision that even today, five generations later, is preserved, not only in one man and his family but in the hearts of the company’s 1000 plus collaborators.</p>
<p>Over a century later, the dream has grown. We know that we can contribute more to the country through chocolate and we are sure that, with the support of many, this idea is beginning to consolidate and become a model in which rural Colombia and its inhabitants are the protagonists. We no longer dream of just a chocolate factory; our purpose today is to transform lives through it.</p>
<p>The true story of Luker Chocolate’s social responsibility and sustainability is the account of a family legacy that started as a dream, and was then built and extended with all its members. In the search for Luker Chocolate’s highest purpose, we went back to look for its roots and found many stories of the legacy of a family, its values and convictions.</p>
<p>Let’s start with Maria de Restrepo, who was a member of Luker Chocolate’s founding family. Every Saturday, in Manizales, she would stand at her window to give out chocolate to the homeless for the sole reason of consoling them and making sure they had food in their stomachs. At that time, there had been no research on the “happiness of eating chocolate”, but what she did and the chocolate she gave out must have comforted many.</p>
<p>Jaime Restrepo, founder of the Luker Foundation, is said to have supported anyone who approached him with a great idea, he would spend time listening to their ideas and he financed some of these projects. In time, this gave rise to the foundation, which later had a great benefactor, Inés Restrepo Mejía, who has always supported causes around children, education and women. She decided to leave all her legacy to the foundation, today allowing the implementation of programs that have had a great positive impact in Manizales, in terms of education and entrepreneurship.</p>
<p>The story goes on thanks to the new generations of the family which continues to build the country. Many of them have been involved in social projects, foundations, a vocation for service, and the conviction that with the effort of many, it is possible to build a dream. All of the above is the inspiration for the construction of a sustainable model in which we want Luker Chocolate to last another 100 years as a business. We want it to be able to contribute to all those around us, our collaborators, farmers, their families and our customers around the world.</p>
<p>The company’s current leaders have opted to continue this legacy and take it to another level. Over the years, the company has evolved and found new opportunities, not only in the domestic market but also in international markets. In that evolution, it was decided that the chocolate business would take a different course from that of CasaLuker, the mass consumer business. This is how Luker Chocolate was born, a company that sells chocolate to the world; chocolate made with the best Cacao Fino de Aroma. This new business model goes from selling a product to offering an integral service around chocolate, with innovative, competitive equipment and, above all, with a superior purpose.</p>
<p>We began to renew the company internally, maintaining the over 100-year family tradition, but adding the new global trends addressing sustainability. We want to contribute to the country through an economic, environmental, and socially responsible model. In this sense, we have always been a company that has worked closely with Colombian farmers in the different cocoa regions. We have accompanied them through Granja Luker for over 60 years to train them as producers, so that they have a more technical understanding of the field, helping them to improve productivity and their quality of life.</p>
<p>However, a few years ago we began to ask ourselves about new paths for business, for the countryside, and for small farmers. In this search for new sustainable models for the cocoa-growing regions, which also largely coincide with the regions most affected by the armed conflict, we embarked on a new course towards planting our own crops. This is how we arrived in Necocli, in Urabá antioqueño, to open the way for cocoa in an area where violence was the protagonist for so many years. We arrived against all odds to plant 550 hectares of cocoa in a land that had long been used for livestock farming. The transformation was a milestone in the region. It went from five to 180 jobs, from a farm with only grass, to the planting of 600,000 new trees. Stability and future began to be considered through formal hiring; women began to play a leading role in the field.</p>
<p>There are still many challenges to overcome in the nearby villages. Multidimensional poverty rates are still very high and the aftermath of violence is still visible in the eyes of the children. The whole team that was embarking on this new phase began to wonder about our responsibility as a company. What more could we bring to the countryside, to the people, to the children, to our neighbors? This is how The Chocolate Dream was born, Luker Chocolate’s long-term vision to lead social and economic development in the cocoa-producing regions where we work. Little by little, the Dream became the DNA of the company’s sustainability strategy; we knew we could do more and we discovered how to do it. Today, Luker Chocolate has a strategy in which the economic, environmental and social components carry the same weight and in which the business model is aligned with the Sustainable Development Goals.</p>
<p>We capitalized on all the good practices of more than 110 years in a model of integrated intervention in the territories, not only in Necocli, but also in Casanare, Huila, Tumaco and, in the med-term, the other cocoa-growing parts of the country. We know that we are responsible for the course Colombia is taking and for our planet. We want the Colombian countryside to become a protagonist, not because of the suffering caused by the violence, but because of its prosperity, its dignity, its potential for development, its knowledge, its art and its culture.</p>
<p>We have fully integrated our value chain to achieve this, first humanizing its links. We are no longer talking about raw materials but about farmers and communities; we are no longer talking about the transformation of cocoa but about equipment with purpose; we are not only talking about income but also about clients with life projects. We are also looking to make our value chain not linear but circular, so that the client can give something back to the countryside through projects created by us and financed by them, in order to improve the living conditions of the communities and farmers who work day by day to bring the best chocolate to their country.</p>
<p>The Chocolate Dream manages to open new dialogues with anyone who has a product made with our chocolate on their mind. Luker Chocolate is of the best quality but also carries within it the history of our Colombian countryside.</p>
<p>We know that many of us can join together to turn this dream into a movement that can travel the world. This is why The Chocolate Dream will soon open its doors so that all those who want to contribute with their knowledge, their experience and their time, can find a place where they can do so at Luker Chocolate.</p>
`,
      autor: { name: 'JUANA BOTERO', avatar: 'https://media.licdn.com/dms/image/C5603AQFburD-lKe7tQ/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=OrPNQWmiurHcatseEVuDih5SDGN16X30sgHlTTP8ymg', details: 'Sustainability Director', description: 'Lawyer from Eafit University with an emphasis on public international law from the University of Salamanca, Spain. Current Director of Sustainability at Luker Chocolate where she works to improve the living conditions of rural cocoa farming communities.', linkedin: ['https://www.linkedin.com/in/juana-botero-62a78958/', 'Juana Botero'] },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'the-right-spark',
      title: 'THE RIGHT SPARK',
      date: 'JULY 2019',
      content: `<p>No, it is not a song. Nor is it a declaration of love. It is a momentous search that I carried out over the last two years for the solution to the most brutal professional challenge that I have come up against. Let me tell you all about it…</p>
<p>Luker Chocolate is a company with over 113 years of history. However, just 10 years ago, we decided to internationalize and take our chocolate across the globe. With our hopes set on this goal, we realized that we had to face new challenges. Selling chocolate to industry and manufacturing final products for other companies is a business that has nothing to do with what we have done for 100 years in Colombia; serving companies instead of end consumers and selling in 42 countries rather than just one, are completely different challenges.</p>
<p>So when I took on the role of director of manufacturing and subsequently vice president of the supply chain at Luker Chocolate, I was assigned, alongside my team, the mission of drastically raising the level of production fulfilment, satisfying the service guarantee for our customers, stabilizing production costs and designing the expansion plan for the production plant and logistics warehouses, considering the new international market we were facing.</p>
<p>How could we achieve this? “Increase the efficiency of industrial and logistics operations, regulate inventories and reach the level of service promised to your customers”: voilà you are a COO (Chief Operations Officer) 10/10. Surely you will also have a good cost performance, healthy working capital and, of course, happy customers. More applause, you are the Messi of operations management.</p>
<p>And what happens if one day this formula fails? What happens when traditional methods do not suffice? What happens when your supply chain does not react to the classic engineering stimuli in all of its different iterations? Welcome to my world.</p>
<p>I have been immersed in industrial operations for 11 years: many hours of sweat, as many of tears, and few of sleep. An engineering degree, two masters, several diplomas. And all for what? To understand that in the end, we are so infinitely vulnerable, that regardless of everything you know, a machine will have technical problems, the production plant is going to stop and no matter the number of supply and distribution statistical models, someday your customer will end up without your product. We are human, and we are not perfect; we cannot be arrogant enough to think that everything we do is fail-safe.</p>
<p>Let me tell you what has always kept me standing and looking towards the future: the capacity for transformation of the human spirit. Take my word for it, this is the energy that fills me up every day, that inspires me to see through other people’s eyes, that fills me with happiness on seeing how raw materials become a  with a history that can change someone’s day and make them smile.</p>
<h3>THE SPIRIT: A NEW FACTOR IN THE EQUATION</h3>
<p>It was precisely by means of that spirit that I began to see a light at the end of the tunnel. It was clear that innovation in the new model for the Luker Chocolate supply chain had little or nothing to do with numbers, statistical models and continuous improvement methodologies. It was about innovation in productivity from a human and non-technical point of view. It was a blow against a fortified barrier from an unarmoured warrior; it was the spark I was looking for.</p>
<p>We had to get to work on the task of designing the operation strategy for the entire Luker Chocolate supply chain, and it needed to be fast, effective, but, above all, genuine. It had to be ambitious, we had to dream big, we needed to aim for the stars. What would be expected of a strategy proposal that a whole team of engineers had worked on? What was the result? Raising our people’s spirits. But that was the way it was, we had taken on an enormous task, everybody in the production plants, in the distribution centres and in the administrative offices had to be connected body and soul to our purpose.</p>
<p>We gave up prioritizing production costs and customer service levels; we had to attend to ourselves first.</p>
<h3>SOMETHING HAD TO STICK</h3>
<p>The first step was clear; we had to create an identity. To do this, we initially focused on manufacturing and communicating the three rules of the game ad infinitum: participatory leadership, two-way communication, and leaving a mark.</p>
<p>Participatory leadership meant delegating workload, it was a way of asking for help from the entire team and telling them that the more people who rowed the boat, the faster it would go. It meant empowering, letting go, accompanying and encouraging. Encouraging and supporting. Less Messis, more teams. Remember that we are vulnerable and we will always need help.</p>
<p>Two-way communication was not understood to be any different from situations where Directors and Bosses would initiate conversations with their collaborators, or those where the collaborators would take the initiative. Hierarchies are mental, but respect and dialogue are universal. Here the focus was to train ourselves in how to talk. A rather funny anecdote came out of this: my office was nicknamed The Doctor’s Office, as normally from 1:00 p.m. to 2:00 p.m. conversations arose between collaborators, people who just wanted to dream and improve their way of doing things, but needed the wings to do it.</p>
<p>Leaving a mark was what the plant workers were achieving with their work; only they did not know it. Behind their effort was a higher purpose that started with The Chocolate Dream and that finally matured in our chocolate becoming a tool for change.</p>
<p>We had valuable conversations with our people, we were sensitive, empathetic and we opened our doors, because we needed to become obsessed with sensing that positive energy flowed in the production plant, I became obsessed with seeing the day when people would look us in the eye when we talked to them. We listened to the market and applied consumer knowledge techniques, but this time the market was our plant and the consumer each of our white-overalled soldiers who give it their all to really make our chocolate a tool for change.</p>
<h3>A CHANGE IN ORGANISATIONAL STRUCTURES, THE REDESIGN OF OPERATIONS AND TECHNICAL RIGOUR</h3>
<p>The rules of the game that I talked about earlier were not enough to overcome the challenge. When it comes to people, we have to rethink methods and technology so that everything progresses in the most harmonious and balanced way possible; management based only on the technical aspects and with soft skills is like food without salt.</p>
<p>At this point, it was necessary to enlist the entire technical arsenal of operations management to bring changes in methods and technology to the table.</p>
<p>Regarding the methods, among other things, an aggressive plan to increase efficiency was launched, a plan that had three characteristics: it was practical, easy to understand and very, very technical. Secondly, and perhaps most significantly, was the change in the production plant administration’s entire organizational structure. If we wanted participatory leadership, two-way communication and for our people to leave their mark, the administrative structure should be prepared to manage these practices.</p>
<p>In technological terms, the Master Plan for Industrial and Logistics Operations was formulated with the objective of doubling the chocolate production capacity and preparing the company’s 5-year technological development path. An 18-month plan was launched; today we only have four months of it left.</p>
<h3>THE LAST DROP MAKES THE CUP RUN OVER</h3>
<p>Indeed. If you hammer enough, one of the nails must go in. Surprisingly, like an avalanche, the entire manufacturing system began to react, the level of customer service began to improve, inventories began to regulate themselves, production costs stabilized and people began to smile. As the cherry on the cake, 7 months after the launch of this strategy, the plant achieved record production. Not even in my wildest dreams would I have thought that this was possible.</p>
<p>Sometimes the best future planning is achieved by looking to the past, and Luker Chocolate’s past and present are imbued with closeness and familiarity, as principles that are tied to our history. We just needed to embrace these two elements and push them forward in a transparent and genuine way, because that is how principles and values should be treated, they can never be used like pawns in a game of chess.</p>
<p>If you ask me what the innovative element of this story is, I would tell you that it was in taking people out of the classic resource analysis – industrial engineers will know what I mean -. For us, people are not and will never be seen as a resource, they will always be people.</p>
<p>And how are we doing today? There is still a long way to go, there are so many things that can be improved and, most importantly, there are still conversations to be had. But the journey is more pleasant when small triumphs are celebrated.</p>
<p>Never forget that “everything burns if you apply enough spark.”</p>
<p>I present to you the people who worked this magic:</p>
    `,
      autor: {
        name: 'CRISTIAN CHU', avatar: 'https://media.licdn.com/dms/image/C4E03AQHLclm7u9XKIg/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=WjGN2LsdE9JD7XbCR7nKbDeK8KEejiW0DF3Qcx4HLZQ', details: 'Supply Chain Vicepresident', description: 'Electronic engineer with more than 10 years of experience in operations management and supply chain in the food and beverage sector. Passionate about generating intrapreneurships and working for a higher purpose.', linkedin: ['https://www.linkedin.com/in/cristian-chu-salgado-ba55b140/', 'Cristian Chu']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'in-the-shoes-of-the-cocoa-farmers-of-huila',
      title: 'IN THE SHOES OF: THE COCOA FARMERS OF HUILA',
      date: 'JULY 2019',
      content: `<p>This series is based on the experience of three of our collaborators who went to Huila to live and work as cocoa farmers. In this first story, José Maldonado, Sustainable Supply Analyst, tells us about his experience.</p>
<p>From a very young age, the countryside and I have been inseparable. My paternal grandfather is a veterinarian and has been a milk producer all his life, while my maternal grandfather is a coffee farmer, as were his ancestors for several generations. I’ve always been proud of the Colombian countryside and I’ve identified myself as part of it, so much so that I have often told people that I am from the countryside with my head held high.</p>
<p>I thought I had a lot of experience, but after spending two weeks accompanying different cocoa farming families in Huila, I realized I couldn’t be more in the wrong. To be from the countryside requires courage and sacrifice, but above all, you need to have a giant heart and be deeply in love with the land and its traditions.</p>
<p>On this journey, I met many people, but the stories that I am going to tell below belong to people who taught me great life lessons.</p>
<p>The first was Pedro Nel Córdoba; he met us at the Neiva airport and welcomed us. This Opita with his sung accent is the representative of Luker Chocolate’s Agricultural Development department for Huila, Tolima, Putumayo and Caquetá. There is no supplier, farm or association where he is not greeted with a big hug and like a brother returning home. Pedro knows and understands his land perfectly, because, full of pride, he often recalls that he grew up in the countryside and that his parents raised him and 5 brothers with the produce of 1 hectare of cocoa. He knows what it means to fight and work for a farm that, no matter how small, is the essence and source of life that sustains thousands of farmer families in Colombia.</p>
<p>The team led by Pedro was ready to embark on our 2-week journey through this beautiful department. We started in the municipality of Rivera, where we visited three families belonging to the Association of Cocoa Producers of the Municipality of Rivera (ASOPROCAR). I was fortunate enough to visit Doña Carmen’s farm, an 82-year-old woman, but with the heart and soul of a 20-year old. She is the matron of her family and is proud to be the head of four generations, but even more so, to see her children succeeding thanks to the life and education she was able to give them with the 3 hectares of cocoa that she worked on for so many years with her late husband.</p>
<p>Doña Carmen’s house is right next to her cocoa plantation. It is a home full of love and particulars; it is full of Catholic images and photographs with her family. During the visit, we toured all of her plantation and, plant by plant, this woman showed us how hard she works for her cocoa trees and how well she knows them.</p>
<p>The following day was revelatory, as it was time to harvest and shell the cocoa pods. Two workers were in charge of collecting them and there was also a shelling team, which we were part of. What seemed like a simple task turned out to be exhausting. In an hour, I had to stop twice, stand up, stretch and wait for my back pain to pass. Meanwhile, Doña Carmen, 82, did not complain once and only stopped for lunch. She just laughed when she saw us struggling to complete the task. That’s how I learned about the admirable strength and character of the people of Huila.</p>
<p>Our next stop was the neighbouring municipality of Campoalegre, the rice capital of Huila. A region with an agricultural vocation, marked by beautiful valleys with different types of crops. In this place, I was particularly marked by a farm in a mountainous area, where coffee is beginning to predominate. There we met Doña Concha, her son Gentil, and the person who would give me a great life lesson: Samuel. This more or less 35-year-old dark-skinned man, with a well-groomed moustache and an infectious joy, has his own corn and coriander crop on the farm and was one of our guides.</p>
<p>Samuel has been blind for 8 years, but we could not believe it, and it was not because we doubted his word, but because of the way in which he finds his way around the farm. He never gets lost and even walks very dangerous roads all by himself. The most incredible thing about this man is his attitude. At one point, he was asked if it had been very difficult to regain his life after losing his sight, and he quietly replied, “Only a little”.</p>
<p>After touring Huila, we set out on a road of about 86 kilometres to the south of the department. We travelled along the banks of the Magdalena River and the giant Quimbo Dam until our last destination: Garzón. This municipality is an important coffee-growing centre in Colombia and a great agricultural pantry for the region. It has also become a very important cocoa collection point for Luker Chocolate. This is where I had the most significant encounter and perhaps the one that inspired me the most to continue to work for the cocoa farmers of Colombia.</p>
<p>On the penultimate day of our journey, we went to the Majo trail to visit Don Ismael’s farm. Don Ismael is approximately 80 years old and native of the region. Our main host was “Chucho”, one of his sons who takes care of him and helps him with the work on the cocoa plantation. We had the opportunity to help them during the working day by collecting the ripe cocoa cobs throughout the morning. It wasn’t until the end of the day, and after enjoying a nice sancocho, that the character that influenced me immensely arrived.</p>
<p>A 12-year-old boy, redheaded and full of freckles, came in from the back door. He wore knee-length jeans, a white vest, a slingshot across his chest, and rubber boots. He brought a bucket full of small fish he had just caught in a nearby river. He looked like a Colombian Tom Sawyer, an adventurous child; one of those that are in danger of extinction. Without thinking about it, he approached us to show us the catch of the day and began to talk to us about everything he did after school. His name is Wilmer and he’s Don Ismael’s grandson. He took me on a tour to show me his onion crop, some ducks he is raising, and finally, full of pride, he showed me his own cocoa tree. A thought came into my head: “the Colombian countryside does have a great future and it is because of children like him that we must continue to work”.</p>
<p>Wilmer is an enterprising and curious child. At a very early age, he began to help his mother, as their father left them when he was just a baby. But this never stopped him. His way of seeing life, of appreciating agriculture, his desire to get ahead and the way he helps his family, marked me in an indescribable way.</p>
`,
      autor: {
        name: 'JOSÉ MALDONADO', avatar: 'https://media.licdn.com/dms/image/C5603AQGWmXeWsufD9Q/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=sPc6xh78N7oYmS61XLxym_XcKLYzzBJ9PSp5kyFCPQk', details: 'SUSTAINABLE SUPPLY ANALYST', description: 'Sustainable Supply Analyst for Luker Chocolate, focused on agricultural development and sustainability projects of the company\'s value chain.Project leader for organizations of cocoa producers and small- scale farmers.', linkedin: ['https://www.linkedin.com/in/jos%C3%A9-miguel-maldonado-v%C3%A9lez-79a818114/', 'Jose Maldonado']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'pinta-caribia-dreaming-in-colors-while-painting-a-brighter-reality',
      title: 'PINTA CARIBIA: DREAMING IN COLORS WHILE PAINTING A BRIGHTER REALITY',
      date: 'JULY 2019',
      content: `<p>In The Chocolate Dream, we believe that to fulfill a dream, the union of many is required, and we firmly believe in art and culture as detonators of development.</p>
<p>This is the story of our first volunteering, a tale where art and teamwork were integrated to take the first step —of many we have given so far—intending to generate development in one of the cocoa regions where we work.</p>
<p>Our cocoa forest in Necoclí employs people from nearby towns, full of passion and eager to master the cultivation of cocoa, provide for their families and lead the progress of their communities. Among our cocoa farmers, we have 70 workers from Caribia, a small village that is part of the subregion of Urabá, Antioquia, Colombia.</p>
<p>For some time now, its inhabitants began to train as technicians in sustainable tourism and voiced their enthusiasm towards turning their village into a touristic destination, taking advantage of its historical wealth —it was the first settlement in the area and had a tremendous ethnic diversity—. This was an excellent opportunity to support the Caribia community by helping them spread to the world the energy and generosity their people carry in their hearts, and their relentless desire to move forward. We were thrilled to display that inner beauty into the community, by transforming Caribia into a vibrant touristic destination. With this grand challenge on our hands, Luker Chocolate recruited happy volunteers to paint the Caribia dream in colors, and this is how Pinta Caribia was born.</p>
<p>For us Pinta Caribia is more than just an initiative, it is the tangible metaphor and magical realism that exists around the cocoa pod, that not only nurtures the beans but also nurtures lives and builds dreams around it.  With our hearts filled with empathy and lots of excitement, the sustainability team of The Chocolate Dream started to materialize the execution of Pinta Caribia.</p>
<p>This is how we got in touch with the Orbis-Pintuco Foundation (organization with experience generating development through education and color in vulnerable populations throughout Colombia) and together we saw the potential of doing an artistic day in which volunteers from Luker Chocolate and inhabitants of Caribia would paint as a team until the last house of the village.</p>
<p>The Orbis-Pintuco Foundation helped us to create a program in which 20 young people from Caribia applied to be trained as technicians in painting. Now we only needed the materials, because we had to collect 500 gallons of paint. Between the Orbis Pintuco Foundation, Luker Chocolate and its collaborators, we collected donations to reach the goal. Additionally, 30 of our collaborators, including the management committee, travelled as volunteers to participate in Pinta Caribia, the name we decided to put on this initiative and work shoulder to shoulder with the workers of our farm.</p>
<h3>PAINTING A DREAM</h3>
<p>And the big day finally arrived, on June 22nd, more than 30 volunteers and Caribans united their efforts around the dream of turning Caribia into the most colorful place in Necoclí. The palette was carefully selected to represent the colors found in the cultivation of cocoa, colors that for the Caribia population have a deep meaning: blue symbolizing tranquility, green representing the peace found in the village, yellow representing the prosperity achieved in the cocoa fields and red for the love they have for their community and families.</p>
<p>Each volunteer helped two families to paint their houses while receiving assistance from the inhabitants who had previously been trained by the Orbis-Pintuco Foundation. Also, the community was responsible for preparing breakfast, lunch and food, thus concretizing great teamwork and strengthening the links between Luker Chocolate and the community.</p>
<p>Shoulder to shoulder, despite the heat and exhaustion, we worked for a common goal and this effort was reflected in the results: 100 houses were painted that day, from the primary school, community center, nursery, to the playgrounds.</p>
<p>The Chocolate Dream colors covered more than 100 houses in the small town, and these colors tell the story of how dreaming together and working together can make dreams a beautiful reality. Today we want to thank the community of Caribia for allowing us to connect with their dreams, open the doors of their homes and let us fill their lives with color and chocolate; without a doubt, they also painted our hearts. </p>
`,
      autor: {
        name: 'SARA GALEANO', avatar: 'https://media.licdn.com/dms/image/C4E03AQHmeKp3KisJdQ/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=grUKZd2SlKyWPgqFHw1IBrNHv31uaLPa6K73hx7A_r8', details: 'Brand & Communications Professional', description: 'Social Communicator of the Pontificia Universidad Javeriana with emphasis on advertising and complementary matters in organizational. Experience in the development of marketing, branding and communication strategies, corporate affairs management, public relations for positioning and construction of corporate reputation.', linkedin: ['https://www.linkedin.com/in/sara-galeano-vallejo-30760831/', 'Sara Galeano']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'in-the-shoes-of-the-cocoa-farmers-of-huila-2',
      title: 'IN THE SHOES OF: THE COCOA FARMERS OF HUILA',
      date: 'AUGUST 2019',
      content: `<quote>Thank you, God, for the food before us today and for giving us the blessing of being able to enjoy it. We pray for those who do not have enough to eat, for the sick, for prisoners, and the kidnapped. We thank you for the opportunity to meet here today and for the presence of these doctors and engineers who have come to help us progress, to improve our countryside, our farms, and our lives. Amen</quote>.  Prayer of Don Jesús, cocoa farmer in Huila.
<p>Standing with his eyes closed, and holding hands with the people around him, this was the prayer that Jesus Augusto Gomez uttered aloud before inviting us to the table. The chicken sancocho had been prepared on a wood-burning stove as you could tell by its smoky taste, by the smell of wood in the air, and by the smoke blowing out from Doña Elvira Quintero de Gómez roof. The table was laid with a classic hand-woven tablecloth, very typical of Colombian peasant houses, with plates from different sets collected over the years and cutlery of different styles and shapes. The soup, the main course and a delicious agua de panela were arranged in each one of the 8 carefully placed spaces at Doña Elvira’s wooden table. In total, there were 11 of us, so after the prayer, Don Jesus, his wife Doña Elvira, and their son “El Mono”, moved to let the guests sit down and have lunch first. He said we were the priority. In spite of having worked all morning on his farm harvesting cocoa under the Huila sun (Colombia), and at the age of 75, he refused to sit down as a gesture of hospitality.</p>
<p>The four of us from Bogotá were, in fact, complete strangers to this cocoa family. We had asked the associations ASOPROCAR and ASOPECA to take us to visit a farm in the region, because we wanted to learn about their reality, live in their environment for a few hours, and spend time with them for no other reason than to listen to what they had to tell us.</p>
<p>I have to confess that when we arrived in Huila, I had no clear idea of how they were going to receive us. I thought that our visit would make them suspicious because it’s not a common thing to do. We had arrived suddenly hoping to get into a family’s personal space for an entire day in exchange for nothing. I thought they would refuse to receive us or ask us what we were really there for. What would happen if you suddenly arrive at a house in Bogotá and asked to stay there all day? To my surprise, we were greeted with a big smile and a contagious kindness.</p>
<p>After a short conversation to welcome us and to show us around the place, we went out into the 3-hectare cocoa plantation with very tall, old trees, with thick trunks, a typical characteristic of the area’s very traditional agriculture and practices. Don Jesus was walking with some difficulty, as he had an accident when he was young that injured his leg. He didn’t complain, but we could see that it was difficult for him to walk. He then told us that he had had five strokes, but that he was still working as usual. During the tour, he spontaneously told us anecdotes about his life. To the left of the path where we walked, there was a ravine with crystalline water, with huge stones and leafy vegetation. The shade of the cocoa trees and the sound of the ravine made for a cosy atmosphere that served as the backdrop for a conversation of about 2 hours. We learned about how Don Jesus managed his estate. Although he did not know for sure how much he produced, nor did he have any figures written down, he knew his trees like the palm of his hand.</p>
<p>After lunch where we were treated with so much hospitality, we spent time with the family who taught us how to prepare guarapo, a typical Colombian drink made with sugar cane juice. In the courtyard, they had an old cane-chopping machine. “El Mono” had already cut some of these plants that were ready to be put through the machine to extract the juice. We all helped, and in the end, obtained about 5 liters of guarapo. Tired out by the afternoon activity, we went to the kiosk where Don Orlando, leader of the cocoa association, who works with Don Jesus, invited for a brandy after dinner.</p>
<p>At the kiosk, Don Jesus told us more stories about his life, one of them about his leg accident. He told us that at the age of 20, he was chasing a girl he liked. One night, he wanted to go out on his horse to look for her. His mother warned him not to go out, that it was too late and that it was not the right thing to do. He went out anyway and fell from his horse, which almost left him disabled. The moral he had to share with us, in the end, was: “A mother always knows what’s best for you. Always listen to your parents”. Just then, Guillermo Valderrama, our 65-year-old-consultant, added, “That’s right, he who doesn’t listen to his mother, doesn’t listen to God’s voice”.</p>
<p>He also told us about how he had stopped drinking alcohol in his old age, thus losing many of his friends. He told us about his childhood secrets and his indelible memories of the era of bipartisan violence between liberals and conservatives – two Colombian political parties – during the 1950s. He told us how he saw many people die near the farm where he grew up and about the recent violence. At 75, he recounted these memories as if they had happened yesterday. His trauma was evident, but his conviction for the value of work, the countryside, agriculture, and peaceful community life was also strong.</p>
<p>As we were about to leave, “El Mono”, who had a mental disorder due to having drunk adulterated alcohol and who had been feeling depressed and lonely lately, told us: “thanks to your visit, my farm looks even more beautiful to me today”. Today has been an amazing and happy day for me. I learned more things than on any other day in the Bogotá office; I spoke with more empathy; I was more at peace; more human; happier; I hugged people I had never seen before; I enjoyed the tranquillity of the countryside; I met people who, despite not having been able to finish high school, knew more than I did; I was once again aware of the value of our countryside and of the human quality and drive of our peasants.</p>
<p>At Luker Chocolate, we will continue to work with them and for them, because it is they who make it possible for us to enjoy the food the earth gives us.</p>
<p>Those two weeks I spent with cocoa farmers in Huila marked my life as very few other things had. Pedro, Doña Carmen, Samuel, and Wilmer made me see that life in the countryside is very different from what I had experienced; it is more challenging, yes, but just as it challenges the land also inspires passion. It reconnects you with your roots and makes you grateful for the little things in life. For this reason, I want to continue to work towards developing the Colombian countryside through cocoa; I want to dignify the life of the farmers of my country and, above all, I dream of the day when all farmer children can have a quality future, so that their dream is to stay and work in the countryside and change the reality of our country.</p>
`,
      autor: {
        name: 'SERGIO RESTREPO', avatar: 'https://media.licdn.com/dms/image/C4E03AQEU_fSBYnqwnw/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=pqJb74EtssHW43ajcC8aeRAErFY_wdDFWW8NCbfjXzE', details: 'Marketing Vice-president', description: 'I see chocolate as a tool of change. I am interested in sharing experiences with entrepreneurs, entrepreneurs and leaders who bet and believe in disruptive innovation, in shared value, in technology and in putting people at the center of the conversation.', linkedin: ['https://www.linkedin.com/in/sergiorestrepogutierrez/', 'Sergio Restrepo']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'cocoa-friends',
      title: 'COCOA FRIENDS',
      date: 'AUGUST 2019',
      content: `<p>Before working at Luker Chocolate as a trainee at Granja Luker, our cocoa research and training center, I imagined that I would work in an office with white walls and full of computers, but I was very wrong.</p>
<p>When I arrived at Granja Luker, my welcome committee was made up of a pack of very grumpy dogs who wouldn’t let me in, because they, good guard dogs that they are, are in charge of keeping the farm safe. It was only after I managed to come in closer to them that they let me in so I could get to my new job. Without knowing it, one of the dogs -Peggy- would become my inseparable adventure companion. It was then that I realized that this was not a typical job because from then on my working days would be spent in the middle of a cocoa forest and my time shared with hundreds of different species.</p>
<p>Plants, and crops in general, are known to harbor an immense number of insects and animals, but deforestation and the intensive use of monocultures have caused them either to migrate or to increase their populations disproportionately, to such an extent that they are considered pests. Forest plantations in Colombia have been used for commercial purposes and as strategic tools for the restoration of degraded soils and the conservation of water resources; however, the effect of forest plantations on local diversity has been insufficiently evaluated, especially in the role they play as habitats for the restoration and conservation of biodiversity (Haggar et al., 1997, Barlow et al., 2007, Mitra and Sheldon 1993). In the case of Luker Chocolate, we have implemented agroforestry systems both on Granja Luker and on our cocoa farms in Necoclí (550 ha) and Casanare (1,000 ha), thus promoting biodiversity and an optimal environment for the conservation of autochthonous fauna and flora.</p>
<p>But how do we measure the biodiversity we promote with our crops? Birds are used as an indicator of a region’s biodiversity because their abundance and occurrence is influenced by the characteristics and composition of the habitat with which they are associated, because they are relatively easy to observe, and they can be counted at large scales (GREGORY, 2006); RAMÍREZ-ALBORES AND RAMÍREZ-CEDILLO, 2002). Only in our cocoa forest in Necocli, there are 96 different bird species, almost 10% of the total number of birds reported in Colombia.</p>
<p>At Granja Luker, we measure biodiversity not only based on the presence of birds but also on the many other species that inhabit the crop’s ecosystem and that, in time, have become cocoa friends. Here are some of my most memorable anecdotes involving some of them.</p>
<p>On my first day of work, I decided to tour the farm with Peggy. As we walked, she started barking and frantically chasing after a group of birds. As I got closer, I realized that these animals were not in the cocoa field by chance; on the contrary, they were setting traps on the cocoa fruits to attract insects that would become their food.</p>
<p>Little by little, the day progressed, and it was soon time for lunch. In an ordinary office, lunchtime is usually a time to interact with our colleagues, and although that was what I was hoping for, it was not the case, since my colleagues were a little different. As I approached the dining room -to which the herd of dogs had come too- 1 km away from the main house, I came across chickens that were also looking for food, as well as a couple of hungry ducks and a parrot that shouted “quiere cacao?”.</p>
<p>A month later, I went to gather fruit with the farmworkers under a completely clear sky; the day was sunny, and I felt that nothing wrong could happen. But all of a sudden, I felt as though I was being electrocuted. I started screaming and the workers, used to such things, told me to take my shirt off because I was being stung by tiny wasps. I listened to them and managed to get rid of the insects, but then I decided to go back to see what had stung me, only to get stung again. I had been warned that in life one has both good and bad bosses, that some of them may even be moody, but I do not think that anyone has been so severely judged by a boss as I was by those wasps; surely that was their way of telling me that I had to be more respectful of their home.</p>
<p>The ecosystem at La Granja also includes some white worms that are colloquially called gusano pollo or chicken worms and that appear at certain times of the year. The first time I heard about them was when a farmer was pruning the trees, and one of these worms bit him and left him with a fever all day long. These animals are very common and go unnoticed as they feed on the leaves and live below them.</p>
<p>One day, everything was suddenly completely different. As we crossed a guadua bridge, we came across a small friend who could be terrifying for some people and fascinating for others: a snake found in some trees near a creek that crosses through the farm. When we saw it, I panicked and decided to move away a little, but it was used to seeing humans and didn’t get upset. One of the workers took it in his hands to take pictures of her, as it was one of the “pets” that belonged to the farm and, as they are often killed in the region, this one was being protected by the workers. After the photo was taken, the worker put it back in its den, while I recovered from the shock!</p>
<p>Finally, I will never forget the day when one of the workers saw something tiny moving in the bushes and decided to take a look. It was a baby squirrel that had lost its mother, so he took it to the farm, took care of it himself, and protected it from predators. In time, the squirrel decided to go its own way, but it often comes back to visit the worker that helped it as a baby, or to eat cocoa cobs!</p>
<p>These are just a few of the many species that live here and show how a cocoa crop can become a sanctuary for hundreds of coexisting vertebrate and invertebrate animals, from possums, armadillos, guatines, dogs, cats, ducks, rabbits, to snakes and insects. They have to be protected and cared for because they perform a task that is way more important than anything we can do: they maintain a balance of populations and the biodiversity of an entire ecosystem. While they do such an outstanding job, I, who remained working at Granja as an agricultural analyst, will continue to let them walk with me and fill my days with greater meaning.</p>
`,
      autor: {
        name: 'JUAN JOSÉ HINCAPIÉ', avatar: 'https://media.licdn.com/dms/image/C4D03AQF3R8cD2WhDyw/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=1h2n3IYyHMZm-VA4MHb0bko7VW_XLXAFZnoyRIqj334', details: 'Agricultural Analyst', description: 'Agricultural Analyst at Luker Chocolate', linkedin: ['https://www.linkedin.com/in/juan-jos%C3%A9-hincapi%C3%A9-toro-b18a12181/', 'Juan José Hincapié']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'a-chocolate-a-day-keeps-the-doctor-away',
      title: 'A CHOCOLATE A DAY, KEEPS THE DOCTOR AWAY',
      date: 'AUGUST 2019',
      content: `<p>Few people are aware of the great benefits of regular cocoa consumption; the vast majority of consumers are convinced (some by medical recommendations) that cocoa and/or chocolate are harmful to health. In order to solve this dispute, Luker Chocolate’s research area, in association with research centres in Colombia and Italy (University of Molise – Campo Basso, Sannio Tech – Benevento, and University of Brescia), characterised the cocoa from Colombia, Ecuador and Peru, and for over four years have developed a variety of experimental designs, including preclinical and clinical studies with 50 volunteers. Once the results were obtained, we discussed them with a group formed by the most renowned cardiologists, nutritionists, nutritionists, dermatologists, sportsmen, etc.</p>
<p>Today, we have enough scientific and technical evidence to be able to assert that regular consumption of cocoa helps to improve and protect people’s health. But how much chocolate should we consume? Our recommendation is two servings of chocolate powder a day or one of dark chocolate for at least one month. This will help you to:</p>
<h3>PROTECT YOUR CARDIOVASCULAR HEALTH</h3>
<p>Consuming cocoa helps reduce total cholesterol and bad cholesterol (LDL), while increasing good cholesterol (HLD) and reducing or regulating the omega 6 and omega 3 ratio, helping to improve your heart health and decreasing the risks of such diseases. Your heart will become even stronger if, as well as consuming cocoa, you begin to acquire healthy lifestyle habits in your diet by decreasing the consumption of animal fats and carbs, while increasing your consumption of pulses and vegetables. We also recommend that you do some physical exercises such as walking up to 10,000 steps a day.</p>
<h3>PROTECT GASTRIC AND IMMUNOLOGICAL HEALTH</h3>
<p>Cocoa contains fibre (insoluble and soluble) that helps to improve bowel movement and eliminate toxins from the metabolism of fats and carbohydrates. These types of fibre have a prebiotic characteristic that feed probiotic microorganisms that maintain gastric health. It is important to remember that immune health is largely conditioned by gastric health; unfortunately many people have gastric problems due to the low intake of fibre from pulses and vegetables.</p>
<p>Tip: eat chocolate and vegetables daily, and you will notice how your gastric and immune health improves.</p>
<h3>IMPROVE YOUR MOOD</h3>
<p>Cocoa has molecules that act as neurotransmitters of messages in the central nervous system. One of these is phenylethylamine, better known as the molecule of love. It has been proven that the brain of a person in love contains large amounts of this substance that could be responsible for certain sensations such as excitement, tachycardia, and redness, among others. This neurotransmitter triggers the action of other neurotransmitters called happiness molecules such as serotonin (generates a feeling of self-love and respect for others), oxytocin (generates a feeling of love for others and affective bonding), and dopamine (generates joy and a feeling of euphoria).</p>
<p>Tip: don’t make life bitter, take it easy and drink chocolate, the antidepressant par excellence. It really works.</p>
<h3>PRODUCING OR ACTIVATING THE BODY’S ENERGY SYSTEMS</h3>
<p>Yes, consuming cocoa helps to produce energy or activate the existing energy in the body. Its potassium content and the activation of important proteins in the process of energy production, make cocoa a key morning food that will help you stay energised throughout the day.</p>
<p>Best of all, it doesn’t contain excessive doses of caffeine.</p>
<h3>MAINTAIN THE OVERALL HEALTH</h3>
<p>This looks like a phrase taken from a youtuber’s video. It seems incredible or a little daring to claim. Let me explain. When we breathe or expose ourselves to the sun, our body releases substances that oxidise it and that are very reactive and dangerous. They are called free radicals and are incomplete molecules that go looking around our body for electrons to attach to. These radicals are the cause of the vast majority of chronic non-communicable diseases that cause the most deaths in the world, such as heart disease, cancer, diabetes and obesity. Although our body produces its own antioxidants that quickly neutralise those free radicals or oxidising substances, stress, irregular mealtimes, smoking, drinking too much alcohol, and not exercising decrease the production of natural antioxidants and free radicals begin to take over. In other words, bad habits make us rusty! Fortunately there are foods like tea, grapes, blueberries and especially chocolate, which bring levels of antioxidants to the body preventing this from happening. In the specific case of cocoa, it has a substance called NFR2, which is a protein that reactivates the genes that produce our own antioxidant substances, further increasing the protection against chronic non-communicable diseases.</p>
<p>Cocoa also possesses significant quantities of minerals that promote the development of biological reactions, such as potassium, which plays a role in energy production and regulates the heart rate; calcium, which helps transmit nerve impulses as well as protecting against osteoporosis; iron, which helps fight anaemia; and zinc, which helps the immune system, the cognitive development of children and the maturation and maintenance of sexual activity over the years.</p>
    `,
      autor: {
        name: 'HUGO OLARTE', avatar: '', details: 'Investigation and Special Projects Manager', description: 'Dir I&D en Casa Luker', linkedin: ['https://www.linkedin.com/in/hugo-olarte-83625568/', 'Hugo Olarte']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 're-imagining-the-role-of-women-in-agriculture',
      title: 'RE-IMAGINING THE ROLE OF WOMEN IN AGRICULTURE',
      date: 'SEPTEMBER 2019',
      content: `<p>On August 2, we participated in the Women Economic Forum Latin America, the largest global gathering of women entrepreneurs and leaders worldwide. We gave a talk in which we discussed how we are re-imagining the role of women in agriculture for the world. Participating in such spaces allows us to publicize the reality of the Colombian countryside by making visible the role of its farmers. It also allows us to turn our attention towards rurality and to generate awareness of the misinterpretation of farmers and the great challenge that agriculture currently faces.</p>
<p>The importance of rethinking the future of agriculture not only in Colombia but in the world, is because of the threat to the sustainability of agriculture and food security. Young people are not finding the countryside attractive or prosperous; there is no motivation to work in this sector. According to the United Nations, by 2050, the world population will be 9700 billion, making it necessary to question how and who will supply the basic inputs for food. Agriculture has the capacity to increase the incomes of vulnerable populations more effectively than other sectors of the economy according to the World Bank and yet a large percentage of adults in poverty are farmers. We live in a country that is 94% rural, but young people are increasingly migrating to urban areas.</p>
<p>In the talk we gave, we wanted to bring an inclusive perspective, showing that we cannot understand farmer women until we understand the countryside. We brought together the visions of sustainability, agriculture and women, to show what we are doing with The Chocolate Dream, our long-term-vision to drive change in the cocoa regions where we work.</p>
    `,
      autor: {
        name: 'ANDREA CAMACHO', avatar: 'https://media.licdn.com/dms/image/C5603AQGoUFQwRo9MVw/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=75pM_bDTKE8y5wBMwdDbFJpjDm50Br33zWmK-dgQ77E', details: 'Social Innovation Professional', description: 'MSc Social Innovation and Entrepreneurship student with interest in cultural projects. Designer by trait with a certificate in digital media from Yoobee Design School. Three years of experience in innovation, social design, co-creation, product and graphic design', linkedin: ['https://www.linkedin.com/in/andreacamachogonzalez/', 'Andrea Camacho']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    },
    {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      url: 'small-changes-big-revolutions',
      title: 'SMALL CHANGES, BIG REVOLUTIONS',
      date: 'DECEMBER 2019',
      content: `<p>This story began 8 years ago, when against all odds we arrived in Necocli, Urabá antioqueño, to cultivate our first cocoa forest.</p>
<p>For years this has been a region that has carried the burden of violence and all that this implies: poverty, inequality, lack of education, loss of meaning of life and hope.</p>
<p>Upon its arrival, Luker decided not only to have the best Fine Flavour Cocoa crop in the country, but also to become a model of sustainability where people are the centre: its ultimate goal.</p>
<p>After 7 years of positive impacts on the neighbouring communities of the 550-hectare forest, in 2017 one of the districts most benefited from the project took the initiative -hand-in-hand with The Chocolate Dream team- to celebrate the company’s historic arrival in their lives through a festival.</p>
<p>Caribia, a province where neither the State nor other private companies had reached, had not celebrated any festivities in years, it had no patron saint’s day and the Cocoa Festival was the best opportunity to start a new tradition.</p>
<p>2017 marked the beginning of this milestone for the Afro-Caribbean, Afro-Chocó and indigenous communities that inhabit this territory, the celebration was a success, and today it is only compared to the arrival of electricity 40 years ago. So they had to continue with the tradition, turn it into the territory’s heritage, the celebration of the cocoa harvest, and its effects on the lives of the locals.</p>
<p>And so it was that in 2018, we decided to do it again and now we are planning it together with Luker, the locals, the leaders, the Luker Foundation, as a single entity jointly defining what will be the most awaited festival of the year.</p>
<p>This planning has involved great revolutions based on events that seemed irrelevant at first such as the definition of the agenda of activities. Together we began to meet to define timetables, people, allied budgets and activities.</p>
<p>During this process of consensus and dissertations we discovered the importance of cultural, social, empathic and respectful dialogue involving different beliefs.</p>
<p>The community’s first proposal included topics such as cock fights, beauty pageants, motorcycle tours, cultural presentations, gastronomic samples, dances, songs and thousands of other things that identified them. Luker presented photography contests, craft workshops, chocolate tastings and other things that represented us.</p>
<p>In both proposals, there were enormous coincidences that made us feel like we had a single dream, a single purpose. But at the same time, as is natural when cultures meet, there were differences in some themes. And as we have always done, we decided to start conversing to find common ground.</p>
<p>We had two themes that distanced us, cockfighting and the beauty pageant, both so traditional in Colombian culture. So we began to talk about these issues.</p>
<p>From the company we respectfully proposed to omit the cockfights generating environmental and animal awareness. We also proposed that instead of celebrating women’s beauty, we should acknowledge their talent and their role in the more than 5 ethnic groups that live in the same territory.</p>
<p>Our respectful stance on deep-rooted culture was that over time we would modify beliefs and behaviours and that the Cocoa Festival could reflect a joint way of looking at life, where people, animals, nature, and culture deserved the greatest respect.</p>
<h3>We had a big, beautiful surprise.</h3>
<p>Far from being discarded and generating discord, our proposals were immediately understood. We also saw how these positions were already incorporated in the community on an individual level, and that, in their own personal reflection, they all had had these concerns, but this had not reached the collective. The Cocoa Festival was becoming a vehicle that would help to put certain topics on the table.</p>
<p>In a 3-hour long conversation, more than one and a half hours of planning were devoted to reflect on the beauty pageant; topics were touched on, led by the community, around the great talent of their women, the change in understanding the role of women, their importance in the culture and the differences between one ethnic group and another in that understanding. There was a reflection on what it means to put a young woman on a catwalk in a territory that had been sexist for years, the risk it represents and the message it sends to children.</p>
<p>It was incredible to see and hear in the voices of those who are sometimes considered uneducated or behind in world trends, as they wish to contribute to gender equality, women’s empowerment, human rights education, and how they can use the festival to implement a ritual for the creation of values, to reinterpret beliefs and to celebrate the abundance and opportunities that a product, cocoa, has brought into their lives.</p>
<p>The same thing happened with the cockfight, the consensus around this issue was very fast and we all decided to highlight values of care for the environment that this practice does not reflect.</p>
<p>We left this meeting not only with a new agenda, with competitions for talented women and with environmental tours, but also with the firm conviction that these actions that sometimes do not seem to have as much impact as a festival, in the end are nothing more than the manifestation of the reinterpretation of the culture of a community and its encounter with other beliefs and communities.</p>
<p>We witnessed a change that is not easy to witness in a country of traditions. The 2018 Cocoa Festival was a tribute to farmers, women, animals and nature.</p>
<p>In three days we will be living the third edition of the festival, everybody is welcome!</p>
`,
      autor: {
        name: 'JUANA BOTERO', avatar: 'https://media.licdn.com/dms/image/C5603AQFburD-lKe7tQ/profile-displayphoto-shrink_800_800/0?e=1581552000&v=beta&t=OrPNQWmiurHcatseEVuDih5SDGN16X30sgHlTTP8ymg', details: 'Sustainability Director', description: 'Lawyer from Eafit University with an emphasis on public international law from the University of Salamanca, Spain. Current Director of Sustainability at Luker Chocolate where she works to improve the living conditions of rural cocoa farming communities.', linkedin: ['https://www.linkedin.com/in/juana-botero-62a78958/', 'Juana Botero']
      },
      recommended: [{ img: 'planting.png', title: 'SMALL CHANGES, BIG REVOLUTIONS', subtitle: 'DECEMBER 2019', url: '/blog/take-stand/small-changes-big-revolutions' }, { img: 'planting.png', title: 'COCOA FRIENDS', subtitle: 'AUGUST 2019', url: '/blog/take-stand/cocoa-friends' }, { img: 'planting.png', title: 'THE RIGHT SPARK', subtitle: 'JULY 2019', url: '/blog/take-stand/right-spark' }]
    }
  ]

  articleLoaded = [];

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  loadArticle() {
    if (this.props.match.params.article) {
      if (this.props.match.params.category === 'customer') {
        const client = this.clients.find(client => client.url === this.props.match.params.article)
        this.articleLoaded = client;
      } else {
        const art = this.articles.find(art => art.url === this.props.match.params.article)
        this.articleLoaded = art;
      }
    }
  }
  render() {
    const { Search } = Input;
    const { Option } = Select;
    const { searchOpen } = this.state;
    const { category, article } = this.props.match.params;
    const latestArticle = this.articles[this.articles.length - 1];
    this.loadArticle();
    return (
      <Layout className="blog-component">
        <div className={`blog-component-header blog-component-header--${(article) ? article : category}`}>
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
            {category === 'customer' ?
              <Link to='/customer'>BACK</Link> :
              <Link to='/blog'>BLOG</Link>
            }
          </div>
          <FloatLogo btns={[{ url: category === 'customer' ? '/customer' : '/blog', btnText: category === 'customer' ? 'BACK' : 'BLOG' }]} />
          <div style={{ marginTop: '3em' }}>
            <div className="blog-component-header--search">
              <Search allowClear
                placeholder="input search text"
                onSearch={value => console.log(value), onClick => this.searchToggle()}
                className={searchOpen && 'blog-component-header--search-open'}
                style={{ width: 400 }}
              />
              <Select defaultValue="en"  >
                <Option value="es">ES</Option>
                <Option value="en">EN</Option>
              </Select>
            </div>
            <h1 style={{ fontSize: (article) ? '4em' : '5em' }}>{(article) ? this.articleLoaded.title : (category) ? 'Take a stand' : 'Headline'} </h1>
          </div>
        </div >
        <div className="blog-component-content">
          {!article &&
            <div className={`blog-tabs blog-tabs-${category && 'selected'}`} >
              <Link to='/blog/take-stand' className={category === 'take-stand' ? 'tab-blog-selected' : undefined}>TAKE A STAND</Link>
              <Link to='/blog'>INNOVATION</Link>
              <Link to='/blog'>CREATE SHARED VALUE</Link>
              <Link to='/blog'>THE CHOCOLATE DREAM JOURNEY</Link>
              <Link to='/blog'>WHAT YOU DIDN’T KNOW</Link>
            </div>
          }
          {(category) ?
            (article) ? <Article data={this.articleLoaded} /> : <TakeStand articles={this.articles} />
            :
            <div className="blog-layout">
              <div className="blog-layout-latest">
                <h1>Latest entries</h1>
                <Link to={'/blog/take-stand/' + latestArticle.url} className="blog-layout-latest--article">
                  <img src={require('../../assets/img/5thdimensions.png')} alt="" />
                  <p>{latestArticle.date}</p>
                  <h2>{latestArticle.title}</h2>
                </Link>
              </div>
              <div className="blog-layout-articles">
                {Object.keys(this.articles.reverse()).map(i =>
                  i <= 3 && <div className="blog-layout-articles--item" key={i}>
                    <Link to={'/blog/take-stand/' + this.articles[i].url} className="blog-layout-latest--article">
                      <img src={require('../../assets/img/train-luker.png')} />
                      <p>{this.articles[i].date}</p>
                      <h2>{this.articles[i].title} </h2>
                    </Link>
                  </div>
                )}
              </div>
              <div className="blog-layout-featured">
                <h1>Featured</h1>
                <div className="blog-layout-featured-item">
                  {Object.keys(this.articles).map(i =>
                    i <= 4 && <div className="blog-layout-articles--item" key={i}>
                      <Link to={'/blog/take-stand/' + this.articles[i].url} className="blog-layout-latest--article">
                        <p>{this.articles[i].date}</p>
                        <h2>{this.articles[i].title} </h2>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div className="blog-layout-newsletter">
                <h2>NEWSLETTER</h2>
                <p>Join our monthly newsletter and don’t miss a bean!</p>
                <form action="/" >
                  <input type="text" name="email" placeholder="Give us your email!" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          }
        </div>
        <Footer />
      </Layout >
    );
  }
}

export default Blog;