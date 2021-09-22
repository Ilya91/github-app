import {
  Box,
  ListItem,
  Badge,
  Flex,
  Avatar,
  Text
} from "@chakra-ui/react"
import { Link } from "react-router-dom";
import * as React from "react";

interface ItemValue {
  id: string;
  avatar: string;
  name: string;
  repos: number;
}

const Item = (props: ItemValue) => (
      <ListItem marginBottom="15px">
        <Flex textAlign="left" border="1px solid #e2e8f0" borderRadius="12px" padding="10px">

          <Avatar src={props.avatar} />
          <Box ml="3">
            <Text fontWeight="bold">
              <Link to={`/users/${props.id}`}>
                {props.name}
              </Link>
              <Badge ml="1" colorScheme="green">
                New
              </Badge>
            </Text>
            <Text fontSize="sm">Repositories: {props.repos}</Text>
          </Box>
        </Flex>
      </ListItem>
)
export default Item