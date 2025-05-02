function createApiRequest(baseURL) {
    return function (authToken) {
        return function (endpoint, method = "GET", body = null) {
            return fetch(`${baseURL}${endpoint}`, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${authToken}`
                },
                body: body ? JSON.stringify(body) : null
            }).then(response => response.json());
        };
    };
}

// Create a base API instance for our e-commerce service
const api = createApiRequest("https://api.amazon.com");

// Create a specific instance for an authenticated user
const userApi = api("user-secret-token");

// Make API requests easily without repeating baseURL and authToken
userApi("/products", "GET").then(console.log);  // Fetch products
userApi("/cart", "POST", { productId: 123, quantity: 2 }).then(console.log);  // Add to cart
userApi("/order", "POST", { orderId: "XYZ" }).then(console.log);  // Place order
