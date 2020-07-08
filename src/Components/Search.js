import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; //BOOSTRAP

class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    onChangeEvent = e => {
        const query = e.target.value.toString().toLowerCase();
        this.props.onsearch(query);
    }


    render() {
        return (

            <input className="form-control col-12" type="text" placeholder="Book Name" onChange={this.onChangeEvent} />


        );

    }

}

export default Search;