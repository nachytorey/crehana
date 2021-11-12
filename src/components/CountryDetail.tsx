import { useParams } from "react-router";

export const CountryDetail = () => {
    const { name, code, currency, continentName, capital } = useParams();
    return <>
        <h1>{name}{'/'}{continentName}</h1>
        <h2>{'Cod: '}{code}</h2>
        <h2>{'Curr: '}{currency}</h2>
        <h2>{'Cap: '}{capital}</h2>
    </>;
};
