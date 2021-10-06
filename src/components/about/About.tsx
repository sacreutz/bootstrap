import React from "react";
import { Button } from "antd";


type AboutProps = {
  title: string;
  paragraph: string;
};

const About = ({ title, paragraph }: AboutProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{paragraph}</p>
      <Button style={{background: '@primary-color'}} type="primary">Button</Button>
    </div>
  );
};

export default About;
