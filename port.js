document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
  });
});

 document.addEventListener("DOMContentLoaded", function () {
  new Typed("#intro-text", {
    strings: ["Gehan Ali", "Full Stack Developer"],
    typeSpeed: 100,       
    backSpeed: 60,       
    loop: true,          
    backDelay: 1500,    
    startDelay: 500,     
  });
});

gsap.registerPlugin(ScrollTrigger);
if (window.innerWidth > 768) {
  gsap.from(".service-item", {
      scrollTrigger: {
          trigger: ".service-item",
          start: "top 80%",
          toggleActions: "play none none reverse",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3
  });
}
// Button click event for CV download
document.querySelector('.btnn').addEventListener('click', function() {
  window.location.href = 'GehanAli.full.cv.pdf';  
});


$(document).ready(function() {
  const imageWrapper = $(".image-wrapper");

  imageWrapper.on("mouseenter", function() {
      gsap.to($(this), { rotationY: 10, rotationX: 10, duration: 0.4, ease: "power2.out" });
  });

  imageWrapper.on("mouseleave", function() {
      gsap.to($(this), { rotationY: 0, rotationX: 0, duration: 0.4, ease: "power2.out" });
  });
});

// slider
  const projects = [
    {
      number: "01",
      title: {
        en: "E-commerce",
        ar: "التجارة الإلكترونية"
      },
      description1: {
        en: "- Website of E-commerce products with the ability of adding them to cart and real Checkout using Angular Components.",
        ar: "- موقع تجارة إلكترونية للمنتجات مع إمكانية إضافتها إلى السلة وإتمام عملية الشراء باستخدام مكونات Angular."
      },
      description2: {
        en: "using: HTML, bootstrap, Typescript, Angular.",
        ar: "باستخدام: HTML، Bootstrap، Typescript، Angular."
      },
      image: "proj1.png",
      icon1: "https://github.com/GEHANALI/e-Commerce",
      icon2: "https://cartshop-eosin.vercel.app"
    },
    {
      number: "02",
      title: {
        en: "Yummy Website",
        ar: "موقع يمي"
      },
      description1: {
        en: "- using an API of food recipes to show it and its ingredients",
        ar: "- باستخدام واجهة برمجة التطبيقات لعرض وصفات الطعام ومكوناتها"
      },
      description2: {
        en: "using: bootstrap, Javascript, API.",
        ar: "باستخدام: Bootstrap، JavaScript، واجهة برمجة التطبيقات."
      },
      image: "proj2.png",
      icon1: "https://github.com/gehanali/EXAM-YUMMY",
      icon2: "https://gehanali.github.io/EXAM-YUMMY/"
    },
    {
      number: "03",
      title: {
        en: "Weather App",
        ar: "تطبيق الطقس"
      },
      description1: {
        en: "- weather App to check the weather conditions of any city for the following 5 days",
        ar: "- تطبيق الطقس للتحقق من أحوال الطقس لأي مدينة خلال الأيام الخمسة القادمة"
      },
      description2: {
        en: "using: HTML, CSS, bootstrap, Angular, Weather API.",
        ar: "باستخدام: HTML، CSS، Bootstrap، Angular، واجهة برمجة تطبيقات الطقس."
      },
      image: "proj3.png",
      icon1: "https://github.com/Gege-alii/ng_WeatheApp",
      icon2: "https://ng-weather-app.vercel.app/"
    },
    {
      number: "04",
      title: {
        en: "Movie App",
        ar: "تطبيق الأفلام"
      },
      description1: {
        en: "- The Movie App uses the Movie Database (TMDb) API to provide movie details and browsing by categories. It includes a responsive image slider for showcasing movie posters and a modern, engaging UI.",
        ar: "- تطبيق الأفلام يستخدم واجهة برمجة التطبيقات لمكتبة الأفلام (TMDb) لتوفير تفاصيل الأفلام والتصفح حسب الفئات. يتضمن شريط تمرير صور استجابة لعرض ملصقات الأفلام وواجهة مستخدم حديثة وجذابة."
      },
      description2: {
        en: "using: HTML, CSS, bootstrap, Javascript.",
        ar: "باستخدام: HTML، CSS، Bootstrap، JavaScript."
      },
      image: "proj4.png",
      icon1: "https://github.com/Gege-alii/movie_app",
      icon2: "https://gege-alii.github.io/movie_app/"
    },
    {
      number: "05",
      title: {
        en: "E-commerce-NG",
        ar: "التجارة الإلكترونية - NG"
      },
      description1: {
        en: "- This e-commerce project is a simple online store platform that displays products from the Fake Store API. Users can browse a curated selection of items, specifically focused on categories like women's clothing with a complete User registration and login functionality.",
        ar: "- هذا المشروع التجاري هو منصة متجر عبر الإنترنت تعرض المنتجات من واجهة برمجة التطبيقات Fake Store. يمكن للمستخدمين تصفح مجموعة مختارة من العناصر، مع التركيز بشكل خاص على فئات مثل ملابس النساء مع وظيفة تسجيل دخول وتسجيل مستخدم كاملة."
      },
      description2: {
        en: "using: HTML, CSS, bootstrap, Angular.",
        ar: "باستخدام: HTML، CSS، Bootstrap، Angular."
      },
      image: "proj5.png",
      icon1: "https://github.com/Gege-alii/Products_shop",
      icon2: "https://products-shop-zmfj.vercel.app/home"
    },
    {
      number: "06",
      title: {
        en: "E-commerce-php",
        ar: "التجارة الإلكترونية - PHP"
      },
      description1: {
        en: "- This PHP-based e-commerce platform is designed for a clothing store and supports both Arabic and English users. It enables account registration, login, product browsing, cart management, and CRUD operations on user accounts. The bilingual interface enhances accessibility for a diverse audience.",
        ar: "- هذه المنصة التجارية المعتمدة على PHP مصممة لمتجر ملابس وتدعم كل من المستخدمين العرب والإنجليز. يتيح التسجيل في الحساب، تسجيل الدخول، تصفح المنتجات، إدارة السلة، والعمليات CRUD على حسابات المستخدمين. كما تعزز واجهة اللغة المزدوجة الوصول لجمهور متنوع."
      },
      description2: {
        en: "using: HTML, CSS, bootstrap, PHP",
        ar: "باستخدام: HTML، CSS، Bootstrap، PHP"
      },
      image: "proj6.png",
      icon1: "https://github.com/Gege-alii/phpcommerce/tree/master",
      icon2: "https://github.com/Gege-alii/phpcommerce/tree/master"
    },
    {
      number: "07",
      title: {
        en: "Interior Design",
        ar: "تصميم داخلي"
      },
      description1: {
        en: "- Interior Design Landing Page.",
        ar: "- صفحة هبوط لتصميم داخلي."
      },
      description2: {
        en: "using: HTML, CSS, bootstrap",
        ar: "باستخدام: HTML، CSS، Bootstrap"
      },
      image: "proj7.png",
      icon1: "https://github.com/Gege-alii/Landing_page_2",
      icon2: "https://gege-alii.github.io/Landing_page_2/"
    },
    {
      number: "08",
      title: {
        en: "To-Do List Application",
        ar: "تطبيق قائمة المهام"
      },
      description1: {
        en: "- A simple to-do list application that allows users to add, edit, delete, and mark tasks as completed. The application is built using HTML, CSS, and JavaScript and stores tasks using localStorage to maintain persistence even after page reloads.",
        ar: "- تطبيق قائمة المهام بسيط يسمح للمستخدمين بإضافة، تعديل، حذف، ووضع علامة على المهام كمكتملة. التطبيق مبني باستخدام HTML، CSS، وJavaScript ويخزن المهام باستخدام localStorage للحفاظ على الاستمرارية حتى بعد إعادة تحميل الصفحة."
      },
      description2: {
        en: "using: HTML, CSS, JavaScript",
        ar: "باستخدام: HTML، CSS، JavaScript"
      },
      image: "proj8.png",
      icon1: "https://github.com/Gege-alii/to_do_list",
      icon2: "https://gege-alii.github.io/to_do_list/"
    },
    {
      number: "09",
      title: {
        en: "Landing Page",
        ar: "صفحة الهبوط"
      },
      description1: {
        en: "- Responsive Website using Bootstrap.",
        ar: "- موقع ويب استجابة باستخدام Bootstrap."
      },
      description2: {
        en: "using: HTML, CSS, bootstrap, AOS Library.",
        ar: "باستخدام: HTML، CSS، Bootstrap، مكتبة AOS."
      },
      image: "proj9.png",
      icon1: "https://github.com/Gege-alii/bootstrap",
      icon2: "https://gege-alii.github.io/bootstrap/"
    },
    {
      number: "10",
      title: {
        en: "Landing Page-JQ",
        ar: "صفحة هبوط - JQ"
      },
      description1: {
        en: "- Responsive WebPage using JQuery.",
        ar: "- صفحة ويب استجابة باستخدام jQuery."
      },
      description2: {
        en: "using: HTML, CSS, bootstrap, Javascript, jQuery",
        ar: "باستخدام: HTML، CSS، Bootstrap، JavaScript، jQuery"
      },
      image: "proj10.png",
      icon1: "https://github.com/Gege-alii/Jquery",
      icon2: "https://gege-alii.github.io/Jquery/"
    },
    {
      "number": "11",
      "title": {
        "en": "Age Calculator",
        "ar": "حاسبة العمر"
      },
      "description1": {
        "en": "- This is a web-based Age Calculator that allows users to calculate their exact age based on their date of birth.",
        "ar": "- تطبيق حاسبة العمر على الويب يتيح للمستخدمين حساب عمرهم الدقيق بناءً على تاريخ ميلادهم."
      },
      "description2": {
        "en": "using: HTML, CSS, bootstrap, Javascript.",
        "ar": "باستخدام: HTML، CSS، Bootstrap، JavaScript."
      },
      "image": "proj11.png",
      "icon1": "https://github.com/Gege-alii/Age_calc",
      "icon2": "https://gege-alii.github.io/Age_calc/"
    },
    {
      "number": "12",
      "title": {
        "en": "Dummy Portfolio Page",
        "ar": "صفحة محفظة وهمية"
      },
      "description1": {
        "en": "- This is a web-based dummy Portfolio page.",
        "ar": "- هذه صفحة محفظة وهمية تعتمد على الويب."
      },
      "description2": {
        "en": "Using: HTML, CSS, Bootstrap, JavaScript.",
        "ar": "باستخدام: HTML، CSS، Bootstrap، JavaScript."
      },
      "image": "proj12.png",
      "icon1": "https://github.com/Gege-alii/dammy-Portfolio",
      "icon2": "https://gege-alii.github.io/dammy-Portfolio/"
    },
    {
      "number": "13",
      "title": {
        "en": "JS System",
        "ar": "نظام تسجيل الدخول"
      },
      "description1": {
        "en": "- Log In and Sign Up System using JavaScript.",
        "ar": "- نظام تسجيل الدخول والتسجيل باستخدام JavaScript."
      },
      "description2": {
        "en": "Using: Bootstrap, JavaScript, JSON, LocalStorage.",
        "ar": "باستخدام: Bootstrap، JavaScript، JSON، LocalStorage."
      },
      "image": "proj13.png",
      "icon1": "https://github.com/Gege-alii/loginJs",
      "icon2": "https://gege-alii.github.io/loginJs/"
    },
    {
      "number": "14",
      "title": {
        "en": "Avatar NG",
        "ar": "مشروع صور الرموز"
      },
      "description1": {
        "en": "- Avatar Pictures Project.",
        "ar": "- مشروع صور الرموز الشخصية."
      },
      "description2": {
        "en": "Using: Bootstrap, TypeScript, Angular.",
        "ar": "باستخدام: Bootstrap، TypeScript، Angular."
      },
      "image": "proj14.png",
      "icon1": "https://github.com/Gege-alii/ng-avatar",
      "icon2": "https://ng-avatar.vercel.app/start"
    },
    {
      "number": "15",
      "title": {
        "en": "CRUD App",
        "ar": "تطبيق CRUD"
      },
      "description1": {
        "en": "- CRUD application using plain JavaScript without any framework.",
        "ar": "- تطبيق CRUD باستخدام JavaScript فقط دون أي إطار عمل."
      },
      "description2": {
        "en": "Using: Bootstrap, JavaScript.",
        "ar": "باستخدام: Bootstrap، JavaScript."
      },
      "image": "proj15.png",
      "icon1": "https://github.com/Gege-alii/crudJs",
      "icon2": "https://gege-alii.github.io/crudJs/"
    },    
    {
      "number": "16",
      "title": {
        "en": "Blog Post App",
        "ar": "تطبيق مدونة"
      },
      "description1": {
        "en": "- This PHP native project is a fully functional blog platform that enables users to view posts and images. Registered users can perform CRUD operations on the posts. The application ensures secure user authentication, allowing only logged-in users to manage the content.",
        "ar": "- هذا المشروع المكتوب بلغة PHP هو منصة مدونات متكاملة تتيح للمستخدمين عرض المنشورات والصور. يمكن للمستخدمين المسجلين إجراء عمليات CRUD على المنشورات. يضمن التطبيق مصادقة آمنة للمستخدمين، مما يسمح فقط للمستخدمين المسجلين بإدارة المحتوى."
      },
      "description2": {
        "en": "Using: Bootstrap, PHP.",
        "ar": "باستخدام: Bootstrap، PHP."
      },
      "image": "proj16.png",
      "icon1": "https://github.com/Gege-alii/phpblog/tree/master",
      "icon2": "https://github.com/Gege-alii/phpblog/tree/master"
    },
    {
      "number": "17",
      "title": {
        "en": "Image Slider",
        "ar": "عارض الصور"
      },
      "description1": {
        "en": "- This project is a simple responsive image slider. It includes automatic sliding, navigation buttons, pagination dots, and swipe functionality for touch screens.",
        "ar": "- هذا المشروع عبارة عن عارض صور بسيط ومتجاوب. يتضمن انزلاق تلقائي، أزرار تنقل، نقاط ترقيم، ووظيفة السحب للشاشات التي تعمل باللمس."
      },
      "description2": {
        "en": "Using: HTML, CSS, and JavaScript",
        "ar": "باستخدام: HTML، CSS، JavaScript."
      },
      "image": "proj17.png",
      "icon1": "https://github.com/Gege-alii/Image_Slider",
      "icon2": "https://gege-alii.github.io/Image_Slider/"
    }   
  ];
  

let currentProject = 0;
function showProject(index) {
  const projectInfo = document.getElementById("projectInfo");
  const projectImage = document.getElementById("projectImage");

  projectInfo.style.opacity = "0";
  projectImage.style.opacity = "0";
  projectInfo.style.transform = "translateX(-20px)";
  projectImage.style.transform = "translateX(-20px)";

  setTimeout(() => {
      const project = projects[index];
      document.getElementById("projectNumber").textContent = project.number;
      document.getElementById("projectTitle").textContent = project.title[lang];
      document.getElementById("projectDescription1").textContent = project.description1[lang];
      document.getElementById("projectDescription2").textContent = project.description2[lang];
      document.getElementById("icon1").href = project.icon1;
      document.getElementById("icon2").href = project.icon2;
      document.getElementById("projectImage").querySelector("img").src = project.image;

      projectInfo.style.opacity = "1";
      projectImage.style.opacity = "1";
      projectInfo.style.transform = "translateX(0)";
      projectImage.style.transform = "translateX(0)";
      AOS.refresh();
  }, 100);
}
let lang = "en";

function toggleLanguage() {
  lang = lang === "en" ? "ar" : "en";  
  showProject(currentProject);
}

function nextSlide() {
  currentProject = (currentProject + 1) % projects.length;
  showProject(currentProject);
}

function prevSlide() {
  currentProject = (currentProject - 1 + projects.length) % projects.length;
  showProject(currentProject);
}

showProject(currentProject);

let startX = 0;

// For mobile touch events
document.getElementById("projectImage").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.getElementById("projectImage").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(startX, endX);
});

