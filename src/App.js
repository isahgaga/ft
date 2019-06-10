import React from 'react';
import { ThemeProvider } from 'react-jss';
import { theme } from './theme';
import Invoice from './features/invoice';
import { Provider } from 'react-redux';
import createStore from './store';
import rootReducer from './reducers';

const initialState={
  invoices:[
    {
      date:'2018-01-01',
      comment:'Rent January',
      amount: '500 EUR',
      iban:'IBAN: 123-90999-90909',
      id:'aa'
    }
  ],
  payments:[
    {
      comment:'Rent January',
      amount: '500 EUR',
      iban:'IBAN: 123-90999-90909',
      id:'aa'
    }
  ],
}

function App() {
  return (
    <div>
      <Provider store={createStore(rootReducer,initialState)}>
        <ThemeProvider theme={theme}>
          <Invoice />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
