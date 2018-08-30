window.onload = () => {
    const {
        name,
        question
    } = JSON.parse(sessionStorage.getItem('userData'));
    console.log(name + " " + question);

    document.getElementById("view-messages").textContent = question;

    //const h = (...args) => document.createElement(...args);

};
