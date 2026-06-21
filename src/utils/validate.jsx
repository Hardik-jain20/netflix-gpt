export const checkValidData = (email, pass) => {
  const emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email,
  );
  const passValidate =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pass,
    );
  if (!emailValidate) return "Email ID is invalid";
  if (!passValidate) return "Password is invalid";
  return null;
};
