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




export { deleteUser };