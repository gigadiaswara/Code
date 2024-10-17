import { object, string } from "yup";
const Schema = object({
    firstName: string()
    .required("Required"),
    lastName: string()
    .required("Required"),
    email: string()
    .email("Invalid format")
    .required("Required"),
    password: string()
    .min(8, "Password must be 3 characters")
    .matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
        "Password need to have atleast one number and special characters"
    )
    .required("Required"),
});

export default Schema;
