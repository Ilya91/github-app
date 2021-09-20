import { Fragment } from 'react'
import Item from './Item'
import { useSelector } from 'react-redux';

import {
  UnorderedList,
} from "@chakra-ui/react"
import * as React from "react";

const List = () => {
    const users = useSelector((state) => state.users.users);
    const usersList = users.map((user: { id: string; name: string; repos: string; avatar: string; }) => (
        <Item
            key={user.id} id={user.id} name={user.name} repos={user.repos} avatar={user.avatar}
        />
    ));

    return (
        <Fragment>
            <UnorderedList listStyleType={"none"}>
                {usersList}
            </UnorderedList>
        </Fragment>
    )
}
export default List