// Creating the NewModal object with specified parameters
const pageModal = new NewModal({
    titleText: "Are you 18+?",
    messageText: "This action cannot be undone",
    confirmText: "Yes",
    cancelText: "No", // Fixed typo in cancelText
});

const openModal = document.querySelector('#watch-lessons');
const getHref = openModal.getAttribute('href');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        pageModal.open()
            .then(() => alert('User is authenticated'))
            .catch(() => {
                // Handle click event for desktop devices
                openModal.addEventListener("click", (event) => {
                    event.preventDefault();
                    pageModal.open()
                        .then(() => window.location.href = getHref)
                        .catch((value) => console.log('User press Reject', value));
                });

                // Handle touchstart event for mobile devices
                openModal.addEventListener("touchstart", (event) => {
                    event.preventDefault();
                    pageModal.open()
                        .then(() => window.location.href = getHref)
                        .catch((value) => console.log('User press Reject', value));
                });
            });
    }, 5000);
});
