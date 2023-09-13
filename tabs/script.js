function toggleTab(tabIndex) {
    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    tabs[tabIndex].style.display = "block";
  
    // Remove the 'active-tab-button' class from all buttons
    let buttons = document.getElementsByClassName("tab-button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-tab-button");
    }
  
    // Add the 'active-tab-button' class to the clicked button
    buttons[tabIndex].classList.add("active-tab-button");
  }
  
  toggleTab(0);