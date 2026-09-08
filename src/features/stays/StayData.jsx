import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteHotel } from "./state/action";
import "./StayData.css";
import Sidebar from "./Sidebar";
import Pagination from "./Pagination";
import { Flex, Box, Center, Text } from "@chakra-ui/react";

const StayData = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.StayReducer);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 10000]);
  const [filteredHotel, setFilteredHotel] = useState([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalNumOfPages = Math.ceil(244 / 20);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleLeft = (id) => {
    dispatch(DeleteHotel(id));
  };

  useEffect(() => {
    if (data) {
      setFilteredHotel(
        data.filter(
          (hotel) =>
            hotel.price >= selectedPriceRange[0] &&
            hotel.price <= selectedPriceRange[1]
        )
      );
    }
  }, [data, selectedPriceRange]);

  return (
    <Flex
      align="flex-start"
      gap={8}
      px={{ base: 4, md: 8 }}
      py={8}
      maxW="7xl"
      mx="auto"
      direction={{ base: "column", md: "row" }}
    >
      <Box className="sidebar-container" w={{ base: "100%", md: "260px" }}>
        <Sidebar />
      </Box>

      <Box flex="1" minW={0} w="100%">
        {filteredHotel?.length === 0 && (
          <Center py={12}>
            <Text color="gray.500">No stays match this price range.</Text>
          </Center>
        )}

        {filteredHotel?.map((hotel) => (
          <div className="stay-card" key={hotel.id}>
            <img src={hotel.image} alt="hotel" />

            <div className="stay-info">
              <div className="stay-header">
                <h3 className="stay-name">{hotel.name}</h3>
                <button
                  className="stay-left-btn"
                  onClick={() => handleLeft(hotel.id)}
                >
                  We have 5 left
                </button>
              </div>
              <p className="stay-location">{hotel.place}</p>
              <p className="stay-description">{hotel.description}</p>
              <div className="stay-details">
                <div className="stay-price">
                  <span>Price:</span>
                  <p>₹{hotel.price.toLocaleString()}</p>
                </div>
                <div className="stay-rating">
                  <span>Rating:</span>
                  <p>{hotel.rating ? hotel.rating : 1}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={totalNumOfPages}
        />
      </Box>
    </Flex>
  );
};

export default StayData;
