async function fetchOKRs() {
    // Simulating fetching data from a database
    const okrs = [
        {
            objective: "Complete TechUp Web App",
            keyResults: ["Build HTML"],
            owner: "YL",
            endDate: "2024-05-15",
            progress: "🙌"
        },
        {
            objective: "Complete TechUp Web App",
            keyResults: ["Deliver CSS"],
            owner: "YL",
            endDate: "2024-05-20",
            progress: "🙌"
        },
        {
            objective: "Complete TechUp Web App",
            keyResults: ["Web site is operational"],
            owner: "YL",
            endDate: "2024-05-29",
            progress: "🏃"
        },
        {
            objective: "Gift My Team Cheers",
            keyResults: ["90% of team access the web app"],
            owner: "YL",
            endDate: "2024-08-15",
            progress: "🏃"
        }
    ];

    const tbody = document.querySelector('#okrTable tbody');
    tbody.innerHTML = '';

    okrs.forEach(okr => {
        const tr = document.createElement('tr');

        const tdObjective = document.createElement('td');
        tdObjective.textContent = okr.objective;
        tr.appendChild(tdObjective);

        const tdKeyResults = document.createElement('td');
        tdKeyResults.textContent = okr.keyResults.join(', ');
        tr.appendChild(tdKeyResults);

        const tdOwner = document.createElement('td');
        tdOwner.textContent = okr.owner;
        tr.appendChild(tdOwner);

        const tdEndDate = document.createElement('td');
        tdEndDate.textContent = okr.endDate;
        tr.appendChild(tdEndDate);

        const tdProgress = document.createElement('td');
        tdProgress.textContent = okr.progress;
        tr.appendChild(tdProgress);

        const tdCheerUp = document.createElement('td'); // Create tdCheerUp element
        const textarea = document.createElement('textarea');
        textarea.className = 'cheer-input'; // Match the class name with the CSS
        textarea.placeholder = 'I want to say (max 250 characters)';
        tdCheerUp.appendChild(textarea);
        tr.appendChild(tdCheerUp); // Append tdCheerUp to the row

        tbody.appendChild(tr);
    });
}
function navigateTo(page) {
    if (page === 'home') {
        window.location.href = '/'; // Navigate to the home page explicitly
    } else {
        window.location.href = `/${page}`;
    }
}

document.querySelectorAll('.card-link').forEach(card => {
    card.addEventListener('click', function(e) {
        window.location = this.href;
    });
});
