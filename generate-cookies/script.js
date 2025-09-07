// Session Cookie Generator
document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateCookie');
    const cookieDisplay = document.getElementById('cookieDisplay');
    const cookieInfo = document.getElementById('cookieInfo');

    generateButton.addEventListener('click', function() {
        // Generate a unique session ID
        const sessionId = generateSessionId();
        
        // Create session cookie
        const cookieName = 'sessionId';
        const cookieValue = sessionId;
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (24 * 60 * 60 * 1000)); // 24 hours
        
        // Set the cookie
        document.cookie = `${cookieName}=${cookieValue}; expires=${expirationDate.toUTCString()}; path=/`;
        
        // Display the cookie information
        displayCookieInfo(cookieName, cookieValue, expirationDate);
        
        // Show success message
        cookieDisplay.innerHTML = `
            <div class="success-message">
                ✅ Session cookie başarıyla oluşturuldu!
            </div>
        `;
    });

    function generateSessionId() {
        // Generate a random session ID
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(2, 15);
        return `sess_${timestamp}_${randomString}`;
    }

    function displayCookieInfo(name, value, expiration) {
        cookieInfo.innerHTML = `
            <div class="info-item">
                <strong>Cookie Adı:</strong> ${name}
            </div>
            <div class="info-item">
                <strong>Cookie Değeri:</strong> ${value}
            </div>
            <div class="info-item">
                <strong>Son Kullanma Tarihi:</strong> ${expiration.toLocaleString('tr-TR')}
            </div>
            <div class="info-item">
                <strong>Cookie Türü:</strong> Session Cookie
            </div>
        `;
    }

    // Check if cookie already exists on page load
    function checkExistingCookie() {
        const cookies = document.cookie.split(';');
        const sessionCookie = cookies.find(cookie => cookie.trim().startsWith('sessionId='));
        
        if (sessionCookie) {
            const cookieValue = sessionCookie.split('=')[1];
            cookieDisplay.innerHTML = `
                <div class="existing-message">
                    ℹ️ Zaten bir session cookie mevcut: ${cookieValue}
                </div>
            `;
            
            // Display existing cookie info
            const cookieName = 'sessionId';
            const expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (24 * 60 * 60 * 1000));
            displayCookieInfo(cookieName, cookieValue, expirationDate);
        }
    }

    // Check for existing cookie on page load
    checkExistingCookie();
});

