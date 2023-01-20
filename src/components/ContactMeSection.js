import React, {useEffect,useRef} from "react";
import { useFormik } from "formik";
import emailjs from '@emailjs/browser';
import styles from "../styles/bg.css"
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  useEffect(() => {
    if (response && !isLoading) {
      console.log('Response received: ', response);
      onOpen(response.type,response.message)
      if(response.type==='success'){
        formik.resetForm();
      }
    }
  }, [response, isLoading]);
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      firstName:"",
      email:"",
      comment:"",
    },
    onSubmit: (values) => {
      submit("", values);
      emailjs.sendForm('service_17b16rj', 'template_z32u8en', form.current, 'uUBeHPhyi8HG27Hi1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      // const sgMail = require('@sendgrid/mail');
      // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      // const msg = {
      //   to: 'benosmaneriad22@gmail.com',
      //   from: email,
      //   subject: firstName,
      //   text: comment,
      //   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      // };
      //   sgMail.send(msg);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please enter email"),
      comment: Yup.string().required("Required"),
    }),
  });
  return (
    <div className="img">
    <div className="mask">
    <FullScreenSection
      isDarkBackground
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form ref={form} onSubmit={formik.handleSubmit} >
            <VStack spacing={4} >
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name<span className="required">*</span></FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address<span className="required">*</span></FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message<span className="required">*</span></FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading}>
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
    </div>
    </div>
  );
};

export default LandingSection;
