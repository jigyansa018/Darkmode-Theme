var icon = document.getElementById("icon");

        icon.onclick = function() {
            document.body.classList.toggle("dark-theme");

            // Toggle icon image
            if (document.body.classList.contains("dark-theme")) {
                icon.src = "./images/light.png";  // moon -> sun
            } else {
                icon.src = "./images/dark.png";   // sun -> moon
            }
        }