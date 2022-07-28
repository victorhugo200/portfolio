export default function initRendererProjects() {
    getProjects()
        .then((projects) => {
            const listProjects = sortProjects(projects);
            console.log(listProjects);
            localStorage.setItem('listProjects', JSON.stringify(listProjects));
            rendererProjects(listProjects);
        })
        .catch((error) => console.log({ error }));

}

async function getProjects() {
    try {
        const fetchApi = await fetch('../data/projects.json');
        const projects = await fetchApi.json();
        return projects
    }
    catch (error) {
        console.log(error);
    }
}



function sortProjects(projects) {
    return projects.sort((a, b) => {

        if (a.age < b.age) {
            return 1;
        }

        if (a.age > b.age) {
            return -1;
        }
        return 0;
    })
}


function rendererProjects(projects) {
    const container = document.querySelector('[data-projects]');
    container.innerHTML = ``;
    container.innerHTML = template(projects);
}

function template(projects) {
    return `${projects.map((project, index) => (
        ` <li>
            <a href="${project.link}" target="${project.link !== '#' ? '_blank' : '_parent'}">
                <div class="item item-${index}"  style="background-image: url(${project.img});">
                    <h2>${project.name}</h2>
                    <p>${project.age}</p>
                </div>
            </a> 
    </li>`
    ))}`.split(',').join('');
}


