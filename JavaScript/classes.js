/*Menu Toggle*/

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("mobileNav");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");
    overlay.classList.toggle("active");

});

overlay.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
});

const navLinks = document.querySelectorAll('#mobileNav a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

/*Class Data*/

const classes=[

    

    {
        day:"Mon",
        time:"O6:00",
        class:"Strength",
        trainer:"Mike Carter",
        price:"£6.50"
    },

    {
        day:"Mon",
        time:"18:00",
        class:"HIIT",
        trainer:"Sarah Lee",
        price:"£7.00"
    },

    {
        day:"Tue",
        time:"09:00",
        class:"Mobility",
        trainer:"Chris Hall",
        price:"£7.00"
    },

    {
        day:"Wed",
        time:"09:00",
        class:"Yoga",
        trainer:"Emma Davis",
        price:"£10.00"

    },

    {
        day:"Wed",
        time:"17:30",
        class:"Strength",
        trainer:"Mike Carter",
        price:"£6.50"

    },

    {
        day:"Thu",
        time:"18.00",
        class:"Mobility",
        trainer:"Chris Hall",
        price:"£7.00"
    },

    {
        day:"Fri",
        time:"07:00",
        class:"HIIT",
        trainer:"Sarah Lee",
        price:"£7.00"
    },

    {
        day:"Sat",
        time:"10:00",
        class:"Yoga",
        trainer:"Emma Davis",
        price:"£10.00"
    }
];

/*DOM ELEMENTS*/

const timetableBody=
document.getElementById("timetableBody");

const classSelect=
document.getElementById("classSelect");

const dayButtons=
document.querySelectorAll(".day-btn");

const filterMessage=
document.getElementById("filterMessage");

let selectedClass="all";
let selectedDay="All";

/*Render Table*/

function renderTable(){

    timetableBody.innerHTML="";

    const filtered=classes.filter(item=> {

        const classMatch=
            selectedClass==="all" ||
            item.class=== selectedClass;

        const dayMatch=
            selectedDay==="All" ||
            item.day===selectedDay;

        return classMatch&&dayMatch;

    });

    if(selectedDay=== "all"){

        filterMessage.textContent=
            selectedClass==="all"
            ?"Showing all classes."
            :`showing all ${selectedClass}classes.`;

    }

    else{

        filterMessage.textContent=
            selectedClass==="all"
            ?`Showing all classes on ${selectedDay}.`
            :`Showing ${selectedClass} classes on ${selectedDay}.`;

    }

    filtered.forEach(item=>{

        timetableBody.innerHTML+=`
        <tr>

            <td>${item.day}</td>
            <td>${item.time}</td>
            <td>${item.class}</td>
            <td>${item.trainer}</td>
            <td>${item.price}</td>

            <td>
                <button class="book-btn">
                    Book Now
                </button>
            </td>

        </tr>
        
        `;

    });

}
    
/*Class filter*/

classSelect.addEventListener("change",()=>{

    selectedClass=classSelect.value; 
    renderTable();

});

/*Day Filter*/

dayButtons.forEach(button=>{

    button.addEventListener("click", () => {

        dayButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");
        selectedDay=button.dataset.day;
        renderTable();
    });

});

/*Initial Load*/

renderTable();

/*Booking Form*/

timetableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("book-btn")) {
        document.getElementById("bookingForm").scrollIntoView({ behavior: "smooth" });
    }
});

const bookingForm = document.getElementById("BookingFormElement");
const bookingSuccess = document.getElementById("bookingSuccess");

bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();
    bookingSuccess.style.display = "block";
    bookingForm.reset();
});

/*cookie*/

const banner = document.getElementById("cookieBanner");
const acceptBtn = document.getElementById("acceptCookies");

if (localStorage.getItem("cookieConsent") === "accepted") {
    banner.style.display = "none";
}

acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
});