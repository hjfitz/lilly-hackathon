$(function () {
    var button = $("#contact-button");
    var container = $("#contact-form");
    // contact form animations
    button.click(function () {
        if (container[0].style.display !== 'block') {
            $('#contact-form').fadeToggle();
        }
    })
    $(document).mousedown(function (e) {
        e.stopPropagation();
        if (!container.is(e.target) && container.has(e.target).length === 0) {
                container.fadeOut();
        }
    });

    $('#sub-btn').on('click', function (e) {
        const inputs = getInputs();
        const name = inputs[0];
        const question = inputs[1];
        window.sessionStorage.setItem('userData', JSON.stringify({
            name,
            question,
        }));
        window.location.replace("/public/Messenger-Page/client-messenger.html");
    });
});

function getInputs() {
    const name = document.getElementById("name-input").value;
    const question = document.getElementById("question-input").value;
    return [name, question];
};
