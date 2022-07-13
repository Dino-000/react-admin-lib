import * as React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  Create,
  SimpleForm,
  SelectInput,
  TextInput,
  useRecordContext,
  NumberInput,
  DateInput,
} from "react-admin";

// export const PostList = (props) => (
//   <List filters={postFilters}>
//     <Datagrid>
//       <TextField source="id" />
//       <ReferenceField source="userId" reference="users">
//         <TextField source="name" />
//       </ReferenceField>
//       <TextField source="title" />
//       <EditButton />
//     </Datagrid>
//   </List>
// );
export const CandidateList = () => (
  <List filter={CandidateFilters}>
    <Datagrid rowClick="edit">
      {/* <ReferenceField source="userId" reference="users"> */}
      <TextField source="id" />
      {/* </ReferenceField> */}
      <TextField source="name" />
      <TextField source="dateOfBirth" />
      <TextField source="location" />
      <TextField source="occupation" />
      <TextField source="seniority" />
      <TextField source="gpa" />
    </Datagrid>
  </List>
);
// export const PostList = () => (
//   <List>
//     <Datagrid rowClick="edit">
//       <ReferenceField source="userId" reference="users">
//         <TextField source="name" />
//       </ReferenceField>
//       <TextField source="id" />
//       <TextField source="title" />
//       <TextField source="body" />
//     </Datagrid>
//   </List>
// );

export const CandidateEdit = (props) => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" resettable />
      <DateInput source="dateOfBirth" />
      <TextInput source="location" resettable />
      <TextField source="occupation" resettable />
      <SelectInput
        source="seniority"
        choices={[
          { id: "internship", name: "INTERNSHIP" },
          { id: "fresher", name: "FRESHER" },
          { id: "mid-level", name: "MID-LEVEL" },
          { id: "mid-level", name: "SENIOR" },
          { id: "mid-level", name: "LEAD" },
          { id: "mid-level", name: "MANGER" },
        ]}
      />
      <NumberInput imin={0} max={10} source="gpa" />
    </SimpleForm>
  </Edit>
);

export const CandidateCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" resettable />
      <DateInput source="dateOfBirth" />
      <TextInput source="location" resettable />
      <TextField source="occupation" resettable />
      <SelectInput
        source="seniority"
        choices={[
          { id: "internship", name: "INTERNSHIP" },
          { id: "fresher", name: "FRESHER" },
          { id: "mid-level", name: "MID-LEVEL" },
          { id: "mid-level", name: "SENIOR" },
          { id: "mid-level", name: "LEAD" },
          { id: "mid-level", name: "MANGER" },
        ]}
      />
      <NumberInput imin={0} max={10} source="gpa" />
    </SimpleForm>
  </Create>
);

const PostTitle = () => {
  const record = useRecordContext();
  return <span>Candidate {record ? `"${record.name}"` : ""}</span>;
};

const CandidateFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users">
  <SelectInput source="" optionText="id" />,
  // </ReferenceInput>,
];
