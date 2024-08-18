// Project 1
const descriptionBtn1 = document.getElementById("descriptionBtn1");
const detailsBtn1 = document.getElementById("detailsBtn1");
const linksBtn1 = document.getElementById("linksBtn1");
const tabContent1 = document.getElementById("tabContent1");

const contents1 = {
  description: `
    <p>Aug 2024 - Aug 2024</p>  
    <p>
    This image gallery is a showcase of stunning visuals, 
    carefully curated to inspire and captivate. Whether you're 
    a designer, photographer, or simply an art lover, you'll find 
    a collection of high-quality images ready for download. Explore 
    the beauty of the world through our lens and elevate your projects 
    with breathtaking visuals. Dive into a world of color, composition
    , and creativity.
    </p>
    `,

  details: `
    <p>
    Our image gallery is built with a focus on aesthetics and 
    functionality, ensuring a seamless experience for every v
    isitor. Each image is available in high resolution and can 
    be easily downloaded for personal or commercial use. The 
    gallery is powered by modern web technologies, including 
    HTML, CSS, and JavaScript, to create a responsive and 
    visually appealing layout. Discover the story behind each 
    image and the techniques used to capture them.
    </p>
    `,

  links: `
    <p>
        Explore more about this project and access the source 
        code on GitHub. Whether you're interested in the technical 
        aspects of how this gallery was built or want to contribute 
        to its development, our GitHub repository is the place 
        to be. Click the link below to visit the GitHub page and 
        delve into the code that brings this beautiful gallery to 
        life. Your feedback and contributions are always welcome!
    </p>
    <p><a href="https://github.com/JagdishJR7/CodeAlpha_Image_Gallery" target="_blank" class="text-indigo-500 underline">Visit the GitHub Repository</a></p>
    <p><a href="https://www.loom.com/share/43008b705c194197a4a32a3c929892d7?sid=a6fc0a32-7608-40ac-98ed-fedf39fc7195" target="_blank" class="text-indigo-500 underline">Watch Demo Video</a></p>
`,
};

function handleTabClick1(clickedBtn, tabName) {
  descriptionBtn1.classList.remove("text-indigo-500", "border-indigo-500");
  detailsBtn1.classList.remove("text-indigo-500", "border-indigo-500");
  linksBtn1.classList.remove("text-indigo-500", "border-indigo-500");
  descriptionBtn1.classList.add("text-gray-900", "border-gray-300");
  detailsBtn1.classList.add("text-gray-900", "border-gray-300");
  linksBtn1.classList.add("text-gray-900", "border-gray-300");
  clickedBtn.classList.remove("text-gray-900", "border-gray-300");
  clickedBtn.classList.add("text-indigo-500", "border-indigo-500");
  tabContent1.innerHTML = contents1[tabName];
}

descriptionBtn1.addEventListener("click", () =>
  handleTabClick1(descriptionBtn1, "description")
);
detailsBtn1.addEventListener("click", () =>
  handleTabClick1(detailsBtn1, "details")
);
linksBtn1.addEventListener("click", () => handleTabClick1(linksBtn1, "links"));

// Repeat for Project 2 with unique IDs
const descriptionBtn2 = document.getElementById("descriptionBtn2");
const detailsBtn2 = document.getElementById("detailsBtn2");
const linksBtn2 = document.getElementById("linksBtn2");
const tabContent2 = document.getElementById("tabContent2");

