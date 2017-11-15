
// Create photoprobsers first:


/* ===== Chinese ===== */
var photoBrowserPhotos = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',

];
var photoBrowserPage = myApp.photoBrowser({
    photos: photoBrowserPhotos,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.ks-pb-page').on('click', function () {
        photoBrowserPage.open();
    });
});

/* ===== English ===== */
var english = [
    'img/en/e1.jpg',
    'img/en/e2.jpg',
    'img/en/e3.jpg',
    'img/en/e4.jpg',
    'img/en/e5.jpg',
    'img/en/e6.jpg',
    'img/en/e7.jpg',
    'img/en/e8.jpg',
    'img/en/e9.jpg',
    'img/en/e10.jpg',
    'img/en/e11.jpg',
    'img/en/e12.jpg',
    'img/en/e13.jpg',
    'img/en/e14.jpg',
    'img/en/e15.jpg',
    'img/en/e16.jpg',


];
var englishPage = myApp.photoBrowser({
    photos: english,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.english-page').on('click', function () {
        englishPage.open();
    });
});


/* ===== Chi Simp ===== */
var ChiSimp = [
    'img/cs/cs1.jpg',
    'img/cs/cs2.jpg',
    'img/cs/cs3.jpg',
    'img/cs/cs4.jpg',
    'img/cs/cs5.jpg',
    'img/cs/cs6.jpg',
    'img/cs/cs7.jpg',
    'img/cs/cs8.jpg',
    'img/cs/cs9.jpg',
    'img/cs/cs10.jpg',
    'img/cs/cs11.jpg',
    'img/cs/cs12.jpg',
    'img/cs/cs13.jpg',
    'img/cs/cs14.jpg',
    'img/cs/cs15.jpg',
    'img/cs/cs16.jpg',


];
var ChiSimpPage = myApp.photoBrowser({
    photos: ChiSimp,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.chi-s-page').on('click', function () {
        ChiSimpPage.open();
    });
});

/* ===== Chi Trad ===== */
var ChiTrad = [
    'img/ct/ct1.jpg',
    'img/ct/ct2.jpg',
    'img/ct/ct3.jpg',
    'img/ct/ct4.jpg',
    'img/ct/ct5.jpg',
    'img/ct/ct6.jpg',
    'img/ct/ct7.jpg',
    'img/ct/ct8.jpg',
    'img/ct/ct9.jpg',
    'img/ct/ct10.jpg',
    'img/ct/ct11.jpg',
    'img/ct/ct12.jpg',
    'img/ct/ct13.jpg',
    'img/ct/ct14.jpg',
    'img/ct/ct15.jpg',
    'img/ct/ct16.jpg',


];
var ChiTradPage = myApp.photoBrowser({
    photos: ChiTrad,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.chi-t-page').on('click', function () {
        ChiTradPage.open();
    });
});

/* ===== Bahasa ===== */
var Bahasa = [
    'img/bh/bh1.jpg',
    'img/bh/bh2.jpg',
    'img/bh/bh3.jpg',
    'img/bh/bh4.jpg',
    'img/bh/bh5.jpg',
    'img/bh/bh6.jpg',
    'img/bh/bh7.jpg',
    'img/bh/bh8.jpg',
    'img/bh/bh9.jpg',
    'img/bh/bh10.jpg',
    'img/bh/bh11.jpg',
    'img/bh/bh12.jpg',
    'img/bh/bh13.jpg',
    'img/bh/bh14.jpg',
    'img/bh/bh15.jpg',
    'img/bh/bh16.jpg',


];
var BahasaPage = myApp.photoBrowser({
    photos: Bahasa,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.bh-page').on('click', function () {
        BahasaPage.open();
    });
});

/* ===== Thai ===== */
var Thai = [
    'img/th/th1.jpg',
    'img/th/th2.jpg',
    'img/th/th3.jpg',
    'img/th/th4.jpg',
    'img/th/th5.jpg',
    'img/th/th6.jpg',
    'img/th/th7.jpg',
    'img/th/th8.jpg',
    'img/th/th9.jpg',
    'img/th/th10.jpg',
    'img/th/th11.jpg',
    'img/th/th12.jpg',
    'img/th/th13.jpg',
    'img/th/th14.jpg',
    'img/th/th15.jpg',
    'img/th/th16.jpg',


];
var ThaiPage = myApp.photoBrowser({
    photos: Thai,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.th-page').on('click', function () {
        ThaiPage.open();
    });
});

