
form.addEventListener('submit', () => {
    const login = {
        email: email.value,
        password: password.value
    }
    fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                success.style.display = 'none'
                errorr.style.display = 'block'
                errorr.innerText = data.error
            } else {
                success.style.display = 'block'
                errorr.style.display = 'none'
                success.innerText = data.success
            }
        })
})