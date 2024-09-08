// Mock alumni data for search
const alumni = [
    { name: 'Sudhanshu Mall', year: '2026' },
    { name: 'Sujal lunchut', year: '2018' },
    { name: 'uday tulja', year: '2030' }
];

// Search alumni function
function searchAlumni() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    const results = alumni.filter(alum => alum.name.toLowerCase().includes(searchInput) || alum.year.includes(searchInput));

    if (results.length > 0) {
        results.forEach(alum => {
            const resultItem = document.createElement('p');
            resultItem.textContent = `${alum.name} - Class of ${alum.year}`;
            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.textContent = 'No results found.';
    }
}

// Profile form submission
document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const year = document.getElementById('year').value;

    // Normally, here you'd save the profile data to a server or local storage
    document.getElementById('profileUpdateMessage').textContent = `Profile updated successfully for ${name} (${year})`;
});
a