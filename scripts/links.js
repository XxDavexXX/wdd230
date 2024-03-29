const baseURL = "https://github.com/XxDavexXX/wdd230";
const linksURL = "https://raw.githubusercontent.com/XxDavexXX/wdd230/main/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeksData) {
    const weekList = document.getElementById('weekList');

    weeksData.forEach(weekData => {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.textContent = weekData.week + ':';
        li.appendChild(div);

        let lastIndex = weekData.links.length - 1; // Obtener el índice del último enlace
        weekData.links.forEach((link, index) => {
            const a = document.createElement('a');
            a.href = baseURL + '/' + link.url; // Agregar el baseURL al enlace
            a.textContent = link.title;
            li.appendChild(a);
            
            // Agregar un separador si no es el último enlace
            if (index !== lastIndex) {
                const separator = document.createTextNode(' | ');
                li.appendChild(separator);
            }
        });

        weekList.appendChild(li);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    getLinks();
});




