window.displayMessage = function (type, title) {
    if (type == "success") {
        $("#success-message").show();
        $("#error-message").hide();
        $("#success-message h1").html(title);
    } else {
        $("#error-message").show();
        $("#success-message").hide();
        $("#error-message h1").html(title);
    }
    $("#messages-holder").show();
    setTimeout(() => {
        $("#messages-holder").hide();
    }, 3000);
};

window.fillPageContent = function (title, content) {
    $("#popup-page-title").html(title);
    $("#popup-page-content").html(content);
};
window.showPageWrapper = function () {
    $(".popup-page-wrap").css({ height: "100%" });
    $(".popup-page-wrap").css({ "min-height": "60%" });
    $("body").addClass("overlay-visible");
};
window.hidePageWrapper = function () {
    $(".popup-page-wrap").css({ height: "0" });
    $(".popup-page-wrap").css({ "min-height": "initial" });
    $("body").removeClass("overlay-visible");
};
window.hideNavMenu = function () {
    $("#nav-menu-container-wrap").css("width", "0");
    $("body").removeClass("overlay-visible");
};
window.showNavMenu = function () {
    $("#nav-menu-container-wrap").css({ width: "85%" });
    $("body").addClass("overlay-visible");
};

window.refreshNavMenu = function () {
    if (user !== null && user !== "null") {
        $("#nav-menu-container .my-orders").show();
        $("#nav-menu-container .logout").show();
        $("#nav-menu-container .my-orders-not-available").show();
        $("#nav-menu-container .login").hide();
        $("#nav-menu-container .register").hide();
        let name = user.name;
        if (null == name) {
            name = user.phone;
        }
        $("#user-name").html(name + "!");
        $("#welcome-user").show();

        if (user.is_company == "true") {
            $("#add-worker-button-wrap").show();
            $(".my-orders").hide();
            $(".my-orders-not-available").hide();
        } else {
            $("#add-worker-button-wrap").hide();
            $(".my-orders").show();
            $(".my-orders-not-available").show();
        }
    } else {
        $("#nav-menu-container .my-orders").hide();
        $("#nav-menu-container .login").show();
        $("#nav-menu-container .register").show();
        $("#nav-menu-container .logout").hide();
        $("#nav-menu-container .my-orders-not-available").hide();
        $("#nav-menu-container .profile").hide();
        $("#user-name").html("");
        $("#welcome-user").hide();
        $("#add-worker-button-wrap").hide();
    }
    $("#nav-menu-container li:visible").last().css("border-bottom", "none");
};
window.registerAutomaticOTPInputActiviation = function () {
    let inputs = $("#popup-page-content #otp > input");
    inputs[0].focus();
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("keydown", function (event) {
            if (event.key === "Backspace") {
                inputs[i].value = "";
                if (i !== 0) inputs[i - 1].focus();
            } else {
                if (i === inputs.length - 1 && inputs[i].value !== "") {
                    return true;
                } else if (
                    (event.keyCode > 47 && event.keyCode < 58) ||
                    (event.keyCode > 95 && event.keyCode < 106)
                ) {
                    inputs[i].value = event.key;
                    if (i !== inputs.length - 1) inputs[i + 1].focus();
                    event.preventDefault();
                } else if (event.keyCode > 64 && event.keyCode < 91) {
                    inputs[i].value = String.fromCharCode(event.keyCode);
                    if (i !== inputs.length - 1) inputs[i + 1].focus();
                    event.preventDefault();
                } else if (event.keyCode == 229) {
                    inputs[i].value = event.key;
                    if (i !== inputs.length - 1) inputs[i + 1].focus();
                    event.preventDefault();
                }
            }
        });
    }
};

window.signupFormConfig = {
    options: {
        displayInitialFieldsValdiations: true,
    },
    fields: {
        "#signup-phone": {
            rules: {
                required: { message: "???????????? ????????????" },
                length: {
                    message: "???????????? ?????????? 10 ??????????.",
                    length: 10,
                },
            },
        },
        /*
        "#signup-name": {
            rules: {
                required: { message: " ?????????? ????????????." },
                minLength: {
                    message: "?????? ?????????? 4 ????????",
                    minLength: 4,
                },
            },
        },
        "#signup-password": {
            rules: {
                required: {
                    message: "???????? ???????????? ??????????????.",
                },
                minLength: {
                    message: "?????? ?????????? 8 ??????????",
                    minLength: 8,
                },
                hasCapitalLetter: {
                    message: "???????? ???? ?????????? ?????? ?????? ????????.",
                    minLetters: 1,
                    maxLetters: 10,
                },
                hasSmallLetter: {
                    message: "???????? ???? ?????????? ?????? ?????? ????????.",
                    minLetters: 1,
                    maxLetters: 10,
                },
                // hasSpecialCharacter: {
                //     message: "???????? ???? ?????????? ?????? ?????? ??????.",
                //     minChars: 1,
                //     maxChars: 1,
                // },
                hasNumber: {
                    message: "???????? ???? ?????????? ?????? ??????.",
                    minNumbers: 1,
                    maxNumbers: 1,
                },
            },
        },
        */
    },
};

