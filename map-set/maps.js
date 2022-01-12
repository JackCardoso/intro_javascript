function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin')
usuarios.set('Ste', 'Admin')
usuarios.set('Mordoro', 'User')
usuarios.set('Capitã Marvel', 'Admin')

console.log(getAdmins(usuarios));