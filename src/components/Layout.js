import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

import metaImage from '../assets/images/meta.jpg';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPreloaded: true,
    };
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.setState({ isPreloaded: false });
    }, 100);
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children, fullMenu } = this.props;
    const { isPreloaded } = this.state;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Central Louisiana Region of SCCA' },
                { name: 'keywords', content: 'autocross, cars, cones, baton rouge, louisiana' },
                { name: 'og:title', content: 'CENLA SCCA'},   
                { name: 'og:description', content: 'Central Louisiana Region for Sports Car Club of America' },                
                { name: 'og:image', content: {metaImage} },
                { name: 'og:url', content: 'http://cenla-scca.org' },
                { name: 'twitter:title', content: 'CENLA SCCA' },    
                { name: 'twitter:description', content: 'Central Louisiana Region for Sports Car Club of America' },                
                { name: 'twitter:image', content: {metaImage} },
                { name: 'twitter:card', content: 'summary_large_image' },                

              ]}
            >
              <html lang="en" />
            </Helmet>
            <div
              className={isPreloaded ? ' main-body  is-preload' : ' main-body'}
            >
              <div id="page-wrapper">
                <SideBar fullMenu={fullMenu} />
                {children}
                <Footer />
              </div>
            </div>
          </>
        )}
      />
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
