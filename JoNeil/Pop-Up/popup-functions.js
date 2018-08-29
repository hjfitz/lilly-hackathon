$(function () {
    // contact form animations
    $('#contact-button').click(function () {
        $('#contact-form').fadeToggle();
    })
    $(document).mousedown(function (e) {
        var container = $("#contact-form");
        if (!container.is(e.target) // if the target of the click isn't the container...
            &&
            container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            if (container.style.display === 'block') {
                container.fadeOut();
            }
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
        window.location.replace("/JoNeil/Messenger-Page/client-messenger.html");
    });
});

function getInputs() {
    const name = document.getElementById("name-input").value;
    const question = document.getElementById("question-input").value;
    return [name, question];
};
