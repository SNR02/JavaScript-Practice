let data = {
	a: {
		a: 'a',
		b: 1,
	},
	b: {
		b: 1,
	},
	c: {
		c: {
			e: 'e',
			b: {
				c: 'c',
				a: 1
			}
		}
	},
	d: 1,
}

// This was my solution
let sum = 0
const calSum = (obj) => {
    for(let i in obj){
        if(typeof obj[i] === "object"){
            calSum(obj[i]);
        }
        else if(typeof obj[i] === "number"){
            sum+=obj[i]
        }
    }
    return sum;
}

console.log(calSum(data));