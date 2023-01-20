import React from "react";
import { Avatar, Heading, VStack, HStack} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import { Image } from '@chakra-ui/react'
import styles from "../styles/bg.css" 

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// function([string1, string2],target id,[color1,color2])    
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <div className="img" id="landing-section">
    <div className="mask">
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
  >
    <HStack spacing={20}>
      <VStack>
      <VStack>
        <Heading size='lg' >
          <h1 className="name"><span>R</span>iad <span>Benosmane</span></h1>  
        </Heading>
      </VStack>
      <VStack spacing={5}>
        <Heading size='md'>
          <p className='h1'>Hello, I'm a computer programming student at College La Cite.</p>
        </Heading>
      </VStack>
      </VStack>
      <VStack>
        <div className="contain">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>         
        </div>
      </VStack>
    </HStack>
  </FullScreenSection>
  </div>
  </div>
);

export default LandingSection;
