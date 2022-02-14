import React from 'react'

const Countries = ({countris, load})=> {
  if(load) {
    return <h2>Loading...</h2>
  }
  return (
    <ul className='list-group mb-2'>
      {
        countris.map((country, i)=> (
          
          <li className='list-group-item' key={i}>
            {country.name.common}
            <img src={country.flags.svg} alt={country.name.common} width={25} className='ms-2' />
          </li>
        ))
      }
    </ul>
  )
}


export default Countries