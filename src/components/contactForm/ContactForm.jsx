import css from './ContactForm.module.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';

const contactSchema = yup.object().shape({
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
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div>
          <label className={css.label} htmlFor={nameFiledId}>
            Name
          </label>
          <Field className={css.input} name="name" id={nameFiledId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label className={css.label} htmlFor={namberFiledId}>
            Number{' '}
          </label>
          <Field className={css.input} name="number" id={namberFiledId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
}
