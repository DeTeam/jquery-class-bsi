
function colorInRed(element) {
    element.style.color = 'red';
}

function toggleColors() {
    $('li').toggleClass('green');
}

function animateListItems() {
    var animationOptions = {
        marginLeft: '100px'
    };

    $('li').animate(animationOptions, 500);
}

$(document).ready(function () {
    console.log('DOM loaded');
});

$(function () {
    // THIS IS THE WORLD WERE DOM IS AVAILABLE
    $('li:even').addClass('green');

    $('header a').click(function () {
        toggleColors();
        animateListItems();

        return false;
    });

    $('li').click(function () {
        var $element = $('ul');
        $element.fadeOut(500).fadeIn(500);
    });

    $("#main-content a").fancybox();
});


// HERE WE DON'T HAVE ALL THE TAGS READY FOR US

// create summer.html
// gist.github.com/DeTeam/7744fadca4b149572819

// Open .css
// Select one random css rule
// Copy the selector
// Open the coffee shop page
// Open devtool
// document.querySelectorAll('......')