// function openPage(){
//   window.location.href = 'index.html';



// }

// document.getElementById('loginForm').addEventListener('submit', function(event) {
//   event.preventDefault();
  
//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;
  
  
//   if (username === 'satish' && password === 'hello') {
      
//       alert('Login successful!');
//       setTimeout(openPage(),3000);
     
//   } else {
      
//      alert("Please enter a valid Password and Id")
//   }
// });

document.getElementById('loginForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      alert('Login successful!');
      localStorage.setItem('username', username); 
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3000);
    } else {
      alert('Please enter a valid Password and Id');
    }
  } catch (err) {
    console.error('Error:', err);
  }
});

