// import React, { useState } from "react";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
// import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react'
// import userService from "../../utils/userService";
// import { useNavigate } from "react-router-dom";

// export default function SignUpPage(props) {

//   const navigate = useNavigate()

//   const [error, setError] = useState('')
//   const [state, setState] = useState({
//     username: '',
//     email: '',
//     password: '',
//     passwordConf: ''
//   })


//   async function handleSubmit(e){
//     e.preventDefault()
    

//     const userData = {
//       username: '',
//       email: '',
//       password: '',
//       passwordConf: ''
//     }
//     for (let fieldName in state){
//       switch(fieldName) {
//         case 'username': 
//           userData.username = state[fieldName]
//           break;
//         case 'email':
//           userData.email = state[fieldName]
//           break;
//         case 'password': 
//           userData.password = state[fieldName]
//           break;
//         case 'passwordConf':
//           userData.passwordConf = state[fieldName]
//           break;
//         default: break;
//       }
 
//     }


//     // console.log(formData, " <- formData") // <- this doesn't allow you to look at the formdData object
//     // console.log(userData.forEach((item) => console.log(item))); // <- to look at the keys, you must forEach over it

//     try {

//       await userService.signup(userData) 
      
//       props.handleSignUpOrLogin(); // <- this will decode the token from local storage
//       // that we just recieved as a respone to our userService.signup fetch call,
//       // and decode and update the state in our App component
//       navigate('/continent')

//     } catch(err){
//       console.log(err.message);
//       setError(err.message)
//     }

//   }

//   function handleChange(e){
//     setState({
//       ...state, 
//       [e.target.name]: e.target.value
//     })
//   }

//   return (
//     <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
//       <Grid.Column style={{ maxWidth: 450 }}>
//         <Header as="h2" color="red" textAlign="center">
//           Sign Up
//         </Header>
//         <Form autoComplete="off" onSubmit={handleSubmit}>
//           <Segment stacked>
//             <Form.Input
//               name="username"
//               placeholder="username"
//               value={state.username}
//               onChange={handleChange}
//               required
//             />
//             <Form.Input
//               type="email"
//               name="email"
//               placeholder="email"
//               value={state.email}
//               onChange={handleChange}
//               required
//             />
//             <Form.Input
//               name="password"
//               type="password"
//               placeholder="password"
//               value={state.password}
//               onChange={handleChange}
//               required
//             />
//             <Form.Input
//               name="passwordConf"
//               type="password"
//               placeholder="Confirm Password"
//               value={state.passwordConf}
//               onChange={handleChange}
//               required
//             />
//             <Button type="submit" className="btn">
//               Signup
//             </Button>
//           </Segment>
//           {error ? <ErrorMessage error={error} /> : null}
//         </Form>
//       </Grid.Column>
//     </Grid>
//   );
// }