window.profileFormConfig = {
    options: {
        displayInitialFieldsValdiations: false,
    },
    fields: {
        "#profile-phone": {
            rules: {
                required: { message: "???????????? ????????????" },
                length: {
                    message: "???????????? ?????????? 10 ??????????.",
                    length: 10,
                },
            },
        },

        "#profile-name": {
            rules: {
                required: { message: " ?????????? ????????????." },
                minLength: {
                    message: "?????? ?????????? 4 ????????",
                    minLength: 4,
                },
            },
        },
    },
};
window.loginFormConfig = {
    options: {
        displayInitialFieldsValdiations: false,
    },
    fields: {
        "#login-phone": {
            rules: {
                required: { message: "???????????? ????????????" },
                length: {
                    message: "???????????? ?????????? 10 ??????????.",
                    length: 10,
                },
            },
        },
        /*
        "#login-password": {
            rules: {
                required: {
                    message: "???????? ???????????? ??????????????.",
                },
                minLength: {
                    message: "?????? ?????????? 8 ??????????",
                    minLength: 8,
                },
                hasCapitalLetter: {
                    message: "???????? ???? ?????????? ?????? ?????? ????????.",
                    minLetters: 1,
                    maxLetters: 10,
                },
                hasSmallLetter: {
                    message: "???????? ???? ?????????? ?????? ?????? ????????.",
                    minLetters: 1,
                    maxLetters: 10,
                },
                // hasSpecialCharacter: {
                //     message: "???????? ???? ?????????? ?????? ?????? ??????.",
                //     minChars: 1,
                //     maxChars: 1,
                // },
                hasNumber: {
                    message: "???????? ???? ?????????? ?????? ??????.",
                    minNumbers: 1,
                    maxNumbers: 1,
                },
            },
        },
        */
    },
};

window.addWorkerFormConfig = {
    options: {
        displayInitialFieldsValdiations: false,
    },
    fields: {
        "#add-worker-name": {
            rules: {
                required: { message: " ?????????? ????????????." },
                minLength: {
                    message: "?????? ?????????? 4 ????????",
                    minLength: 4,
                },
            },
        },
        "[name='add-worker-nationality']": {
            rules: {
                required: { message: "?????????????? ????????????" },
            },
            feedbackSelector: "#add-worker-nationality-feedback",
        },
        "[name='add-worker-language[]']": {
            rules: {
                required: { message: "?????????? ????????????" },
            },
            feedbackSelector: "#add-worker-language-feedback",
        },
        "#add-worker-age": {
            rules: {
                required: { message: "?????????? ????????????" },
            },
            feedbackSelector: "#add-worker-age-feedback",
        },
        "#add-worker-experience": {},
        "[name='add-worker-is_experience_in_sa']": {
            // rules: {
            //     required: { message: "???????????? ????????????????" },
            //     minLength: {
            //         message: "",
            //         minLength: 4,
            //     },
            // },
            // feedbackSelector: "#add-worker-is_experience_in_sa-feedback",
        },
        "[name='add-worker-religion']": {
            rules: {
                required: { message: "?????????????? ????????????" },
            },
            feedbackSelector: "#add-worker-religion-feedback",
        },
        "[name='add-worker-approve_chiled']": {
            // rules: {
            //     required: { message: "???????????? ????????????????" },
            //     minLength: {
            //         message: "",
            //         minLength: 4,
            //     },
            // },
            // feedbackSelector: "#add-worker-approve_chiled-feedback",
        },
        "[name='add-worker-is_coocked']": {
            // rules: {
            //     required: { message: "???????????? ????????????????" },
            //     minLength: {
            //         message: "",
            //         minLength: 4,
            //     },
            // },
            // feedbackSelector: "#add-worker-is_coocked-feedback",
        },
        "[name='add-worker-is_quick_for_booking']": {
            rules: {
                required: { message: "???????????? ????????????????" },
            },
            feedbackSelector: "#add-worker-is_quick_for_booking-feedback",
        },
        "#add-worker-time": {},
        "#add-worker-city": {},
        "#add-worker-visa_number": {},
        "#add-worker-description_ar": {},
        "#add-worker-description_en": {},
        "#add-worker-company_name_external": {},
        "#add-worker-company_co_register_external": {},
        /*
    "#signup-password": {
        rules: {
            required: {
                message: "???????? ???????????? ??????????????.",
            },
            minLength: {
                message: "?????? ?????????? 8 ??????????",
                minLength: 8,
            },
            hasCapitalLetter: {
                message: "???????? ???? ?????????? ?????? ?????? ????????.",
                minLetters: 1,
                maxLetters: 10,
            },
            hasSmallLetter: {
                message: "???????? ???? ?????????? ?????? ?????? ????????.",
                minLetters: 1,
                maxLetters: 10,
            },
            // hasSpecialCharacter: {
            //     message: "???????? ???? ?????????? ?????? ?????? ??????.",
            //     minChars: 1,
            //     maxChars: 1,
            // },
            hasNumber: {
                message: "???????? ???? ?????????? ?????? ??????.",
                minNumbers: 1,
                maxNumbers: 1,
            },
        },
    },
    */
    },
};
