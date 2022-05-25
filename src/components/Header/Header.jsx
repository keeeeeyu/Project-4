import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Segment, Form } from "semantic-ui-react";

function PageHeader({ handleLogout }) {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    search: ''
  })

  function handleSearchChange(e) {

    setInput({ search: e.target.value })
  }

  function handleSubmit(e){
    e.preventDefault()
    navigate(`/country/${input.search}/detail`) 
  }

  return (
    <Segment clearing>
        <Header as="h2" floated="left">
        <Link to="/continent">
          CovidTracker
        </Link>
        </Header>
        <Header as="h2" floated="right">
        <Link to="" onClick={handleLogout}>
          Logout
        </Link>
      </Header>
        <Header floated="right">
        <Form onSubmit={handleSubmit}>
        <Form.Input icon placeholder='Search Country...' value={input.search} onChange={handleSearchChange}/>
        </Form>
        </Header>

    </Segment>
  );
}

export default PageHeader