/**
   ProfilePage.js
   ====================================================
   CREATED: 2018-05-15
   UPDATED: 2018-05-15
   VERSION: 0.2.0
   TEAM: Jason Campbell, Manisha Lal, Wesley Harvey
   ABOUT: Profile Page Component
   NOTES:
   ----------------------------------------------------
 */

import React from 'react';
import { withAuth } from '@okta/okta-react';
import { SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Conversations from "../Conversations";
import ConversationList from "../ConversationList";

export default withAuth(class ProfilePage extends React.Component {
  constructor(props){
    super(props);
    this.state = { user: null };
    this.getCurrentUser = this.getCurrentUser.bind(this);
  }

  async getCurrentUser(){
    this.props.auth.getUser()
	.then(user => this.setState({user}));
  }

  componentDidMount(){
    this.getCurrentUser();
  }

  render() {
    if(!this.state.user) return null;
    return (
      <section className="user-profile">
	<h1>User Profile</h1>
	<div>
          <label>Name:</label>
          <span>{this.state.user.name}</span>
          <SecureRoute path="/profile/conversations" component={Conversations} />
          <SecureRoute path="/profile/conversations/conversationlist" component={ConversationList} />
	</div>
      </section>
    );
  }
});
