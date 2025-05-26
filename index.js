// First- Question
class customerOrder{
    constructor(orderId, items, status){
        this.orderId=orderId
        this.items= items
        this.status= status
    }
    calculateTotal(){
        return this.items.reduce((total,item)=>{
            return total + item.quantity * item.price
        }, 0)
    }

    async processPayment(){
        console.log(`payment process for ${this.orderId}`)
        await new Promise(resolve=> setTimeout(resolve,2000))
        this.status= 'paid'
        console.log(`Successful payment order ${this.orderId} in ${this.status} status`)
    }
}

let order= new customerOrder('OR9', [{name: 'laptop', quantity: 5, price: 200000},
    {name: "Phone", quantity: 2, price: 60000},
    {name: "tablet", quantity: 4, price: 100000}
 ])

 console.log ('Total amount is', order.calculateTotal());
 order.processPayment();


 //Second-Question
class TeamMember{
    constructor(name, role, tasks){
        this.name=name;
        this.role=role;
        this.tasks=tasks;
    }
 
}
   TeamMember.prototype.completeTask= function(taskTitle){
        let task= this.tasks.find()
    }

//Third Question

class Candidate{
    constructor(name, position, interviews=[]){
        this.name= name
        this.position=position
        this.interviews= interviews
    }
    scheduleInterview(date){
        this.interviews.push({date, status: "pending"})
    }

    async sendConfirmation(){
        return new Promise((resolve)=> {
            setTimeout(()=>{
                let message= `Interview confirmed with ${this.name}`
                console.log(message)
                resolve(message)
            }, 1000)
        })
    }
}

let candidate= new Candidate('Tirsit', 'Designer')
    candidate.scheduleInterview('2025-05-26')
    candidate.sendConfirmation()

