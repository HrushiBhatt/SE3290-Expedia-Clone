import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineCalendar } from "react-icons/ai";
import styles from "./CheckInCheckOut.module.css";
import { selectDateAndCity } from "../../Redux/StayReducer/action";

function DateField({ label, selected, onChange, minDate }) {
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const bg = useColorModeValue("white", "gray.800");
  const labelColor = useColorModeValue("gray.500", "gray.400");
  const valueColor = useColorModeValue("gray.800", "gray.100");

  return (
    <Box
      flex="1"
      border="1px solid"
      borderColor={borderColor}
      bg={bg}
      color={valueColor}
      borderRadius="lg"
      px={4}
      py={2}
      minW={0}
      _hover={{ borderColor: "brand.400" }}
      _focusWithin={{ borderColor: "brand.400", boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)" }}
      transition="all 0.15s ease"
    >
      <Flex align="center" gap={2}>
        <Icon as={AiOutlineCalendar} color="brand.500" boxSize={4} flexShrink={0} />
        <Box flex="1" minW={0}>
          <Text fontSize="xs" fontWeight={600} color={labelColor}>
            {label}
          </Text>
          <DatePicker
            selected={selected}
            onChange={onChange}
            dateFormat="d MMM yyyy"
            placeholderText="Add date"
            minDate={minDate}
            className={styles.dateInput}
            calendarClassName={styles.calendar}
            popperClassName={styles.popper}
            portalId="datepicker-portal"
            popperProps={{ strategy: "fixed" }}
          />
        </Box>
      </Flex>
    </Box>
  );
}

function ShowCalender() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const dispatch = useDispatch();

  function handleCheckInDateChange(date) {
    setCheckInDate(date);
    dispatch(selectDateAndCity(date, checkOutDate));
  }

  function handleCheckOutDateChange(date) {
    setCheckOutDate(date);
    dispatch(selectDateAndCity(checkInDate, date));
  }

  return (
    <Flex gap={3} width="100%">
      <DateField label="Check-in" selected={checkInDate} onChange={handleCheckInDateChange} />
      <DateField
        label="Check-out"
        selected={checkOutDate}
        onChange={handleCheckOutDateChange}
        minDate={checkInDate}
      />
    </Flex>
  );
}

export default ShowCalender;
