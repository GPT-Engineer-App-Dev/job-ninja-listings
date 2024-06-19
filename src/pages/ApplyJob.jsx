import { useState } from "react";
import { Container, VStack, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const ApplyJob = () => {
  const { jobId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newApplication = { jobId, name, email, resume };
    const existingApplications = JSON.parse(localStorage.getItem("jobApplications")) || [];
    localStorage.setItem("jobApplications", JSON.stringify([...existingApplications, newApplication]));
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} w="100%">
        <Heading>Apply for Job</Heading>
        <FormControl id="name">
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="resume">
          <FormLabel>Resume</FormLabel>
          <Input value={resume} onChange={(e) => setResume(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" size="lg" onClick={handleSubmit}>Submit Application</Button>
      </VStack>
    </Container>
  );
};

export default ApplyJob;