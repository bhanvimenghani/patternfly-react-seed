import * as React from 'react';
import marked from "marked";
import { PageSection, Title } from '@patternfly/react-core';
import readme from "https://github.com/kruiz  e/autotune/blob/master/docs/autotune_modules.md";

const Glossary: React.FunctionComponent = () => (
  <div>
  <PageSection>
    <center>
    <Title headingLevel="h1" size="lg">Glossary Autotune Page!</Title>
    <p>High-level description of the Autotune architecture and a glossary of common terms.</p>
    <hr /></center>
    <br />
    <Title headingLevel="h2" size="xl">Autotune Architecture </Title>
    <p>Shared vocabulary for Kubernetes, Autotune.</p>
  
    <br/>
    <Title headingLevel="h2" size="xl">Autotune Modules </Title>
    <p>Shared vocabulary for Kubernetes, Autotune.</p>
    <br/>
    <Title headingLevel="h2" size="xl">SRE/Networking Terminology </Title>
    <p>Shared vocabulary for Kubernetes, Autotune.</p>
    <br/>
  </PageSection>
  <script>
    let textme = new readme;

console.log(textme);
  </script>
  </div>
)

export { Glossary };