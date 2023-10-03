document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('questionnaire-form');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        const formData = new FormData(form);
        let responses = [];

        // Loop through the form data and collect responses
        for (const entry of formData.entries()) {
            const question = entry[0];
            const response = entry[1];
            responses.push(`Question: ${question}, Response: ${response}`);
        }

        // Create a text file with responses (This is a simplified example)
        const textFile = new Blob([responses.join('\n')], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(textFile);
        a.download = 'responses.txt';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
    });
});
