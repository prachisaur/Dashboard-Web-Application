// const dateElement = document.getElementById('date');
//     const today = new Date();
//     dateElement.textContent = today.toDateString();

// Fetch and display today's income using API

const dateInput = document.getElementById('date');
dateInput.addEventListener('focus', function() {
  this.setAttribute('placeholder', 'Date');
});
dateInput.addEventListener('blur', function() {
  this.removeAttribute('placeholder');
});

// fetch('https://api.publicapis.org/entries', {
//   method: 'GET',
// //   headers: {
// //     'X-RapidAPI-Key': 'f6b523800dmsh13d7d6a024c2220p1b8ae9jsn60b554ea8d7c',
// //     'X-RapidAPI-Host': 'loudelement-ip-address-to-income---ip2income.p.rapidapi.com'
//   }
// )
//     .then(response => response.json())
//     .then(data => {
//         const incomeElement = document.getElementById('income');
//         incomeElement.textContent = data.todayIncome;
//     })
//     .catch(error => console.log(error));

fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
            .then(res => res.json())
            .then(data => {
                data.data.forEach(Income => {
                    const markup = `<li>${Income.Population}</li>`;
                    document.getElementById('income').insertAdjacentHTML("beforeend", markup);
                });
            })
            .catch(error => console.log(error));

// Fetch and display company expenses using API (replace 'api/expenses' with the actual API endpoint)
fetch('api/expenses')
    .then(response => response.json())
    .then(data => {
        const expensesElement = document.getElementById('expenses');
        expensesElement.textContent = data.companyExpenses;
    })
    .catch(error => console.log(error));

// Fetch and display hired versus cancelled statistics using API (replace 'api/hired' and 'api/cancelled' with the actual API endpoints)
fetch('api/hired')
    .then(response => response.json())
    .then(data => {
        const hiredElement = document.getElementById('hired');
        hiredElement.textContent = data.totalHired;
    })
    .catch(error => console.log(error));

fetch('api/cancelled')
    .then(response => response.json())
    .then(data => {
        const cancelledElement = document.getElementById('cancelled');
        cancelledElement.textContent = data.totalCancelled;
    })
    .catch(error => console.log(error));

fetch('api/pending')
    .then(response => response.json())
    .then(data => {
        const pendingElement = document.getElementById('pending');
        pendingElement.textContent = data.totalPending;
    })
    .catch(error => console.log(error));

function activateNavItem(element) {
    var navbarItems = document.getElementsByClassName('navbar-item');
    for (var i = 0; i < navbarItems.length; i++) {
        navbarItems[i].classList.remove('active');
    }
    element.classList.add('active');
}

function changeButtonColor(button) {
    button.classList.toggle('clicked');
}

   