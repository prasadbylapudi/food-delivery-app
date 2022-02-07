import React from 'react';
import { useParams } from 'react-router-dom';
import {
  VStack,
  HStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  Table,
  Th,
  Tr,
  Tfoot,
  Td,
  Tbody,
  Thead,
  TableCaption,
  Center,
} from "@chakra-ui/react";

const recipeList = [
  {
    id: 0,
    recipe: [
      {
        recipeName: "biryani",
        price: 259,
      },
      {
        recipeName: "butter chicken",
        price: 199,
      },
    ],
  },
  {
    id: 1,
    recipe: [
      {
        recipeName: "biryani",
        price: 259,
      },
      {
        recipeName: "butter chicken",
        price: 199,
      },
    ],
  },
  {
    id: 2,
    recipe: [
      {
        recipeName: "biryani",
        price: 259,
      },
      {
        recipeName: "butter chicken",
        price: 199,
      },
    ],
  },
  {
    id: 3,
    recipe: [
      {
        recipeName: "biryani",
        price: 259,
      },
      {
        recipeName: "butter chicken",
        price: 199,
      },
    ],
  },
  {
    id: 4,
    recipe: [
      {
        recipeName: "biryani",
        price: 259,
      },
      {
        recipeName: "butter chicken",
        price: 199,
      },
    ],
  },
];


const UserHome2 = () => {
    const {restaurauntId} = useParams()
    const recipeItem = recipeList[+restaurauntId]
    console.log(recipeItem);
  return (
    <Table width={1000}>
      {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Recipe Name</Th>
          <Th>Price (INR)</Th>
          {/* <Th isNumeric>multiply by</Th> */}
        </Tr>
      </Thead>
      {
        
         recipeItem.recipe.map((item,idx)=>{
             return (
               <Tbody key={idx}>
                 <Tr>
                   <Td>{idx+1}</Td>
                   <Td>{item.recipeName}</Td>
                   <Td>{item.price}</Td>
                   <Td></Td>
                 </Tr>
               </Tbody>
             );
         })
      }
    </Table>
  );
};

export default UserHome2;
