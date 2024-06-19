import { Container, VStack, Heading, Text, Box, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaBriefcase, FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const jobListings = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    salary: "$120,000 - $140,000",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Ltd",
    location: "New York, NY",
    salary: "$110,000 - $130,000",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    salary: "$90,000 - $110,000",
  },
];

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
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={8} w="100%">
        <Heading>Job Listings</Heading>
        {jobListings.map((job) => (
          <JobListing key={job.id} {...job} />
        ))}
        <Button colorScheme="teal" size="lg">Load More</Button>
      </VStack>
    </Container>
  );
};

export default Index;