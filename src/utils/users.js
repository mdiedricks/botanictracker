import axios from "axios";
let path = "https://botanictracker-api.herokuapp.com/users";

//
// User Login function
// @param : formData - input from user
//

export const userLogin = async (formData) => {
  console.log("Function :: user login");
  try {
    const res = await axios({
      method: "post",
      url: path + "/login",
      data: {
        email: formData.email,
        password: formData.password,
      },
      validateStatus: function (status) {
        return status >= 200 && status < 500;
      },
    });
    if (res.status !== 200) {
      throw new Error(res.data.msg);
    }
    return res.data;
  } catch (error) {
    return { msg: error.message };
  }
};

//
// User Logout function
// @param : none
//

export const userLogout = async () => {
  console.log("Function :: user logout");
  try {
    const res = await axios({
      method: "post",
      url: path + "/logout",
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    if (res.status !== 200) {
      throw new Error(res.data.msg);
    }
  } catch (error) {
    return { msg: error.message };
  }
};

//
// Populate local storage with user details
// @param : response object from logging in
//

export const populateLocalStorage = (res) => {
  localStorage.setItem("token", res.token);
  localStorage.setItem("_id", res.user._id);
  localStorage.setItem("email", res.user.email);
  localStorage.setItem("name", res.user.name);
};

//
// Clear local storage of user details
// @param : none
//

export const clearLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("_id");
  localStorage.removeItem("email");
  localStorage.removeItem("name");
};
