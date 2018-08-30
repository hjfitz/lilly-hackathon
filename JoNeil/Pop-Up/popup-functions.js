$(function () {
    // contact form animations
    $('#contact-button').click(function () {
        $('#contact-form').fadeToggle();
    })
    $(document).mousedown(function (e) {
        const container = $("#contact-form");

        // if the target of the click isn't the container...
        if (!container.is(e.target) && // ... nor a descendant of the container
            container.has(e.target).length === 0) {
            //if (container && 'style' in container && container.style.display === 'block') { MAKES OTHER FUNCTION NOT WORK
            container.fadeOut();
            //}
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
