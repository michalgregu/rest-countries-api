import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Countries from "./Countries";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import CountryDetails from "./CountryDetails";

class App extends React.Component {
  state = { countries: [], filter: "", search: "" };

  componentDidMount() {
    this.getCountries();
  }

  getCountries = async () => {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    this.setState({ countries: response.data });
  };

  setFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  updateSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  searchCountry = (e) => {
    e.preventDefault();
    console.log("cipka");
  };

  render() {
    return (
      <Router>
        <div>
          <Top>
            <H1>Where in the World?</H1>
            <Switch>
              <FontAwesomeIcon icon={faMoon} />
              <Dark>Dark Mode</Dark>
            </Switch>
          </Top>
          <Route
            exact
            path="/"
            render={(props) => (
              <React.Fragment>
                <Search>
                  <SearchBar
                    searchCountry={this.searchCountry}
                    updateSearch={this.updateSearch}
                    searchValue={this.state.search}
                  />
                  <Filter
                    value={this.state.filter}
                    setFilter={this.setFilter}
                  />
                </Search>
                <Countries
                  redirect={this.redirect}
                  searchValue={this.state.search}
                  filter={this.state.filter}
                  countries={this.state.countries}
                />
              </React.Fragment>
            )}
          />
          <Route path="/details" component={CountryDetails} />
        </div>
      </Router>
    );
  }
}

const Top = styled.div`
  background-color: white;
  height: 100px;
  box-shadow: 2px 7px 7px rgba(0, 0, 0, 0.1);
  padding-left: 200px;
  padding-right: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const H1 = styled.h1`
  font-weight: 800;
  font-size: 2rem;
`;
const Switch = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const Dark = styled.p`
  margin-left: 10px;
  font-size: 1.5rem;
`;

const Search = styled.div`
  padding: 60px 200px 60px 200px;
  height: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default App;
