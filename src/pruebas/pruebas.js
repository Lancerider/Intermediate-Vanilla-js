$.ajax("https://randomuser.me/api/", {
  method: "GET",
  success: data => console.log(data.results[0].name.first),
  error: error => console.log(error.responseText)
});

fetch("https://randomuser.me/api/")
  .then(response => {
    console.log(response);
    return response.json();
  })
  .then(function(user) {
    console.log("user", user);
  })
  .catch(() => console.log("Algo salió mal"));
