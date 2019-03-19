import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Article extends React.Component {
  render() {
    return (
      <article className="article">
        {/*<h3 className="article__title">{this.props.title}</h3>*/}
        <p className="article__description">{this.props.text}</p>
      </article>
    );
  };
};

Article.propTypes = {
  text: PropTypes.string
};

Article.defaultProps = {
  text:''
};
