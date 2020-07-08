import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


class PanelAdd extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            title: '',
            image: '',
            rating: 1
        };

    }

    onChangeTitle = (e) => {
        this.setState({ title: e.target.value });
    }

    onChangeImage = (e) => {
        this.setState({ image: e.target.value });
    }

    onChangeRating = (e) => {
        const rating = parseInt(e.target.value);
        this.setState({ rating: rating });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const title = this.state.title;
        const image = this.state.image;
        const rating = this.state.rating;
        this.props.onadd({ title: title, image: image, rating: rating });
        this.props.onCancel();
    }



    render() {
        return (
            <Modal.Dialog>
                <Modal.Header >
                    <Modal.Title>Book Form</Modal.Title>
                    <button className="button btn-normal float-left" onClick={this.props.onCancel} >X</button>

                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={this.onSubmit} >
                        <p>
                            <label>Book Title</label><br />
                            <input type="text" name="title" className="form-control" onChange={this.onChangeTitle} />
                        </p>

                        <p>
                            <label>Book Image</label><br />
                            <input type="text" name="image" className="form-control" onChange={this.onChangeImage} />
                        </p>

                        <p>
                            <label>Qualification</label><br />
                            <select className="custom-select col-2" onChange={this.onChangeRating}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <input type="submit" className="button btn-blue float-right w-100" value="Register" />

                    </form>
                </Modal.Body>

            </Modal.Dialog>

        );
    }

}

export default PanelAdd;