const groups = [
    { name: '* All is Well * ', members: [

        { name: 'Amisha sarkate', qualification: 'B.A', age: 23 },
        { name: 'Kimaya shinde', qualification: 'MBA', age: 23 },
        { name: 'Neha Dhore', qualification: 'M.A', age: 22 }
    ] },
    { name: '* Coder *', members: [

        { name: 'vaishnavi kakde', qualification: 'B.A', age: 20 },
        { name: 'Avantika kense', qualification: '12th pass', age: 20 },
        { name: 'samiksha khadke', qualification: 'B.SC', age: 22 }
    ] },
    { name: '* Firefly *', members: [

        { name: 'vishakha wankhade ', qualification: 'B.Com', age: 20 },
        { name: 'Nikita sirsat', qualification: 'M.com', age: 23 },
        { name: 'shrutika bhagwat', qualification: 'B.Sc', age: 22 }
    ] },
    // ... other groups ...
];

function generateGroups() {
    // You can add your logic to generate and display groups dynamically.
    // For simplicity, we'll just display the predefined groups here.
    displayGroups(groups);
}

function searchGroups() {
    const searchQuery = document.getElementById('search-group').value.toLowerCase();
    const filteredGroups = groups.filter(group => group.name.toLowerCase().includes(searchQuery));
    displayGroups(filteredGroups);
}

function toggleGroupInfo(groupIndex) {
    const groupInfo = document.getElementById(`group-info-${groupIndex}`);
    groupInfo.style.display = groupInfo.style.display === 'none' ? 'block' : 'none';
}

function showMemberInfo(member) {
    // Redirect to a new page with member information
    const newPage = window.open('', '_blank');
    newPage.document.write(`
        <html>
            <head>
                <title>${member.name} Information</title>
            </head>
            <body>
                <h1>${member.name} Information</h1>
                <p>Qualification: ${member.qualification}</p>
                <p>Age: ${member.age}</p>
            </body>
        </html>
    `);
    newPage.document.close();
}

function displayGroups(groupsToDisplay = groups) {
    const groupsContainer = document.getElementById('groups');
    groupsContainer.innerHTML = '';

    groupsToDisplay.forEach((group, groupIndex) => {
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('group-container');

        const groupNameElement = document.createElement('div');
        groupNameElement.classList.add('group-name');
        groupNameElement.textContent = group.name;
        groupNameElement.onclick = () => toggleGroupInfo(groupIndex);

        const groupInfoContainer = document.createElement('div');
        groupInfoContainer.classList.add('group-info');
        groupInfoContainer.id = `group-info-${groupIndex}`;
        group.members.forEach(member => {
            const memberElement = document.createElement('div');
            memberElement.textContent = member.name;
            memberElement.onclick = () => showMemberInfo(member);
            groupInfoContainer.appendChild(memberElement);
        });

        groupContainer.appendChild(groupNameElement);
        groupContainer.appendChild(groupInfoContainer);

        groupsContainer.appendChild(groupContainer);
    });
}
