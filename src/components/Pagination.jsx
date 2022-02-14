import React from "react";

const Pagination = ({countryList, totalCountry}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil((totalCountry / countryList)); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {
          pageNumbers.map(number => (
            <li className="page-item" key={number}>
              <a href="!#" className="page-link">{number}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination