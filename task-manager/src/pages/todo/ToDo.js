import React from 'react';
import { connect } from 'react-redux';

import Task from '../../components/task/Task';

import list from './list';

import './style.css';
import Form from "../../layouts/baselayout/components/form/Form";

class ToDo extends React.Component {
    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <Task className="article_todo" key={index} id={item.id} text={item.text} status={item.status}/>
            );
        });
    };

    render() {
        return (
            <React.Fragment>
                <Form className={'article_form'}/>
            </React.Fragment>
        );
    };

};
export default connect (() => {}, () => {})(ToDo)
