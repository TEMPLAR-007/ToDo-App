const Token = async (token) => {
  fetch(`http://localhost:5000/login`, {
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