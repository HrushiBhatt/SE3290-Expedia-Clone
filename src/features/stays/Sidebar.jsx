import React from "react";
import { useSearchParams } from "react-router-dom";
import { fetchingHotels } from "./state/action";
import { useDispatch } from "react-redux";
import PriceSlider from "./PriceSlider";
import { Box, Heading, Radio, RadioGroup, Stack, useColorModeValue } from "@chakra-ui/react";

export const Sidebar = () => {
  const [, setSearchParams] = useSearchParams();
  const [order, setOrder] = React.useState("asc");
  const [sort, setSort] = React.useState("");
  const dispatch = useDispatch();
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.100", "gray.700");

  const handlePriceChange = (value) => {
    setOrder(value);
    setSort("price");
  };

  const handleRatingChange = (value) => {
    setOrder(value);
    setSort("rating");
  };

  React.useEffect(() => {
    let params = {};
    sort && (params["_sort"] = sort);
    order && (params["_order"] = order);
    setSearchParams(params);

    dispatch(fetchingHotels(sort, order));
  }, [sort, order, dispatch, setSearchParams]);

  return (
    <Box
      bg={cardBg}
      border="1px solid"
      borderColor={cardBorder}
      borderRadius="lg"
      p={4}
    >
      <Heading fontSize="sm" fontWeight={700} mb={3}>Filter by price</Heading>
      <RadioGroup onChange={handlePriceChange} value={sort === "price" ? order : ""}>
        <Stack spacing={2}>
          <Radio value="asc" colorScheme="brand" size="sm">Low to high</Radio>
          <Radio value="desc" colorScheme="brand" size="sm">High to low</Radio>
        </Stack>
      </RadioGroup>

      <Heading fontSize="sm" fontWeight={700} mt={5} mb={3}>Filter by rating</Heading>
      <RadioGroup onChange={handleRatingChange} value={sort === "rating" ? order : ""}>
        <Stack spacing={2}>
          <Radio value="asc" colorScheme="brand" size="sm">Low to high</Radio>
          <Radio value="desc" colorScheme="brand" size="sm">High to low</Radio>
        </Stack>
      </RadioGroup>

      <Box mt={6}>
        <PriceSlider />
      </Box>
    </Box>
  );
};

export default Sidebar;
