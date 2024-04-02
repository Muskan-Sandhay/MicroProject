const img1 = document.getElementById("1");
const img2 = document.getElementById("2");
const img3 = document.getElementById("3");
const img4 = document.getElementById("4");
const img5 = document.getElementById("5");
const img6 = document.getElementById("6");

const apiURL = 'http://localhost:3000/';

async function dataAsync(id) {
    const dataId = id;
    try {
        const response = await fetch(apiURL); // Adjust the API endpoint accordingly
        //if (!response.ok) {
           // throw new Error(`HTTP error! status: ${response.status}`);
        //}
        let data = await response.json();
        data = data.find((item) => item.id === dataId);
        console.log(data);

        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

img1.addEventListener('click', () => dataAsync(1));
img2.addEventListener('click', () => dataAsync(2));
img3.addEventListener('click', () => dataAsync(3));
img4.addEventListener('click', () => dataAsync(4));
img5.addEventListener('click', () => dataAsync(5));
img6.addEventListener('click', () => dataAsync(6));

function displayData(data) {
    const container = document.getElementById('json-container');
    container.innerHTML = '<pre style=" font-weight:bold">' + JSON.stringify(data.descpription, null, 2) + '</pre>';
}
