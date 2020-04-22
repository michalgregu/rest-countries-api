import React from "react";
import styled from "styled-components";

class Filter extends React.Component {
  render() {
    return (
      <select
        value={this.props.value}
        onChange={this.props.setFilter}
        className="ui dropdown"
        name="Filter by Regions"
        id="regions"
      >
        <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    );
  }
}

export default Filter;
