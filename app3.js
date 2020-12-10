// built from fetch with async await

const http = new EasyHTTP;

// GET User
// http.get('https://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));

    const data = {
        name: 'John Doe',
        username: 'johndoe',
        email: 'johnd@gmail.com'
    }

// Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


    // Update user
    // http.put('https://jsonplaceholder.typicode.com/users/2', data)
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));