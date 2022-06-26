function generatePage(manager,empArray){

    let cardSection =generateCard(manager);
empArray.forEach(element => {
    cardSection=cardSection+generateCard(element);
});


    return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML 5 Boilerplate</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>
        <header>
            <h1 class="text-center">My Team</h1>
        </header>
        <div class="row col 12, justify-content-around">
            ${cardSection}
        </div>
        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </body>
    </html>`
    
}

function generateCard(employee){
    if(employee.getRole()=='Manager'){
        return`
        <div class="card">
        <p>Role:Manager</p>
        <p>Name:${employee.getName()}</p>
        <p>ID:${employee.getId()}</p>
        <p>Email:<a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p>Office Number:${employee.officeNumber}</p>
    </div>
        `
    } else if(employee.getRole()=='Intern'){
        return`
        <div class="card">
        <p>Role:Intern</p>
        <p>Name:${employee.getName()}</p>
        <p>ID:${employee.getId()}</p>
        <p>Email:<a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p>School:${employee.getSchool()}</p>
    </div>
        `
    } else if(employee.getRole()=='Engineer'){
        return`
        <div class="card">
        <p>Role:Engineer</p>
        <p>Name:${employee.getName()}</p>
        <p>ID:${employee.getId()}</p>
        <p>Email:<a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></p>
        <p>GitHub:<a href="https://www.github.com/${employee.getGithub()}"></a>${employee.getGithub()}</p>
    </div>
        `
    }
}

module.exports=generatePage;
