import React, { useRef, useState } from "react";
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
function Restaurant() {
  const [recipes, setRecipes] = useState([
    {
      recipeName: "biryani",
      price: 259,
    },
    {
      recipeName: "butter chicken",
      price: 199,
    },
  ]);
  const recipeRef = useRef("");
  const priceRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (recipeRef.current.value === "" || priceRef.current.value === "") {
      return;
    }

    setRecipes((prevState) => {
      console.log(recipeRef.current.value);
      return [
        ...prevState,
        {
          recipeName: recipeRef.current.value,
          price: priceRef.current.value,
        },
      ];
    });

    console.log(recipes);
  };

  const handleDelete = (idx) => {
    console.log("clicked");
    const items = recipes;
    if (items.length > 0) {
      const lastIndex = items.length - 1;
      setRecipes(items.filter((item, index) => index !== lastIndex));
    }
  };

  return (
    <>
      <HStack spacing={3}>
        <form onSubmit={submitHandler}>
          <Input ref={recipeRef} placeholder="Recipe Name" size="md" />

          <Input ref={priceRef} placeholder="Price" type="number" size="md" />
          <Button type="submit">Add</Button>
        </form>
      </HStack>

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
        {recipes.map((item, idx) => {
          return (
            <Tbody key={idx}>
              <Tr>
                <Td>{idx + 1}</Td>
                <Td>{item.recipeName}</Td>
                <Td>{item.price}</Td>
                <Td>
                  <Button onClick={handleDelete}>Delete</Button>
                </Td>
              </Tr>
            </Tbody>
          );
        })}
      </Table>
    </>
  );
}

export default Restaurant;
