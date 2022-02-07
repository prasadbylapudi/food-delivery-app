import { Box } from '@chakra-ui/react';
import React from 'react';
import Card from './../components/Card'
import {  Link} from 'react-router-dom';

const restraunts = [
  {
    id: 1,
    name: "Dwaraka",
    Location: "NY",
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",

    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 2,
    name: "Mahathi",
    Location: "NY",
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",

    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 3,
    name: "Valiveti",
    Location: "NY",
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",

    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 4,
    name: "Maturi",
    Location: "NY",
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",

    rating: 4.2,
    numReviews: 34,
  },
  {
    id: 5,
    name: "Kanuri",
    Location: "NY",
    isNew: true,
    imageURL:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80",

    rating: 4.2,
    numReviews: 34,
  },
];

const UserHome = () => {
  return <>
  { restraunts.map((item, idx) =>{
          return (
            <Box as={Link} to={`/UserHome/${idx}`}>
              <Card key={idx} data={item}>
              </Card>
            </Box>
          );
      })}

  </>
};


export default UserHome;
