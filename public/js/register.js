form.addEventListener('submit', () => {
    const register = {
        email: email.value,
        password: password.value
    }
    // console.log(register);
    fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(register),
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
            // console.log(data)
        })
})