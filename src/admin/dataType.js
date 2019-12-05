import React from 'react';
import {
    Datagrid,
    DateField,
    DateInput,
    Edit,
    EditButton,
    List,
    Show,
    ShowButton,
    SimpleForm,
    SimpleShowLayout,
    TextField,
    TextInput,
    Create
} from 'react-admin';

export const DataTypeList = props => (
    <List {...props}>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="section" />
            <TextField source="key" />
        </Datagrid>
    </List>
);

export const DataTypeEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="section" />
            <TextInput source="key" />
        </SimpleForm>
    </Edit>
);

export const DataTypeShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="section" />
            <TextField source="key" />
        </SimpleShowLayout>
    </Show>
);

export const DataTypeCreate = props => (
    <Create {...props}>
        <SimpleForm redirect="show">
            <TextInput source="section" />
            <TextInput source="key" />
        </SimpleForm>
    </Create>
);
