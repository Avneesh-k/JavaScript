const PromiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is completed')
    },1000)
    resolve()
})
PromiseOne.then(()=>{
    console.log("Done")
})



const PromiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Avneesh Kumar",Email:"Ak@gmail.com"})
    },1000)
})

PromiseTwo.then(function(user){
    console.log(user)
})

const PromiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"Avneesh Kumar",password:"1234"})
        } else{
            reject("Error:Something went wrong")
        }
    },1000)
})

PromiseFour.then(function(user){
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Finally Executed")
})


const PromiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Monty",city:"kannauj"})
        }else{
            reject("Error : some error is occured")
        }
    },1000)
})
async function handlePromise(){
    try{
        const response = await PromiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

handlePromise()

async function getallusers() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=5")
            const data = await response.json()
            console.log(data) 
        } catch (error) {
            console.log(error)
        }
}
getallusers()

fetch("https://randomuser.me/api/?results=5")
.then((reponse)=>{
    return reponse.json()
})
.then((data)=>{
      console.log(data)
})
.catch((error)=>{
    console.log(error)
})