import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route
  console.log("userinfo",userInfo);

  try {
    const response = await fetch(`https://kanban-board-application-pjsc:10000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(userInfo),
    });
    console.log("login response:", response)
    if (!response.ok) {
      throw new Error("Login failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export { login };
