// import css from './ContactForm.module.css';
import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const limitation = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: yup
    .string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm({ addContact }) {
  const nameFiledId = useId();
  const namberFiledId = useId();

  const handleSubmit = (values, actions) => {
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={limitation}
    >
      <Form>
        <div>
          <label htmlFor={nameFiledId}>Name</label>
          <Field name="name" id={nameFiledId} />
        </div>
        <div>
          <label htmlFor={namberFiledId}>Number </label>
          <Field name="number" id={namberFiledId} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
