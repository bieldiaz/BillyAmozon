import React, { Component } from 'react';
import Search from './Search';
import PanelAdd from './PanelAdd';

import '../css/Menu.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = { newItemPanel: false };

        //this.add = this.add.bind(this);

    }

    add = () => {
        this.setState({ newItemPanel: true });
    }

    onCancel = () => {
        this.setState({ newItemPanel: false });
    }

    render() {
        return (
            <div className="container">
                <div className="subcontainer">
                    <div className="logo">
                        {this.props.title}
                    </div>
                    <div className="search">
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="actions">
                        <button className="button btn-blue" onClick={this.add}>Add a book</button>
                    </div>
                </div>
                {
                    (this.state.newItemPanel) ?
                        <PanelAdd onCancel={this.onCancel} onadd={this.props.onadd} />
                        :
                        ''
                }
            </div>
        );
    }

}

export default Menu;