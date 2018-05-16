import React from "react";
import HomePageCarousel from '../Carousel';
import { Button } from 'react-bootstrap'

export default class HomePage extends React.Component {
  render() {
    
    return (
      <div>
        <h1>Home Page</h1>
        <HomePageCarousel />
        <h3>
          This is text between the buy button and the carousel. <br />
          We will present our pitch for why you should click, <br />
          and some basic details.  Any questions will be <br />
          covered by a FAQ and our billing details, you can also <br />
          send us an email for additional assistance.
        </h3>
        <Button href={'/billing'} bsStyle='success' bsSize="large">
          Buy!!
        </Button>
      
      
      </div>
      );
    }
  }