/* ===== BusinessOpp ===== */

/* ===== BusinessOppEn ===== */
var BusinessOppEn = [
    'img/en/bo/boen-1.jpg',
    'img/en/bo/boen-2.jpg',
    'img/en/bo/boen-3.jpg',
    'img/en/bo/boen-4.jpg',
    'img/en/bo/boen-5.jpg',
    'img/en/bo/boen-6.jpg',
    'img/en/bo/boen-7.jpg',
    'img/en/bo/boen-8.jpg',


];
var BusOppEnPage = myApp.photoBrowser({
    photos: BusinessOppEn,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.busi-en-page').on('click', function () {
        BusOppEnPage.open();
    });
});

/* ===== BusinessOppCn ===== */
var BusinessOppCn = [
    'img/cs/bo/bocn-1.jpg',
    'img/cs/bo/bocn-2.jpg',
    'img/cs/bo/bocn-3.jpg',
    'img/cs/bo/bocn-4.jpg',
    'img/cs/bo/bocn-5.jpg',
    'img/cs/bo/bocn-6.jpg',
    'img/cs/bo/bocn-7.jpg',
    'img/cs/bo/bocn-8.jpg',


];
var BusOppCnPage = myApp.photoBrowser({
    photos: BusinessOppCn,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.busi-cn-page').on('click', function () {
        BusOppCnPage.open();
    });
});

/* ===== BusinessOppCt ===== */
var BusinessOppCt = [
    'img/ct/bo/bo-1.jpg',
    'img/ct/bo/bo-2.jpg',
    'img/ct/bo/bo-3.jpg',
    'img/ct/bo/bo-4.jpg',
    'img/ct/bo/bo-5.jpg',
    'img/ct/bo/bo-6.jpg',
    'img/ct/bo/bo-7.jpg',
    'img/ct/bo/bo-8.jpg',


];
var BusOppCtPage = myApp.photoBrowser({
    photos: BusinessOppCt,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.busi-ct-page').on('click', function () {
        BusOppCtPage.open();
    });
});



/* ===== BusinessOppBh===== */
var BusinessOppBh = [
    'img/bh/bo/bobh-1.jpg',
    'img/bh/bo/bobh-2.jpg',
    'img/bh/bo/bobh-3.jpg',
    'img/bh/bo/bobh-4.jpg',
    'img/bh/bo/bobh-5.jpg',
    'img/bh/bo/bobh-6.jpg',
    'img/bh/bo/bobh-7.jpg',
    'img/bh/bo/bobh-8.jpg',


];
var BusOppBhPage = myApp.photoBrowser({
    photos: BusinessOppBh,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.busi-bh-page').on('click', function () {
        BusOppBhPage.open();
    });
});


/* ===== BusinessOppTh===== */
var BusinessOppTh = [
    'img/th/bo/thbo-1.jpg',
    'img/th/bo/thbo-2.jpg',
    'img/th/bo/thbo-3.jpg',
    'img/th/bo/thbo-4.jpg',
    'img/th/bo/thbo-5.jpg',
    'img/th/bo/thbo-6.jpg',
    'img/th/bo/thbo-7.jpg',
    'img/th/bo/thbo-8.jpg',


];
var BusOppThPage = myApp.photoBrowser({
    photos: BusinessOppTh,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.busi-th-page').on('click', function () {
        BusOppThPage.open();
    });
});

/* ===== BusinessOppMy===== */
var BusinessOppMy = [
    'img/my/bo/bo-1.jpg',
    'img/my/bo/bo-2.jpg',
    'img/my/bo/bo-3.jpg',
    'img/my/bo/bo-4.jpg',
    'img/my/bo/bo-5.jpg',
    'img/my/bo/bo-6.jpg',
    'img/my/bo/bo-7.jpg',
    'img/my/bo/bo-8.jpg',


];
var BusOppMyPage = myApp.photoBrowser({
    photos: BusinessOppMy,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.busi-my-page').on('click', function () {
        BusOppMyPage.open();
    });
});




