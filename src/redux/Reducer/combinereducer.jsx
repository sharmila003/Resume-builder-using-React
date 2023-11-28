//Reducers are combined with combined reducer as root reducer.

import {
    selectedTemplateReducer,
    personalInfoReducer,
    workExperienceReducer,
    keySkillsReducer,
    educationDetailsReducer,
  } from "./reducer";
  
  
  import { combineReducers } from "redux";
  
  const rootReducer = combineReducers({
    selectedTemplateReducer,
    personalInfoReducer,
    workExperienceReducer,
    keySkillsReducer,
    educationDetailsReducer,
  });
  
  export default rootReducer;
  