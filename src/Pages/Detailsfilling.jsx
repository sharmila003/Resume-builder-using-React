import React, { useState } from "react";
import {
  Navbar,
  SidebarDetailfilling,
  Education,
  Keyskills,
  PersonalInformation,
  ResumePreview,
  Workexperience,
} from "./Index";
import "./Styles/Detailsfilling.css";

// As soon as details are filled for particular section browser moves further to next fields 
// if  there is same field on same page

const Detailsfilling = (props) => {
  const [tab, setTab] = useState(0);

  return (
    <div className="details-filling">
      <Navbar active={""} />
      {tab === 4 ? null : (
        <div className="details-filling-cont">
          <SidebarDetailfilling tab={tab} setTab={setTab} />
          {tab === 0 ? (
            <PersonalInformation setTab={setTab} tab={tab} />
          ) : null}
          {tab === 3 ? <Keyskills setTab={setTab} tab={tab} /> : null}
          {tab === 1 ? (
            <Workexperience setTab={setTab} tab={tab} />
          ) : null}
          {tab === 2 ? <Education setTab={setTab} tab={tab} /> : null}
        </div>
      )}
      {tab === 4 ? <ResumePreview setTab={setTab} tab={tab} /> : null}
    </div>
  );
};

export default Detailsfilling;
