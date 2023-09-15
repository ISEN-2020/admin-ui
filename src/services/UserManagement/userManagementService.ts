const axios = require('axios')
export async function getAllUsers(){
    try {const response = await fetch('/login')
        return await response.json();
    }catch (error){
        return [];
    }
}

export async function createUser(data: any){

    const response = await fetch('register',{
        method : 'POST',
        headers : {'Content-Type ': 'application/json'},
        body: JSON.stringify({user : data})
    })

    return await  response.json();

}
