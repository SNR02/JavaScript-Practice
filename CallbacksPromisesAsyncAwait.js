/**
 * Callbacks
 */

function fetchUser(userId, callback) {
    setTimeout(() => {
        console.log("User fetched");
        callback({ id: userId, name: "John Doe" });
    }, 1000);
}

function fetchOrders(userId, callback) {
    setTimeout(() => {
        console.log("Orders fetched");
        callback([{ orderId: 1, total: 200 }, { orderId: 2, total: 450 }]);
    }, 1000);
}

function fetchOrderDetails(orderId, callback) {
    setTimeout(() => {
        console.log("Order details fetched");
        callback({ orderId, items: ["Laptop", "Phone"], status: "Shipped" });
    }, 1000);
}

// Callback Hell 🥵
fetchUser(101, (user) => {
    fetchOrders(user.id, (orders) => {
        fetchOrderDetails(orders[0].orderId, (orderDetails) => {
            console.log("Final Order Details:", orderDetails);
        });
    });
});




/**
 * Promises
 */

function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: userId, name: "John Doe" });
        }, 1000);
    });
}

function fetchOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders fetched");
            resolve([{ orderId: 1, total: 200 }, { orderId: 2, total: 450 }]);
        }, 1000);
    });
}

function fetchOrderDetails(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order details fetched");
            resolve({ orderId, items: ["Laptop", "Phone"], status: "Shipped" });
        }, 1000);
    });
}

// Promise chaining (Better but still long)
fetchUser(101)
    .then(user => fetchOrders(user.id))
    .then(orders => fetchOrderDetails(orders[0].orderId))
    .then(orderDetails => console.log("Final Order Details:", orderDetails))
    .catch(err => console.error("Error:", err));



    

/**
 *  Async Await
 */

async function fetchUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User fetched");
            resolve({ id: userId, name: "John Doe" });
        }, 1000);
    });
}

async function fetchOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Orders fetched");
            resolve([{ orderId: 1, total: 200 }, { orderId: 2, total: 450 }]);
        }, 1000);
    });
}

async function fetchOrderDetails(orderId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order details fetched");
            resolve({ orderId, items: ["Laptop", "Phone"], status: "Shipped" });
        }, 1000);
    });
}

// Async/Await Approach (Best)
async function getOrderDetails() {
    try {
        const user = await fetchUser(101);
        const orders = await fetchOrders(user.id);
        const orderDetails = await fetchOrderDetails(orders[0].orderId);
        console.log("Final Order Details:", orderDetails);
    } catch (error) {
        console.error("Error:", error);
    }
}

getOrderDetails();

