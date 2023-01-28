import meValitation from "../lib/me-validation/me-validation.js";

const apisObject = {
    fetchPage: function (data) {
        let pageSlug = data.pageSlug;
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: homeUrl + "/get_page",
                data: data,
                beforeSend: function () {
                    window.showPageWrapper();
                    window.fillPageContent("", "");
                    $("#page-loading").show();
                    $("#loading").show();
                    $("#nav-menu-container-wrap").css({ width: 0 });
                },
                success: function (data) {
                    window.fillPageContent(data.title, data.content);
                    window.showPageWrapper();
                    if (pageSlug == "register") {
                        meValitation.meDisplayFieldsRules(
                            window.signupFormConfig
                        );
                        meValitation.meRegisterRealtimeValidation(
                            "#signup-form",
                            window.signupFormConfig
                        );
                    }
                    if (pageSlug == "login") {
                        // meValitation.meRegisterRealtimeValidation(
                        //     "#login-form",
                        //     window.loginFormConfig
                        // );
                    }
                    if (pageSlug == "profile") {
                        meValitation.meRegisterRealtimeValidation(
                            "#profile-form",
                            window.profileFormConfig
                        );
                    }
                    if (pageSlug == "add-worker") {
                        meValitation.meRegisterRealtimeValidation(
                            "#popup-page-content #add-worker-form",
                            window.addWorkerFormConfig
                        );
                    }
                    $("body").attr("data-page-slug", pageSlug);
                    if (
                        pageSlug == "product" ||
                        pageSlug == "client-worker-order" ||
                        pageSlug == "order"
                    ) {
                        $("body").attr("data-product-id", data.productId);
                    }
                    resolve(data);
                },
                error: function (error) {
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(error);
                },
                complete: function () {
                    $("#page-loading").hide();
                    $("#loading").hide();
                },
                dataType: "json",
            });
        });
    },
    /*
    initMiddleMenuPopups: function () {
        $("#middle-menu .popup-trigger").on("click", function () {
            var data = { pageSlug: "الحساسية", _token: csrfToken };
            $.ajax({
                type: "POST",
                url: homeUrl + "/get_page",
                data: data,
                beforeSend: function () {
                    // setting a timeout
                },
                success: function (data) {
                    window.fillPageContent(data.title, data.content);
                },
                error: function (xhr) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    window.hidePageWrapper();
                },
                complete: function () {
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    */
    getPage: function (params) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "GET",
                url: homeUrl + "/get_page",
                data: params,
                beforeSend: function () {
                    $("#loading").show();
                },
                success: function (data) {
                    window.fillPageContent(data.title, data.content);
                    resolve(data);
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    window.hidePageWrapper();
                    resolve(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    checkLogin: function () {
        return new Promise(function (resolve, reject) {
            // Check login
            let loginData = { _token: csrfToken };
            $.ajax({
                type: "POST",
                url: homeUrl + "/check_login",
                data: loginData,
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                success: function (data) {
                    if (data) {
                        resolve({ success: true, message: "" });
                    } else {
                        reject({ success: false, message: "" });
                    }
                },
                error: function (xhr) {
                    reject({
                        success: false,
                        message: "Error occured.please try again",
                    });
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
        // End Check login
    },
    /*
    sendLoginRequest: function (phone, password) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: homeUrl + "/login",
                data: {
                    _token: csrfToken,
                    phone: phone,
                    password: password,
                },
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,

                success: function (data) {
                    resolve(data);
                    //  Hide loadoing
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    */
    sendRegistrationRequest: function (phone, isCompany) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: homeUrl + "/register",
                data: {
                    _token: csrfToken,
                    phone: phone,
                    isCompany: isCompany,
                },
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,

                success: function (data) {
                    resolve(data);
                    //  Hide loadoing
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    sendUpdateProfileRequest: function (phone, name) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "GET",
                url: homeUrl + "/update_profile",
                data: {
                    _token: csrfToken,
                    phone: phone,
                    name: name,
                },
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,

                success: function (data) {
                    resolve(data);
                    //  Hide loadoing
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    sendAddWorkerRequestRequest: function (params) {
        params.append("_token", csrfToken);
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "POST",
                url: homeUrl + "/add_worker",
                data: params,
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,

                success: function (data) {
                    resolve(data);
                    //  Hide loadoing
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                processData: false,
                contentType: false,
                dataType: "json",
            });
        });
    },
    getOTPForm: function (phone, otp, productId, isCompany, isRegister) {
        var params = {
            pageType: "otp",
            pageSlug: "otp",
            phone: phone,
            productId: productId,
            otp: otp,
            isCompany: isCompany,
            isRegister: isRegister,
            _token: csrfToken,
        };
        return this.getPage(params);
    },
    sendConfirmOTPRequest: function (phone, otp, isCompany) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: homeUrl + "/check_otp",
                data: {
                    _token: csrfToken,
                    otp: otp,
                    phone: phone,
                    isCompany: isCompany,
                },
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,
                success: function (data) {
                    if (data.success == true) {
                        window.displayMessage("success", data.message);
                        resolve(data);
                    } else {
                        window.displayMessage("error", data.message);
                        reject(data);
                    }
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    resendOTP: function (phone) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url: homeUrl + "/resend_otp",
                data: { phone: phone },
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,
                success: function (data) {
                    window.displayMessage("success", "تم ارسال كود التأكيد.");
                    resolve(data);
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                },
                dataType: "json",
            });
        });
    },
    logout: function () {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: homeUrl + "/logout",
                data: {
                    _token: csrfToken,
                },
                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,
                success: function (data) {
                    window.displayMessage("success", "تم الخروج بنجاح.");
                    resolve(data);
                },
                error: function (data) {
                    // if error occured
                    window.displayMessage(
                        "error",
                        "Error occured.please try again"
                    );
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    sendContactMessage: function () {
        let name = $("#contactForm #name").val();
        let subject = $("#contactForm #subject").val();
        let email = $("#contactForm #email").val();
        let phone = $("#contactForm #phone").val();
        let message = $("#contactForm #message").val();
        let contactUsData = {
            _token: csrfToken,
            name: name,
            subject: subject,
            email: email,
            phone: phone,
            message: message,
        };
        $.ajax({
            type: "POST",
            url: homeUrl + "/send_contact_message",
            data: contactUsData,
            beforeSend: function () {
                // setting a timeout
                $("#loading").show();
            },
            // async: false,

            success: function (data) {
                // show success message
                if (data.is_sent) {
                    window.displayMessage(
                        "success",
                        "Your message has been sent successfully"
                    );

                    window.hidePageWrapper();
                } else {
                    window.displayMessage(
                        "error",
                        "Your meesage hasn't been sent"
                    );
                }
                //  Hide loadoing
            },
            error: function (xhr) {
                // if error occured
                window.displayMessage(
                    "error",
                    "Error occured.please try again"
                );
            },
            complete: function () {
                $("#loading").hide();
            },
            dataType: "json",
        });
    },
    bookWorker: function (workerStatus) {
        return new Promise(function (resolve, reject) {
            let workerId = $(".worker-id").val();
            let userPhone = $(".booking-user-phone").val();

            let userVisaNumber = $("#user-visa-number").val();
            let userIdNumber = $("#user-id-number").val();
            let userName = $("#booking-user-name").val();
            let userDOB = $("#user-DOB").val();
            var formData = new FormData();
            formData.append("worker_id", workerId);
            formData.append("phone", userPhone);
            formData.append("worker-status", workerStatus);

            if (workerStatus == 1 || workerStatus == 2) {
                formData.append("id-number", userIdNumber);
                formData.append("name", userName);
                formData.append("DOB", userDOB);
                formData.append("visa-number", userVisaNumber);

                formData.append(
                    "visa_image",
                    $("#user-visa-image")[0].files[0]
                );
                $("#loading").show();
            }

            $.ajax({
                type: "POST",
                url: homeUrl + "/book_worker",
                data: formData,
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                },
                beforeSend: function () {
                    $("#loading").show();
                },
                // async: false,
                success: function (data) {
                    // show success message
                    resolve(data);
                    //  Hide loadoing
                },
                error: function (error) {
                    // if error occured
                    reject(error);
                },
                complete: function () {
                    $("#loading").hide();
                },
                dataType: "json",
                contentType: false,
                cache: false,
                processData: false,
            });
        });
    },
    filterWorkers: function () {
        let nationality = $('input[name="filter-nationality"]:checked').val();
        let religion = $('input[name="filter-religion"]:checked').val();
        let languages = $("#filter-languages").val();
        let canCook = $('input[name="can-cook"]:checked').val();
        let acceptChildren = $('input[name="accept-children"]:checked').val();
        let ageFrom = $("#age-from").val();
        let ageTo = $("#age-to").val();
        let experienceFrom = $("#experience-from").val();
        let experienceTo = $("#experience-to").val();
        let admissionPeriod = $('input[name="admission-peried"]:checked').val();
        let admissionPeriodFrom = $("#admission-peried-from").val();
        let admissionPeriodTo = $("#admission-peried-to").val();
        let city = $("#filter-city").val();
        let saudiExperience = $('input[name="saudi-experience"]:checked').val();
        // let company = $("#filter-company").val();

        var data = {
            nationality: nationality,
            religion: religion,
            languages: languages,
            canCook: canCook,
            acceptChildren: acceptChildren,
            ageFrom: ageFrom,
            ageTo: ageTo,
            experienceFrom: experienceFrom,
            experienceTo: experienceTo,
            admissionPeriod: admissionPeriod,
            admissionPeriodFrom: admissionPeriodFrom,
            admissionPeriodTo: admissionPeriodTo,
            city: city,
            saudiExperience: saudiExperience,
            // company: company,
        };
        $.ajax({
            type: "GET",
            url: homeUrl + "/workers_filter",
            data: data,
            beforeSend: function () {
                // setting a timeout
                $("#loading").show();
            },
            success: function (data) {
                $("#filters-wrap").css({ width: "0" });
                $("body").removeClass("overlay-visible");
                $("#tab1").html(data.tab1);
                $("#tab2").html(data.tab2);
                $("#tab3").html(data.tab3);
                $("#tab4").html(data.tab4);
            },
            error: function (xhr) {
                // if error occured
                window.displayMessage(
                    "error",
                    "Error occured.please try again"
                );
            },
            complete: function () {
                $("#loading").hide();
            },
            dataType: "json",
        });
    },
    searchWorkers: function (query) {
        $.ajax({
            type: "GET",
            url: homeUrl + "/search_workers?key=" + query,
            beforeSend: function () {
                // setting a timeout
                $("#loading").show();
            },
            success: function (data) {
                $("#filters-wrap").css({ width: "0" });
                $("body").removeClass("overlay-visible");
                $("#tab1").html(data.tab1);
                $("#tab2").html(data.tab2);
                $("#tab3").html(data.tab3);
            },
            error: function (xhr) {
                // if error occured
                window.displayMessage(
                    "error",
                    "Error occured.please try again"
                );
            },
            complete: function () {
                $("#loading").hide();
            },
            dataType: "json",
        });
    },
    deleteOrder: function (orderId, orderWorkerBookingStatus) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url:
                    homeUrl +
                    "/delete_order?order_id=" +
                    orderId +
                    "&worker_booking_status=" +
                    orderWorkerBookingStatus,

                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,
                success: function (data) {
                    resolve(data);
                },
                error: function (data) {
                    // if error occured
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
    deleteOrderNotAvailable: function (orderId) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "get",
                url:
                    homeUrl + "/delete_order_not_available?order_id=" + orderId,

                beforeSend: function () {
                    // setting a timeout
                    $("#loading").show();
                },
                // async: false,
                success: function (data) {
                    resolve(data);
                },
                error: function (data) {
                    // if error occured
                    reject(data);
                },
                complete: function () {
                    $("#loading").hide();
                    $("#page-loading").hide();
                },
                dataType: "json",
            });
        });
    },
};

export default apisObject;
