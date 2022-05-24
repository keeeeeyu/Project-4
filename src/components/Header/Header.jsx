import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Icon } from "semantic-ui-react";

function PageHeader({ user, handleLogout }) {
    
  return (
    <Segment clearing>
        <Header as="h2" floated="left">
        <Link to="/covidTracker">
          CovidTracker
        </Link>
        </Header>
      <Header as="h2" floated="right">
        <Link to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
    </Segment>
  );
}

export default PageHeader