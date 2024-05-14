import React, { useEffect } from "react";
import Layout from "../../../Layout/Layout.tsx";
import {
  Box,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEvent } from "../../../hooks/useEvent.tsx";
const EventId = () => {
  const { eventId } = useParams();
  const { eventDetails, fetchEventDetails } = useEvent();
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchEventDetails(eventId);
  }, [eventId]);
  return (
    <>
      <Layout
      >
        <Box
          fontFamily="Poppins"
          mt={{ md: "90px", base: "50px" }}
          // bg="rgba(27, 39, 61, .95)"
          bgImage="/assets/banner-inner2.jpg"
          bgSize="cover"
          display="flex"
          flexDirection="column"
          // alignItems="flex-start"
          justifyContent="flex-start"
          p={{ lg: "100px 150px", base: "80px 30px" }}
          w="100%"
        >
          <Text fontSize="40px" color="white" fontWeight={900}>
            Tədbirlər
          </Text>
          <HStack
            color="white"
            fontWeight={700}
            fontSize={{ lg: "20px", md: "14px", base: "12px" }}
            alignItems="flex-start"
          // justifyContent="flex-start"
          >
            <FontAwesomeIcon icon={faHouse} color="#ec398b" />
            <Link to="/">Əsas səhifə</Link>
            <Link to="/event">/Tədbirlər</Link>
            <Text color="#efa506">/{eventDetails?.title}</Text>
          </HStack>
        </Box>
        <Flex
          bgRepeat="no-repeat"
          bgAttachment="fixed"
          bgImage="/assets/speakers-bg-black.jpg"
          alignItems="center" justifyContent="center">
          <VStack
            w="90%"
            m={{ md: "100px 0", base: "50px 0" }}
            alignItems="center"
            justifyContent="center"
            borderRadius="20px 20px 0 0"
            gap="30px"
          >
            <Image
              src="/assets/event27.jpg"
              w="100%"
              height={{ lg: "70vh", md: "50vh", base: "40vh" }}
              borderRadius="20px"
            />
            <Flex
              gap={{ md: "100px", base: "20px" }}
              m="10px"
              justifyContent="space-between"
              alignItems="flex-start"
              flexDirection={{ md: "row", base: "column" }}
              fontFamily="Poppins"
              w="100%"
              p="10px"
            >
              <VStack alignItems="flex-start" w={{ md: "50%", base: "90%" }}>
                <Heading pb="10px" borderBottom="1px solid #eee" color='#ffffffe3'>Tədbir haqqında</Heading>
                <Text pt="20px" color='#ffffffe3' fontSize={{ md: "16px", base: "14px" }}>
                  {eventDetails?.title}
                </Text>
                <Text pt="10px" color='#ffffffe3' fontSize={{ md: "16px", base: "14px" }}>
                  {eventDetails?.description}
                </Text>
              </VStack>
              <VStack alignItems="flex-start" w={{ md: "50%", base: "90%" }}>
                <Heading pb="10px" borderBottom="1px solid #eee" color='#ffffffe3'>Məlumatlar</Heading>
                <Text pt="20px" color='#ffffffe3' fontSize={{ md: "16px", base: "14px" }}>
                  {eventDetails?.author}
                </Text>
                <Text pt="10px" pb="10px" color='#ffffffe3' fontSize={{ md: "16px", base: "14px" }}>
                  {eventDetails?.startDate &&
                    new Date(eventDetails.startDate).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                  {eventDetails?.startDate &&
                    new Date(eventDetails.startDate)
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "-")}
                  {" - "}
                  {eventDetails?.endDate &&
                    new Date(eventDetails.endDate).toLocaleTimeString("en-GB", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                  {eventDetails?.endDate &&
                    new Date(eventDetails.endDate)
                      .toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, "-")}
                </Text>

                <Text color='#ffffffe3' fontSize={{ md: "16px", base: "14px" }}>
                  {eventDetails?.location}
                </Text>
              </VStack>

            </Flex>
            {/* <Link className="lgx-btn " to="/about" >
              <Text>
                Daha çox
              </Text>
            </Link> */}
          </VStack>
        </Flex>

      </Layout >

    </>
  );
};

export default EventId;
