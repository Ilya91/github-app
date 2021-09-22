import {
  Input,
  FormControl,
  FormLabel,
  Button
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import {SyntheticEvent, useState} from 'react';
import React from "react";

const NewUser = (props: { addNewUser: (arg0: any) => void; }) => {
  const [enteredName, setEnteredName] = useState('')
  let history = useHistory()
    const changeHandler = (event: SyntheticEvent) => {
      setEnteredName(event.target.value)
    }

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();

    props.addNewUser(enteredName);
    history.push('/users')
  };
  return (
      <form onSubmit={submitHandler}>
        <FormControl id="name" isRequired width="300px" marginBottom="10px">
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" onChange={changeHandler}/>
        </FormControl>
        <Button type="submit" colorScheme="blue" width="100%">Add new user</Button>
      </form>
  )
}
export default NewUser