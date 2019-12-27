import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class HelmetComponent extends Component {
  render() {
    const { title, description, cover, url } = this.props;
    return (
      <Helmet>
        <title>{title}</title>        
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={cover} />
        <meta property="og:url" content={url} />
      </Helmet>
    );
  }
}
export default HelmetComponent;