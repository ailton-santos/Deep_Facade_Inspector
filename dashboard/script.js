/**
 * Deep-Facade-Inspector | Frontend Logic Stub
 * This script simulates an API call to the PyTorch/FastAPI backend.
 */

document.addEventListener('DOMContentLoaded', () => {
    const dropZone = document.getElementById('drop-zone');
    const statusTag = document.querySelector('.status-tag');
    const statsList = document.querySelector('.stats-list');
    const scanLine = document.querySelector('.scanning-line');

    // Initial state: pause the animation
    scanLine.style.animationPlayState = 'paused';

    dropZone.addEventListener('click', () => {
        simulateInference();
    });

    /**
     * Simulates the RAG/CV Inference Process
     */
    function simulateInference() {
        // 1. Update UI to "Processing"
        statusTag.textContent = "Analyzing Geometry...";
        statusTag.style.color = "#f1e05a"; // Yellow for processing
        scanLine.style.animationPlayState = 'running';
        
        console.log("Inference Triggered: Sending image buffer to Python Backend...");

        // 2. Mocking a 3-second delay (API Latency)
        setTimeout(() => {
            // 3. Update with Mock Results
            statusTag.textContent = "Analysis Complete";
            statusTag.style.color = "#238636"; // GitHub Green
            scanLine.style.animationPlayState = 'paused';

            // Update the stats list with randomized "AI" data
            const mockData = {
                pathologies: Math.floor(Math.random() * 5) + 1,
                latency: (Math.random() * (250 - 120) + 120).toFixed(2),
                confidence: (Math.random() * (99 - 92) + 92).toFixed(1)
            };

            statsList.innerHTML = `
                <li><strong>Detected Pathologies:</strong> ${mockData.pathologies}</li>
                <li><strong>Inference Latency:</strong> ${mockData.latency} ms</li>
                <li><strong>Mean Confidence:</strong> ${mockData.confidence} %</li>
            `;

            console.log("Results received from model: ", mockData);
            alert("Success: Pathologies mapped and ready for BIM integration.");
        }, 3000);
    }
});