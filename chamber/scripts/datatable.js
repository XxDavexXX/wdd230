const linkURL = 'https://raw.githubusercontent.com/XxDavexXX/wdd230/main/chamber/data/members.json';

        async function fetchData() {
            const response = await fetch(linkURL);
            const data = await response.json();
            return data.companies;
        }

        function createCard(company) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.style = 'width: 18rem; margin: 20px;';

            card.innerHTML = `
                <img src="images/${company.image}" class="card-img-top" alt="${company.name}" style="width: 100%; height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${company.name}</h5>
                    <p class="card-text">${company.other_information}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><strong>Address:</strong> ${company.address}</li>
                    <li class="list-group-item"><strong>Phone:</strong> ${company.phone}</li>
                    <li class="list-group-item"><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></li>
                    <li class="list-group-item"><strong>Membership Level:</strong> ${company.membership_level}</li>
                </ul>
            `;
            
            return card;
        }

        async function populateCards() {
            const companyCards = document.getElementById('company-cards');
            const companies = await fetchData();
            
            companies.forEach(company => {
                const card = createCard(company);
                companyCards.appendChild(card);
            });
        }


        function populateTable() {
            const tbody = document.querySelector('#company-table tbody');
            fetchData().then(companies => {
                companies.forEach((company, index) => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <th scope="row">${index + 1}</th>
                        <td>${company.name}</td>
                        <td>${company.address}</td>
                        <td>${company.phone}</td>
                        <td><a href="${company.website}" target="_blank">${company.website}</a></td>
                        <td><img src="images/${company.image}" alt="${company.name}" style="width: 50px; height: 50px;"></td>
                        <td>${company.membership_level}</td>
                        <td>${company.other_information}</td>
                    `;
                    tbody.appendChild(row);
                });
            });
        }


        document.addEventListener('DOMContentLoaded', () => {
            populateTable();
            populateCards();
        });