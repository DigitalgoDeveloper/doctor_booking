    <!-- Doctor -->
    <div class="display-flex single-product-in-list mt-2 py-2 " data-product-id="37" data-product-name="test">
        <div class="position-relative  me-2">
            <img src="<?php echo $doctor['image']; ?>" class="product-image" alt="" data-product-id="37" data-product-name="test">
            <div class="flex-center-content position-absolute product-state  <?php echo $doctor['status'] == 'متاح' ? 'available' : 'busy';  ?>  px-1 bg3">
                <?php echo $doctor['status'] ?>
            </div>
        </div>
        <div class="w-100 flex-fill product-info mt-2 me-2 d-flex flex-column justify-content-between">
            <div class="">
                <div class="my-1">
                    <label for="">الاسم: </label>
                    <span>
                        <?php echo $doctor['name']; ?>

                    </span>
                </div>
                <!--  -->
                <div class="my-1">
                    <label for="">الجنسية: </label>
                    <span>
                        <?php echo $doctor['nationality']; ?>
                    </span>
                </div>

                <div class="my-1 speciality">
                    <?php echo $doctor['speciality'] ?>
                </div>
            </div>
            <div class="mt-1">
                <a href="doctor_details.php?branch=<?php echo $branch['id']; ?>&doctor=<?php echo $doctor['id']; ?>" class="btn w-100 bg1 me-1 rounded py-1 flex-fill color3" data-product-id="38" data-product-name="test">التفاصيل</a>

            </div>
        </div>
    </div>
    <!-- /Doctor -->