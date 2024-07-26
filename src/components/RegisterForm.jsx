import React from "react";
import { useFormik } from "formik";
import { registerFromSchemas } from "../schemas/RegisterFormSchemas";
function RegisterForm() {
  const submit = (values, action) => {
    console.log(values);
    console.log(action);
    setTimeout(() => {
      action.resetForm();
    }, 2000);
  };
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
      term: "",
    },
    validationSchema: registerFromSchemas,
    onSubmit: submit,
  });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            value={values.email}
            onChange={handleChange}
            type="email"
            id="email"
            placeholder="Email giriniz..."
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="age">Yaş</label>
          <input
            value={values.age}
            onChange={handleChange}
            type="number"
            id="age"
            placeholder="Yaşınızı giriniz..."
          />
          {errors.age && <p>{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="password">Parola</label>
          <input
            type="password"
            value={values.password}
            id="password"
            placeholder="Şifrenizi giriniz..."
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Parola Tekrarı</label>
          <input
            type="password"
            value={values.confirmPassword}
            id="confirmPassword"
            placeholder="Şifrenizi tekrar giriniz..."
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>
        <div className="last">
          <input
            type="checkbox"
            id="term"
            value={values.term}
            onChange={handleChange}
          />
          <label htmlFor="term">Kullanıcı Sözleşmesini Kabul Ediyorum</label>
          <button type="submit">Kaydet</button>
        </div>
        {errors.term && <p>{errors.term}</p>}
      </form>
    </div>
  );
}

export default RegisterForm;
