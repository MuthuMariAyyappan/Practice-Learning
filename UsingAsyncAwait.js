//see this https://www.freecodecamp.org/news/javascript-async-await/

console.log("start")
const users=[
    {
        id: 1,
        name:"Albert",
        age:34
    },
    {
        id: 2,
        name:"Raja",
        age:54
    },
    {
        id: 3,
        name:"Kala",
        age:23
    }
]
const getUserInfo =(userId) =>{
    return new Promise((resolve,reject) =>{
        if(userId){
            resolve(users?.find((obj) => obj.id === userId))
        }
        else{
            reject("error")
        }
        console.log("INSIDE PROMISE");
    })
}

async function getUser() {
    try {
        const result = await getUserInfo(2);
        console.log("Get User Function", result);
    } catch (error) {
        console.log("Error in getUser:", error);
    }
}
getUser()
console.log("END");