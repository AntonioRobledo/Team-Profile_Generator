// Templates for each role
const managerProfile = manager =>

`
<div class="col-12 col-md-6 col-lg-4">
<div class="card mb-4">
    <div class="card-header">
        <h5 class="name">${manager.getName()}</h5>
        <h5 class="d-inline-block">${manager.getRole()}</h5>
    </div>
    <div class="card-body">
        <ul class="list-group list-group">
            <li class="list-group-item">ID: <span class="id">${manager.getId()}</span></li>
            <li class="list-group-item">Email: <a href="${manager.getEmail()}" class="email">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office Number: <span class="officeNumber">${manager.getOfficeNumber()}</span></li>
        </ul>    
    </div>
</div>
</div>
`
const engineerProfile = engineer =>
`
<div class="col-12 col-md-6 col-lg-4">
<div class="card mb-4">
    <div class="card-header">
        <h5 class="name"> ${engineer.getName()}</h5>
        <h5 class="d-inline-block">${engineer.getRole()}</h5>
    </div>
    <div class="card-body">
        <ul class="list-group list-group">
            <li class="list-group-item">ID: <span class="id">${engineer.getId()}</span></li>
            <li class="list-group-item">Email: <a href="${engineer.getEmail()}" class="email">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <span class="github">${engineer.getGithub()}</span></li>
        </ul>
    </div>
</div>
</div>
`
const internProfile = intern => 
`
<div class="col-12 col-md-6 col-lg-4">
<div class="card mb-4">
    <div class="card-header">
        <h5 class="name"> ${intern.getName()}</h5>
        <h5 class="d-inline-block">${intern.getRole()}</h5>
    </div>
    <div class="card-body">
        <ul class="list-group list-group">
            <li class="list-group-item">ID: <span class="id">${intern.getId()}</span></li>
            <li class="list-group-item">Email: <a href="${intern.getEmail()}" class="email">${intern.getEmail()}</a></li>
            <li class="list-group-item">Office Number: <span class="officeNumber">${intern.getSchool()}</span></li>
        </ul>
    </div>
</div>
</div>
`
// Loop will iterate through each object in team array using inquirer 
const cardTemplates = employees => {
    let htmlTemplate = '';

    for(let i=0; i < employees.length; i++) {
        if(employees[i].getRole() === 'Manager') {
            htmlTemplate += managerProfile(employees[i]);
        } 
        else if(employees[i].getRole() === 'Engineer') {
            htmlTemplate += engineerProfile(employees[i]);
        }
        else if(employees[i].getRole() === 'Intern') {
            htmlTemplate += internProfile(employees[i]);
        }
    } return htmlTemplate
}

const generatedHTML = info => 

`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <h1 id="header"class="p-5">My Team</h1>
    <div class="container p-5">
        <div class="row justify-content-center">
        ${cardTemplates(info)}
        </div>
    </div>
</body>
</html>
`

module.exports = generatedHTML;