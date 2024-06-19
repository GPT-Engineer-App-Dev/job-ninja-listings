import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobListing = ({ title, company, location, salary }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} w="100%">
    <Heading size="md" mb={2}>{title}</Heading>
    <Text fontWeight="bold">{company}</Text>
    <HStack spacing={4} mt={2}>
      <HStack>
        <FaMapMarkerAlt />
        <Text>{location}</Text>
      </HStack>
      <HStack>
        <FaDollarSign />
        <Text>{salary}</Text>
      </HStack>
    </HStack>
  </Box>
);

const Index = () => {
  const [jobListings, setJobListings] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("jobListings")) || [];
    setJobListings(storedJobs);
  }, []);

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} w="100%">
        <Heading>Job Listings</Heading>
        {jobListings.map((job, index) => (
          <JobListing key={index} {...job} />
        ))}
        <Button as={Link} to="/post-job" colorScheme="teal" size="lg">Post a Job</Button>
      </VStack>
    </Container>
  );
};

export default Index;