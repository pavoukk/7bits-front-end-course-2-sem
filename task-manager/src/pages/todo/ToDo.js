import React from 'react';

import Task from '../../components/task/Task';

import list from './list';

import './style.css';

export default class ToDo extends React.Component {
  renderList = () => {
    return list.data.map((item, index) => {
      return (
        <Task className="article_todo" key={index} text={item.text} status={item.status}/>
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
