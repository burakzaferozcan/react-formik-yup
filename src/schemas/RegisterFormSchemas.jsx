import * as yup from "yup";
export const registerFromSchemas = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email adresi zorunludur"),
  age: yup
    .number()
    .integer("Tam sayı değeri giriniz")
    .min(18, "18 yaşından küçükler kayıt olamaz")
    .required("Yaş alanı zorunludur"),
  password: yup
    .string()
    .min(8, "Şifreniz en az 8 karakter olmalı")
    .required("Lütfen bir şifre belirleyin"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Parolalar eşleşmiyor"),
  term: yup
    .boolean()
    .oneOf([true], "Kullanıcı Sözleşmesini kabul etmeniz gerekiyor"),
});
