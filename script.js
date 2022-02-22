let Register = async () => {
    try {
      let register_data = {
        name: document.querySelector("#name"),
        email: document.querySelector("#email"),
        password: document.querySelector("#password"),
        username: document.querySelector("#username"),
        mobile: document.querySelector("#mobile"),
        description: document.querySelector("#description"),
      };

      register_data = JSON.stringify(register_data);

      let res = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/register",
        {
          method: "POST",
          body: register_data,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      console.log("data:", data);
    } catch (error) {
      console.log("error", error);
    }
  };



  

  let Login = async () => {
    try {
      let login_data = {
        name: document.querySelector("#login-username").value,
        password: document.querySelector("#login-password").value,
      };
      let login_data_json = JSON.stringify(login_data);

      let res = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/login",
        {
          method: "POST",
          body: login_data_json,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      console.log("data:", data);
      getUser(login_data.username, data.token);
    } catch (error) {
      console.log("error:", error);
    }
  };

  let getUser = async (username, token) => {
    try {
      let res = await fetch(
        `https://masai-api-mocker.herokuapp.com/user/${username}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      let data = await res.json();
      console.log("data", data);
    } catch (error) {
      console.log("error:", error);
    }
  };