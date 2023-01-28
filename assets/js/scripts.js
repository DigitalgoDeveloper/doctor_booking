import apisObject from "./apis.js?v=31";
$(function () {
    registerFetchMenuPages();

    var fixedNavXPosition = $("#fixed-nav").position().top;
    $(".toolbar a").on("click", function () {
        $(".toolbar a.active").removeClass("active");
        let targetTab = $(this).attr("href");
        $("#products-list-wrap>div").removeClass("active");
        $(targetTab).addClass("active");
        $(this).addClass("active");
        $("html, body").animate({ scrollTop: fixedNavXPosition }, "slow");

        $("#categories-wrap>div").removeClass("active");
        $("#categories-wrap>div").first().addClass("active");
    });

    $(window).scroll(function (event) {
        var WindowScrollTop = $(window).scrollTop();
        if (fixedNavXPosition < WindowScrollTop) {
            $("#products-list-wrap").css({ "margin-top": "0px" });
        } else {
            $("#products-list-wrap").css({ "margin-top": "0px" });
        }
        // Do something
    });

    $("#categories-wrap>div").on("click", function () {
        $("#categories-wrap>div").removeClass("active");
        $(this).addClass("active");
        let targetId = $(this).attr("target");
        let targetCategory = $("#products-list-wrap>div.active").find(
            "[cat-id='" + targetId + "']"
        );
        let targetCategoryTopPosition = targetCategory.position().top;
        $("html, body").animate(
            { scrollTop: targetCategoryTopPosition - 110 },
            "slow"
        );
    });

    // $(document).on("click", "#tab4 .video-play-button", function () {
    //     let video = $(this).parent().find("video").get(0);
    //     video.paused ? video.play() : video.pause();
    // });

    var previousScroll = 0;
    let topPosition = 170;
    let windowHeight = $(window).height();
    $(window).on("scroll", function () {
        var topPosition = $(this).scrollTop();
        let bottomPosition = topPosition + $(window).height();
        let videos = $("#tab4 video");
        for (let i = 0; i < videos.length; i++) {
            let videoTop = videos[i].getBoundingClientRect().top;
            let videoBottom = videos[i].getBoundingClientRect().bottom;
            if (
                videoTop > 0 &&
                videoTop < $(window).height() &&
                videoBottom > 0 &&
                videoBottom < $(window).height()
            ) {
                videos[i].play();
            } else {
                videos[i].pause();
            }
        }
    });
    $(window).on("scroll", function () {
        var currentScroll = $(this).scrollTop();
        let categoriesContainers = $("#products-list-wrap>div.active>div");

        if (currentScroll > previousScroll) {
            // Wheel scroll down
            // Window top is increasing
            // Check scrolling on top

            for (let i = 0; i < categoriesContainers.length; i++) {
                if (
                    $(categoriesContainers[i]).position().top <
                    currentScroll + topPosition
                ) {
                    if (
                        $(window).scrollTop() + $(window).height() ==
                        $(document).height()
                    ) {
                        $("#categories-wrap>div").removeClass("active");
                        let target = $("#categories-wrap>div:last");
                        target.addClass("active");
                        var left = target.offset().left;
                        $("#categories-wrap").scrollLeft(left - 300);
                    } else {
                        let prevAvtiveCategory = $("#categories-wrap>.active");
                        var targetId = $(categoriesContainers[i]).attr(
                            "cat-id"
                        );
                        $("#categories-wrap>div").removeClass("active");
                        let target = $(
                            "#categories-wrap>[target='" + targetId + "']"
                        );
                        target.addClass("active");
                        if (
                            prevAvtiveCategory.attr("target") !==
                            target.attr("target")
                        ) {
                            var left = target.offset().left;
                            $("#categories-wrap").scrollLeft(left - 200);
                        }
                    }
                }
            }
        } else {
            // Wheel scroll up
            // Window top is decreasing
            // Check scrolling on bottom
            for (let i = categoriesContainers.length - 1; i > -1; i--) {
                if ($(window).scrollTop() == 0) {
                    $("#categories-wrap>div").removeClass("active");
                    let target = $("#categories-wrap>div:first");
                    target.addClass("active");
                    $("#categories-wrap").scrollLeft(0);
                } else {
                    if (
                        $(categoriesContainers[i]).position().top +
                        $(categoriesContainers[i]).height() >
                        currentScroll + windowHeight
                    ) {
                        var prevAvtiveCategory = $("#categories-wrap>.active");
                        var targetId = $(categoriesContainers[i]).attr(
                            "cat-id"
                        );
                        let target = $(
                            "#categories-wrap>[target='" + targetId + "']"
                        );
                        $("#categories-wrap>div").removeClass("active");

                        target.addClass("active");
                        if (
                            prevAvtiveCategory.attr("target") !==
                            target.attr("target")
                        ) {
                            var left = target.offset().left;
                            $("#categories-wrap").scrollLeft(left - 200);
                        }
                    }
                }
            }
        }
        previousScroll = currentScroll;
    });

    $(".close:not('#filters-wrap .close')").on("click", function () {
        window.location.href = "/";
        window.hidePageWrapper();
    });
    $("#open-menu").on("click", function () {
        window.showNavMenu();
    });
    $("#close-menu").on("click", function () {
        window.hideNavMenu();
    });
    $("#popup-page-content").on("click", "#close-booking-form", function () {
        window.location.href = "/";
        $("#booking-form-wrap").css({ height: "0" });
    });
    $("#popup-page-content").on(
        "click",
        "#close-booked-booking-form",
        function () {
            $("#booking-form-wrap").css({ height: "0" });
        }
    );

    $("#themeSwitcher").on("change", function () {
        if ($(this).is(":checked")) {
            $("body").addClass("dark");
            document.documentElement.style.setProperty("--color1", "#c98226");
            document.documentElement.style.setProperty("--color2", "white");
            document.documentElement.style.setProperty("--color3", "#222");
        } else {
            $("body").removeClass("dark");
            document.documentElement.style.setProperty("--color1", "#e84753");
            document.documentElement.style.setProperty("--color2", "#222");
            document.documentElement.style.setProperty("--color3", "white");
        }
    });

    $(document).on("click", "#login-showpassword", function () {
        var loginPassword = $("#login-password").get(0);
        if (loginPassword.type === "password") {
            loginPassword.type = "text";
        } else {
            loginPassword.type = "password";
        }
    });

    $("#popup-page-content").on("click", ".delete-accepted-order", function () {
        window.displayMessage("error", "لا يمكن حذف طلب مقبول");
    });

    $("#popup-page-content").on(
        "click",
        ".booked-unavailable-worker-button",
        function () {
            window.displayMessage(
                "error",
                "هذة العاملة غير متاحة, سوف يتم اشعارك حينما تكون متاحة للحجز. <br> لمزيد من التفاصيل اضغط على اشعرنى من القائمة."
            );
        }
    );
    $(document).on("click", ".play-button-wrap", function () {
        let video = $(this).parent().find("video");
        let videJS = video.get(0);
        let image = $(this).parent().find("img.product-image");

        if (video.is(":visible")) {
            videJS.pause();
            video.hide();
            image.show();
        } else {
            videJS.play();
            video.show();
            image.hide();
        }
    });

    // APIS////////////////////////////////////////
    // apisObject
    //     .checkLogin()
    //     .then((data) => {
    //         if (data.success) {
    //             window.refreshNavMenu();
    //         }
    //     })
    //     .catch((data) => {
    //         if (!data.success) {
    //             window.displayMessage("error", data.message);
    //         }
    //         window.refreshNavMenu();
    //     });
    // pages/////////////////////////
    function registerFetchMenuPages() {
        $(document).on("click", ".popup-trigger", function () {
            let pageType = $(this).attr("data-page-type");
            let pageSlug = $(this).attr("data-page-slug");
            var data = {
                pageType: pageType,
                pageSlug: pageSlug,
                _token: csrfToken,
            };
            apisObject.fetchPage(data);
        });
    }

    $(".popup-page-wrap .close").on("click", function () {
        let pageType = "";
        let pageSlug = "";
        let productId = null;
        let dataPageSlugAttr = $("body").attr("data-page-slug");
        if (dataPageSlugAttr !== undefined) {
            let slugs = [
                "client-worker-order",
                "client-worker-order-not-available",
                "client-product-worker-order",
            ];
            if (slugs.includes(dataPageSlugAttr)) {
                productId = $("body").attr("data-product-id");
                if (dataPageSlugAttr == "client-product-worker-order") {
                    pageType = "product";
                    pageSlug = "product";
                } else if (
                    dataPageSlugAttr == "client-worker-order-not-available"
                ) {
                    pageType = "orders-not-available";
                    pageSlug = "orders-not-available";
                } else if (dataPageSlugAttr == "client-worker-order") {
                    pageType = "orders";
                    pageSlug = "orders";
                }
                var params = {
                    pageType: pageType,
                    pageSlug: pageSlug,
                    productId: productId,
                    _token: csrfToken,
                };
                apisObject.fetchPage(params);
            }
        }

        $("body").removeAttr("data-product-id");
        $("body").removeAttr("data-page-slug");
    });

    $("#popup-page-content").on("click", ".show-product-order", function () {
        let productId = $(this).attr("data-product-id");
        var params = {
            pageType: "client-product-worker-order",
            pageSlug: "client-product-worker-order",
            productId: productId,
            _token: csrfToken,
        };
        apisObject.fetchPage(params).then((data) => {
            $("body").addClass("order");
            $("body").attr("data-order-id", productId);
        });
    });

    // $("#popup-page-content").on(
    //     "click",
    //     ".show-product-order-not-available",
    //     function () {
    //         let productId = $(this).attr("data-product-id");
    //         var params = {
    //             pageType: "client-worker-order-not-available",
    //             pageSlug: "client-worker-order-not-available",
    //             productId: productId,
    //             _token: csrfToken,
    //         };
    //         apisObject.fetchPage(params).then((data) => {
    //             $("body").attr("data-order-id", productId);
    //         });
    //     }
    // );

    $("#popup-page-content").on("click", ".show-order", function () {
        let productId = $(this).attr("data-product-id");
        var params = {
            pageType: "client-worker-order",
            pageSlug: "client-worker-order",
            productId: productId,
            _token: csrfToken,
        };
        apisObject.fetchPage(params).then((data) => {
            $("body").attr("data-order-id", productId);
        });
    });

    $("#products-list-wrap").on("click", ".show-product", function () {
        /* Admission code
        let productId = $(this).attr("data-product-id");
        var params = {
            pageType: "product",
            pageSlug: "product",
            productId: productId,
            _token: csrfToken,
        };
        apisObject.fetchPage(params).then((data) => {
            $("body").addClass("product");
            $("body").attr("data-product-id", productId);
        });
        */
        window.location.href = "/doctor_details.php";

    });

    // End pages/////////////////////////
    $("#nav-menu-container li div.home").on("click", function () {
        window.hideNavMenu();
    });

    $("#popup-page-content").on("submit", "#login-form", function (e) {
        e.preventDefault();
        if (!$("#agree-terms-conditions").is(":checked")) {
            window.displayMessage(
                "error",
                "الموافقة على الشروط و الاحكام اجبارى لتسجيل الدخول"
            );

            return false;
        }
        let phone = $("#login-form #login-phone").val();
        let productId = $(this).attr("data-product-id");
        let isCompany = $("#login-as-company-login").is(":checked");
        let isRegister = $(this).hasClass("register");
        apisObject
            .sendRegistrationRequest(phone, isCompany)
            .then((data) => {
                if (data.success) {
                    // show otp form
                    apisObject
                        .getOTPForm(
                            data.phone,
                            data.otp,
                            productId,
                            isCompany,
                            isRegister
                        )
                        .then((data) => {
                            window.fillPageContent("كود التأكيد", data.form);
                            window.showPageWrapper();
                            window.registerAutomaticOTPInputActiviation();
                        })
                        .catch((data) => {
                            window.displayMessage("error", data.message);
                        });
                } else {
                    // Show error in logging
                    if (!data.success) {
                        window.displayMessage("error", data.message);
                    }
                }
            })
            .catch((error) => {
                // Show error
                console.log(error);
            });
        return false;
    });

    $("#popup-page-content").on("submit", "#profile-form", function (e) {
        e.preventDefault();
        let phone = $("#profile-form #profile-phone").val();
        let name = $("#profile-form #profile-name").val();

        apisObject
            .sendUpdateProfileRequest(phone, name)
            .then((data) => {
                if (data.success) {
                    // show otp form

                    let name = data.data.name;
                    let phone = data.data.phone;
                    if (name == null) {
                        name = data.data.phone;
                    }
                    user = {
                        loggedin: true,
                        name: name,
                        phone: phone,
                    };

                    window.hidePageWrapper();
                    window.refreshNavMenu();
                    window.displayMessage("success", data.message);
                } else {
                    // Show error in logging
                    if (!data.success) {
                        window.displayMessage("error", data.message);
                    }
                }
            })
            .catch((error) => {
                // Show error
                console.log(error);
            });
        return false;
    });
    $("#popup-page-content").on("submit", "#add-worker-form", function (e) {
        e.preventDefault();
        let params = {
            name: $("#add-worker-name").val(),
            image: $("#add-worker-image")[0].files[0],
            video: $("#add-worker-video")[0].files[0],
            nationality: $("[name='add-worker-nationality']:checked").val(),
            age: $("#add-worker-age").val(),
            experience: $("#add-worker-experience").val(),
            is_experience_in_sa: $(
                "[name='worker-is_experience_in_sa']:checked"
            ).val(),
            language: $("#add-worker-language").val(),
            religion: $("[name='add-worker-religion']:checked").val(),
            approve_chiled: $(
                "[name='add-worker-approve_chiled']:checked"
            ).val(),
            is_coocked: $("[name='add-worker-is_coocked']:checked").val(),
            time: $("#add-worker-time").val(),
            city: $("#add-worker-city").val(),
            visa_number: $("#add-worker-visa_number").val(),
            description_ar: $("#add-worker-description_ar").val(),
            description_en: $("#add-worker-description_en").val(),
            company_name_external: $("#add-worker-company_name_external").val(),
            company_co_register_external: $(
                "#add-worker-company_co_register_external"
            ).val(),
        };
        let params_ = new FormData($(this)[0]);

        apisObject
            .sendAddWorkerRequestRequest(params_)
            .then((data) => {
                if (data.success) {
                    window.displayMessage("success", data.message);
                    window.hidePageWrapper();
                    location.reload();
                } else {
                    if (!data.success) {
                        window.displayMessage("error", data.message);
                    }
                }
            })
            .catch((error) => {
                window.displayMessage("error", "Error occured");
                console.log(error);
            });
        return false;
    });

    $("#nav-menu-container li.logout").on("click", function () {
        apisObject
            .logout()
            .then((data) => {
                window.hideNavMenu();
                user = null;
                window.refreshNavMenu();
            })
            .catch((data) => {
                window.displayMessage("error", "حدث مشكلة اثناء تسجيل الخروج.");
            });
        window.hideNavMenu();
        user = null;
        window.refreshNavMenu();
    });

    $("#popup-page-content").on("submit", "#otp-form", function (e) {
        e.preventDefault();
        var phone = $("#otp-phone").val();
        let productId = $(this).attr("data-product-id");
        let isCompany = $(this).attr("data-is-company");
        let isRegister = $(this).hasClass("register");

        var otp =
            $("#first").val() +
            $("#second").val() +
            $("#third").val() +
            $("#fourth").val();
        apisObject
            .sendConfirmOTPRequest(phone, otp, isCompany, isRegister)
            .then((data) => {
                if (data.success) {
                    if (data.success == true) {
                        // show otp form
                        window.displayMessage("success", data.message);
                        let name = data.data.name;
                        if (name == null) {
                            name = data.data.phone;
                        }
                        user = {
                            loggedin: true,
                            name: name,
                            phone: data.data.phone,
                            is_company: isCompany,
                        };

                        window.hidePageWrapper();
                        window.refreshNavMenu();
                        if (isRegister == true || isRegister == "true") {
                            var params = {
                                pageType: "profile",
                                pageSlug: "profile",
                                _token: csrfToken,
                            };
                            apisObject.fetchPage(params);
                        }
                        if (productId !== "") {
                            var params = {
                                pageType: "product",
                                pageSlug: "product",
                                productId: productId,
                                _token: csrfToken,
                            };
                            apisObject.fetchPage(params).then((data) => {
                                $("#booking-form-wrap").css({ height: "100%" });
                            });

                        }
                        location.reload();
                    } else {
                        // Show error in logging
                        window.displayMessage("error", data.message);
                    }
                    /*
                    Show login
                    apisObject
                        .sendLoginRequest(phone, password)
                        .then((data) => {
                            if (data.success == true) {
                                // show otp form
                                window.displayMessage("success", data.message);
                                user = {
                                    loggedin: true,
                                    name: data.name,
                                    phone: data.phone,
                                };
                                window.hidePageWrapper();
                                window.refreshNavMenu();
                            } else {
                                // Show error in logging
                                window.displayMessage("error", data.message);
                            }
                        })
                        .catch((error) => {
                            window.displayMessage("error", error.message);
                        });
                    */
                }
            })
            .catch((error) => {
                // Show error
                console.log(error);
                window.displayMessage("error", error.message);
            });
        return false;
    });
    $(document).on("click", "#resend-otp", function () {
        let phone = $("#otp-phone").val();
        apisObject
            .resendOTP(phone)
            .then((data) => {
                if (data.success) {
                    // Show login
                }
            })
            .catch((error) => {
                // Show error
                console.log(error);
            });
    });
    $(".popup-page-wrap").on("click", ".saned-button", function () {
        /* //Admission code
        if (null == user || "null" == user) {
            var data = {
                pageType: "login",
                pageSlug: "login",
                _token: csrfToken,
                productId: $(".product-details").attr("data-worker-id"),
            };
            apisObject.fetchPage(data);
            return;
        }

        $("#booking-form-wrap").css({ height: "100%" });
        return false;*/

        window.location.href = "/book.php";

    });
    // $(document).on("input", "#booked-user-phone", function () {
    //     var userPhone = $("#booked-user-phone");
    //     var userPhoneValue = $("#booked-user-phone").val();
    //     if (userPhoneValue.length !== 10) {
    //         userPhone.removeClass("is-valid");
    //         userPhone.addClass("is-invalid");
    //         document
    //             .getElementById("booked-user-phone")
    //             .setCustomValidity("Invalid field.");
    //         return false;
    //     } else {
    //         userPhone.addClass("is-valid");
    //         userPhone.removeClass("is-invalid");
    //         document.getElementById("booked-user-phone").setCustomValidity("");
    //     }
    // });

    $("#popup-page-content").on(
        "submit",
        "#booking-form,#booked-booking-form",
        function (e) {
            e.preventDefault();
            let workerStatus = $("#popup-page-content .product-details").attr(
                "data-worker-status"
            );

            apisObject
                .bookWorker(workerStatus)
                .then((data) => {
                    $("#booking-form-wrap").css({ height: "0" });
                    let success = "error";
                    if (data.success == true) {
                        success = "success";
                        $("#thank-you").show();
                        var interval = setInterval(() => {
                            let timeValue = parseInt($(".timer").text());
                            if (timeValue <= 1) {
                                $("#saned-form").hide();
                                $("#thank-you").hide();
                                window.hidePageWrapper();
                                $("body").removeClass("overlay-visible");
                                timeValue = 6;
                                clearInterval(interval);
                            }
                            $(".timer").html(timeValue - 1);
                        }, 1000);
                    } else {
                        window.displayMessage("error", data.message);
                    }
                })
                .catch((error) => {
                    window.displayMessage("error", error);
                });
            return false;
        }
    );

    $("#close-saned-form").on("click", function () {
        $("#saned-form").hide();
    });

    $("#popup-page-content").on("submit", "#contactForm", function () {
        apisObject.sendContactMessage();
        return false;
    });

    // Filters/////////////////
    $("#search_text").on("input", function () {
        // let query = $(this).val();
        // apisObject.searchWorkers(query);
    });
    if ($("#admisison-period-filter-wrap .btn-check:checked").val() == 1) {
        $("#admission-periods-filter-inputs-wrap").show();
    }
    $("#admisison-period-filter-wrap .btn-check").on("change", function () {
        if ($(this).val() == 1) {
            $("#admission-periods-filter-inputs-wrap").show();
        } else {
            $("#admission-periods-filter-inputs-wrap").hide();
        }
    });
    if (filtersHaveValues()) {
        $("#reset-filters-trigger").addClass("has-filters");
    }
    $("#filters-wrap input,#filters-wrap select").on("change", function () {
        if (filtersHaveValues()) {
            $("#reset-filters-trigger").addClass("has-filters");
        } else {
            $("#reset-filters-trigger").removeClass("has-filters");
        }
    });
    $("#search_text").on("input", function () {
        // if (filtersHaveValues()) {
        //     $("#reset-filters-trigger").addClass("has-filters");
        // } else {
        //     $("#reset-filters-trigger").removeClass("has-filters");
        // }
    });

    function filtersHaveValues() {
        $(
            "#filters-wrap input[type='text'],#filters-wrap input[type='number']"
        ).each(function () {
            if ($(this).val() !== "") {
                return true;
            }
        });
        if ($("#filters-wrap .btn-check:checked").length > 0) {
            return true;
        }
        $("#filters-wrap select").each(function () {
            if ($(this).val() !== "") {
                return true;
            }
        });
        if ($("#search_text").val() !== "") return true;
        return false;
    }
    $("#filters-trigger").on("click", function () {
        $("#filters-wrap").css({ width: "100%" });
        $("body").addClass("overlay-visible");
    });
    $("#filters-wrap .close").on("click", function () {
        $("#filters-wrap").css({ width: "0" });
        $("body").removeClass("overlay-visible");
    });

    $("#submit-filters").on("click", function () {
        // apisObject.filterWorkers();
        $("#filters-trigger").addClass("active");

        if ($('#filter-languages').val() !== null && $('#filter-languages').val() !== '') {
            console.log('#cat-' + $('#filter-languages').val() + '-button')
            $('#cat-' + $('#filter-languages').val() + '-button').trigger('click')
        }
        $('#filters-wrap').css({ 'width': 0 })

        return false;
    });

    $("#reset-filters,#reset-filters-trigger").on("click", function () {
        // $(this).removeClass("has-filters");
        $("#search_text").val("");
        // $('input[name="filter-nationality"]:checked').prop("checked", false);
        // $('input[name="filter-religion"]:checked').prop("checked", false);
        // $("#reset-company").val("");
        // $("#price_from").val(0);
        // $("#price_to").val(0);

        // $("#filter-languages").val("");
        // $('input[name="can-cook"]:checked').prop("checked", false);
        // $('input[name="accept-children"]:checked').prop("checked", false);
        // $("#age-from").val("");
        // $("#age-to").val("");
        // $("#experience-from").val("");
        // $("#experience-to").val("");
        // $('input[name="admission-peried"]:checked').prop("checked", false);
        // $("#admission-peried-from").val("");
        // $("#admission-peried-to").val("");
        // $("#filter-city").val("");
        // $('input[name="saudi-experience"]:checked').prop("checked", false);

        // $("#submit-filters").trigger("click");
        // $("#filters-trigger").removeClass("active");

        return false;
    });
    // End filters/////////////////

    $("#popup-page-content").on("click", ".delete-order", function () {
        let deleteButton = $(this);
        let orderId = $(this).attr("data-order-id");
        let orderWorkerBookingStatus = $(this).attr(
            "data-order-booking-status"
        );
        apisObject
            .deleteOrder(orderId, orderWorkerBookingStatus)
            .then((data) => {
                let success = "error";
                if (data.success == true) {
                    success = "success";
                    deleteButton.closest("tr").remove();
                }
                window.displayMessage(success, data.message);
                if (
                    $("#popup-page-content #user-orders table tbody tr")
                        .length == 0
                ) {
                    window.hidePageWrapper();
                }
            })
            .catch((data) => {
                let success = "error";
                if (data.success) success = "success";
                window.displayMessage(success, data.message);
            });
    });

    $("#popup-page-content").on(
        "click",
        ".delete-order-not-available",
        function () {
            let deleteButton = $(this);
            let orderId = $(this).attr("data-order-id");
            let success = "success";
            apisObject
                .deleteOrderNotAvailable(orderId)
                .then((data) => {
                    if (data.success == true) {
                        deleteButton.closest("tr").remove();
                    }
                    window.displayMessage(success, data.message);
                    if (
                        $("#popup-page-content #user-orders table tbody tr")
                            .length == 0
                    ) {
                        window.hidePageWrapper();
                    }
                })
                .catch((data) => {
                    success = "error";
                    window.displayMessage(success, data.message);
                });
        }
    );

    $("#popup-page-content ").on(
        "change",
        "[name='add-worker-is_quick_for_booking']",
        function () {
            if (
                $("[name='add-worker-is_quick_for_booking']:checked").val() == 1
            ) {
                $("#add-worker-city-wrap").show();
                window.addWorkerFormConfig.fields["#add-worker-city"].rules = {
                    required: { message: "اجبارى" },
                };
                $("#add-worker-time-wrap").hide();
                window.addWorkerFormConfig.fields["#add-worker-time"].rules =
                    {};
            } else {
                $("#add-worker-time-wrap").show();
                window.addWorkerFormConfig.fields["#add-worker-time"].rules = {
                    required: { message: "اجبارى" },
                };
                $("#add-worker-city-wrap").hide();
                window.addWorkerFormConfig.fields["#add-worker-city"].rules =
                    {};
            }
        }
    );
});
