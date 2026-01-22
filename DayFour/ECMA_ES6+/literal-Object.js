//? 3- Create constant project anonymouse object after takeing properties names
//? and values from user (using object literals )
//? Note: names are projectId , projectName ,duration and printData which
//? console.log all project data

let project = {
    projectId: prompt("Enter Project ID:"),
    projectName: prompt("Enter Project Name:"),
    duration: prompt("Enter Project Duration"),
    printData : function() { 
        console.log(`Project Details: 1. Project-name: ${this.projectName},\n
            2. Project-Id: ${this.projectId},\n
            3. Project-Duration: ${this.duration}`)
    }
}
project.printData();