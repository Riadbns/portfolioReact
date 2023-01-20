import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../styles/bg.css" 

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
 return (

  <VStack 
    className="head"
      
    borderRadius='lg' 
    alignItems="flex-start"
    >
    <Image
      className='cardimg'
      src={imageSrc}
      borderRadius='lg'
      objectFit='cover'
    />
    <Heading pl='20px' color='black' size='lg'>
      {title}
    </Heading>
    <Text pl='20px' color='grey'>
      {description}
    </Text>
    <HStack pl='20px' h='40px'>
      <Text  color='black'>See more </Text>
      <FontAwesomeIcon color='black' icon={faArrowRight} size="1x" />
    </HStack>
  </VStack>
  );
};

export default Card;
