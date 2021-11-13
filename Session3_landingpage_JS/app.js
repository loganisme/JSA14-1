function handleSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    alert("name:" + name.value + "\nemail:" + email.value + "\nmessage:" + message.value);
}