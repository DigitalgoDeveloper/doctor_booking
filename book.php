    <?php require_once('header.php') ?>

    <div class="container" id="content-container">
        <div>
            <h2 class="text-center mt-1 extraBold"></h2>
            <div class="text-center">عيادات اسنان الحمد</div>
        </div>
        <div id="middle-menu" class="d-flex justify-content-center mt-4 pb-4 border-bottom d-none">
            <div class="mx-2 popup-trigger">
                <div class="icon-wrap rounded-circle shadow m-auto mb-2 flex-center-content">
                    <img src="./assets/svg/calendar.svg" alt="">
                </div>
                <h5 class="colr1 text-center color1">الحجوزرات</h5>
            </div>
            <div class="mx-2 popup-trigger">
                <div class="icon-wrap rounded-circle shadow m-auto mb-2 flex-center-content">
                    <img src="./assets/svg/calendar.svg" alt="">
                </div>
                <h5 class="colr1 text-center color1">الحساسية</h5>
            </div>
            <div class="mx-2 popup-trigger">
                <div class="icon-wrap rounded-circle shadow m-auto mb-2 flex-center-content">
                    <img src="./assets/svg/image.svg" alt="">
                </div>
                <h5 class="colr1 text-center color1">الصور</h5>
            </div>
            <div class="mx-2 popup-trigger">
                <div class="icon-wrap rounded-circle shadow m-auto mb-2 flex-center-content">
                    <img src="./assets/svg/alert-circle.svg" alt="">
                </div>
                <h5 class="colr1 text-center color1">معلومات</h5>
            </div>
        </div>
        <div class="mt-2 me-1 flex-column flex-fill">
            <span id="filters-trigger" class="rounded m-0 p-1">
                <img src="./assets/svg/filter-outline.svg" alt="" class="icon rounded">
                &nbsp;التصفية
            </span>
        </div>
        <?php require_once('list.php'); ?>

        <div class="position-fixed bg1 rounded-circle p-2 popup-trigger display-none" id="add-worker-button-wrap" data-page-type="add-worker" data-page-slug="add-worker" style="display: none;">
            <img src="./assets/svg/plus.svg" alt="">
        </div>


        <div id="thank-you" class="display-none">
            <div class="text-end" id="close-saned-form">
                <img src="./assets/svg/close-outline.svg" alt="" class="icon">
            </div>

            <div class="flex-center-content h-100 w-100 flex-column">
                <h1 class="text-center m-0">
                    شكر لك
                </h1>


                <img src="./assets/images/checkmark-xxl.png" class="mx-auto my-4 rounded-circle shadow p-3 w-25">

                <h3 class="text-center">
                    تم تسجيل طلبكم في النظام
                    <br>
                    جاري تحويلك الى الصفحة الرئيسية
                </h3>
                <h1 class="counter my-3 timer">5</h1>
                <p>
                    اضغط هنا فى حال لم يتم تحويلك تلقائيا
                </p>
                <button class="btn bg1 mt-1 px-4">
                    <a href="https://admission.foryougo.net/" class="color3">
                        الذهاب الى الصفحة الرئيسيه
                    </a>
                </button>
            </div>

        </div>
    </div>

    <div class="popup-page-wrap" style="height: 100%; min-height: 60%;">
        <div class="page-overlay">
            <div class="page">
                <div class="popup-page-header">
                    <div class="row">
                        <div class="col-2">
                            <div class="close icon"><img src="https://admission.foryougo.net/assets/svg/close-outline.svg" alt="">
                            </div>
                        </div>
                        <div class="col-8">
                            <h3 id="popup-page-title" class="text-center">محمد عز الدين</h3>

                        </div>
                        <div class="col-2"></div>
                    </div>
                </div>
                <div id="popup-page-content" class="my-3">
                    <div class="d-flex flex-column product-details w-75 m-auto" data-worker-id="46" data-worker-status="1">


                        <div class="d-flex justify-content-center">
                            <label class=" bg-light-gray rounded px-2">
                                <h4>
                                    اشبيليا-الرياض
                                </h4>
                            </label>
                            <div>
                            </div>
                        </div>
                        <div class="d-flex w-100 position-relative mb-3">
                            <img src="./assets/images/default_doctor.png" alt="" class="rounded 2 mt-3 m-auto" style="">
                            <div id="product-call-wrap" class="bg1 rounded-circle flex-center-content">
                                <a href="test" target="_blank">
                                    <img src="https://admission.foryougo.net/assets/svg/call.svg" alt="" class="">
                                </a>
                            </div>
                        </div>



                        <div class="product-info mt-2 ">
                            <div class="d-flex justify-content-between">
                                <!-- <div>
                                    <h3 for="">الخبرات: </h3>
                                    <div>
                                        <img src="https://admission.foryougo.net/assets/svg/checkbox-outline.svg"
                                            class="icon me-1">
                                        اللغات:
                                        الانجليزية
                                    </div>

                                    <div>
                                        <img src="https://admission.foryougo.net/assets/svg/checkbox-outline.svg"
                                            class="icon me-1">
                                        خبرة فى السعوديه
                                    </div>

                                    <div>
                                        <img src="https://admission.foryougo.net/assets/svg/checkbox-outline.svg"
                                            class="icon me-1">
                                        عدد سنوات الخبرة:3
                                    </div>
                                </div> -->
                                <div class="flex-column d-flex">
                                    <div class="d-flex my-1">
                                        <label class="me-2">الجنسية: </label>
                                        <span>
                                            سعودي

                                        </span>
                                    </div>


                                    <div class="d-flex my-1">
                                        <label class="me-2">العمر: </label>
                                        <span>
                                            20
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-4">
                                <button class="color3 btn bg1 w-100 saned-button" data-saned-url="">
                                    حجز
                                </button>
                            </div>

                        </div>

                    </div>
                    <div id="booking-form-wrap" class="w-100 fixed-top" style="height: 100%;">
                        <div id="available-booking-form-wrap" class="w-100 h-100">
                            <div class="text-start me-auto " id="close-booking-form">
                                <img src="https://admission.foryougo.net/assets/svg/close-outline.svg" id="" class="icon bg1 rounded-circle">
                            </div>
                            <div class="h-100 w-100 d-flex flex-column overflow-auto align-items-center">
                                <h3 class="my-3">احجز الان</h3>

                                <form id="booking-form" class="mb-4 " method="POST" enctype="multipart/form-data">
                                    <input type="hidden" id="worker-id" name="worker-id" class="worker-id" value="46">
                                    <input type="hidden" name="_token" value="KsvNEIqtq901vVBpVjO7RX8aJw025sQG3Y9vdrZ1">

                                    <!-- Name input -->
                                    <div class="mb-3">
                                        <h3 class="my-1">الاسم *</h3>
                                        <input value="" class="form-control" id="booking-user-name" name="user-name" type="text" placeholder="الاسم" data-sb-validations="required" required="">
                                        <div class="invalid-feedback" data-sb-feedback="name:required">الاسم اجبارى.
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <h3 class="my-1">الجوال *</h3> <input value="" class="booking-user-phone form-control" id="user-phone" name="user-phone" type="tel" placeholder="الجوال" data-sb-validations="required" pattern="[0-9]{10}" required="">
                                        <div class="invalid-feedback" data-sb-feedback="name:required">الجوال اجبارى.
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <h3 class="my-1">تاريخ الحجز *</h3> <input class=" form-control" id="user-booking-date" name="user-booking-date" type="text" placeholder="تاريخ الحجز" data-sb-validations="required" required="">
                                        <div class="invalid-feedback" data-sb-feedback="name:required">تاريخ الحجز
                                            اجبارى.
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <h3 class="my-1">الخدمه</h3> <input value="" class="form-control" id="booking-service" name="user-service" type="text" placeholder="الخدمه" data-sb-validations="required">

                                    </div>
                                    <div class="mb-3">
                                        <h3 class="my-1">البريد الالكترونى</h3> <input value="" class="booking-user-phone form-control" id="user-email" name="user-email" type="email" placeholder="البريد الالكترونى" data-sb-validations="required" required="">
                                        <div class="invalid-feedback" data-sb-feedback="name:required">البريد الالكترونى
                                            اجبارى.
                                        </div>
                                    </div>
                                    

                                    <!-- Form submissions success message -->
                                    <div class="display-none" id="submitSuccessMessage">
                                        <div class="text-center mb-3">Form submission successful!</div>
                                    </div>

                                    <!-- Form submissions error message -->
                                    <div class="display-none" id="submitErrorMessage">
                                        <div class="text-center text-danger mb-3">Error sending message!</div>
                                    </div>

                                    <!-- Form submit button -->
                                    <div class="text-center">
                                        <button class="btn bg1 color3 px-5 m-auto" id="submit-book-form-button" type="submit">ارسل</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="page-loading" style="display: none;">
                    <img src="https://admission.foryougo.net/assets/images/loading.gif" alt="">
                </div>
            </div>
        </div>
    </div>
    <div id="loading" class="display-none" style="display: none;">
        <div class="overlay">
            <div class="icon-wrap flex-center-content h-100 w-100">
                <img src="./assets/images/loading.gif" alt="">
            </div>
        </div>
    </div>


    <div id="messages-holder" class="display-none">
        <div class="overlay d-flex align-items-center">
            <div class="icon-wrap flex-center-content p-3 w-100 flex-column bg3 rounded-4 m-1">
                <div id="success-message" class="display-none">
                    <h1 class="text-center my-3"></h1>
                    <div class="text-center">
                        <img src="./assets/images/checkmark-xxl.png" alt="">
                    </div>
                </div>
                <div id="error-message" class="display-none">
                    <h1 class="text-center my-3"></h1>
                    <div class="text-center">
                        <img src="./assets/images/error.png" alt="">
                    </div>
                </div>

            </div>
        </div>
    </div>
    <link rel="stylesheet" href="./assets/lib/datetimepicker-master/build/jquery.datetimepicker.min.css" />

    <script>
        var csrfToken = "9hFZbAlodMwZcRpAshTZhxSQ8yMlbCi0ib5sy3ql";
        var homeUrl = "https://admission.foryougo.net"
        var user = "null";
    </script>

    <script src="assets/lib/jquery-3.6.0.min.js"></script>
    <script src="./assets/lib/bootstrap/js/bootstrap.bundle.js">
    </script>


    <script src="./assets/js/common.js" type="module"></script>
    <script src="./assets/lib/me-validation/me-validation.js" type="module"></script>


    <script src="./assets/js/scripts.js" type="module"></script>
    <script src="./assets/lib/datetimepicker-master/build/jquery.datetimepicker.full.min.js"></script>

    <script>
        var dateClass = '#user-booking-date';
        $('#user-booking-date').datetimepicker({
            // options here
        });
    </script>
    < /html>