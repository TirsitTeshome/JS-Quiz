// First- Question

//PseudoCode
// Input
//  orderId (string)
//  items (array of objects: {name, quantity, price})
//  status (string)

// Process
// 1. First  Calculate the total amount by summing (quantity * price) for each item
// 2. Then Simulate payment with a 2-second delay which is 2000 milliseconds
// 3. Finally after payment, set the payment status to "paid" and print the result(payment success)

// Output
// Total order amount
// Status updated to "paid" and success message printed

class customerOrder {
    constructor(orderId, items, status) {
        this.orderId = orderId
        this.items = items
        this.status = status
    }
   calculateTotal(){
        let sum=0;
        for(let item of this.items){
        sum += item.quantity * item.price
        }
        return sum
    }

    async processPayment() {
        console.log(`payment process for ${this.orderId}`)
        await new Promise(resolve => setTimeout(resolve, 2000))
        this.status = 'paid'
        console.log(`Successful payment order ${this.orderId} in ${this.status} status`)
    }
}

let order = new customerOrder('OR9', [{ name: 'laptop', quantity: 5, price: 200000 },
{ name: "Phone", quantity: 2, price: 60000 },
{ name: "tablet", quantity: 4, price: 100000 }
])

console.log('Total amount is', order.calculateTotal());
order.processPayment();


//Second-Question
//// Create a class called TeamMember that has properties name,role and list of tasks
// Create a function prototype called completeTask that takes taskTitle
// Check if the task exist in the given array
// If the task exists we assign completed status to true
// then we check if every task in the tasks arrray is complete
// if completed,resolve with "all tasks are completed"
// if not reject with "Some tasks remaining"

class TeamMember {
    constructor(name, role, tasks) {
      this.name = name;
      this.role = role;
      this.tasks = tasks;
    }
  }
  TeamMember.prototype.completeTask = function(taskTitle) {
    const task = this.tasks.find(item => item.title === taskTitle);
    if (task) task.completed = true;
  };
  TeamMember.prototype.checkProgress = function() {
    return new Promise((resolve, reject) => {
      const done = this.tasks.every(i => i.completed);
      if (done) {
        resolve("All tasks are completed!");
      } else {
        reject("Some tasks remaining");
      }
    });
  };
  const member = new TeamMember("Tirsit", "Designer", [
    { title: "python", completed: true },
    { title: "Research", completed: true }
  ]);
  member.completeTask("Setup project");
  member.checkProgress()
    .then(message => console.log(message))
    .catch(message => console.log(message));



//Third Question
//Algorithm
// Create a class called candidate that has a name and position property
// Initialize empty array
// Create a function called scheduleInterview that takes in date
// we Push the interview object to interview list with status and date
// Then resolve Confirmation with 1 second or 1000 milliseconds delay

class Candidate {
    constructor(name, position, interviews = []) {
        this.name = name
        this.position = position
        this.interviews = interviews
    }
    scheduleInterview(date) {
        this.interviews.push({ date, status: "pending" })
    }

    async sendConfirmation() {
        return new Promise((resolve) => {
            setTimeout(() => {
                let message = `Interview confirmed with ${this.name}`
                console.log(message)
                resolve(message)
            }, 1000)
        })
    }
}

let candidate = new Candidate('Tirsit', 'Designer')
candidate.scheduleInterview('2025-05-26')
candidate.sendConfirmation()


//Fourth-Question

/// Create a class named Course
// It has properties of title (string),instructor (string),students (array of objects: { name, progress })
// Create a function called updateProgress that takes studentName and value
//Check if the student exists in the list by finding with their names
// we set their progress to the given value.
// Create async function called generateCertificate that takes in student name
// Find the student by name.
// If their progress is 100, resolve the Promise with a certificate message.
// If not reject with "Incomplete"

class Course {
    constructor(title, instructor, students) {
        this.title = title
        this.instructor = instructor
        this.students = students
    }

    updateProgress(studentName, value) {
        let student= this.students.find(stud=> stud.name === studentName)
        if (student) {
            student.progress = value
        }
        else {
            throw new Error(`Student ${studentName} doesn't exist`)
        }
    }

    async generateCertificate(studentName) {
        let student=this.students.find(stud=>stud.name == studentName)
        if (!student) {
            throw new Error(`Student ${studentName} doesn't exist`)
        }
        return new Promise((resolve,reject)=>{
            if (student.progress==100){
                resolve(`Certificate for ${studentName}`)
            }
            else{
                reject('Incomplete')
            }
        })
    }
}

let course = new Course ('Python', 'James', [{name: 'Tirsit', progress:100},
    {name: "Hellen", progress:98}
])

course.updateProgress("Tirsit", 100)

course.generateCertificate("Tirsit")
.then(text=>console.log(text))
.catch(message=> console.log(message))


//Question-5 
//Pseudocode
        // Create class called StockTracker with properties of watchlist which is array of symbol, threshold, currentPrice and has a method of updatePrice(symbol, newPrice)
        // We find the stock by symbol in the watchlist
        // We update its currentPrice to newPrice.
        // We create Async function called checkAlerts
        // we Loop through the watchlist
        // then collect stocks where currentPrice is greater than the threshold
        // If we find any, resolve with their list
        // If we didn't find then reject with "No triggered alerts"


class StockTracker{
    constructor(watchList=[]){
        this.watchList= watchList
    }

    updatePrice(symbol, newPrice){
        let stock=this.watchList.find(item=> item.symbol==symbol);
        if (stock){
            stock.currentPrice= newPrice;
        }
    }

    async checkAlerts(){
        return new Promise((resolve,reject)=>{
            const triggered= this.watchList.filter(stock=> stock.currentPrice>= stock.threshold)

            if (triggered.length>0){
                resolve(triggered);
            }
            else{
                reject("No triggered alerts")
            }
        })
    }
}

let tracker= new StockTracker([{symbol: "AA", threshold: 100, currentPrice: 145},
    {symbol:"BB", threshold:150, currentPrice:2000}
])

tracker.updatePrice("AA", 200);
tracker.checkAlerts()
    .then(alerts => console.log(alerts))
    .catch(message => console.log(message));