import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Segment, Input, Icon, Form } from "semantic-ui-react";

function PageHeader({ handleLogout }) {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    search: ''
  })
  console.log(input.search)
  function handleSearchChange(e) {
    console.log(e.target)
    setInput({ search: e.target.value })
  }

  function handleSubmit(){
    navigate(`/country/${input.search}/detail}`) 
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
        <Input size="small" icon placeholder='Search...'>
        <input
        value={input.search}
        onChange={handleSearchChange}
        onSubmit={handleSubmit}
        />
        <Icon name='search' />
        </Input>
        </Header>

    </Segment>
  );
}

export default PageHeader