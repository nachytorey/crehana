import { useRef, useState } from 'react';
import { CountryFilterBy } from '../common/types';
import  CountryList  from './CountryList';

const CountryFinder = () => {

  const textFilterRef = useRef('');
  const [filterBy, setFilterBy] = useState(CountryFilterBy.continent);

  const [currencyCode, setCurrencyCode] = useState('');
  const [continentCode, setContinentCode] = useState('');

  return <div data-testid='country-finder'>
    <input type='text' onChange={(event) => { textFilterRef.current = event.target.value; }}>
    </input>

    <input type='button' value='Buscar' onClick={() => {
      setCurrencyCode(filterBy === CountryFilterBy.currency ? textFilterRef.current : '');
      setContinentCode(filterBy === CountryFilterBy.continent ? textFilterRef.current : '');
    }}></input>

    <div >
      <input type="radio" value={CountryFilterBy.continent} name="filterBy"
        checked={filterBy === CountryFilterBy.continent}
        onChange={() => setFilterBy(CountryFilterBy.continent)} />
      {CountryFilterBy.continent}
      <input type="radio" value={CountryFilterBy.currency} name="filterBy"
        checked={filterBy === CountryFilterBy.currency}
        onChange={() => setFilterBy(CountryFilterBy.currency)} />
      {CountryFilterBy.currency}
    </div>
    <CountryList currencyCode={currencyCode} continentCode={continentCode} />
  </div>;
}

export default CountryFinder;
