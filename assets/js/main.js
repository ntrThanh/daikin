let lastScrollTop = 0;
let header = document.getElementById("header");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    
    if (scrollTop > lastScrollTop) {
        header.style.top = "-80px"; /* Ẩn header */
    } else {
        header.style.top = "0"; /* Hiện header */
    }

    lastScrollTop = scrollTop;
});


let slideIndex = 0;
let slideInterval;

function startSlideShow() {
  stopSlideShow(); // Đảm bảo không có interval trùng lặp
  slideInterval = setInterval(() => plusSlides(1), 3000);
}

function stopSlideShow() {
  if (slideInterval) clearInterval(slideInterval);
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
}

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return; // Đảm bảo có slide

  // Xử lý vòng lặp slide
  if (slideIndex >= slides.length) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // Ẩn tất cả slides
  for (let slide of slides) {
    slide.style.display = "none";
  }

  // Xóa trạng thái active trên tất cả dots (nếu có)
  if (dots.length > 0) {
    for (let dot of dots) {
      dot.classList.remove("active");
    }
    dots[slideIndex].classList.add("active");
  }

  // Hiển thị slide hiện tại
  slides[slideIndex].style.display = "block";
}

// Tạm dừng khi người dùng chuyển tab
document.addEventListener("visibilitychange", () => {
  if (document.hidden) stopSlideShow();
  else startSlideShow();
});

// Bắt đầu slideshow
showSlides();
startSlideShow();

const counters = document.querySelectorAll('.counter');
  const speed = 1000;

  const runCounter = counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        runCounter(counter);
        observer.unobserve(counter); // Chạy một lần duy nhất
      }
    });
  }, {
    threshold: 0.5 // phần tử phải hiện ít nhất 50% trên màn hình
  });

  counters.forEach(counter => {
    observer.observe(counter);
  });



// JavaScript để kiểm tra vị trí cuộn và hiển thị nút điện thoại
window.addEventListener("scroll", function () {
  const phoneButton = document.getElementById("zaloButton");
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= viewportHeight / 3) {
    phoneButton.classList.add("show");
  } else {
    phoneButton.classList.remove("show");
  }
});

var $j = jQuery.noConflict();

// JavaScript để kiểm tra vị trí cuộn và hiển thị nút điện thoại
window.addEventListener("scroll", function () {
  const phoneButton = document.getElementById("");
  const viewportHeight = window.innerHeight;
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= viewportHeight / 3) {
    phoneButton.classList.add("show");
  } else {
    phoneButton.classList.remove("show");
  }
});
