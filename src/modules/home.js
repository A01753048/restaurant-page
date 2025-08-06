export default function home() {
    let content = document.getElementById("content");

    document.body.style.background = `url("assets/mama-mia-logo.jpeg") var(--secondary-color) no-repeat top center;`;

    let logoContainer = document.createElement("div");
    logoContainer.id = "logo-container";
    let logo = document.createElement("h1");
    logo.id = "logo";
    logo.textContent = "Mama Mía";
    let slogan = document.createElement("p");
    slogan.textContent = "Il amore di los amadorinis di la pastini"
    logoContainer.appendChild(logo);
    logoContainer.appendChild(slogan);

    content.appendChild(logoContainer);

    let description1 = document.createElement("p");
    description1.classList.add("description");
    description1.innerHTML = `Servimos una inigualable experiencia culinaria con nuestra selección de pastas preparadas con ingredientes traidos desde Italia. <br><br>
    Junto con nuestra coctelería y nuestro Martini insignia, somos una inigualable elección para esas noches de finas cenas con tu amori.`;

    let description2 = document.createElement("p");
    description2.classList.add("description");
    description2.textContent = "Excelencia en pastas desde 1904";

    content.appendChild(description1);
    content.appendChild(description2);

    let locationContainer = document.createElement("div");
    locationContainer.id = "location-container";
    let locationText = document.createElement("p");
    locationText.id = "location-text";
    locationText.textContent = "Ubicados a solo 0 minutos de CDMX\n"
    let location = document.createElement("div");
    let locationIframe = document.createElement("iframe");
    locationIframe.src = "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d903.9158832725518!2d-99.16761000000005!3d19.427880000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI1JzQwLjQiTiA5OcKwMTAnMDMuNCJX!5e1!3m2!1sen!2suk!4v1754354723233!5m2!1sen!2suk";
    locationIframe.style.border = "0";
    locationIframe.loading = "lazy";
    location.appendChild(locationIframe);

    locationContainer.appendChild(locationText);
    locationContainer.appendChild(location);

    content.appendChild(locationContainer);

    let footer = document.createElement("footer");
    footer.textContent = "Copyright © Alex super papu pro";

    content.appendChild(footer);
}