import React from 'react'

import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import fetchData from './api'

import './index.css'

class App extends React.Component{

    async componentDidMount() {
        const data = await fetchData();
    }

    render() {

        return(
            <div className='container'>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

export default App;