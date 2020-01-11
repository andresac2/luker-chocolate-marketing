import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ReactTitle } from 'react-meta-tags';

class HelmetComponent extends Component {
  render() {
    const { title, description, cover, url } = this.props;
    return (
      <Helmet>
        <title>{title.charAt(0).toUpperCase() + title.slice(1)}</title>
        <meta name="description" content={description ? description : 'More than a century of experience has given us what it takes to provide high-quality chocolate products and services around the world with Cacao Fino de Aroma. Sustainability and innovation are key to our process. Get to know us!'} />
        <meta property="og:title" content={title ? title : "Luker Chocolate | Cacao Fino de Aroma"} />
        <meta property="og:description" content={description ? description : "More than a century of experience has given us what it takes to provide high-quality chocolate products and services around the world with Cacao Fino de Aroma. Sustainability and innovation are key to our process. Get to know us!"} />
        <meta property="og:image" content={cover ? cover : "https://www.lukerchocolate.com/static/media/brick-luker.920c4c4e.jpg"} />
        <meta property="og:url" content={url ? url : "https://www.lukerchocolate.com/"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Luker Chocolate." />
        <meta name="twitter:image:alt" content="Luker Chocolate | Cacao Fino de Aroma" />
        <meta property="fb:app_id" content="your_app_id" />
        <meta name="twitter:site" content="@Luker_Chocolate" />
      </Helmet>
    );
  }
}
export default HelmetComponent;

/*
<!--  Essential META Tags -->
<ReactTitle title={title.charAt(0).toUpperCase() + title.slice(1)} />

<meta property="og:title" content="Luker Chocolate | Cacao Fino de Aroma">
<meta property="og:description" content="More than a century of experience has given us what it takes to provide high-quality chocolate products and services around the world with Cacao Fino de Aroma. Sustainability and innovation are key to our process. Get to know us!.">
<meta property="og:image" content="https://www.lukerchocolate.com/static/media/brick-luker.920c4c4e.jpg">
<meta property="og:url" content="https://www.lukerchocolate.com/">
<meta name="twitter:card" content="summary_large_image">


      <meta name="description" content={description? description : 'More than a century of experience has given us what it takes to provide high-quality chocolate products and services around the world with Cacao Fino de Aroma. Sustainability and innovation are key to our process. Get to know us!'} />
      <meta property="og:title" content={title? title : "Luker Chocolate | Cacao Fino de Aroma"}/>
      <meta property="og:description" content={description? description : "More than a century of experience has given us what it takes to provide high-quality chocolate products and services around the world with Cacao Fino de Aroma. Sustainability and innovation are key to our process. Get to know us!"}/>
      <meta property="og:image" content={cover? cover :"https://www.lukerchocolate.com/static/media/brick-luker.920c4c4e.jpg"}/>
      <meta property="og:url" content={url ? url : "https://www.lukerchocolate.com/"}/>
      <meta name="twitter:card" content="summary_large_image"/>
      <meta property="og:site_name" content="Luker Chocolate."/>
      <meta name="twitter:image:alt" content="Luker Chocolate | Cacao Fino de Aroma"/>
      <meta property="fb:app_id" content="your_app_id" />
      <meta name="twitter:site" content="@Luker_Chocolate"/>
*/