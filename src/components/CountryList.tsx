import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { SEARCH_COUNTRIES } from '../apollo/queries';
import { Country, CountryFilter } from '../common/types';
import { Link } from 'react-router-dom';
import { Table } from 'reactstrap';

const CountryList = ({ continentCode, currencyCode }: CountryFilter) => {
  const [countries, setCountries] = useState<Country[]>([])
  const { loading, error } = useQuery(SEARCH_COUNTRIES(currencyCode, continentCode), {
    onCompleted: (data) => {
      setCountries(data.countries);
    }
  });

  if (loading) return <div data-testid='loader'> {'Loading...'}</div>;
  if (error) return <>{`Error! ${error}`}</>;
  if (countries.length === 0) return <>{`No hay datos!`}</>;

  return (
    <div data-testid='country-list'>
      {countries && countries.map(({ name, currency, code, continent, capital, }, i) => {
        return <li key={i}>
          <Link to={`/detail/${name}/${code}/${currency}/${continent.name}/${capital}`}>
            {`${name} - (CONT: ${continent.code}/ MON: ${currency})`}</Link>
        </li>
      })}
    </div>
  );
};

export default CountryList;
