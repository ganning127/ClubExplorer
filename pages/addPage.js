import Head from 'next/head';
import NavBar from "../components/NavBar";
import React, { useState, useEffect} from "react";
import { useRouter } from 'next/router';
import {
   InputGroup, InputRightAddon, FormControl, FormLabel, FormErrorMessage, Switch, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, VStack, Input, Button, Center, Box, Image, Flex, Badge, Text, Textarea, ButtonGroup, Heading, Container, SimpleGrid, HStack, Avatar, Select, Tag, TagCloseButton, TagLabel 
  } from '@chakra-ui/react';
const clubTagOptions = ["STEM", "Humanities/Art", "Honor Society", "Volunteering", "Career Oriented", "Greek Life", "Outdoors", "Athletics"];
const colorSchemes = ["teal", "red", "blue", "green", "purple", "orange", "pink", "cyan", "yellow"];

export default function addClub() {
  const getRandomColorScheme = () => {
    const randomIndex = Math.floor(Math.random() * colorSchemes.length);
    return colorSchemes[randomIndex];
  };

  function isError(input, value) {
    return input === value;
  }  
  
  const [clubName, setClubName] = useState("");
  const [clubNameError, setClubNameError] = useState("");
  const handleClubNameChange = (event) => {
    setClubName(event.target.value);
  }

  
  const [repName, setRepName] = useState("");
  const [repNameError, setRepNameError] = useState("");
  const handleRepNameChange = (event) => {
    setRepName(event.target.value);
  }


  const [GTEmail, setGTEmail] = useState("");
  const [GTEmailError, setGTEmailError] = useState("");
  const handleGTEmailChange = (event) => {
    setGTEmail(event.target.value);
  }


  const [description, setDescription] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }


  const [selectedMeetingDay, setSelectedMeetingDay] = useState("");
  const [selectedMeetingTime, setSelectedMeetingTime] = useState("");
  const [meetingTimes, setMeetingTimes] = useState([]);
  const [meetingsError, setMeetingsError] = useState("");
  const handleMeetingTimeAdd = () => {
    if (selectedMeetingDay && selectedMeetingTime) {
      const newMeetingTime = `${selectedMeetingDay} at ${selectedMeetingTime}`;
      if (!meetingTimes.includes(newMeetingTime)) {
        setMeetingTimes([...meetingTimes, newMeetingTime]);
        // Clear the selected day and time after adding
        setSelectedMeetingDay("");
        setSelectedMeetingTime("");
      }
    }
  }
  const handleMeetingTimeRemove = (time) => {
    const updatedTimes = meetingTimes.filter((meetingTime) => meetingTime !== time);
    setMeetingTimes(updatedTimes);
  };
  useEffect(() => {
    console.log(meetingTimes);
  }, [meetingTimes])


  const [selectedClubTags, setSelectedClubTags] = useState([]);
  const [clubTagsError, setClubTagsError] = useState("");
  const handleClubTagAdd = (event) => {
    const selectedClubTag = event.target.value;
    if (selectedClubTag !== "") {
      if (!selectedClubTags.find(tag => tag.name === selectedClubTag)) {
        const colorScheme = getRandomColorScheme();
        const newTag = { name: selectedClubTag, colorScheme };
        setSelectedClubTags([...selectedClubTags, newTag]);
      }
    }
  } 
  const handleClubTagRemove = (tag) => {
    const updatedTags = selectedClubTags.filter((selectedClubTag) => selectedClubTag.name !== tag.name);
    setSelectedClubTags(updatedTags);
  };

  const [hasApplication, setHasApplication] = useState(false);
  const handleApplicationChange = () => {
    setHasApplication(!hasApplication);
  }


  const [numMembers, setNumMembers] = useState(250);
  const handleSliderChange = (value) => {
    setNumMembers(value);
  }

  const [icon, setIcon] = useState();
  const [iconError, setIconError] = useState("");
  const handleIconChange = (event) => {
    setIcon(URL.createObjectURL(event.target.files[0]));
  }

  const [banner, setBanner] = useState();
  const [bannerError, setBannerError] = useState("");
  const handleBannerChange = (event) => {
    setBanner(URL.createObjectURL(event.target.files[0]));
  }

  const [displayFiles, setDisplayFiles] = useState([]);
  const [displayFilesError, setDisplayFilesError] = useState("");
  const handleDisplayChange = (event) => {
    const selectedFiles = Array.from(event.target.files)
    setDisplayFiles([...displayFiles, ...selectedFiles]);
  }

  const router = useRouter();
  const handleSubmit = () => {

    setClubNameError("");
    setRepNameError("");
    setGTEmailError("");
    setDescriptionError("");
    setMeetingsError("");
    setClubTagsError("");
    setIconError("");
    setBannerError("");
    setDisplayFilesError("");

    let isValid = true;

    if (clubName === "") {
      setClubNameError("Club Name is required.");
      isValid = false;
    }

    if (repName === "") {
      setRepNameError("Representative first and last names are required.");
      isValid = false;
    }

    if (GTEmail === "") {
      setGTEmailError("Georgia Tech email is required.");
      isValid = false;
    }

    if (description === "") {
      setDescriptionError("Club description is required.");
      isValid = false;
    }

    if (meetingTimes.length === 0) {
      setMeetingsError("Meeting times are required.");
      console.log(meetingsError);
      isValid = false;
    }

    if (selectedClubTags.length === 0) {
      setClubTagsError("Club tags are required.");
      isValid = false;
    }

    if (icon === undefined) {
      setIconError("Club icon is required.");
      isValid = false;
    }

    if (banner === undefined) {
      setBannerError("Club banner is required.");
      isValid = false;
    }

    if (displayFiles.length === 0) {
      setDisplayFilesError("Club display images are required");
      isValid = false;
    }
    if (isValid) {
      router.push("/submitPage");
    }
  }

  return (
    <>
      <Head>
        <title>GT Club Explorer Add Club Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <Center>
        <Box display="block" maxW={{ base: '80%', lg: '800px' }}>
          <Heading mt="10" textAlign="center" fontSize={{ base: '5xl', lg: '6xl' }} fontWeight='extrabold'>
            Add Club Form
          </Heading>

          <Text mt="5" textAlign="center">
            Fill out the following form to add a new club to our website. Before being added,
            it will take our team up to 5 business days to approve your request. 
            Thank you for your patience.
          </Text>


          <FormControl isRequired isInvalid={clubNameError !== ""} mt="10">
            <FormLabel>Club Name </FormLabel>
            <Input placeholder="Enter Here" value={clubName} onChange={handleClubNameChange}/>
            <FormErrorMessage>{clubNameError}</FormErrorMessage>
          </FormControl>
          

          <FormControl isRequired isInvalid={repNameError !== ""} mt="10">
            <FormLabel>First and Last Name </FormLabel>
            <Input placeholder="Enter Here" value={repName} onChange={handleRepNameChange}/>
            {repNameError && <FormErrorMessage>{repNameError}</FormErrorMessage>}
          </FormControl>


          <FormControl isRequired isInvalid={GTEmailError !== ""}mt="8">
            <FormLabel>Georgia Tech Email</FormLabel>
            <InputGroup>
              <Input placeholder="Enter Here" value={GTEmail} onChange={handleGTEmailChange} />
              <InputRightAddon width="300px" justifyContent="center" children="@gatech.edu" />
            </InputGroup>
            {GTEmailError && <FormErrorMessage>{GTEmailError}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={descriptionError !== ""} mt="8">
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Enter Here" value={description} onChange={handleDescriptionChange}/>
            {descriptionError && <FormErrorMessage>{descriptionError}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={meetingsError !== ""} mt="8">
            <FormLabel>Meeting Timings</FormLabel>
            <Select mt="3" placeholder="Select a Day" value={selectedMeetingDay} onChange={(event) => setSelectedMeetingDay(event.target.value)}>
              {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </Select>
            <Select mt="3" placeholder="Select a Time" value={selectedMeetingTime} onChange={(event) => setSelectedMeetingTime(event.target.value)}>
              {Array.from({ length: 48 }, (_, i) => {
                const hour = Math.floor(i / 2);
                const minute = i % 2 === 0 ? "00" : "30";
                const time = (hour === 0 ? "12" : (hour <= 12 ? hour : hour - 12)) + ":" + minute + (hour < 12 ? " AM" : " PM");
                return (
                  <option key={time} value={time}>
                    {time}
                  </option>
                );
              })}
            </Select>
            <Button mt="3" onClick={handleMeetingTimeAdd} color="white" bg="blue.700">Add Meeting Time</Button>
            <Box mt="3">
              {meetingTimes.map((time) => (
                <Tag key={time} size="md" borderRadius="full" variant="solid" olor="white" bg="blue.700" m="1">
                  <TagLabel>{time}</TagLabel>
                  <TagCloseButton onClick={() => handleMeetingTimeRemove(time)} />
                </Tag>
              ))}
            </Box>
            {meetingsError && <FormErrorMessage>{meetingsError}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={clubTagsError !== ""} mt="8">
            <FormLabel>Club Tags</FormLabel>
            <Select mt="3" placeholder="Select Tags" onChange={handleClubTagAdd}>
              {clubTagOptions.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </Select>
            <Box mt="3">
              {selectedClubTags.map((tag) => (
                <Tag key={tag.name} size="md" borderRadius="full" variant="solid" colorScheme={tag.colorScheme} m="1">
                  <TagLabel>{tag.name}</TagLabel>
                  <TagCloseButton onClick={() => handleClubTagRemove(tag)} />
                </Tag>
              ))}
            </Box>
            {clubTagsError && <FormErrorMessage>{clubTagsError}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired mt="8" display="flex" alignItems="center">
            <FormLabel htmlFor="hasApplication" mb="0">
              Club Requires Application?
            </FormLabel>
            <Switch colorScheme="green" id="hasApplication" isChecked={hasApplication} onChange={handleApplicationChange} />
          </FormControl>

          <FormControl isRequired mt="8">
            <FormLabel>Number of Members</FormLabel>
            <Slider
              mt="3"
              aria-label="Approximate Number of Members"
              min={0}
              max={500}
              step={50}
              value={numMembers}
              onChange={handleSliderChange}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb fontSize="sm" boxSize={10} color="white" bg="blue.700" _hover={{ bg: 'blue.500' }}>{numMembers}</SliderThumb>
              <SliderMark mt="3" value={-2}>0</SliderMark>
              <SliderMark mt="3" value={492}>500+</SliderMark>
            </Slider>
          </FormControl>

          <FormControl isRequired isInvalid={iconError !== ""} mt="8" display="flex">
            <FormLabel>Upload Club icon Image</FormLabel>
            <input type="file" onChange={handleIconChange} />
            {iconError && <FormErrorMessage>{iconError}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={bannerError !== ""} mt="8" display="flex">
            <FormLabel>Upload Club Banner Image</FormLabel>
            <input type="file" onChange={handleBannerChange} />
            {bannerError && <FormErrorMessage>{bannerError}</FormErrorMessage>}
          </FormControl>

          <FormControl isRequired isInvalid={displayFilesError !== ""} mt="8" display="flex">
            <FormLabel>Upload Display Images</FormLabel>
            <input type="file" multiple onChange={handleDisplayChange} />
            <Text>{displayFiles.length} files uploaded</Text>
            {displayFilesError && <FormErrorMessage>{displayFilesError}</FormErrorMessage>}
          </FormControl>
          <Button
            mt="10"
            color= "white" 
            bg="blue.700"
            size="lg"
            onClick={handleSubmit}
          >
            Submit
          </Button>

        </Box>
      </Center>

      <Flex
        backgroundColor="black"
        color="white"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        bottom="0"
        width="100%"
        height="30px"
        paddingX="20px"
        zIndex="9999"
        mt="20">
        <Text>Copyright 2023 - GT Web Dev</Text>
      </Flex>
    </>
  );
}