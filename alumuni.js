// Correct mock alumni data for search
const alumni = [
    { name: 'Sudhanshu Mall', year: '2026', location: 'Gorakhpur' },
    { name: 'Sujal Waingankar', year: '2018', location: 'Goa' },
    { name: 'Uday Singh Parihar', year: '2030', location: 'Bhopal' },
    { name: 'Vishal Sharma', year: '2030', location: 'Maharajganj' },
    { name: 'Arnav Kumar', year: '2030', location: 'Sasaram' }
    { name: 'Alok yadav', year: '2045', location: 'Banaras' }
    { name: 'kaushal kumar', year: '2036', location: 'Patna' }
];

// Search alumni function
function searchAlumni() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = ''; // Clear previous results

    const results = alumni.filter(alum => alum.name.toLowerCase().includes(searchInput) || alum.year.includes(searchInput) || alum.location.toLowerCase().includes(searchInput));

    if (results.length > 0) {
        results.forEach(alum => {
            const resultItem = document.createElement('p');
            resultItem.textContent = `${alum.name} - Class of ${alum.year}, ${alum.location}`;
            searchResults.appendChild(resultItem);
        });
    } else {
        searchResults.textContent = 'No results found.';
    }
}

// Profile form submission
// Function to update profile and send data to the server
// function updateProfile(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get input values
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const year = document.getElementById('year').value;
//     const location = document.getElementById('location').value;

//     // Create data object
//     const profileData = {
//         name: name,
//         email: email,
//         year: year,
//         location: location
//     };

//     // Send data to the server
//     fetch('https://your-server-url/api/updateProfile', {  // Replace with your server URL and endpoint
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(profileData)
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             document.getElementById('profileUpdateMessage').textContent = `Profile updated successfully for ${name} (${year})`;
//         } else {
//             document.getElementById('profileUpdateMessage').textContent = `Failed to update profile: ${data.message}`;
//         }
//     })
//     .catch(error => {
//         console.error('Error updating profile:', error);
//         document.getElementById('profileUpdateMessage').textContent = 'An error occurred while updating the profile.';
//     });
// }

// // Function to load profile data on page load
// function loadProfileData() {
//     // Fetch existing data from the server
//     fetch('https://your-server-url/api/getProfile', {  // Replace with your server URL and endpoint
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             const { name, email, year, location } = data.profile;
//             if (name) document.getElementById('name').value = name;
//             if (email) document.getElementById('email').value = email;
//             if (year) document.getElementById('year').value = year;
//             if (location) document.getElementById('location').value = location;
//         } else {
//             document.getElementById('profileUpdateMessage').textContent = 'Failed to load profile data.';
//         }
//     })
//     .catch(error => {
//         console.error('Error loading profile data:', error);
//         document.getElementById('profileUpdateMessage').textContent = 'An error occurred while loading the profile data.';
//     });
// }

// // Load profile data when the page loads
// window.onload = loadProfileData;
