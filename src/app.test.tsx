import { render,  act } from '@testing-library/react';
import App from './App';
import { ApolloProvider } from '@apollo/react-common';
import React from 'react';
import client from "./apollo/client";

describe('tests', () => {
    test('should render CountryFinder component', () => {
        const { getByText, getByTestId } = render(
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ApolloProvider>
        );
        expect(getByTestId('country-finder')).toBeTruthy();
    });
    test('should render Loading component', async () => {
        const { getByText, getByTestId } = render(
        <ApolloProvider client={client}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ApolloProvider>
        );
        await act(async () => {
            const countryList = getByTestId('loader');
            expect(countryList).toBeTruthy();
        }); 
    });
});