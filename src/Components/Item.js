import React, { Component } from 'react';
import '../css/Item.css';
import '../css/Menu.scss';
import 'bootstrap/dist/css/bootstrap.min.css'; //BOOSTRAP
import { Card } from 'react-bootstrap';

class Item extends React.Component {
    constructor(props) {//CONSTRUCTOR EN REACT

        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1,
            stars: []
        };
    }

    componentDidMount() {
        console.log('canviando');

        this.setState({
            id: this.props.id,
            title: this.props.title,
            image: this.props.image,
            rating: parseInt(this.props.rating),
            stars: Array(parseInt(this.props.rating)).fill(1)
        });

    }

    /* 
        componentDidMount() {
            this.setState({
                stars: Array(parseInt(this.props.rating)).fill(0)
            });
        } */

    onChangeRating = e => {
        const rating = parseInt(e.target.value); //EXTRAER VALORR

        this.setState({
            rating: parseInt(e.target.value),
            stars: Array(parseInt(e.target.value)).fill(1)
        });
        this.props.onupdaterating({
            id: this.state.id,
            title: this.state.title,
            image: this.state.image,
            rating: rating

        })
    }

    onremove = e => {
        this.props.onremove(this.props.id);
    }

    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }

    render() {
        return (



            <div className="item">
                <div className="image"><img src={'img/' + this.state.image} width="100%" /></div>
                <div className="title">{this.state.title}</div>
                <div className="rating">
                    <p>
                        {
                            this.state.stars.map(x =>
                                <img src="img/star.png" width="32px" />

                            )
                        }
                    </p>
                    <div className="row justify-content-center">
                        <p className="mt-2 mr-2">Rating</p>
                        <select className="custom-select col-3" value={this.state.rating} onChange={this.onChangeRating}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>

                        </select>
                    </div>

                </div>
                <div className="actions">
                    <button class="raise" onClick={this.onremove} >Delete</button>
                </div>

            </div >
            //========




        );
    }

}

export default Item;