/* ===== ProductOpp ===== */

/* ===== ProductOppEn ===== */
var ProductOppEn = [
    'img/en/po/po-1.jpg',
    'img/en/po/po-2.jpg',
    'img/en/po/po-3.jpg',
    'img/en/po/po-4.jpg',
    'img/en/po/po-5.jpg',
    'img/en/po/po-6.jpg',
    'img/en/po/po-7.jpg',
    'img/en/po/po-8.jpg',


];
var ProOppEnPage = myApp.photoBrowser({
    photos: ProductOppEn,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.pro-en-page').on('click', function () {
        ProOppEnPage.open();
    });
});

/* ===== ProductOppCn ===== */
var ProductOppCn = [
    'img/cs/po/po-1.jpg',
    'img/cs/po/po-2.jpg',
    'img/cs/po/po-3.jpg',
    'img/cs/po/po-4.jpg',
    'img/cs/po/po-5.jpg',
    'img/cs/po/po-6.jpg',
    'img/cs/po/po-7.jpg',
    'img/cs/po/po-8.jpg',


];
var ProOppCnPage = myApp.photoBrowser({
    photos: ProductOppCn,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.pro-cn-page').on('click', function () {
        ProOppCnPage.open();
    });
});

/* ===== ProductOppCn ===== */
var ProductOppCt = [
    'img/ct/po/po-1.jpg',
    'img/ct/po/po-2.jpg',
    'img/ct/po/po-3.jpg',
    'img/ct/po/po-4.jpg',
    'img/ct/po/po-5.jpg',
    'img/ct/po/po-6.jpg',
    'img/ct/po/po-7.jpg',
    'img/ct/po/po-8.jpg',


];
var ProOppCtPage = myApp.photoBrowser({
    photos: ProductOppCt,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.pro-ct-page').on('click', function () {
        ProOppCtPage.open();
    });
});



/* ===== ProductOppBh ===== */
var ProductOppBh = [
    'img/bh/po/po-1.jpg',
    'img/bh/po/po-2.jpg',
    'img/bh/po/po-3.jpg',
    'img/bh/po/po-4.jpg',
    'img/bh/po/po-5.jpg',
    'img/bh/po/po-6.jpg',
    'img/bh/po/po-7.jpg',
    'img/bh/po/po-8.jpg',


];
var ProOppBhPage = myApp.photoBrowser({
    photos: ProductOppBh,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.pro-bh-page').on('click', function () {
        ProOppBhPage.open();
    });
});

/* ===== ProductOppTh ===== */
var ProductOppTh = [
    'img/th/po/po-1.jpg',
    'img/th/po/po-2.jpg',
    'img/th/po/po-3.jpg',
    'img/th/po/po-4.jpg',
    'img/th/po/po-5.jpg',
    'img/th/po/po-6.jpg',
    'img/th/po/po-7.jpg',
    'img/th/po/po-8.jpg',


];
var ProOppThPage = myApp.photoBrowser({
    photos: ProductOppTh,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.pro-th-page').on('click', function () {
        ProOppThPage.open();
    });
});

/* ===== ProductOppMy ===== */
var ProductOppMy = [
    'img/my/po/po-1.jpg',
    'img/my/po/po-2.jpg',
    'img/my/po/po-3.jpg',
    'img/my/po/po-4.jpg',
    'img/my/po/po-5.jpg',
    'img/my/po/po-6.jpg',
    'img/my/po/po-7.jpg',
    'img/my/po/po-8.jpg',


];
var ProOppMyPage = myApp.photoBrowser({
    photos: ProductOppMy,
    type: 'page',
    backLinkText: 'Back'
});
myApp.onPageInit('photo-browser', function (page) {
    $$('.pro-my-page').on('click', function () {
        ProOppMyPage.open();
    });
});













