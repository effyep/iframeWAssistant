const {response} = require('express');

const getUsers = (req, res = response) => {
    
    res.json({
        msg: "Get desde controlador"
    });
}

const postUsers = (req, res = response) => {

    const body = req.body;

    const headers = Object.keys(body[0])

    const content = []

    body.forEach(element => {

        const values = Object.values(element)
        content.push(values)
        
    });

    
    console.log(headers,content)

    res.render('../views/table.ejs',{body,headers, content})
}


module.exports = { getUsers, postUsers }