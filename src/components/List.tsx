import { Fragment } from 'react'
import Item from './Item'
import { useSelector } from 'react-redux';

import {
  UnorderedList,
} from "@chakra-ui/react"
import * as React from "react";

const List = () => {
    const users = useSelector((state) => state.users.users);
    const usersList = users.map((user) => (
        user ? (<Item
            key={user.id} {...user}
        />) : ''
    ));

    return (
        <>
            <UnorderedList listStyleType="none">
                {usersList}
            </UnorderedList>
        </>
    )
}
export default List