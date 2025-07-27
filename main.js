document.addEventListener('DOMContentLoaded', function() {
    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.main-nav .nav-list');

    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', function() {
            navList.classList.toggle('active');
        });

        // Close menu when a link is clicked (for single-page navigation)
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
            });
        });
    }

    // --- Add to Cart Notification (Basic Example) ---
    // This is a simple example. For a real e-commerce site, you'd
    // want to manage a shopping cart using local storage or a backend.

    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    if (addToCartButtons.length > 0) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', function() {
                const card = this.closest('.card');
                const productName = card.querySelector('.card-content .title').textContent;
                const productPrice = card.querySelector('.card-content .amount').textContent;

                showNotification(`"${productName}" added to cart! Price: ${productPrice}`);

                // In a real application, you would also:
                // 1. Add the item to a cart array (e.g., in localStorage)
                // 2. Update a cart icon count
                // 3. Potentially redirect to the cart page or open a mini-cart
                console.log(`Added: ${productName}, Price: ${productPrice}`);
            });
        });
    }

    // Function to display a temporary notification
    function showNotification(message) {
        let notification = document.getElementById('cart-notification');

        // If notification element doesn't exist, create it
        if (!notification) {
            notification = document.createElement('div');
            notification.id = 'cart-notification';
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #4CAF50; /* Green */
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                z-index: 2000;
                opacity: 0;
                transform: translateY(100%);
                transition: opacity 0.5s ease-out, transform 0.5s ease-out;
            `;
            document.body.appendChild(notification);
        }

        notification.textContent = message;

        // Show the notification
        notification.style.opacity = '1';
        notification.style.transform = 'translateY(0)';

        // Hide the notification after a few seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateY(100%)';
            // Remove the notification from the DOM after it fades out
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 500); // Match transition duration
        }, 3000); // Display for 3 seconds
    }
});