import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    const counterElement = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    async function updateCounter() {
        const currentCount = await backend.getCounter();
        counterElement.textContent = currentCount.toString();
    }

    incrementBtn.addEventListener('click', async () => {
        await backend.incrementCounter();
        await updateCounter();
    });

    // Initial counter update
    await updateCounter();
});
