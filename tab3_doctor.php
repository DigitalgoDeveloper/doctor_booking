    <!-- Doctor -->
    <div class="col-md-6 col-sm-6 col-xs-12 mb-3 single-product-in-list " data-product-id="37" data-product-name="test">
        <div class="position-relative w-100">
            <img src="<?php echo $doctor['image']; ?>" class="rounded shadow w-100 product-image" alt="" data-product-id="37" data-product-name="test">
            <div class="display-6 flex-center-content position-absolute product-nationality px-1 bg3 shadow">
                <?php echo $branch['name'] ?>
            </div>
            <div class="flex-center-content position-absolute product-state  <?php echo $doctor['status'] == 'متاح' ? 'available' : 'busy';  ?>  px-1 bg3">
                <?php echo $doctor['status'] ?>
            </div>
        </div>

        <div class="product-info mt-2 me-2 d-flex flex-column justify-content-between">
            <div class="">
                <div class="my-1">
                    <label for="">الاسم: </label>
                    <span>
                        <?php echo $doctor['name']; ?>
                    </span>
                </div>

                <div class="my-1">
                    <label for="">الفرع: </label>
                    <span>
                        <?php echo $branch['name'] ?>
                    </span>
                </div>

                <div class="my-1">
                    <label for="">الحالة: </label>
                    <span>
                        <?php echo $doctor['status'] ?>

                    </span>
                </div>
                <div class="my-1">
                    <label for="">الجنسية: </label>
                    <span>
                        <?php echo $doctor['nationality']; ?>
                    </span>
                </div>
                <div class="my-1 speciality">

                </div>
            </div>
            <div class="my-1">
                <a href="doctor_details.php?branch=<?php echo $branch['id']; ?>&doctor=<?php echo $doctor['id']; ?>" class="btn w-100 bg1 me-1 rounded py-1 flex-fill color3" data-product-id="38" data-product-name="test">التفاصيل</a>

            </div>
        </div>
    </div>
    <!-- /Doctor -->