document.addEventListener("DOMContentLoaded", function () {
    const imageSections = document.querySelectorAll('.image-section');
    
    imageSections.forEach(section => {
        const images = section.querySelectorAll('img');

        images.forEach((img) => {
            img.addEventListener('click', function() {
                const modal = document.getElementById("myModal");
                const modalImg = document.getElementById("img01");
                modal.style.display = "block";
                modalImg.src = img.src;
            });
        });
    });

    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
