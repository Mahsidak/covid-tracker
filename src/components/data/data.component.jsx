import React from "react";

import codes from "../../assests/countryCodes";
import { FormControl, Select, MenuItem } from "@mui/material/";
import Card from "../card/card.component";
import Map from "../map/map.component";

import "./data.styles.scss";

class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countryList: [],
      selectedCountry: "Global",
      countriesByCode: codes,
      cardInfo: {},
    };
  }
  componentDidMount() {
    const countryData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries/")
        .then((response) => response.json())
        .then((data) => {
          const countryInfo = data.map((country, index) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            key: index,
            flag: country.countryInfo.flag,
          }));
          this.setState({ countryList: countryInfo });
        });
      await fetch("https://disease.sh/v3/covid-19/all/")
        .then((response) => response.json())
        .then((data) => {
          this.setState({ cardInfo: data });
        });
    };
    countryData();
  }

  render() {
    const onCountryChange = async (e) => {
      const countryCode = e.target.value;

      const url =
        countryCode === "Global"
          ? "https://disease.sh/v3/covid-19/all/"
          : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
      await fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({ selectedCountry: countryCode });
          this.setState({ cardInfo: data });
        });
    };
    return (
      <div className="data">
        <h1>{this.state.countriesByCode[`${this.state.selectedCountry}`]}</h1>

        <div className="data-selection">
          <p>Last updated Today</p>
          <FormControl className="country-form">
            <Select
              value={this.state.selectedCountry}
              onChange={onCountryChange}
            >
              <MenuItem value="Global">Global</MenuItem>
              {this.state.countryList.map((country) => (
                <MenuItem
                  value={country.value}
                  key={country.key}
                  className="menu-item"
                >
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="data-card">
          <Card
            title="Cases"
            today={this.state.cardInfo.todayCases}
            total={this.state.cardInfo.cases}
          />
          <Card
            title="Recovered"
            today={this.state.cardInfo.todayRecovered}
            total={this.state.cardInfo.recovered}
            recovered
          />
          <Card
            today={this.state.cardInfo.todayDeaths}
            total={this.state.cardInfo.deaths}
            title="Deaths"
          />
        </div>
        <div>
          <Map />
        </div>
      </div>
    );
  }
}

export default Data;
