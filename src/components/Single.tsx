import {
    Avatar,
  ListItem,
  Badge,
  Flex,
} from "@chakra-ui/react"
import * as React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const Single = () => {
    const { userId } = useParams();
    const users = useSelector((state) => state.users.users);
    const user = users.find((user: { id: any; }) => user.id == userId)

    return (
        <div>
            <Avatar
                borderRadius="full"
                boxSize="150px"
                src={user.avatar}
                alt="Segun Adebayo"
            />
            <h1>
                {user.name}
            </h1>
            <p>Repositories: {user.repos}</p>
        </div>
    )
}

export default Single