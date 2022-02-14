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

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  
  return (
    <div className='App mt-5'>
      <h1 className='text-primary mb-3 text-center'>Countries</h1>
      <Countries countris={currentCountry} load={loading} />
      <div className='d-flex align-items-center justify-content-center'>
        <button className='btn btn-primary' onClick={prevPage}>←</button>
        <Pagination 
        countryList={countryList} 
        totalCountry={country.length} 
        paginate={paginate}
        />
        <button className='btn btn-primary' onClick={nextPage}>→</button>
      </div>
    </div>
  )
}

export default App
