import React, { Component } from "react";
import { List, ListItem } from "../List";
import "./style.css";

class BookDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            title: "",
            authors: "",
            description: ""
        }
    }

    render() {
        return(
            <>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem key={book._id}></ListItem>
                        ))}
                    </List>
                ) : (
                        <h3>No Results to Display</h3>
                    )}
            </>
        );
    }

}

export default BookDisplay;