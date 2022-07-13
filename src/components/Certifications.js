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
} from "react-admin";

export const CertificationList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="issuerName" />
      <TextField source="nameOfCertification" />
      <TextField source="type" />
    </Datagrid>
  </List>
);

export const CertificationEdit = (props) => (
  <Edit title={<PostTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" resettable />
      <TextInput source="issuerName" resettable />
      <TextInput source="nameOfCertification" resettable />
      <TextInput source="type" resettable />
    </SimpleForm>
  </Edit>
);

export const CertificationCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" resettable />
      <TextInput source="issuerName" resettable />
      <TextInput source="nameOfCertification" resettable />
      <TextInput source="type" resettable />
    </SimpleForm>
  </Create>
);

const PostTitle = () => {
  const record = useRecordContext();
  return (
    <span>Certification {record ? `"${record.nameOfCertification}"` : ""}</span>
  );
};

const CertificationFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <TextInput source="gpa" label="GPA" optionText="gpa" />,
];
