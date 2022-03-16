import * as React from 'react';
import { SearchInput, PageSection, Title } from '@patternfly/react-core';
import {  SubmitButtonSearchInput }  from "./SubmitButtonSearchInput";

const FAQs: React.FunctionComponent = () => (
  <PageSection>
    <Title headingLevel="h1" size="lg"><center>Autotune Frequently Asked Questions !</center></Title>
    <p><center>Welcome to the FAQs Page. How can we Help You! </center></p> <br/><br/>
   <p>First Error </p>
   <SubmitButtonSearchInput />
    
<p>Second way error</p>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<input type="text" placeholder="Search.." name="search"> </input>
    <button type="submit"><i ></i></button>

   
<p>Everything you need to know </p>
  </PageSection>
)

export { FAQs };