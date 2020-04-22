import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  box-shadow: 1px 5px 7px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const H3 = styled.h3`
  padding-left: 20px;
`;

const Ul = styled.ul`
  margin-left: 18px;
  margin-bottom: 70px;
  list-style: none;
  padding: 0;
`;

const Country = (props) => {
  return (
    <Card onClick={this.props.redirect}>
      <Img src={props.flag} alt={props.name} />
      <H3>{props.name}</H3>
      <Ul>
        <li>Population: {props.population}</li>
        <li>Region: {props.region}</li>
        <li>Capital: {props.capital}</li>
      </Ul>
    </Card>
  );
};

export default Country;