const contents2 = {
  description: `
    <p>MAR 2024 - MAR 2024</p>  
      <p>
      This image gallery is a showcase of stunning visuals
      , carefully curated to inspire and captivate. Whether
       you're a designer, photographer, or simply an art
      lover, you'll find a collection of high-quality 
        images ready for download. Explore the beauty of 
        the world through our lens and elevate your projects
         with breathtaking visuals. Dive into a world of 
         color, composition, and creativity.
      Our image gallery is built with a focus on 
      aesthetics and functionality, ensuring a seamless 
      experience for every visitor. The 
      gallery is powered by modern web technologies, 
      including HTML, CSS, and JavaScript, to create a 
      responsive and visually appealing layout. Discover
      the story behind each image and the techniques 
      used to capture them.


      </p>
      `,

  details: `
      <p>
      This book store website was developed with a focus 
      on clean design and user experience. Using HTML, 
      CSS, and JavaScript, the site features a well-structured
      layout that makes browsing and purchasing books 
      easy and intuitive. Key challenges included implementing 
      responsive design and optimizing load times, both 
      of which were addressed with modern web development 
      practices. The project was completed within a one-
      month timeframe, demonstrating core web development 
      skills.
      </p>
      `,

  links: `
      <p>
       Explore more about this project and access the 
       source code on GitHub. Whether you're interested 
       in the technical details or want to contribute to 
       the development, visit the GitHub repository to 
       delve into the code behind this project. Your feedback 
       and contributions are welcome!

      </p>
      <p><a href="https://github.com/JagdishJR7/Book-Store-WebApp" target="_blank" class="text-indigo-500 underline">Visit the GitHub Repository</a></p>
      <p><a href="https://www.loom.com/share/43008b705c194197a4a32a3c929892d7?sid=a6fc0a32-7608-40ac-98ed-fedf39fc7195" target="_blank" class="text-indigo-500 underline">Watch Demo Video</a></p>
  `,
};

function handleTabClick2(clickedBtn, tabName) {
  descriptionBtn2.classList.remove("text-indigo-500", "border-indigo-500");
  detailsBtn2.classList.remove("text-indigo-500", "border-indigo-500");
  linksBtn2.classList.remove("text-indigo-500", "border-indigo-500");
  descriptionBtn2.classList.add("text-gray-900", "border-gray-300");
  detailsBtn2.classList.add("text-gray-900", "border-gray-300");
  linksBtn2.classList.add("text-gray-900", "border-gray-300");
  clickedBtn.classList.remove("text-gray-900", "border-gray-300");
  clickedBtn.classList.add("text-indigo-500", "border-indigo-500");
  tabContent2.innerHTML = contents2[tabName];
}

descriptionBtn2.addEventListener("click", () =>
  handleTabClick2(descriptionBtn2, "description")
);
detailsBtn2.addEventListener("click", () =>
  handleTabClick2(detailsBtn2, "details")
);
linksBtn2.addEventListener("click", () => handleTabClick2(linksBtn2, "links"));

// Script for Project page 3
const descriptionBtn3 = document.getElementById("descriptionBtn3");
const detailsBtn3 = document.getElementById("detailsBtn3");
const linksBtn3 = document.getElementById("linksBtn3");
const tabContent3 = document.getElementById("tabContent3");

const contents3 = {
  description: `
      <p>Aug 2024 - Aug 2024</p>  
      <p>
      This project involves the development of a clone 
      of the W3 Schools website, crafted using HTML and 
      CSS. The aim was to replicate the design and functionality 
      of this popular educational site, demonstrating my 
      proficiency in front-end web development. This clone 
      showcases a well-structured layout and a clean, 
      responsive design, reflecting the essence of W3 
      Schools while providing a hands-on experience in 
      web development techniques.
      </p>
      `,

  details: `
      <p>
        The W3 Schools website clone was developed with a strong focus on accurately replicating the design and functionality of the original site. Utilizing HTML and CSS, the project emphasizes creating a responsive and visually appealing layout. Key features include:
      </p>
      <p>
        Reproducing the original site’s layout and 
        design elements.
      </p>
      <p>
        Ensuring a responsive design that adapts 
        to various screen sizes.
      </p>
      <p>
        Implementing CSS techniques to mirror the 
        original site's styling and visual appeal.
      </p>
      <p>
        This project served as an exercise in mastering front-end development skills and understanding web design principles.
      </p>

      `,

  links: `
      <p>
        Explore the details of this project and view the source code on GitHub. This repository contains the complete HTML and CSS files used to replicate the W3 Schools website. Click the links below to visit the GitHub page and explore the project further.
      </p>
      <p><a href="https://github.com/JagdishJR7/W3-Website-clone" target="_blank" class="text-indigo-500 underline">Visit the GitHub Repository</a></p>
      <p><a href="https://www.loom.com/share/example" target="_blank" class="text-indigo-500 underline">Watch Demo Video</a></p>

  `,
};

