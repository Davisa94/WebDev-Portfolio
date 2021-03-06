// A list of links for the homepage
const projects = [
    {
        label: "Week 01 Notes",
        url: "src/pages/week01.html"
    },
    {
        label: "Week 02 Notes",
        url: "src/pages/week02.html"
    },
    {
        label: "Week 03 Notes",
        url: "src/pages/week03.html"
    },
    {
        label: "Week 04 Notes",
        url: "src/pages/week04.html"
    },
    {
        label: "Week 05 Notes",
        url: "src/pages/week05.html"
    },
    {
        label: "Todo List Project",
        url: "src/todoProject/todo.html"
    }
]
function generateList() {
    const projectList = document.querySelector("#projects");
    var arrayLength = projects.length;
    for (var i = 0; i < arrayLength; i++) {
        var projectName = projects[i].label;
        var projectLink = projects[i].url; 
        projectList.appendChild(generateListItem(projectName, projectLink))
    }
}
function generateListItem(projectName, projectLink) {
    //generate a list item with the given name
    let project = document.createElement("li");
    let projectHref = document.createElement("a");
    //set class for style
    projectHref.className = "button";
    projectHref.textContent = projectName;
    projectHref.setAttribute('href', projectLink);
    project.appendChild(projectHref);

    return project;
}