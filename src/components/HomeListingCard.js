import React from 'react';

const HomeListingCard = ({
  imageURL,
  homeName,
  startingPrice,
  beds,
  baths,
  sqft,
  isMultiSection
}) => {
  const
    price = startingPrice.toLocaleString(),
    size = sqft.toLocaleString()
  ;
  let multiSection = '';
  if (isMultiSection === true) {
    multiSection = <React.Fragment><span>Multi-Section</span></React.Fragment>
  }
  //if (!homeName) return (null);
  return (
    <React.Fragment>
      <figure>
        <img src={imageURL} />
      </figure>
      <div>
        <h5>{homeName}</h5>
        <p>Starting in the ${price}s</p>
        <p>{size} sq.ft. {beds} beds {baths} baths {multiSection}</p>
      </div>
    </React.Fragment>
  )
};

export default HomeListingCard;
