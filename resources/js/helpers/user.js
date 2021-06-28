import axios from 'axios';

const deleteUser = (id, msg,  callback) => {
    if (window.confirm(msg)){
        console.log("siuu" + id)
        axios.delete("api/users/" + id)
        .then( () => {
            console.log("siu");
            alert("User deleted");
            callback();
        })
        .catch(error => {
            alert("An error occured while processing your request");
            console.error(error)
        })
    }
}

const addUser = (state, callback) => {
    var bodyFormData = new FormData();
    bodyFormData.append('name', state.name);
    bodyFormData.append('email', state.email);
    bodyFormData.append('password', state.password);

    axios.post("api/users", bodyFormData, { headers: {
        'Content-Type': 'multipart/form-data'
    }})
    .then(response => {
        callback();
        alert("User created")
    })
    .catch(error => alert("An error occurred"));
}




export { deleteUser, addUser };