// For mouse events
document.getElementById("projectImage").addEventListener("mousedown", (e) => {
  startX = e.clientX;
});

document.getElementById("projectImage").addEventListener("mouseup", (e) => {
  const endX = e.clientX;
  handleSwipe(startX, endX);
});

function handleSwipe(startX, endX) {
  const threshold = 50; 
  if (startX - endX > threshold) {
      nextSlide();
  } else if (endX - startX > threshold) {
      prevSlide();
  }
}


// navigation links

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-link');
  function updateActiveLink() {
    let scrollPosition = window.scrollY + 60; 
    document.querySelectorAll('section').forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        const sectionId = section.getAttribute('id');
        navLinks.forEach(function (link) {
          link.classList.remove('active'); 
          if (link.getAttribute('href').includes(sectionId)) {
            link.classList.add('active'); 
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveLink);
  updateActiveLink();
});




//  Contact

emailjs.init("TbhJ3j8pn3Ie5EJj-");
document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault();

const templateParams = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value
};

emailjs.send("service_d7y4wen", "template_wm52def", templateParams)
.then(function(response) {
  Swal.fire({
        icon: 'success',
        title: 'Message sent!',
        text: 'Your message was sent successfully Thanks for contact me. I\'ll respond you shortly',
        showConfirmButton: false,
        timer: 3000
      });
document.getElementById("contactForm").reset();
}, function(error) {
console.error("Failed to send message:", error);
Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Failed to send message. Please try again.'
  });
});
});

// toggling language
const toggleButton = document.getElementById('languageToggle');
const elements = document.querySelectorAll('[data-en][data-ar]'); 

let isArabic = false; 

toggleButton.addEventListener('click', () => {
    isArabic = !isArabic;
    toggleButton.textContent = isArabic ? 'EN' : 'AR'; 

    elements.forEach(element => {
        element.textContent = isArabic ? element.dataset.ar : element.dataset.en; 
    });

    document.documentElement.lang = isArabic ? 'ar' : 'en'; 
    document.body.style.direction = isArabic ? 'rtl' : 'ltr'; 
});


// Dark and Light mode
const toggleButtonn= document.getElementById("theme-toggle");
toggleButtonn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    toggleButtonn.classList.remove("fa-sun");
    toggleButtonn.classList.add("fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    toggleButtonn.classList.remove("fa-moon");
    toggleButtonn.classList.add("fa-sun");
  }
});

