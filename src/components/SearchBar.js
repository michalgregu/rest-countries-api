import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Div = styled.div`
  background: white;
  height: 60px;
  width: 400px;
  box-shadow: 1px 5px 7px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const Input = styled.input`
  border: none;
  margin-left: 20px;
  outline: none;
`;

class SearchBar extends React.Component {
  render() {
    return (
      <Div>
        <FontAwesomeIcon icon={faSearch} />
        <form onSubmit={this.props.searchCountry}>
          <Input
            value={this.props.searchValue}
            placeholder="Search for a country..."
            type="text"
            onChange={this.props.updateSearch}
          />
        </form>
      </Div>
    );
  }
}

export default SearchBar;
