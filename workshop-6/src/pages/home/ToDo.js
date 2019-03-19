import React from 'react';

import Article from '../../components/article/Article';

import list from './list';

import './style.css';

export default class ToDo extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Article key={index} text={item.text} />
      );
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.renderList()}
      </React.Fragment>
    );
  };
};
