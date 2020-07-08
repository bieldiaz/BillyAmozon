import React, { Component } from 'react';
import Search from './Search';
import PanelAdd from './PanelAdd';
import '../css/Menu.scss';

import 'bootstrap/dist/css/bootstrap.min.css'; //BOOSTRAP

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
            <div className="container-fluid mb-5 mt-5 ">

                <div className="row justify-content-center ">


                    <h1 class="ml7 mr-5">
                        <span class="text-wrapper">
                            <span class="letters">{this.props.title}</span>
                        </span>
                    </h1>

                    <div className="search">
                        <Search onsearch={this.props.onsearch} />
                    </div>
                    <div className="actions ml-5">

                        <button class="pulse" onClick={this.add} >Add a Book</button>

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