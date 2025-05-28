const navtab = document.getElementById("nav-tab");

navtab.addEventListener('click', tabclick);

function tabclick(event) {
    //Get all The active Tabs
    const activeTabs = document.querySelectorAll('.active');
    
    activeTabs.forEach((tab)=>{
        tab.classList.remove('active');
    });

    const pages=document.querySelectorAll('.page');

    pages.forEach((page) => {
        page.classList.remove('page-active');
    });

    //event.target.parentElement.classList.add('active');
    event.target.parentElement.className+='active';

    
    let id=event.target.href.split("#")[1];
    const page=document.getElementById(id);
    page.classList.add('page-active');
}



// it is not recomdend by joes
// function tabclick(event) {
//     if (event.target.classList.contains('active')) {
//         return;
//     }
//     const tab = event.target.dataset.tab;
//     const tabcontent = document.getElementById(tab);
//     navtab.classList.remove('active');
//     event.target.classList.add('active');
//     tabcontent.classList.add('active');

//     if (tabcontent.classList.contains('show')) {
//         tabcontent.classList.remove('show');
//     }
//     else {
//         tabcontent.classList.add('show');
//     }
//     event.preventDefault();
//     return false;
    
// }