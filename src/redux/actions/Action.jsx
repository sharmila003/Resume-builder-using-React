export const setPersonalInfo = (data) => ({
    type: 'SET_PERSONAL_INFO',
    payload: data,
  });
  //Actions triggers from the view and change the state or props by store help

export const selectTemplate= (id) => ({
  type: "SELECTTEMPLATE",
  payload: id,
});

export const selectResume = (id) => ({
  type: "SELECTRESUME",
  payload: id,
});

export const addPersonalInfo = (details) => ({
  type: "ADDPERSONALINFO",
  payload: details,
});

export const addExperience = (experience) => ({
  type: "ADDEXPERIENCE",
  payload: experience,
});

export const addAllExperience = (experiences) => ({
  type: "ADDALLEXPERIENCE",
  payload: experiences,
});

export const addNewSkills = () => ({
  type: "ADDNEWSKILLS",
  payload: null,
});

export const editSkill = (skills) => ({
  type: "EDITSKILL",
  payload: skills,
});

export const deleteSkill = (id) => ({
  type: "DELETESKILL",
  payload: id,
});

export const addEducation = (details) => ({
  type: "ADDEDUCATION",
  payload: details,
});
