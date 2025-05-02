// call()

const person1 = {
    name: "John",
    introduce(age) {
        console.log(`Hello, my name is ${this.name} and I am ${age} years old.`);
    }
};

const person2 = { name: "Emily" };

// Borrow introduce() method using .call()
person1.introduce.call(person2, 25);  
// Output: Hello, my name is Emily and I am 25 years old.

/** 
 * Normally, introduce() would use this.name from person1.
 * But .call(person2, 25) makes this refer to person2, so "Emily" is used instead.
*/



// apply()

const numbers = [3, 5, 9, 1, 4];

// Without apply()
console.log(Math.max(3, 5, 9, 1, 4)); // ✅ Works
console.log(Math.max(numbers)); // ❌ NaN, because Math.max() expects separate values

// Using apply()
console.log(Math.max.apply(null, numbers)); // ✅ 9

/**
 * .apply() passes numbers as an array, avoiding the need to manually spread them.
 * The first argument (null) is this (not needed in this case).
*/



// bind()

const user = {
    name: "Alice",
    greet() {
        console.log("Hello, " + this.name);
    }
};

// ❌ Without bind() – `this` becomes undefined
setTimeout(user.greet, 1000); // Output: Hello, undefined

// ✅ Using bind() – Locks `this` to `user`
setTimeout(user.greet.bind(user), 1000); // Output: Hello, Alice

/**
 * Without .bind(), this would refer to the global object (window), not user.
 * .bind(user) creates a new function where this is always user.
*/