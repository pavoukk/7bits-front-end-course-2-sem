import React from 'react';


import FormField from '../../../../components/formField/FormField';
import Button from '../../../../components/button/Button';

import './style.css';
import Task from "../../../../components/task/Task";
import list from "../../../../pages/todo/list";

export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            disabled: true,
            value: '',
            itemList: [...this.getElements(list)]
        };
    }

    getElements = (itemList) => {
        let res = itemList.data.map((item, index) => {
            return item.text
        });
        return res;
    };

    renderList = (itemList) => {
        const items = itemList.map((item, index) => {
            return (<li key={index} className={'list__item'}>
                    {<Task className="article_todo" key={index} id={item.id} text={item} status={item.status}/>}
                </li>
            );
        });
        return (
            <ul className={"form__list list"}>
                {items}
            </ul>
        );
    };

    onChange = (event) => {
        this.setState({
                value: event.target.value,
                disabled: event.target.value === ''
            }
        )
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            itemList: [this.state.value,
                ...this.state.itemList
            ]
        });
        this.setState({
            value: '',
            disabled: true
        })
    };


    render() {
        return (
            <React.Fragment>
                <form className={'form'}
                      onSubmit={this.onSubmit}>
                    <FormField
                        className={'form__field'}
                        placeholder={'Type your new task'}
                        onChange={this.onChange}
                        value={this.state.value}
                    />
                    <Button
                        className={'form__button'}
                        type={'submit'}
                        value={'Create'}
                        disabled={this.state.disabled}
                    />
                </form>
                {this.renderList(this.state.itemList)}
            </React.Fragment>
        );
    }
    ;
}
