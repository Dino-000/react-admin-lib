import * as React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./components/Dashboard";
// import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from "ra-data-simple-rest";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  CandidateEdit,
  CandidateList,
  CandidateCreate,
} from "./components/Candidate";
import {
  CertificationEdit,
  CertificationList,
  CertificationCreate,
} from "./components/Certifications";

// const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const dataProvider = simpleRestProvider("http://localhost:8080/api");

const App = () => {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource
        name="candidates"
        list={CandidateList}
        edit={CandidateEdit}
        create={CandidateCreate}
        icon={SupervisedUserCircleIcon}
      />
      <Resource
        name="certifications"
        list={CertificationList}
        edit={CertificationEdit}
        create={CertificationCreate}
        icon={EmojiEventsIcon}
      />
    </Admin>
  );
};

export default App;
