const sideMenu = document.querySelector('#sideMenu');
const navBar=document.querySelector("nav")
const navLinks=document.querySelector("nav ul")


function openMenu() {
    sideMenu.style.transform = 'translateX(0)';  // Show the menu
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(100%)';  // Hide the menu
}


window.addEventListener("scroll",()=>{
    if(scrollY >50)
    { 
        navBar.classList.add("bg-white","bg-opacity-50","backdrop-blur-lg",
            "shadow-sm","dark:bg-darkTheme","darkshadow-white/20");
         navLinks.classList.remove("bg-white" ,"shadow-sm","bg-opacity-50",
            "dark:border","dark:border-white/70","dark:bg-trasparent");
         
    }
    else{
        navBar.classList.remove("bg-white","bg-opacity-50","backdrop-blur-lg",
            "shadow-sm","dark:bg-darkTheme","darkshadow-white/20");
         navLinks.classList.add("bg-white" ,"shadow-sm","bg-opacity-50",
            "dark:border","dark:border-white/70","dark:bg-trasparent");
    }
})

// ---light mode and dark mode---
document.documentElement.classList.toggle(
    'dark',
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )



function toggleTheme() {
       document.documentElement.classList.toggle('dark');
       
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

