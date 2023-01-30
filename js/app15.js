/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let list = document.getElementById("navbar__list");
let sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const fragment = document.createDocumentFragment();
function myNewNavbar(){
   for(const sec of sections){
       const listItem = document.createElement("li");
        listItem.innerHTML = `<a href="#${sec.id}" class="menu__link">${sec.dataset.nav}</a>`;
      listItem.addEventListener("click", evt =>{
            evt.preventDefault();
            sec.scrollIntoView({behavior: "smooth"});
        })
         fragment.appendChild(listItem)
    }
   list.appendChild(fragment);
}
myNewNavbar()

// Build menu

//scroll to section on link click
window.addEventListener("scroll", navLight);
//scroll to section on link click
const links = document.querySelectorAll("a.menu__link");
function navLight() {
  //loop over section
  sections.forEach(section => {
    //using getBoundingClientRect Return the size of an element and its position relative to the viewport
    const sectionTop = section.getBoundingClientRect().top;
    //Selection of items by dataset
    const sectionTitle = section.getAttribute("data-nav");
    // if begin
    if (sectionTop > 0 && sectionTop < 250) {
      // add active class link
      section.classList.add("your-active-class");
      //loop over links
      links.forEach(link => {
        if (link.textContent === sectionTitle) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      })
    }else{
      section.classList.remove("your-active-class");
    }
  })
}
    
// Scroll to anchor ID using scrollTO event
//let menuSection = document.querySelectorAll('menu li');

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build  mini menu using  small list icon
function miniNavBar() {
  const nav = document.getElementById("navbar__list");
  if (nav.className === "nav-top") {
    nav.className += " show_list";
  } else {
    nav.className = "nav-top";
  }
}
// Scroll to section on link click

// Set sections as active
