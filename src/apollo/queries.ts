import gql from "graphql-tag";

export const SEARCH_COUNTRIES = (currencyCode: String, continentCode: String) => (gql`
  query {
    countries(filter: {code: {
      regex: ""
    }, currency: {
      regex: "${currencyCode.toUpperCase().trim()}"
    }, continent:{
      regex: "${continentCode.toUpperCase().trim()}"
    }}) {
      name, code, currency, capital, continent {
        name, code
      }, 
      languages { name, code }
    }
  }
`);



