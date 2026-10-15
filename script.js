function generateResume(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let linkedin = document.getElementById("linkedin").value;
    let github = document.getElementById("github").value;
    let phone = document.getElementById("phone").value;
    let education = document.getElementById("education").value;
    let skills = document.getElementById("skills").value;
    let certifications = document.getElementById("certifications").value;
    let projects = document.getElementById("projects").value;
    let template = document.getElementById("template").value;

    let resume = document.getElementById("resume");

    resume.className = "resume-box " + template;

    document.getElementById("rname").innerText = name;
    document.getElementById("remail").innerText = email;
    document.getElementById("rphone").innerText = phone;
    document.getElementById("reducation").innerText = education;
    document.getElementById("rskills").innerText = skills;
    document.getElementById("rcertifications").innerText = certifications;
    document.getElementById("rprojects").innerText = projects;

    document.getElementById("rlinkedin").href = linkedin;
    document.getElementById("rlinkedin").innerText = linkedin;

    document.getElementById("rgithub").href = github;
    document.getElementById("rgithub").innerText = github;

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("linkedin", linkedin);
    localStorage.setItem("github", github);
    localStorage.setItem("phone", phone);
    localStorage.setItem("education", education);
    localStorage.setItem("skills", skills);
    localStorage.setItem("certifications", certifications);
    localStorage.setItem("projects", projects);
}

window.onload = function(){

    document.getElementById("name").value = localStorage.getItem("name") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("linkedin").value = localStorage.getItem("linkedin") || "";
    document.getElementById("github").value = localStorage.getItem("github") || "";
    document.getElementById("phone").value = localStorage.getItem("phone") || "";
    document.getElementById("education").value = localStorage.getItem("education") || "";
    document.getElementById("skills").value = localStorage.getItem("skills") || "";
    document.getElementById("certifications").value = localStorage.getItem("certifications") || "";
    document.getElementById("projects").value = localStorage.getItem("projects") || "";

    let savedPhoto = localStorage.getItem("profilePhoto");

    if(savedPhoto){
        document.getElementById("rphoto").src = savedPhoto;
    }

    generateResume();
};

document.addEventListener("DOMContentLoaded", function(){

    let photoInput = document.getElementById("photo");

    photoInput.addEventListener("change", function(event){

        let file = event.target.files[0];

        if(file){

            let reader = new FileReader();

            reader.onload = function(e){

                document.getElementById("rphoto").src =
                e.target.result;

                localStorage.setItem(
                    "profilePhoto",
                    e.target.result
                );
            };

            reader.readAsDataURL(file);
        }
    });
});

function downloadPDF(){

    let resume =
    document.getElementById("resume");

    html2pdf()
    .from(resume)
    .save("Resume.pdf");
} 