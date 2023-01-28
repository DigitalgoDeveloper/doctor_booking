<?php require_once('branches.php') ?>
<div id="fixed-nav" class="bg3 position-sticky">
    <div id="categories-wrap" class="d-flex py-1">
        <?php foreach ($branches as $key => $branch) : ?>
            <div class="me-2 <?php echo $key == "01" ? 'active' : '' ?>" target="cat<?php echo $branch['id']; ?>">
                <button class="btn w-100 ps-0" id="cat-<?php echo $branch['id'] ?>-button">
                    <?php echo $branch['name']; ?>
                </button>
            </div>
        <?php endforeach; ?>
    </div>
    <div class="">
        <div class="d-flex title-bar d-flex py-2 bottom-shadow mb-2">
            <div class="d-flex px-1">
                <form class="d-flex flex-fill">

                    <div class="input-with-icon d-flex">
                        <input type="search" class="form-control w-100" id="search_text" placeholder="أبحث عن...">
                        <button>
                            <img src="./assets/svg/search-icon.svg" alt="">
                        </button>
                    </div>
                    <div id="reset-filters-trigger" class="btn px-1 m-0 mx-2 flex-column flex-fill flex-center-content">
                        الغاء البحث
                    </div>
                    <div class="fixed-top h-100 overlay-bg" id="filters-wrap">

                        <div class="d-flex w-85 flex-column p-2 bg3 ms-auto" id="filters-categories-wrap">
                            <div id="" class="close icon"><img src="./assets/svg/close-outline.svg" alt="">
                            </div>
                            <div class="mt-2 pb-2 border-bottom">
                                <h3 class="mb-1">اسم الطبيب</h3>
                                <div class="d-flex flex-wrap">
                                    <input type="text" class="form-control me-1" id="doctor-name" name="doctor-name" placeholder="اسم الطبيب" value="">
                                </div>
                            </div>



                            <div class="mt-2 pb-2 border-bottom">
                                <h3 class="mb-1">الفرع</h3>
                                <div class="">
                                    <select class="form-select form-select-lg mb-3" id="filter-languages" name="filter-languages" aria-label=".form-select-lg example">
                                        <option value="" selected="">اختر الفرع</option>
                                        <?php foreach ($branches as $key => $branch) : ?>
                                            <option value="<?php echo $branch['id'] ?>">
                                                <?php echo $branch['name'] ?>
                                            </option>
                                        <?php endforeach; ?>

                                    </select>
                                </div>
                            </div>

                            <div class="mt-2 pb-2 border-bottom">
                                <h3>التاريخ</h3>
                                <div class="d-flex">
                                    <div class=" me-1">
                                        <label class="mb-2" for="">من</label>
                                        <input type="date" class="form-control" id="age-from" name="age-from" placeholder="على الاقل" value="">
                                    </div>
                                    <div class=" ms-1">
                                        <label class="mb-2" for="">الى</label>
                                        <input type="date" class="form-control" id="age-to" name="age-to" placeholder="على الاكثر" value="">
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div class="d-flex mt-2 position-absolute w-85 bg3" id="filters-actions-buttons-wrap">
                            <button class="me-1 btn btn-outline-danger flex-fill rounded" id="reset-filters">اعادة</button>
                            <button class="ms-1 btn bg1 flex-fill text-light rounded" id="submit-filters">تطبيق</button>
                        </div>
                    </div>

                </form>
                <div class="toolbar d-flex align-items-center">
                    <div class="toolbar-inner d-flex">
                        <a href="#tab1" class="tab-link me-1 active flex-center-content p-1 rounded">
                            <img src="./assets/svg/grid.svg" class="icon">
                        </a>
                        <a href="#tab2" class="tab-link me-1 flex-center-content p-1 rounded">
                            <img src="./assets/svg/list.svg" class="icon">
                        </a>
                        <a href="#tab3" class="tab-link me-1 flex-center-content p-1 rounded">
                            <img src="./assets/svg/single-item.svg" class="icon">
                        </a>
                        <a href="#tab4" class="tab-link flex-center-content p-1 rounded d-none">
                            <img src="./assets/svg/videocam-outline.svg" class="icon">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="products-list-wrap" style="margin-top: 0px;">
    <?php require_once "tab1.php"; ?>
    <?php require_once "tab2.php"; ?>
    <?php require_once "tab3.php"; ?>
    <?php require_once "tab4.php"; ?>

</div>