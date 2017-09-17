import React, {Component} from 'react';
import Autosuggest from 'react-autosuggest';

import {addToWatchlist} from 'api';

import "./index.css";

const escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const getSuggestions = (value, dictionary) => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return dictionary.filter(language => regex.test(language.name));
};

const getSuggestionValue = suggestion => suggestion.name;

class SearchBar extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: getSuggestions('')
        };
    }

    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value, this.props.dictionary)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

		handleSuggestionClick=(name)=>{
			this.setState({
				value: ''
			});
			addToWatchlist(name)
		}

		renderSuggestion = ({name}) =>
			<div onClick={this.handleSuggestionClick.bind(this, name)}>
		    {name}
		  </div>;

    render() {
        const { value, suggestions } = this.state;

				const inputProps = {
            placeholder: "Search . . .",
            value,
            onChange: this.onChange
        };

        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}


export default SearchBar;
