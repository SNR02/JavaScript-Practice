function createSession(user) {
    let isLoggedIn = true;
    let lastActiveTime = Date.now();

    function checkSession() {
        let currentTime = Date.now();
        if (currentTime - lastActiveTime > 3000) {  
            isLoggedIn = false;
            console.log(`${user} has been logged out due to inactivity.`);
        } else {
            console.log(`${user} is active.`);
        }
    }

    function updateActivity() {
        lastActiveTime = Date.now();
        console.log(`${user} activity updated.`);
    }

    return {
        checkSession,
        updateActivity
    };
}

// Usage:
const userSession = createSession("JohnDoe");

userSession.updateActivity();  // "JohnDoe activity updated."
setTimeout(() => userSession.checkSession(), 2000);  // "JohnDoe is active."
setTimeout(() => userSession.checkSession(), 3100);  // "JohnDoe has been logged out due to inactivity."
