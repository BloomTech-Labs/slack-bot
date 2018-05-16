import React, { Component } from "react";

class Conversations extends Component {
  render() {
    return <div className="conversation">
        <h1>Add a new Conversations</h1>
        {/* <button className="button button5">+</button> */}
        <section className="col-xs-12">
            <button className="btn btn-lg btn-default btn-circle">
              <i className="fa fa-plus" />
            </button>
        </section>
      </div>;
  }
}

export default Conversations;
