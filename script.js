// Question_01

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const formData = `Name: ${name}<br>Email: ${email}<br>Password: ${password}`;
    document.getElementById('form-data-display').innerHTML = formData;
}

// Question_02

function toggleDetails() {
    const fullDetails = document.getElementById('item-full-details');
    const button = document.getElementById('read-more-btn');

    if (fullDetails.style.display === 'none' || fullDetails.style.display === '') {
        fullDetails.style.display = 'block';
        button.textContent = 'Read less';
    } else {
        fullDetails.style.display = 'none';
        button.textContent = 'Read more';
    }
}

// Question_03

const studentTable = document.getElementById('student-table').querySelector('tbody');
        const editForm = document.getElementById('edit-form');
        let editRow = null;

        function addStudent() {
            const name = document.getElementById('student-name').value;
            const age = document.getElementById('student-age').value;
            const grade = document.getElementById('student-grade').value;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${age}</td>
                <td>${grade}</td>
                <td>
                    <button onclick="editStudent(this)">Edit</button>
                    <button onclick="deleteStudent(this)">Delete</button>
                </td>
            `;

            studentTable.appendChild(row);
            document.getElementById('student-form').reset();
        }

        function deleteStudent(button) {
            const row = button.parentElement.parentElement;
            studentTable.removeChild(row);
        }

        function editStudent(button) {
            editRow = button.parentElement.parentElement;
            const cells = editRow.children;
            document.getElementById('edit-name').value = cells[0].textContent;
            document.getElementById('edit-age').value = cells[1].textContent;
            document.getElementById('edit-grade').value = cells[2].textContent;

            editForm.style.display = 'block';
        }

        function saveEdit() {
            const name = document.getElementById('edit-name').value;
            const age = document.getElementById('edit-age').value;
            const grade = document.getElementById('edit-grade').value;

            editRow.children[0].textContent = name;
            editRow.children[1].textContent = age;
            editRow.children[2].textContent = grade;

            editForm.style.display = 'none';
            editRow = null;
        }

        function cancelEdit() {
            editForm.style.display = 'none';
            editRow = null;
        }
