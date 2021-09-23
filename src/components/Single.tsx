import {
    Avatar,
} from "@chakra-ui/react"
import * as React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

interface ParamTypes {
    userId: string
}

const Single = () => {
    const { userId } = useParams<ParamTypes>()
    const users = useSelector((state) => state.users.users);
    const user = users.find((user) => user.id == userId)

    return (
        <div>
            <Avatar
                borderRadius="full"
                boxSize="150px"
                src={user.avatar ? user.avatar : ''}
                alt="Segun Adebayo"
            />
            <h1>
                {user.name ? user.name : ''}
            </h1>
            <p>Repositories: {user.repos ? user.repos : ''}</p>
        </div>
    )
}

export default Single