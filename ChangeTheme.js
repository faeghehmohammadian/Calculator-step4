const themeBtn = document.querySelector(".menu");
let themeCounter = 0;
let themeStylesheet = document.getElementById("theme-stylesheet");
changeTheme();
export function changeTheme() {
    switch (themeCounter) {
        //black ⇩
        case 0:
            themeStylesheet.href = "../scss/themes/maintheme.css"
            break;
        //white ⇩
        case 1:
            themeStylesheet.href = "../scss/themes/greentheme.css"
            break;
        case 2:
            themeStylesheet.href = "../scss/themes/bluetheme.css"
            break;
        case 3:
            themeStylesheet.href = "../scss/themes/mytheme.css"
            break;
    }
}
themeBtn.addEventListener("click", function () {
    if (themeCounter > 2) {
        themeCounter = 0;
        localStorage.setItem("localTheme", 0);
    } else themeCounter++;
    changeTheme();
});