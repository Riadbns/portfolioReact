import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, HStack } from "@chakra-ui/react";
import Card from "./Card";
import styles from "../styles/bg.css"

const ProjectsSection = () => {
  return (
    <div className="img">
    <div className="mask">
    <FullScreenSection
      
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading className="name" as="h1" id="projects-section">
      Projects
      </Heading>
    <div class="container">
        <div class="card">
            <div class="face face1 dungeon">
                <div class="content">
                    <h3>Arcade Game</h3>
              </div>
            </div>
            <div class="face face2 ">
                <div class="content">
                    <p>Developing an arcade game using JS, HTML and CSS, accessible via web browser, players explore a dungeon, find treasures, avoid traps, accumulate points and try not to run out of energy.</p>
                        <HStack spacing='24px'>
                         <Box>
                        <a href="http://jeuxdungeon.netlify.app" target="_blank" >Live Preview</a>
                        </Box><Box>
                        <a href="https://github.com/Riadbns/jeuxdungeon" target="_blank" >code source</a>
                  </Box></HStack>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1 info">
                <div class="content">
                    <h3>IT training center</h3>
                </div>
            </div>
            <div class="face face2 ">
                <div class="content">
                    <p>developed using Js, HTML, CSS, Sqlite bdd, Node.Js, Handlebars that allows users to authenticate and enroll in courses, an admin section to view activities, subscribed users and add activities.</p>
                    <HStack spacing='24px'>
                         <Box>
                        <a href="https://centre-formation-infomatique.onrender.com" target="_blank" >Live Preview</a>
                        </Box><Box>
                        <a href="https://github.com/Riadbns/Techno" target="_blank" >code source</a>
                  </Box></HStack>
                </div>
            </div>
        </div>
    </div>
      
    </FullScreenSection>
    </div>
    </div>
  );
};

export default ProjectsSection;
