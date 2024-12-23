jQuery(document).ready(function($) {

	window.addEventListener("resize", function() {
		   load_width();
	}, false);
	function load_width(){
		if(jQuery(window).width() > 991) {
			var screenWidth = $(window).width();
			var element = $('.service .group-service .overflows'); 
   			var offset = element.offset();
			var nWidth = screenWidth-offset.left;
// 			console.log(nWidth);
			$('.service .group-service .overflows').css('width',nWidth); 
		}
	}
	load_width();


	/*--------------------------------------------------------------
	# back to top
	--------------------------------------------------------------*/
    $( window ).scroll( function () {
        if ( $( this ).scrollTop() > 100 ) {
            $( '#back-top').addClass('slow-back-top');
        } else {
            $( '#back-top' ).removeClass('slow-back-top');
        }
    } );

    $( '#back-top' ).click( function() {
        $( 'html, body' ).animate( { scrollTop: '0px' }, 20 );
        return false;
    } );
    

    // var slider_support_swiper = new Swiper(".slider-support-swiper", {
    //   grabCursor: true,
    //   effect: "fade",
    //   mousewheel: true,
    // });

    window.addEventListener("resize", function() {
       load_menu_user();
    }, false);
    function load_menu_user(){
        if(jQuery(window).width() > 991) {
            var slider_service = new Swiper(".slider-service", {
                slidesPerView: "auto",
                loop:true,
                spaceBetween: 95,
            });
        }
    }

    var slider_baner = new Swiper(".slider-baner", {
          spaceBetween: 0,
          slidesPerView: 1,
          effect: "fade",
          loop:true,
          speed: 1000,
           fadeEffect: {
            crossFade: true // Cho phép cross fade
          },
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
          },
    });

    // var slider_tsumugu_thumb = new Swiper(".slider-tsumugu-thumb", {
    //   spaceBetween: 0,
    //   slidesPerView: 1,
    //   // freeMode: true,
    //   // watchSlidesProgress: true,
    //   effect: "fade",
    //   allowTouchMove: false,
    //   mousewheel: false
    // });

    $('.marquee-slider-swiper').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6900,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: 'linear',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1.5,
                }
            }
        ]
    });


    $('body').on('click', '.link-feel a', function(event) {
        event.preventDefault();
        if($(this).hasClass('hidden-more')){
            $(this).removeClass('hidden-more').html('<span>もっと読む</span> <i class="far fa-plus"></i>').parent().prev().children('.customer-feedback').removeClass('hidden-more');
        }else{
            $(this).addClass('hidden-more').html('<span>閉じる</span> <i class="far fa-minus"></i>').parent().prev().children('.customer-feedback').addClass('hidden-more');
        }
    });
    $('body').on('click', '#form-lh #confirm', function(event) {
        event.preventDefault();
        var parent = $(this).parent().parent();
        parent.find('.error').remove();
        var company_name = parent.find('#company_name').val();
        var company_name_furigana_transcription = parent.find('#company_name_furigana_transcription').val();
        var affiliated_departments = parent.find('#affiliated_departments').val();
        var full_name = parent.find('#full_name').val();
        var full_name_furigana_transcription = parent.find('#full_name_furigana_transcription').val();
        var gmail_address = parent.find('#gmail_address').val();
        var phone_number = parent.find('#phone_number').val();
        var fav_language = parent.find('input[type="radio"]:checked').val();
        var message = parent.find('#message').val();
        var agree_with = parent.find('#agree_with:checked').val();
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(company_name && full_name && gmail_address && fav_language && agree_with){
            if (emailPattern.test(gmail_address)) {
                parent.find('#company_name').addClass('none-input').after('<div class="input-show">'+company_name+'</div>');
                parent.find('#company_name_furigana_transcription').addClass('none-input').after('<div class="input-show">'+company_name_furigana_transcription+'</div>');
                parent.find('#affiliated_departments').addClass('none-input').after('<div class="input-show">'+affiliated_departments+'</div>');
                parent.find('#full_name').addClass('none-input').after('<div class="input-show">'+full_name+'</div>');
                parent.find('#full_name_furigana_transcription').addClass('none-input').after('<div class="input-show">'+full_name_furigana_transcription+'</div>');
                parent.find('#gmail_address').addClass('none-input').after('<div class="input-show">'+gmail_address+'</div>');
                parent.find('#phone_number').addClass('none-input').after('<div class="input-show">'+phone_number+'</div>');
                parent.find('input[type="radio"]').parent().parent().addClass('none-input').after('<div class="input-show">'+fav_language+'</div>');
                parent.find('#message').addClass('none-input').after('<div class="message-show">'+message+'</div>');
                parent.find('#agree_with').next().addClass('none-input').after('<div class="input-show">'+agree_with+'</div>');;
                $(this).parent().html('<a id="confirm-bck" class="confirm-bck">修正する</a><button type="submit" class=" submit-form-contact" id="submit-form-contact" name="submit-form-contact">送信する</button>');
            } else {
                parent.find('#gmail_address').after('<span class="error" style="color:red;font-size: 12px;padding-top: 5px;display: block;">メールの形式が正しくありません</span>');
            }
        }else{
            if(!company_name){
                parent.find('#company_name').after('<span class="error" style="color:red;font-size: 12px;padding-top: 5px;display: block;">ここに情報を入力してください</span>');
            }
            if(!full_name){
                parent.find('#full_name').after('<span class="error" style="color:red;font-size: 12px;padding-top: 5px;display: block;">ここに情報を入力してください</span>');
            }
            if(!gmail_address){
                parent.find('#gmail_address').after('<span class="error" style="color:red;font-size: 12px;padding-top: 5px;display: block;">ここに情報を入力してください</span>');
            }else{
                if(!emailPattern.test(gmail_address)){
                     parent.find('#gmail_address').after('<span class="error" style="color:red;font-size: 12px;padding-top: 5px;display: block;">メールの形式が正しくありません</span>');
                }
            }
            if(!fav_language){
                parent.find('input[type="radio"]').parent().parent().after('<span class="error" style="color:red;font-size: 12px;padding-top: 5px;display: block;">ここに情報を入力してください</span>');
            }
            if(!agree_with){
                $(this).parent().next().html('<span class="error" style="color:red;font-size: 12px;">クリックして同意してください</span>');
            }

        }
    });

    $('body').on('click', '#form-lh #confirm-bck', function(event) {
        event.preventDefault();
        var parent = $(this).parent().parent();
        parent.find('.input-show,.message-show').prev().removeClass('none-input');
        parent.find('.input-show,.message-show').remove();
        $(this).parent().html('<a id="confirm" class="confirm">確認画面に進む</a>');
    });

     $('#form-lh').submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var formData = form.serialize();
        var outerHeight = $('#contact-us .form-contact').outerHeight();
        $('#contact-us .form-contact').css('height',outerHeight);
        $.ajax({
            url:  devvn_array.link_ajax,
            type: 'post',
            data: formData + '&action=custom_contact_form_us',
            beforeSend: function(){
                form.append('<p class="loading"><span><i class="fas fa-spinner fa-pulse"></i> <b>フォームは送信中です</b><span></p>');
            },
            success: function(data){
                form.addClass('none-form').find('.loading').remove();
                form.parent().addClass('notificationss');
                form.after(data);
            }
        });
    });
    $('body').on('click', '#delete-content', function(event) {
        event.preventDefault();
        var parent = $(this).parent().parent();
        parent.prev().removeClass('none-form').find('.input-show,.message-show').prev().removeClass('none-input');
        parent.prev().find('.input-show,.message-show').remove();
        parent.prev().find('.submit').html('<a id="confirm" class="confirm">確認画面に進む</a>');
        parent.prev().find('input[type="text"],textarea').val('');
        parent.prev().find('input[name="fav_language"],input[type="checkbox"]').prop('checked', false);
        parent.prev().parent().removeClass('notificationss').css('height','auto');
        parent.remove();

    });
    $('body').on('click', '.click-show-modal',function(event) {
        event.preventDefault();
        var $this = $(this);
        var data_modal = $(this).attr('data-modal');
        $.ajax({
            url:  devvn_array.link_ajax,
            type: 'post',
            data: {
                'action' : 'show_modalssss',
                'data_modal' : data_modal,
            },
            beforeSend: function(){
                $this.append('<i class="fas fa-spinner fa-pulse"></i>');
            },
            success: function(data){
                $this.children('.fas').remove();
                var getData = $.parseJSON(data);

                if (getData.success == true){
                    $('#popup-modal-faq .heading-modal .title').html(getData.title_modal);
                    $('#popup-modal-faq .footer-modal').html(getData.descriptions_modal);
                    $('#popup-modal-faq .content-body').html(getData.html_g);
                    $('#popup-modal-faq, body').addClass('show-modal');
                }
            }
        });
    });
    $('body').on('click', '.popup-modal-faq .clos-modal',function(event) {
        event.preventDefault();
        $('#popup-modal-faq, body').removeClass('show-modal');
    });

    $(document).mouseup(function(e) {
        var container = $('#popup-modal-faq .content-popup-modal');
        if (!container.is(e.target) && container.has(e.target).length === 0 && $('body').hasClass('show-modal') && e.which === 1) {
            container.parent().removeClass('show-modal');
            $('body').removeClass('show-modal');
        }
    });
    // $('body').on('click', '.faq-mobile .title', function(event) {
	// 	event.preventDefault();

	// 	const $this = $(this);
	// 	const $editor = $this.next().children('.editor');

	// 	if ($this.hasClass('hidden-accordion')) {
	// 		$this.removeClass('hidden-accordion');
	// 		$editor.removeClass('active');
	// 	} else {
	// 		// Đóng các accordion khác
	// 		$('.faq-mobile .editor').removeClass('active').parent().find('.title').removeClass('hidden-accordion');

	// 		// Mở accordion hiện tại
	// 		$this.addClass('hidden-accordion');
	// 		$editor.addClass('active');
	// 	}
	// });


    $('.group-faq.faq-mobile .title').click(function() {
        if ($(this).next('.ct').is(':visible')) {
            $(this).next('.ct').slideUp();
            $(this).removeClass('active');
        } else {
            $('.group-faq .ct').slideUp();
            $('.group-faq .title').removeClass('active');
            $(this).next('.ct').slideDown();
            $(this).addClass('active');
        }
    });


    var stickyNavTop = jQuery('#masthead').offset().top;
    var top_body = jQuery('body').offset().top;
    var stickyNav = function(){
        var scrollTop = jQuery(window).scrollTop();
        if(jQuery(window).width() > 991) {
            if (scrollTop >= 40) {
                jQuery('#masthead').addClass('tab-title-sticky').removeClass('no-padding');
            } else {
                jQuery('#masthead').removeClass('tab-title-sticky').addClass('no-padding');
         
            }
        }else{
            if (scrollTop >= 20) {
                jQuery('#masthead').addClass('tab-title-sticky').removeClass('no-padding');
            } else {
                jQuery('#masthead').removeClass('tab-title-sticky').addClass('no-padding');
         
            }
        }
        
    };
    stickyNav();
    jQuery(window).scroll(function() {
      stickyNav();
    });


    $('.icons-show-menu').click(function(){
        event.preventDefault();
         $('.menu-mobile').toggleClass('hidden-menu');

        if($(this).hasClass('hidden-menu')){
            $(this).removeClass('hidden-menu').children('img').attr('src',devvn_array.icons_menu_show);
        }else{
            $(this).addClass('hidden-menu').children('img').attr('src',devvn_array.icons_menu);
        }
    });

    $('.menu-mobile .menu-item a').click(function(){
         $('.menu-mobile,.icons-show-menu').toggleClass('hidden-menu');
         $('.icons-show-menu').children('img').attr('src',devvn_array.icons_menu_show);
    });


        $(window).on('scroll', function() {
            $('.svg-animation').each(function() {
                if (isElementInViewport(this)) {
                    $(this).addClass('animate');
                } else {
//                     $(this).removeClass('animate');
                }
            });
        });

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        


});


