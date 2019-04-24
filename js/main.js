function tranformToX(e){return e.preventDefault(),openOverlay(),$(this).addClass("close"),$(this).addClass("x"),$(this).unbind("click",tranformToX),$(this).bind("click",tranformToBurger),!1}function tranformToBurger(e){return e.preventDefault(),closeOverlay(),$(this).removeClass("close"),$(this).removeClass("x"),$(this).unbind("click",tranformToBurger),$(this).bind("click",tranformToX),!1}function openOverlay(){$("#overlay").css({visibility:"visible"})}function closeOverlay(){$("#overlay").css({visibility:"hidden"})}$(".lines-button.arrow.arrow-left").bind("click",tranformToX),
new Swiper(".swiper-showerdoor",{
    spaceBetween:10,
    slidesPerView:1,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween:0
        },
        480:{
            slidesPerView:1,
            spaceBetween:0
        },
        576:{slidesPerView:1,
            spaceBetween:0
        },
        768:{slidesPerView:1,
            spaceBetween:0
        },
        992:{slidesPerView:1,
            spaceBetween:10
        },
        1200:{slidesPerView:1,
            spaceBetween:10
        }
        }
    }),
    
new Swiper(".swiper-showerscreen",{
    spaceBetween:10,
    slidesPerView:1,
    navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev"
},
breakpoints:{
    320:{
        slidesPerView:1,
        spaceBetween:0
    },
    480:{
        slidesPerView:1,
        spaceBetween:0
    },
    576:{slidesPerView:1,
        spaceBetween:0
    },
    768:{slidesPerView:1,
        spaceBetween:0
    },
    992:{slidesPerView:1,
        spaceBetween:10
    },
    1200:{slidesPerView:1,
        spaceBetween:10
    }
    }
}),
new Swiper(".swiper-showercurtain",{
    spaceBetween:10,
    slidesPerView:1,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween:0
        },
        480:{
            slidesPerView:1,
            spaceBetween:0
        },
        576:{slidesPerView:1,
            spaceBetween:0
        },
        768:{slidesPerView:1,
            spaceBetween:0
        },
        992:{slidesPerView:1,
            spaceBetween:10
        },
        1200:{slidesPerView:1,
            spaceBetween:10
        }
        }
    }),
new Swiper(".swiper-ourwork",{
    slidesPerView:3.5,
    spaceBetween:30,
    loop:!0,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"},
    breakpoints:{
        // 320:{slidesPerView:1,spaceBetween:0},
        // 540:{slidesPerView:1,spaceBetween:10},
        767:{slidesPerView:1,spaceBetween:10},
        960:{slidesPerView:2,spaceBetween:30},
        1200:{slidesPerView:3,spaceBetween:30}
    }}),
new Swiper(".swiper-reviews",{
    slidesPerView:3.5,
    spaceBetween:30,
    navigation:{
        nextEl:".swiper-button-next.swiper-reviews-next",
        prevEl:".swiper-button-prev.swiper-reviews-prev"},
    centeredSlides:!0,
    loop:!0,
    breakpoints:{
        320:{
            slidesPerView:1,
            spaceBetween:0},
        480:{
            slidesPerView:1,
            spaceBetween:10},
        640:{slidesPerView:1.5,
            spaceBetween:20},
        770:{slidesPerView:1.5,
            spaceBetween:10},
        930:{slidesPerView:2.5,
            spaceBetween:30},
        1200:{slidesPerView:3.5,
            spaceBetween:30}
        }
    });
    var inputs = document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs, function (input) {
        var label = input.nextElementSibling,
            labelVal = label.innerHTML;
        input.addEventListener('change', function (e) {
            var fileName = '';
            if (this.files && this.files.length > 1)
                fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
            else
                fileName = e.target.value.split('\\').pop();
            if (fileName)
                label.querySelector('span').innerHTML = fileName;
            else
                label.innerHTML = labelVal;
        });
    });


    // send form
// Как только страничка загрузилась 
window.onload = function () {
    // проверяем поддерживает ли браузер FormData 
    if (!window.FormData) {
        alert("Браузер не поддерживает загрузку файлов на этом сайте");
    }
}
$(document).ready(function () {
    // =validation
    var errorTxt = 'Ошибка отправки';
    $("#sendform").validate({
        submitHandler: function (form) {
            var form = document.forms.sendform,
                formData = new FormData(form),
                xhr = new XMLHttpRequest();

            xhr.open("POST", "http://dev1.silk-its.com/tvist/");

            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        $("#sendform").html('<p class="thank">Данные отправлены!<p>');
                    }
                }
            };
            xhr.send(formData);
        }
    });
})