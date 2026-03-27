let captchaWidget = null;
let captchaSolved = false;
let captchaToken = "";

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const captchaContainer = document.getElementById("captchaContainer");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username !== "admin" || password !== "admin123") {
            alert("Invalid username or password");
            return;
        }

        if (!captchaSolved) {
            captchaContainer.style.display = "block";

            if (!captchaWidget) {
                captchaWidget = turnstile.render("#captchaContainer", {
                    //sitekey: "0x4AAAAAACu4Tui8t6m8ZCY6",
                    sitekey="1x00000000000000000000AA",
                    theme: "light",
                    size: "normal", // ✅ shows green tick
                    appearance: "always",
                    callback: function (token) {
                        captchaToken = token;
                        captchaSolved = true;
                        console.log("✅ CAPTCHA Token:", token);
                        alert("CAPTCHA completed ✅ - click Login again");
                    }
                });
            }

            alert("Please complete CAPTCHA ✅");
            return;
        }

        //  fetch("http://localhost:3000/login", {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //         username,
        //         password,
        //         captchaToken
        //     })
        // })
       // .then(res => res.json())
        ///.then(data => {
         //   console.log("✅ Server Response:", data);
            alert("Login Successful Username: "+ username);
       // });
    });
});