let path = document.querySelector(".animationsss");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

// Hàm thực hiện khi phần tử "trigger" xuất hiện trong viewport
const handleIntersection = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Bắt đầu hiệu ứng vẽ khi phần tử "trigger" xuất hiện
      window.addEventListener("scroll", () => {
        var srollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

        var drawLength = pathLength * srollPercentage;
        path.style.strokeDashoffset = pathLength - drawLength;
      });
    }
  });
};

// Tạo Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // Thay đổi giá trị này nếu cần
});

// Theo dõi phần tử "trigger"
const triggerElement = document.getElementById('trigger');
observer.observe(triggerElement);


function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


function animatePaths(svgContainer) {
	
    const paths = svgContainer.querySelectorAll('.path');
    paths.forEach((path, index) => {
        if (isElementInViewport(path)) {
            setTimeout(() => {
                path.style.strokeDashoffset = '0';
                path.style.stroke = 'rgba(0, 0, 0, 0.3)'; /* Đổi màu viền thành đen */
                
                setTimeout(() => {
                    path.style.stroke = 'transparent'; /* Đổi màu viền lại thành trong suốt */
                    path.classList.add('fill-animate');
                    path.style.fill = '#000'; /* Đổi màu nền thành đen */
                }, 700); // Thời gian bằng với transition stroke
				
            }, index * 200); // Thêm độ trễ cho từng đường path
        }
    });
}

