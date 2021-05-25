import styled from 'styled-components';

// do your css magic here!
// you can get the source sans pro font on google fonts
// https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro
// https://d1q0twczwkl2ie.cloudfront.net/wp-content/uploads/2016/02/hoff.jpg
// https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555440109/shape/mentalfloss/hoff_primary.jpg
// https://i2.wp.com/images.bstatic.de/wsTWodWAwMZbMRnK3VklbM98xw4=/1200x630/filters:focal(490x271:510x291)/files/import/2021-01/bild758390_1000x562.jpg?w=696&resize=696%2C&ssl=1

export const HomeStyles = styled.div`
  font-family: Arial, sans-serif;
  header {
    height: 108px;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  }

  header > img {
    margin-top: 34px;
    margin-left: 1rem;
  }

  div.sort-bar {
    display: none;
  }

  ul.listings {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(288px, 1fr));
    grid-gap: .5rem;
    padding-inline-start: 0;
    padding: 1rem;
    grid-gap: 1rem;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    text-align: center;
    box-sizing: border-box
  }

  li.listing {
    cursor: pointer;
    list-style: none;
    text-align: center;
    border: 0;
    box-shadow: 0 1px 4px rgba(0 0 0 / 20%);
  }

  li.listing > figure {
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }

  li.listing > div {
    padding: 0 1rem 1rem;
    text-align: left;
  }

  li.listing h5 {
    font-size: 1.5rem;
    font-weight: 400;
    margin: 1rem 0 0 0;
  }

  li.listing > figure > img {
    width: 100%;
  }

  li.listing p {
    margin-top: .5rem;
    margin-bottom: .5rem;
    font-size: 87.5%
  }

  li.listing p:nth-of-type(1) {
    color: grey;
    font-size: 80%;
  }

  li.listing span {
    white-space: nowrap;
  }

  div.load-more {
    width: 100%;
    text-align: center;
    padding-bottom: 1rem;
  }

  div.load-more > button {
    background-color: rgb(26, 115, 232);
    border-radius:4px;
    border:1px solid #124d77;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:18px;
    padding:12px 57px;
    text-decoration:none;
    text-shadow:0px 1px 0px #154682;
  }

  footer {
    background-color: #616161;
    font-size: 80%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100%;
    box-sizing: border-box
  }

  footer > span {

  }

  @media only screen and (min-width: 1025px) {
    div.sort-bar {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 1440px;
      margin: 0 auto;
      padding: 2rem;
      box-sizing: border-box;
      font-size: 1.5rem

    }

    div.price-select > button {
      background-color: rgb(255, 255, 255);
      border-radius:4px;
      border:1px solid lightgrey;
      display:inline-block;
      cursor:pointer;
      color: black;
      font-family:Arial;
      font-size:18px;
      padding:12px 16px;
      text-decoration:none;
    }

    div.price-select > button.ascending::after {
      content: 'High - Low ▼';
      display: inline-block;
      margin-left: 0.5rem;
    }

    div.price-select > button.descending::after {
      content: 'Low - High ▲';
      display: inline-block;
      margin-left: 0.5rem;
    }

    div.price-select > button > span {
      color: rgb(26, 115, 232)
    }

    ul.listings {
      grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
      grid-gap: 2rem;
      padding: 0 2rem 2rem;
    }
    li.listing h5 {
      font-size: 2rem;
    }
    li.listing p {
      font-size: 100%
    }

    li.listing p:nth-of-type(1) {
      font-size: 100%;
    }

    div.load-more {
    padding-bottom: 2rem;
    }

    footer {
      font-size: 100%;
      display: flex;
      justify-content: left;
      padding: 1rem;
    }
  }
`;