import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import data from "./city";
import ShowCalender from "./ShowCalender";
import { Button, Flex, Box, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectCity } from "../../Redux/StayReducer/action";

function Stay() {
  const [selectedCity, setSelectedCity] = useState("");
  const dispatch = useDispatch();
  const searchBg = useColorModeValue("white", "gray.800");
  const searchBorder = useColorModeValue("#dfe1e5", "#4A5568");
  const searchText = useColorModeValue("#212121", "#E2E8F0");

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
  };

  const handleOnHover = (result) => {
    // the item hovered
  };

  const handleOnSelect = (data) => {
    // the item selected
    setSelectedCity(data.name);
    dispatch(selectCity(data.name));
  };

  const handleOnFocus = () => {};

  const formatResult = (data) => {
    return <span style={{ display: "block", textAlign: "left" }}>{data.name}</span>;
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} align={{ base: "stretch", md: "flex-end" }} gap={4} wrap="wrap">
      <Box flex={{ base: "1 1 100%", md: "1 1 260px" }} minW={0}>
        <ReactSearchAutocomplete
          items={data}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          formatResult={formatResult}
          showIcon={false}
          placeholder={"Going to"}
          styling={{
            height: "44px",
            border: `1px solid ${searchBorder}`,
            borderRadius: "8px",
            backgroundColor: searchBg,
            boxShadow: "none",
            hoverBackgroundColor: "#eee",
            color: searchText,
            fontSize: "15px",
            fontFamily: "inherit",
            searchIconMargin: "0 0 0 16px",
          }}
        />
      </Box>

      <Box flex={{ base: "1 1 100%", md: "1 1 320px" }} minW={0}>
        <ShowCalender />
      </Box>

      <Button size="lg" flexShrink={0} as={Link} to="/stay">
        Search
      </Button>
    </Flex>
  );
}

export default Stay;
