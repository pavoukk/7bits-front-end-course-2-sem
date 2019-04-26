import React from 'react';

import Task from '../../components/task/Task';

import list from './list';

import './style.css';
import connect from "react-redux/es/connect/connect";

class Done extends React.Component {
    renderList =() => {
        return list.data.map((item, index) => {
            return (
                <Task className="article_done" key={index} id={item.id} text={item.text} status={item.status}/>
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
const mapDispatchToProps = (dispatch) => ({

});
const mapStateToProps = (state) => ({

});
export default connect (mapStateToProps, mapDispatchToProps)(Done)
