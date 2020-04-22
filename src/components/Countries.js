import React from "react";
import styled from "styled-components";
import Country from "./Country";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
  grid-gap: 60px;
  padding-left: 200px;
  padding-right: 200px;
`;

class Countries extends React.PureComponent {
  render() {
    let countryList = [];

    if (this.props.filter !== "") {
      countryList = this.props.countries.filter(
        (country) => country.region.toLowerCase() === this.props.filter
      );
    } else if (this.props.searchValue !== "") {
      // Upgrade!!!!!!!!!!!
      countryList = this.props.countries.filter((country) =>
        country.name.toLowerCase().includes(this.props.searchValue)
      );
    } else {
      countryList = this.props.countries;
    }

    let renderedList = countryList.map((country) => {
      return (
        <Country
          redirect={this.props.redirect}
          key={country.numericCode}
          flag={country.flag}
          name={country.name}
          capital={country.capital}
          population={country.population}
          region={country.region}
        />
      );
    });

    return <Div>{renderedList}</Div>;
  }
}

export default Countries;
