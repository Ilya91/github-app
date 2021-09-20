import {
  Input,
  FormControl,
  FormLabel,
  Button
} from "@chakra-ui/react"
import { useHistory } from "react-router-dom"
import { useRef } from 'react';
import React from "react";

const NewUser = (props: { addNewUser: (arg0: any) => void; }) => {
  const inputRef = useRef();
  let history = useHistory()

  const submitHandler = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const name = inputRef.current.value;
    props.addNewUser(name);
    history.push('/users')
  };
  return (
      <form onSubmit={submitHandler}>
        <FormControl id="name" isRequired width={"300px"} marginBottom={"10px"}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Name" ref={inputRef}/>
        </FormControl>
        <Button type={"submit"} colorScheme="blue" width={"100%"}>Add new user</Button>
      </form>
  )
}
export default NewUser