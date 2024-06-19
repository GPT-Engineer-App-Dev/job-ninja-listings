import { useState } from "react";
import { Container, VStack, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJob = { title, company, location, salary };
    const existingJobs = JSON.parse(localStorage.getItem("jobListings")) || [];
    localStorage.setItem("jobListings", JSON.stringify([...existingJobs, newJob]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} w="100%">
        <Heading>Post a New Job</Heading>
        <FormControl id="title">
          <FormLabel>Job Title</FormLabel>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </FormControl>
        <FormControl id="company">
          <FormLabel>Company</FormLabel>
          <Input value={company} onChange={(e) => setCompany(e.target.value)} />
        </FormControl>
        <FormControl id="location">
          <FormLabel>Location</FormLabel>
          <Input value={location} onChange={(e) => setLocation(e.target.value)} />
        </FormControl>
        <FormControl id="salary">
          <FormLabel>Salary</FormLabel>
          <Input value={salary} onChange={(e) => setSalary(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Post Job</Button>
      </VStack>
    </Container>
  );
};

export default PostJob;