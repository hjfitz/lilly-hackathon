window.onload = () => {
    const {name, question} = JSON.parse(sessionStorage.getItem('userData'));
    console.log(name);
};