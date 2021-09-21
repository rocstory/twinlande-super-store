import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

import './SearchBar.css';

function SearchBar() {
    return (
        <Form 
            className='search-bar'
            onClick={(e) => {e.preventDefault()}}
        >
            <Form.Control 
                className="search-input"
                type="text" 
                placeholder="Search"
            />
            
            <Button 
                className="search-btn"
                variant="primary"
                type="submit"
            >
                <FontAwesomeIcon icon={['fas','search']} />
            </Button>
        </Form>
    );
}

export default SearchBar;
