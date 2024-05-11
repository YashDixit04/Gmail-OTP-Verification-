function sendOTP() {
    const email = document.getElementById("email");
    const otpVerify = document.getElementsByClassName("otpverify")[0];


    let otp_val = Math.floor(Math.random() * 10000);

    console.log(otp_val)

    let emailBody = `<h2> Your OTP is </h2>${otp_val}`;

    console.log(emailBody)

    Email.send({
        SecureToken: "29da9d9f-c830-4fb3-b75b-e059f1c7d375",
        To: email.value,
        From: "yashrajdixit383@gmail.com",
        Subject: "Email Verification",
        Body: emailBody,
    }).then(
        message => {
            if (message === 'ok') {
                alert("Check your email and verify the OTP !")

                otpVerify.computedStyleMap.display = "flex";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn');

                otp_btn.addEventListener('click', () => {
                    if (otp_inp.value == otp_val) {
                        alert("email address verified..")

                    } else {
                        alert("invalid OTP")
                    }
                })

            }
        }
    );

    console.log(Email.send)
}




