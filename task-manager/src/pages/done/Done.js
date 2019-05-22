import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { I18n } from 'react-redux-i18n';

import './style.css';

import getCurrentTasksList from "../../actions/tasksList/getCurrentTasksList";
import whoAmI from '../../actions/user/whoAmI';

import Task from '../../components/task/Task';


class Done extends React.Component {
    componentDidMount() {
        if(!this.props.authorized) {
            this.props.history.replace("/signin");
        }
        this.props.whoAmI();
        this.props.getCurrentTasksList("done");
    }

    renderList = () => {
        const items = this.props.tasks.map((item, index) => {
            return (
                <li key={index} className={'list__item'}>
                    {<Task className="article_todo" key={index} id={item.id} text={item.text} status={item.status}/>}
                </li>
            );
        });
        return (
            <ul className={"form__list list"}>
                {items}
            </ul>
        );
    };

    render() {
        if (this.props.tasks.length === 0) {
            return (
                <div className={"empty-done done"}>
                    <article className={"empty-done__article"}>
                        <p className={"empty-done__text"}>
                            {I18n.t('layout.page.done.empty.empty-text')}
                        </p>
                        <p className={"empty-done__text"}>
                            {I18n.t('layout.page.done.empty.empty-text-advice')}
                        </p>
                    </article>
                </div>
            )
        } else {
            return (
                <React.Fragment>
                    {this.renderList()}
                </React.Fragment>
            );
        }
    }
}

const mapDispatchToProps = (dispatch) => ({
    getCurrentTasksList: bindActionCreators(getCurrentTasksList, dispatch),
    whoAmI: bindActionCreators(whoAmI, dispatch)
});

const mapStateToProps = (state) => ({
    tasks: state.currentTasksListReducer.tasks,
    authorized: state.authorizeReducer.authorized
});
Done.propTypes = {
    tasks: PropTypes.array.isRequired,
    authorized: PropTypes.bool.isRequired,
    whoAmI: PropTypes.func,
    getCurrentTasksList: PropTypes.func,
    history: PropTypes.object
};
export default connect(mapStateToProps, mapDispatchToProps)(Done);
