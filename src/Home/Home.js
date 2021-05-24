import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import HomeListingCard from '../components/HomeListingCard';
import { HomeStyles } from './Home.styled';
import  listings  from '../data/listings';
import companyLogo from '../image/logo.png';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const Home = () => {

  let loadMoreBtn = <React.Fragment><button onClick={() => setCount(prevCount => prevCount + 3)}>Load more</button></React.Fragment>,
  listed = listings;
  const
    [count, setCount] = useState(9),
    n = listings.length,
    { items, requestSort, sortConfig } = useSortableData(listed),
    getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    }
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
          <span>Sort by: </span> 
          <button
            type="button" 
            onClick={() => requestSort('startingPrice')}
            className={getClassNamesFor('startingPrice')}
          >
            Price
          </button>
        </div>
      </div>

      <ul className="listings">
        {items.slice(0, count).map((item, key) => (
          <li key={key} className="listing">
            <HomeListingCard 
              key={key}
              imageURL={item.imageURL}
              homeName={item.homeName}
              startingPrice={item.startingPrice}
              beds={item.beds}
              baths={item.baths}
              sqft={item.sqft}
              isMultiSection={item.isMultiSection}
            />
          </li>
        ))}
      </ul>

      <div className="load-more">{loadMoreBtn}</div>

      <footer>Copyright 2020 Clayton Homes. All Rights Reserved.</footer>

    </HomeStyles>
  )
};

export default Home;