let names = []

window.onload = () => {
    fetchUsers()
}

async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        // wait until the request completes
        console.log(data)
    } catch {
        console.log(err)
    }
}



function search(query) {
    async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        // wait until the request completes
        console.log(data)
         if (query.length < 3) {
        filteredNames = names;
        filteredNames();
        return;
    }
     filteredNames = users.filter((user) => {
        user.name.toLowerCase().includes(query, toLowerCase())
    });
    } catch {
        console.log(err)
    }
}
    
    
    
}
