

document.addEventListener('DOMContentLoaded', async () => {
    const calendarBody = document.getElementById('calendar-body');
    const daysInMonth = new Date(2024, 5, 0).getDate(); 
    const firstDay = new Date(2024, 4, 1).getDay(); 
    const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = 1;
  
    const visitedDates = JSON.parse(localStorage.getItem('visitedDates')) || {};
  
    for (let i = 0; i < 6; i++) { 
        let row = document.createElement('tr');
        
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement('td');
            
            if ((i === 0 && j < firstDay) || date > daysInMonth) {
                cell.textContent = '';
            } else {
                cell.textContent = `${weeks[j]} ${date}`;
                if (visitedDates[date]) {
                    cell.classList.add('visited');
                }
                cell.addEventListener('click', () => {
                    window.location.href = `menu.html?date=${date}`;
                });
                date++;
            }
            
            row.appendChild(cell);
        }
        
        calendarBody.appendChild(row);
    }
  });
  