window.onload = function() {
    const targetSVG = document.getElementById('target-svg');
// 	const targetsvgs = document.getElementById('target-svg');
    document.addEventListener('scroll', () => {
//         animatePaths(targetSVG);
		const rect = targetSVG.getBoundingClientRect();
         const windowHeight = window.innerHeight;

        // Điều kiện để thêm class khi cuộn đến phần tử
        if (rect.top <= (windowHeight * 2 / 3) && rect.bottom >= (windowHeight * 2 / 3)) {
            targetSVG.classList.add('active');
        } 
    });
};

const container = document.getElementById('scrollContainer');
        
container.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent default vertical scroll behavior

    // Scroll horizontally based on mouse wheel direction
    container.scrollBy({
        left: event.deltaY < 0 ? -100 : 100, // Adjust scroll amount as needed
        behavior: 'smooth'
    });
});

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function() {
    // ScrollTrigger cho .slider-tsumugu
    const sectionTsumugu = document.querySelector(".slider-tsumugu");
    const itemsTsumugu = gsap.utils.toArray(".item-tsumugu-scroll");
    
    let currentIndex = -1; // Track the currently active index
    
    const tlTsumugu = gsap.timeline({
        scrollTrigger: {
            trigger: sectionTsumugu,
            start: "top top",
            end: "+=" + (100 * itemsTsumugu.length - 1) + "%",
            scrub: 1,
            pin: true,
            markers: true,
            onUpdate: self => {
                const progress = self.progress;
                const index = Math.round(progress * (itemsTsumugu.length - 1));
    
                if (index !== currentIndex) {
                    // Only run animation when the active index changes
                    itemsTsumugu.forEach((item, i) => {
                        const thumb = item.querySelector('.thumb');
                        const thumbBack = item.querySelector('.backs');
                        
                        if (i === index) {
                            let isOdd = index % 2 === 1;
                            item.classList.add('active');

                            if(index === 1 || index === 3 || index ===5){
                               
                                if (thumb) {
                                    thumb.classList.add('active-animation');
                                    // setTimeout(() => {
                                    //     thumb.classList.remove('active-animation');
                                    // }, 1000); // Animation duration
                                }

                                if (thumbBack) {
                                    thumbBack.classList.add('active-animation-back');
                                    // setTimeout(() => {
                                    //     thumbBack.classList.remove('active-animation-back');
                                    // }, 1000); // Animation duration
                                }
                            }else if(index === 2 || index === 4 || index==0 ){
                                if (thumb) {
                                    thumb.classList.add('active-animation-even');
                                   
                                }
                                
                                
                                
                                if (thumbBack) {
                                    thumbBack.classList.add('active-animation-back-even');
                                    // setTimeout(() => {
                                    //     thumbBack.classList.remove('active-animation-back-even');
                                    // }, 1000); // Animation duration
                                }
                            }
    
                            // Trigger animation
                            // if (thumb) {
                            //     thumb.classList.add('active-animation');
                            //     setTimeout(() => {
                            //         thumb.classList.remove('active-animation');
                            //     }, 1000); // Animation duration
                            // }
    
                            // if (thumbBack) {
                            //     thumbBack.classList.add('active-animation-back');
                            //     setTimeout(() => {
                            //         thumbBack.classList.remove('active-animation-back');
                            //     }, 1000); // Animation duration
                            // }
                        } else {
                            item.classList.remove('active');
                            if (thumb) {
                                thumb.classList.remove('active-animation-even');
                                thumb.classList.remove('active-animation');
                            }
                            if (thumbBack) {
                                thumbBack.classList.remove('active-animation-back-even');
                                thumbBack.classList.remove('active-animation-back');
                                // setTimeout(() => {
                                //     thumbBack.classList.remove('active-animation-back-even');
                                // }, 1000); // Animation duration
                            }
                          
                        }
                    });
    
                    currentIndex = index; // Update the active index
                }
            }
        }
    });
    
    tlTsumugu.set(itemsTsumugu[0], { opacity: 1, y: 0, zIndex: 1 });

    // ScrollTrigger cho .service
    const serviceSection = document.getElementById("service");
    const scrollContainer = document.getElementById("scrollContainer");

    if (window.innerWidth >= 768) {
        scrollContainer.style.width = `${scrollContainer.scrollWidth}px`;

        gsap.to(scrollContainer, {
          x: () =>
            (scrollContainer.scrollWidth - innerWidth + (innerWidth / 18) * 3) |
            0,
          scrollTrigger: {
            trigger: serviceSection,
            start: "top top",
            end: () => "+=" + scrollContainer.scrollWidth,
            scrub: 0.25,
            pin: true,
            pinSpacing: true,
            onEnter: () => document.body.classList.add("is-business-show"),
            onEnterBack: () => document.body.classList.add("is-business-show"),
            onLeave: () => document.body.classList.remove("is-business-show"),
            onLeaveBack: () =>
              document.body.classList.remove("is-business-show"),
          },
        });

        serviceSection.querySelectorAll(".item-service").forEach(item => {
            gsap.fromTo(item.querySelector(".descriptions-service"), {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5
                }
            });
        });
    }

    // ScrollTrigger cho .slider-support
    const sectionSupport = document.querySelector(".slider-support");
    const itemsSupport = gsap.utils.toArray(".item-cs");

    const tlSupport = gsap.timeline({
        scrollTrigger: {
            trigger: sectionSupport,
            start: "top top",
            end: "+=" + (100 * itemsSupport.length - 1) + "%",
            scrub: 1,
            pin: true,
            markers: true,
            onUpdate: self => {
                const progress = self.progress;
                const index = Math.round(progress * (itemsSupport.length - 1));
                itemsSupport.forEach((item, i) => {
                    if (i === index) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }
        }
    });

    tlSupport.set(itemsSupport[0], { opacity: 1, y: 0, zIndex: 1 });


        function percentVisible(element) {
            const clientRect = element.getBoundingClientRect();
            const length = element.getTotalLength();
            let percent = (window.innerHeight - clientRect.top) / (window.innerHeight + window.innerHeight * (1 - (length / longest)-0.2));
            if (percent < 0) percent = 0;
            else if (percent > 1) percent = 1;
            return percent;
        }
        function getScrollPercent(element, saiso = 600) {
            // Lấy vị trí phần tử A so với top của document
            const elementTop = element.getBoundingClientRect().y + window.scrollY;

            // Lấy chiều cao của phần tử A
            const elementHeight = element.getBoundingClientRect().height;//offsetHeight;

            // Lấy vị trí hiện tại của thanh scroll
            const scrollPosition = window.scrollY;

            // Tính toán khoảng cách từ thanh scroll tới đầu phần tử A
            const distanceFromTop = scrollPosition - elementTop + saiso;

            // Tính toán tỉ lệ phần trăm
            const percentage = (distanceFromTop / elementHeight) * 100;

            // Trả về tỉ lệ phần trăm
            return percentage;
        }

        function getPathTopY(path) {
            return path.getBBox().y;
        }

        // Function to sort paths by their top y-coordinate
        function sortPathsByTop(svg) {
            const paths = Array.from(svg.querySelectorAll('path'));

            // Sort paths based on their top y-coordinate
            paths.sort((a, b) => getPathTopY(a) - getPathTopY(b));

            // Append the sorted paths back to the SVG
            paths.forEach(path => svg.appendChild(path));
        }

		function activeAnimate(p, k, l, per) {
			if(per < 1 && per > 0.3) {
				p.classList.add('svg-active');
				per += 0.01;
				const drawLength = l * per;
				const fillLength = l - drawLength;
				
				if(p.style[k] > fillLength) {
					p.style[k] = fillLength;
				}
 				requestAnimationFrame(function(){setTimeout(() => activeAnimate(p, k, l, per), 10)});
			} else {
				const drawLength = l * per;
				const fillLength = l - drawLength;
				if(p.style[k] >= fillLength) p.style[k] = fillLength;
			}
		}
		function animateLine(path, key, length, percentLine) {
// 			if(percentLine<0.3) path.classList.remove('svg-active');
// 			if(path.classList.contains('svg-active')) return;
			activeAnimate(path, key, length, percentLine)
		}

        let paths = document.querySelectorAll('#svg-scroll path');
        sortPathsByTop(document.querySelector('#svg-scroll'));

        var longest = 0;
		function setDefaultSvg(path, i) {
            const length = path.getTotalLength();
            if (length > longest) longest = length;
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            // Ensure the paths are not displayed initially
            path.style.visibility = 'hidden';
		}
//          paths.forEach(setDefaultSvg);
		
         function fillSVG() {
            const paths = document.querySelectorAll('#svg-scroll path');
            let scrollPercentage = getScrollPercent(document.querySelector('#svg-scroll'), 600*(window.innerHeight/1300)) / 100;              

			function setFillSvg(path, i) {
				if(scrollSvgFinished || path.classList.contains('p-active')) return;
                const length = path.getTotalLength();
                const percentLine = percentVisible(path);
				path.style.strokeDasharray = length;
				path.style.strokeDashoffset = length;
 				const drawLength = length * (scrollPercentage>0.9?scrollPercentage:scrollPercentage-0.03);
 				const fillLength = length - drawLength;

 				//animateLine(path, 'strokeDashoffset', length, scrollPercentage);
                if(path.style.strokeDashoffset > fillLength) path.style.strokeDashoffset = fillLength;
				
				animateLine(path, 'strokeDashoffset', length, percentLine);
				
				if(percentLine >= 1) path.classList.add('p-active');
                
			}
            paths.forEach(setFillSvg);
			if(scrollPercentage>=1) scrollSvgFinished = true;	
        }

        let scrollTimeout;
		let scrollStartTop = 0;
		let scrollEndTop = 0;

        function handleScrollStart() {
			const scrollT = getScrollTop();
            if(scrollT > scrollEndTop) fillSVG();
        }

        function handleScrollEnd() {
//             console.log('Scrolling ended');
        }
		function getScrollTop() {
			return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
		}
        function onScroll() {
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            } else {
				scrollStartTop = getScrollTop();
			}
			// Scroll start
			handleScrollStart();

            // Scroll end (after a delay to check if scrolling has stopped)
            scrollTimeout = setTimeout(() => {
                handleScrollEnd();
				scrollEndTop = getScrollTop();
            }, 150); // Adjust delay as needed
        }
		var scrollSvgFinished = false;
        window.addEventListener('scroll', onScroll);
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}