function handleTabClick3(clickedBtn, tabName) {
  descriptionBtn3.classList.remove("text-indigo-500", "border-indigo-500");
  detailsBtn3.classList.remove("text-indigo-500", "border-indigo-500");
  linksBtn3.classList.remove("text-indigo-500", "border-indigo-500");
  descriptionBtn3.classList.add("text-gray-900", "border-gray-300");
  detailsBtn3.classList.add("text-gray-900", "border-gray-300");
  linksBtn3.classList.add("text-gray-900", "border-gray-300");
  clickedBtn.classList.remove("text-gray-900", "border-gray-300");
  clickedBtn.classList.add("text-indigo-500", "border-indigo-500");
  tabContent3.innerHTML = contents3[tabName];
}

descriptionBtn3.addEventListener("click", () =>
  handleTabClick3(descriptionBtn3, "description")
);
detailsBtn3.addEventListener("click", () =>
  handleTabClick3(detailsBtn3, "details")
);
linksBtn3.addEventListener("click", () => handleTabClick3(linksBtn3, "links"));

// script for project page 4
const descriptionBtn4 = document.getElementById("descriptionBtn4");
const detailsBtn4 = document.getElementById("detailsBtn4");
const linksBtn4 = document.getElementById("linksBtn4");
const tabContent4 = document.getElementById("tabContent4");

const contents4 = {
  description: `
      <p>APR 2023 - APR 2023</p>  
      <p>
        This project involves developing an interactive data visualization platform for a Disaster Management System, created in collaboration with a team during the Devfolio Hackathon. The website utilizes HTML, CSS, and JavaScript for front-end development, while incorporating Python for data visualization. The platform aims to provide an intuitive and informative user experience, showcasing real-time data and insights to support disaster management efforts.
      </p>
      `,

  details: `
      <p>
      The Disaster Management System Documentation Website is designed to deliver an engaging and informative experience through advanced data visualization. Key aspects of the project include:
      </p>

      <p>
        Interactive data visualization using Python to present critical 
        disaster-related information.
      </p>
      <p>
        Front-end development with HTML, CSS, and JavaScript to 
        create a user-friendly and visually appealing interface.
      </p>
      <p>
        Integration of real-time data to provide actionable insights 
        for disaster management.
      </p>

      <p>
        This project demonstrates our team's ability to blend front-end development with sophisticated data visualization techniques, addressing the needs of disaster management and response.
      </p>

      `,

  links: `
     <p>
      Explore more about this project and access the source code on GitHub. The repository includes the complete HTML, CSS, JavaScript files, and Python scripts used for data visualization. Click the links below to visit the GitHub page and see the project in action.
    </p>
    <p><a href="https://github.com/JagdishJR7/Disaster-Management-HASHHACK5.0" target="_blank" class="text-indigo-500 underline">Visit the GitHub Repository</a></p>
    <p><a href="https://www.loom.com/share/example" target="_blank" class="text-indigo-500 underline">Watch Demo Video</a></p>

  `,
};

function handleTabClick4(clickedBtn, tabName) {
  descriptionBtn4.classList.remove("text-indigo-500", "border-indigo-500");
  detailsBtn4.classList.remove("text-indigo-500", "border-indigo-500");
  linksBtn4.classList.remove("text-indigo-500", "border-indigo-500");
  descriptionBtn4.classList.add("text-gray-900", "border-gray-300");
  detailsBtn4.classList.add("text-gray-900", "border-gray-300");
  linksBtn4.classList.add("text-gray-900", "border-gray-300");
  clickedBtn.classList.remove("text-gray-900", "border-gray-300");
  clickedBtn.classList.add("text-indigo-500", "border-indigo-500");
  tabContent4.innerHTML = contents4[tabName];
}

descriptionBtn4.addEventListener("click", () =>
  handleTabClick4(descriptionBtn4, "description")
);
detailsBtn4.addEventListener("click", () =>
  handleTabClick4(detailsBtn4, "details")
);
linksBtn4.addEventListener("click", () => handleTabClick4(linksBtn4, "links"));
