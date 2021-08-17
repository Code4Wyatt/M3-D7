window.onload = () => {
    fetchUsers();
}
    


async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        // wait until the request completes
        console.log(data);
    } catch {
        console.log(err)
    }
}