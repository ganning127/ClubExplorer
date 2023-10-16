import { Box, Checkbox, CheckboxGroup, Heading, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Filters = () => {
    
    const [membershipCheckedValues, setMembershipCheckedValues] = useState([]);
    const [applicationCheckedValues, setApplicationCheckedValues] = useState([]);
    const [focusCheckedValues, setFocusCheckedValues] = useState([]);

    const handleMembershipCheckedChange = (values) => { setMembershipCheckedValues(values); } 
    const handleApplicationCheckedChange = (values) => { setApplicationCheckedValues(values); } 
    const handleFocusCheckedChange = (values) => { setFocusCheckedValues(values); } 

  return (
    <>
        <Heading size="md" mb={4}>Filter Results</Heading>

        {/* Filter by membership */}
        <Box p={4} borderWidth={1} borderRadius="md">
            <Heading size="sm" mb={2}>By Membership:</Heading>
            <VStack align="start" spacing={0}>
                <CheckboxGroup value={membershipCheckedValues} onChange={handleMembershipCheckedChange}>
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
                <CheckboxGroup value={applicationCheckedValues} onChange={handleApplicationCheckedChange}>
                    <Checkbox value="no">No application</Checkbox>
                    <Checkbox value="yes">Application required</Checkbox>
                </CheckboxGroup>
            </VStack>
        </Box>

        {/* Filter by focus */}
        <Box p={4} borderWidth={1} borderRadius="md">
            <Heading size="sm" mb={2}>By Focus:</Heading>
            <VStack align="start" spacing={0}>
                <CheckboxGroup value={focusCheckedValues} onChange={handleFocusCheckedChange}>
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