import React, { useState, useEffect } from "react";
import aliments from "../data.js"; // Assuming the aliments data is imported
import {
  Box,
  Heading,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Center,
  Text,
  Tag,
  Code,
  Select,
} from "@chakra-ui/react";

const AlimentList = () => {
  const [filter, setFilter] = useState(""); // Filter state
  const [sortCriteria, setSortCriteria] = useState("name"); // Sort criteria state
  const [refFreqOptions, setRefFreqOptions] = useState([]); // Available ref_freq options

  // Extract available ref_freq options from aliments data
  useEffect(() => {
    const options = [...new Set(aliments.map((aliment) => aliment.ref_freq))];
    setRefFreqOptions(options);
  }, []);

  // Filtered and sorted aliments based on filter and sort criteria
  const filteredAliments = aliments
    .filter((aliment) => String(aliment.ref_freq).includes(filter))
    .sort((a, b) => {
      if (sortCriteria === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortCriteria === "id") {
        return a.id - b.id;
      } else if (sortCriteria === "ref_freq") {
        return a.ref_freq - b.ref_freq;
      }
    });

  return (
    <Box>
      <Heading>Liste des Aliments</Heading>

      {/* Filter and sort options */}
      <Box mb={4}>
        <label>
          Filtrer par Fréquence de Référence:
          <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            {refFreqOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
        </label>
        <label>
          Trier par :
          <Select
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
          >
            <option value="name">Name</option>
            <option value="id">ID</option>
            <option value="ref_freq">Ref Freq</option>
          </Select>
        </label>
      </Box>

      {/* Aliment list */}
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
      >
        {filteredAliments.map((aliment) => (
          <Card key={aliment.id} maxW="sm">
            <CardBody>
              <Center>
                <Image
                  src={aliment.img}
                  alt={aliment.name}
                  boxSize={"150px"}
                  sx={{
                    objectFit: "contain",
                  }}
                />
              </Center>
              <Stack>
                <Text
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                  noOfLines={[2, 2, 3]}
                >
                  {aliment.name}
                </Text>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Tag colorScheme="teal">ID :</Tag>
                  <Code>{aliment.id}</Code>
                </Box>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                  <Tag colorScheme="cyan">Ref Freq :</Tag>
                  <Code>{aliment.ref_freq}</Code>
                </Box>
              </Stack>
            </CardBody>
            <CardFooter>
              <Stack direction={"row"}>
                <svg width="20" height="20">
                  <circle cx="10" cy="10" r="10" fill={aliment.color01} />
                </svg>
                <svg width="20" height="20">
                  <circle cx="10" cy="10" r="10" fill={aliment.color02} />
                </svg>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default AlimentList;
