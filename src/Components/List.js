import React, { Component } from 'react';
import Item from './Item';

function List(props) {

    return (
        <div className="list">
            {
                props.items.map(book =>
                    <Item
                        key={book.id} //MAPEAR FORMA INDIVIDUAL
                        id={book.id}
                        title={book.title}
                        image={book.image}
                        rating={book.rating}

                    />
                )
            }
        </div>
    );
}

export default List;