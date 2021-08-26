async function onSignIn(googleUser) {
    try {
        var id_token = googleUser.getAuthResponse().id_token;

        const body = JSON.stringify({ token: id_token });

        const res = await fetch("http://localhost:3000/login/google", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body
        });

    } catch (error) {
        console.log(error)
    }
}
