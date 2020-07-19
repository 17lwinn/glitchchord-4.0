/* eslint-disable */

//Custom Scroll Bar
(function ($) {
    $(window).on("load", function () {
        var $element = $(".scroll-hijack");

        if ($element.length) {
            $element.mCustomScrollbar({
                theme: "dark",
                scrollInertia: 400,
                alwaysShowScrollbar: 0,
                autoHideScrollbar: true,
                mouseWheelPixels: 100
            });
        }
        $element.mCustomScrollbar("scrollTo","bottom");

    });
})(jQuery);

//Sidebar toggle
$(function(){
    var $trigger = $('[data-toggle="sidebar"]'),
        $body = $('body');

    function toggle(e) {
        e.preventDefault();

        if ($(window).width() < 768) {
            if (!$body.hasClass('sidebar-expanded')) {
                $body.addClass('sidebar-expanded');
            } else {
                $body.removeClass('sidebar-expanded');
            }
        }
    }

    $(window).resize(function(){
        if ($(window).width() > 767) {
            if ($body.hasClass('sidebar-expanded')) {
                $body.removeClass('sidebar-expanded');
            }
        }
    });

    $trigger.click(toggle);
});

//Tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip({
        html: true,
        container: 'body'
    });
});

$(function () {
    var particles = $('#particles-js'),
        w = $(window);

    function toggleParticles() {
        if (w.scrollTop() >= $('#home').innerHeight()) {
            particles.hide();
        } else {
            particles.show();
        }
    }

    $(window).on('scroll load', toggleParticles);
});

//Copy invite link to clipboard
$(function(){
    var $element = $('[data-invite-link]'),
        copyElement;

    function copy() {
        var $this = $(this);

        //Create the element
        copyElement = $('<input type="text" />').appendTo('body');

        //Set the link as a value of the input appended earlier
        copyElement.val($this.data('invite-link'));
        //Select the value of the appended input
        copyElement.select();

        //Copy the link
        document.execCommand('copy');

        //Remove element from DOM
        setTimeout(function(){
            copyElement.remove();
        }, 100);
    }

    $element.click(copy);
});



//Modal popup
$(function () {
    var $trigger = $('[data-start="modal-custom"]'),
        $body = $('body'),
        $close = $('.modal-close');

    var a;

    function toggle(e) {
        e.preventDefault();
        var $this = $(this),
            $target = $this.data('target');

         if ($($target).hasClass('modal-open')) {
             $('.modal-block').removeClass('modal-block-open');
             a = setTimeout(function () {
                 $('.modal-block-wrap').removeClass('modal-open');
             }, 300);
             $body.removeClass('modal-is-open');
         } else {
             clearTimeout(a);
        
             $($target).addClass('modal-open');
             a = setTimeout(function () {
                 $($target).find('.modal-block').addClass('modal-block-open');
             }, 50);
             $body.addClass('modal-is-open');
         }

        if ($body.hasClass('modal-is-open')) {
            $('.modal-block').removeClass('modal-block-open');
            $('.modal-block-wrap').removeClass('modal-open');
            $body.removeClass('modal-is-open');
        }

        clearTimeout(a);

        $($target).addClass('modal-open');
        a = setTimeout(function () {
            $($target).find('.modal-block').addClass('modal-block-open');
        }, 50);
        $body.addClass('modal-is-open');
    }

    $('.modal-block-wrap').click(function (e) {
        var container = $(".modal-block");

        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.modal-block').removeClass('modal-block-open');
            a = setTimeout(function () {
                $('.modal-block-wrap').removeClass('modal-open');
            }, 300);
            $body.removeClass('modal-is-open');
        }
    });

    $trigger.click(toggle);
    $close.click(function(){
        $('.modal-block').removeClass('modal-block-open');
        a = setTimeout(function () {
            $('.modal-block-wrap').removeClass('modal-open');
        }, 300);
        $body.removeClass('modal-is-open');
    });
});

//Form
$(function () {
    var $formInput = $('input');

    $formInput.on('focus', function () {
        var $this = $(this);

        $this.closest('.form-group').addClass('is-focus');
    });

    $formInput.on('blur', function () {
        var $this = $(this);

        $this.closest('.form-group').removeClass('is-focus');
    });

    $formInput.on('input', function () {
        var $this = $(this);

        if ($this.val().length <= 0) {
            $this.closest('.form-group').removeClass('is-filled');
        } else {
            $this.closest('.form-group').addClass('is-filled');
        }
    });
});

$(function () {
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 250
                }
            },
            "color": {
                "value": "#34eb98"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#34eb98"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.2,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.2,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 2,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 4,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 83.91608391608392,
                    "size": 4,
                    "duration": 3,
                    "opacity": 1,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
});