const currentTimeUtc = document.querySelector('[data-testid="currentTimeUTC"]');
const currentDay = document.querySelector('[data-testid="currentDay"]');

document.addEventListener("DOMContentLoaded", () => {
    function updateUtcTimeAndDate() {
        const now = new Date();
        
        const utcTime =now.toUTCString().split(' ')[4];

        const options = {weekday: 'long'};
        const theCurrentDay = now.toLocaleDateString('en-US',options);

        currentTimeUtc.textContent = `Current UTC Time: ${utcTime}`
        currentDay.textContent = `Current Day: ${theCurrentDay}`;
    }
    updateUtcTimeAndDate();

    setInterval(updateUtcTimeAndDate,1000);
});

