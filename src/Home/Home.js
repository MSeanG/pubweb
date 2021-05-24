import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HomeListingCard from '../components/HomeListingCard';
import { HomeStyles } from './Home.styled';
import  listings  from '../data/listings';
import companyLogo from '../image/logo.png';

const Home = () => {

  let loadMoreBtn = <React.Fragment><button onClick={() => setCount(prevCount => prevCount + 3)}>Load more</button></React.Fragment>,
  listed = listings;
  const
    [count, setCount] = useState(9),
    n = listings.length,
    [price, setPrice] = useState(listed),

    sortByPrice = () => {
      console.log('sort');
      const sorted = [...price].sort((a, b) => {
        return a.startingPrice - b.startingPrice || a.homeName.localeCompare;
      })
      setPrice(sorted);
    };
  ;

  if (count > n) {
    loadMoreBtn = '';
  };

  return (
    <HomeStyles>

      <Helmet>
        <title>Pubweb Code Challenge</title>
        <meta name="description" content="Pubweb Code Challenge" />
      </Helmet>

      <header><img src={companyLogo} alt="Clayton Logo" /></header>

      <div className="sort-bar">
        <div>{n} homes available</div>
        <div className="price-select">
          Sort by: <button onClick={sortByPrice}>Price: High to Low <span>▼</span></button>
        </div>
      </div>

      <ul className="listings">
        {price.slice(0, count).map((data, key) => {
          return (
            <li key={key} className="listing">
              <HomeListingCard 
                key={key}
                imageURL={data.imageURL}
                homeName={data.homeName}
                startingPrice={data.startingPrice}
                beds={data.beds}
                baths={data.baths}
                sqft={data.sqft}
                isMultiSection={data.isMultiSection}
              />
            </li>
          );
        })}
      </ul>

      <div className="load-more">{loadMoreBtn}</div>

      <footer>Copyright 2020 Clayton Homes. All Rights Reserved.</footer>

    </HomeStyles>
  )
};

export default Home;