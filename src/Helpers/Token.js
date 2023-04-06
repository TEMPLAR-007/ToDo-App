const Token = async (token) => {
  fetch(`https://todo-app-server-production-e896.up.railway.app/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ uid: token }),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("accessToken", data.token);
    });
};

export default Token;