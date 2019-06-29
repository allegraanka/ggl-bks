import React from "react";
import "./style.css";
import API from "../../utils/API";

class SearchField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleSubmit(e) {
        console.log(`A search was submitted: ${this.state.value}`);
        e.preventDefault();
    }

    handleBooksCall = () => {
        API.loadBooks()
        .then(res => {
            console.log(res.json());
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange}/> <br />
                <input className="search-button" type="submit" value="Search" onSubmit={this.handleBooksCall}/>
            </form>
        );
    }
}

export default SearchField;