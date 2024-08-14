// Пример данных
const data = [
    { dateTime: '14.12.2019 23:00:06', hour: 23, fact: 671.79, plan: 738.4, diff: -66.61, cokeFact: 140.98, cokePlan: 141, cokeDiff: -0.02, aggFact: 512.89, aggPlan: 579.4, aggDiff: -66.51, oreFact: 0, orePlan: 0, oreDiff: 1, shoFact: 12.02, shoPlan: 12 },
    { dateTime: '15.12.2019 00:00:18', hour: 0, fact: 789.45, plan: 788.06, diff: 1.39, cokeFact: 155.79, cokePlan: 155.4, cokeDiff: 0.39, aggFact: 615.61, aggPlan: 614.66, aggDiff: 0.95, oreFact: 0, orePlan: 0, oreDiff: 0, shoFact: 12.03, shoPlan: 12 },
    // Добавьте другие строки данных
];

// Функция для создания строки таблицы
function createTableRow(rowData) {
    const row = document.createElement('tr');

    const keys = ['dateTime', 'hour', 'fact', 'plan', 'diff', 'cokeFact', 'cokePlan', 'cokeDiff', 'aggFact', 'aggPlan', 'aggDiff', 'oreFact', 'orePlan', 'oreDiff', 'shoFact', 'shoPlan'];

    keys.forEach(key => {
        const cell = document.createElement('td');
        let value = rowData[key];

        if (key.includes('Diff') || key.includes('diff')) {
            cell.classList.add('diff');
            if (value > 0) {
                cell.classList.add('positive');
            } else if (value < 0) {
                cell.classList.add('negative');
            } else {
                cell.classList.add('zero');
            }
        }

        if (key === 'dateTime') {
            cell.classList.add('date-time');
        }

        if (key === 'hour') {
            cell.classList.add('hour');
        }

        cell.textContent = value;
        row.appendChild(cell);
    });

    return row;
}

// Добавляем строки в таблицу
const tableBody = document.getElementById('data-table');
data.forEach(rowData => {
    tableBody.appendChild(createTableRow(rowData));
});
