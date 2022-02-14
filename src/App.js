import {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css'
import Countries from './components/Countries'
import Pagination from './components/Pagination'


function App() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryList] = useState(10);

  useEffect(()=> {
    const getCounries = async() => {
      setLoading(true);
      const resp = await axios.get('https://restcountries.com/v3.1/all');
      setCountry(resp.data);
      setLoading(false);
    }
    getCounries();
  },[]);

  const lastCountryPage = currentPage * countryList;
  const firstCountryPage = lastCountryPage - countryList;
  const currentCountry = country.slice(firstCountryPage, lastCountryPage);

  
  return (
    <div className='App mt-5'>
      <h1 className='text-primary mb-3 text-center'>Countries</h1>
      <Countries countris={country} load={loading} />
      <Pagination countryList={countryList} totalCountry={country.length} />
    </div>
  )
}

export default App
