import React from "react";

const Pagination = ({countryList, totalCountry, paginate}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil((totalCountry / countryList)); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination mb-0 ms-2 me-2">
        {
          pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <a href="!#" className="page-link" onClick={()=> paginate(number)}>{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination