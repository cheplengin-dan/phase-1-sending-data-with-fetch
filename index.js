// Add your code here
function submitData(userName, userEmail){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then(response => response.json())
    .then(data => {
      const newId = data.id;
      const idElement = document.createElement('p');
      idElement.innerHTML = newId;
      document.body.appendChild(idElement);
    })
    .catch(error => {
      const errorElement = document.createElement('p');
      errorElement.innerHTML = error.message;
      document.body.appendChild(errorElement);
    });
};






