import { Box, Checkbox, CheckboxGroup, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Filters = () => {
    
    const [checkedValues, setCheckedValues] = useState([]);

    const handleCheckboxChange = (values) => {
        setCheckedValues(values);
    }; 

  return (
    <>
        <Heading size="md" mb={4}>Filter Results</Heading>

        {/* Filter by membership */}
        <Box p={4} borderWidth={1} borderRadius="md">
            <Heading size="sm" mb={2}>By Membership:</Heading>
            <VStack align="start" spacing={0}>
                <CheckboxGroup value={checkedValues} onChange={handleCheckboxChange}>
                <Checkbox value="small">1-20 members</Checkbox>
                <Checkbox value="medium">20-50 members</Checkbox>
                <Checkbox value="large">50+ members</Checkbox>
                </CheckboxGroup>
            </VStack>
        </Box>

        {/* Filter by application requirement */} 
        <Box p={4} borderWidth={1} borderRadius="md">
            <Heading size="sm" mb={2}>By Application:</Heading>
            <VStack align="start" spacing={0}>
                <CheckboxGroup value={checkedValues} onChange={handleCheckboxChange}>
                    <Checkbox value="no">No application</Checkbox>
                    <Checkbox value="yes">Application required</Checkbox>
                </CheckboxGroup>
            </VStack>
        </Box>

        {/* Filter by focus */}
        <Box p={4} borderWidth={1} borderRadius="md">
            <Heading size="sm" mb={2}>By Focus:</Heading>
            <VStack align="start" spacing={0}>
                <CheckboxGroup value={checkedValues} onChange={handleCheckboxChange}>
                    <Checkbox value="career">Career</Checkbox>
                    <Checkbox value="project-based">Project-based</Checkbox>
                    <Checkbox value="academic">Academic</Checkbox>
                    <Checkbox value="athletic">Athletic</Checkbox>
                    <Checkbox value="fun-social">Fun/Social</Checkbox>
                </CheckboxGroup>
            </VStack>
        </Box>

        {/* Filter by user-defined tags */}
        {/* ... */} 
    </>

  );
};

export default Filters;