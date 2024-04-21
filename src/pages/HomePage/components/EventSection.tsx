import { Heading, VStack, Text, Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useEvent } from "../../../hooks/useEvent.tsx";
const EventSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleOpenMenu = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const { recentEvents, fetchRecentEvents } = useEvent();
  useEffect(() => {
    fetchRecentEvents();
  }, []);
  return (
    <VStack
      bgImage={"/assets/schedule-bg-pattern.png"}
      bgSize="cover"
      bgColor="#554bb9"
      p={{ md: "100px 30px", base: "80px 20px" }}
      fontFamily="Poppins"
    >
      <Heading
        fontSize={{ base: "24px", sm: "30px", lg: "40px" }}
        fontWeight="900"
        color="white"
        mb="50px"
        textTransform="uppercase"
      >
        Tədbirlər
      </Heading>

      {recentEvents.map((team, index) => {
        const startDate = new Date(team.startDate);
        const formattedStartDate = `${startDate.getHours()}:${(
          "0" + startDate.getMinutes()
        ).slice(-2)} ${("0" + startDate.getDate()).slice(-2)}-${(
          "0" +
          (startDate.getMonth() + 1)
        ).slice(-2)}-${startDate.getFullYear()}`;

        const endDate = new Date(team.endDate);
        const formattedEndDate = `${endDate.getHours()}:${(
          "0" + endDate.getMinutes()
        ).slice(-2)} ${("0" + endDate.getDate()).slice(-2)}-${(
          "0" +
          (endDate.getMonth() + 1)
        ).slice(-2)}-${endDate.getFullYear()}`;

        return (
          <Box
            bg="#ddd"
            w={{ xl: "80%", base: "100%" }}
            p="10px"
            key={index}
            borderRadius="20px"
          >
            <VStack
              cursor="pointer"
              onClick={() => handleOpenMenu(index)}
              bg="white"
              alignItems="flex-start"
              p={{ lg: "40px 20px", base: "20px" }}
              borderRadius="10px"
            >
              <Text
                bg="rgba(239, 165, 6, .1)"
                fontSize={{ lg: "16px", md: "14px", base: "12px" }}
                fontWeight={700}
                p="5px 10px"
                borderRadius="20px"
              >
                {formattedStartDate} - {formattedEndDate}
              </Text>
              <Text
                fontSize={{ lg: "25px", md: "20px", base: "16px" }}
                fontWeight={900}
                color="#1b273d"
                textAlign="start"
                fontFamily="Poppins"
              >
                {team.title}
              </Text>
              <Text
                fontSize={{ base: "12px", lg: "14px" }}
                textAlign="start"
                color="#ec398b"
                fontFamily="Poppins"
              >
                <span style={{ color: "black" }}>By</span> {team.author}
              </Text>
            </VStack>
            {/* {openIndex === index && (
              <VStack
                p="10px 15px"
                alignItems="flex-start"
                fontSize={{ md: "16px", sm: "14px", base: "12px" }}
              >
                <Text color="#585555" fontFamily="Poppins">
                  {team.description}
                </Text>
                <Text fontSize="14px" fontFamily="Poppins">
                  <span style={{ color: "#7F7BE2", fontWeight: 700 }}>
                    Location:{" "}
                  </span>
                  {team.location}
                </Text>
              </VStack>
            )} */}
              <VStack
                p={openIndex === index ? "10px 15px" : '0px 15px'}
                // p='10px 15px'
                alignItems="flex-start"
                fontSize={{ md: "16px", sm: "14px", base: "12px" }}
                maxHeight={openIndex === index ? 'fit-content' : '0px' }
                overflow={'hidden'}
                transition={'all .3s ease-out'}
              >
                <Text color="#585555" fontFamily="Poppins">
                  {team.description}
                </Text>
                <Text fontSize="14px" fontFamily="Poppins">
                  <span style={{ color: "#7F7BE2", fontWeight: 700 }}>
                    Location:{" "}
                  </span>
                  {team.location}
                </Text>
              </VStack>
          </Box>
        );
      })}

      {/* <Link to="/event">
        <Box
          fontFamily="Oswald"
          p="10px 40px"
          w="100%"
          fontSize="20px"
          cursor="pointer"
          bg="#554bb9"
          color="white"
          border="none"
          transition="border-radius 0.5s ease"
          _hover={{
            borderRadius: "15px",
          }}
          mt="20px"
        >
          Daha çox
        </Box>
      </Link> */}
      <Link className="lgx-btn" to="/event">
      <Text>Daha çox</Text>
      </Link>
    </VStack>
  );
};

export default EventSection;
