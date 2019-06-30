import React from "react";
import "./style.css";
import axios from "axios";

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            data: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    getData(e) {
        e.preventDefault();
        axios.get(`/api/books/:${this.state.value}`)
        .then(res => {
            this.setState({
                data: res.data
            })
        })
        .catch(err => {
            console.log(err);
        })
        console.log(`A search was submitted: ${this.state.value}.`);
    }

    render() {
        return(
            <>
                <form onSubmit={this.getData}>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/> <br />
                    <input className="search-button" type="submit" value="Search"/>
                </form>
            </>
        );
    }
}

export default SearchField;