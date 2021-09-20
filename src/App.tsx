import * as React from "react"
import {useDispatch, useSelector} from 'react-redux';
import { Route, Switch, Redirect, Link } from "react-router-dom"
import List from './components/List'
import Single from './components/Single'
import { fetchUserData } from './store/user-actions'

import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import NewUser from "./components/NewUser";

const App = () => {
  const dispatch = useDispatch();
  const addNewUserHandler = (name: string) => {
    dispatch(fetchUserData(name));
  }

  return (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={5}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Switch>
            <Route path='/' exact>
              <Redirect to='/users' />
            </Route>
            <Route path='/users' exact>
              <Link to="/new-user">
                Add new user
              </Link>
                <List/>
            </Route>
            <Route path='/users/:userId'>
              <Single/>
            </Route>
            <Route path='/new-user'>
              <NewUser addNewUser={addNewUserHandler}/>
            </Route>
            <Route path='*'>
              Not found
            </Route>
          </Switch>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
}
export default App