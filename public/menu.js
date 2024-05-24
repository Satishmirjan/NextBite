// document.addEventListener('DOMContentLoaded', () => {
//   const urlParams = new URLSearchParams(window.location.search);
//   const date = urlParams.get('date');
//  // document.getElementById('menu-date').textContent = `Day ${date}`;

//   const saveBtn = document.getElementById('saveBtn');
//   saveBtn.addEventListener('click', () => {
//       const breakfast = document.getElementById('breakfast').checked;
//       const lunch = document.getElementById('lunch').checked;
//       const dinner = document.getElementById('dinner').checked;
//       const snack = document.getElementById('snack').checked;

//       const decision = {
//           breakfast,
//           lunch,
//           dinner,
//           snack
//       };

//       let visitedDates = JSON.parse(localStorage.getItem('visitedDates')) || {};
//       visitedDates[date] = decision;
//       localStorage.setItem('visitedDates', JSON.stringify(visitedDates));

      
//       window.location.href = 'index.html';
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get('date');
  const username = localStorage.getItem('username');

  const saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', async () => {
      const breakfast = document.getElementById('breakfast').checked;
      const lunch = document.getElementById('lunch').checked;
      const dinner = document.getElementById('dinner').checked;
      const snack = document.getElementById('snack').checked;

      const decision = {
          date,
          username,
          breakfast,
          lunch,
          dinner,
          snack
      };

      try {
        const response = await fetch('http://localhost:5000/api/meals', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(decision)
        });

        if (response.ok) {
          let visitedDates = JSON.parse(localStorage.getItem('visitedDates')) || {};
          visitedDates[date] = decision;
          localStorage.setItem('visitedDates', JSON.stringify(visitedDates));

          window.location.href = 'index.html';
        } else {
          alert('Error saving meal preferences');
        }
      } catch (err) {
        console.error('Error:', err);
      }
  });
});
