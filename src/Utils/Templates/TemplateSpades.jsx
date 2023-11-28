import { Container, Paper } from "@mui/material";
import React from "react";
import "./Template.css";
import Header from "../../components/Header";
import TempHeading from "../../components/Headingsection";
import { data } from "../Data/data";
import ExperienceSection from "../../components/Experiencepage";
import TemplateEducation from "../../components/TemplateEducation";
import TemplateKeySkill from "../../components/TemplateKeyskill";

const Template1 = (props) => {
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;

  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "600px",
        },
        height: {
          xs: "400px",
          sm: "450px",
          md: "500px",
          lg: "600px",
          xl: "650px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}>
      <Header
        primaryColor={"#2196f3"}
        secondaryColor={"black"}
        bgColor={"white"}
        hrcolor={"#2196f3"}
        Hdownheight={"3px"}
        hrsecondcolor={"none"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <Container>
        <TempHeading color={"#2196f3"} Hupcolor={"#2196f3"} Hupheight={"3px"} Hdowncolor={"none"} Hdownheight={"none"} title={"Professional Experience"} />
        <ul style={{ marginBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <ExperienceSection
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <TempHeading color={"#2196f3"} Hupcolor={"#2196f3"} Hupheight={"3px"} Hdowncolor={"none"} Hdownheight={"none"} title={"Education"} />
        <TemplateEducation education={educationinfo} />
        <TempHeading color={"#2196f3"} Hupcolor={"#2196f3"} Hupheight={"3px"} Hdowncolor={"none"} Hdownheight={"none"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <TemplateKeySkill key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template1;
