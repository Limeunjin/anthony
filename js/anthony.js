
$(document).ready(function(){
    openPanel("input[data-panel='searchBar']");
    openPanel("input[data-panel='cartPanel']");
    openPanel("input[data-panel='apply']");
    openPanel("input[data-panel='gnbPanel']");
    openPanel("input[data-panel='usePanel']");
    openPanel("input[data-panel='ingredientsPanel']");
    openPanel("input[data-panel='whoPanel']");
    openPanel("input[data-panel='submit']");
    openPanel("input[data-panel='pwSubmit']");
    openPanel("input[data-panel='codeApplyMsg']");
    openPanel("input[data-panel='refundPolicy']");
    openPanel("input[data-panel='termsofService']");
    openPanel("input[data-panel='subscribtionPolicy']");
    openPanel("input[data-panel='checkoutSuccess']");
    openPanel("input[data-panel='contactPopup']");
    openPanel("input[data-panel='retailerPopup']");
    radioPayment(".paymentContainer > div > div:first-of-type > div:nth-of-type(1) label",".paymentContainer > div > div:first-of-type > div:nth-of-type(2) label");
    radioPayment(".paymentContainer > div > div:nth-of-type(2) > div:nth-of-type(2) label",".paymentContainer > div > div:nth-of-type(2) > div:nth-of-type(1) label");
    toggleEffect(".listBox .heartIco");
    toggleEffect(".detailContainer > div:nth-of-type(2) div:nth-of-type(3) .heartIco");
    toggleEffect(".account .accSelect");
    toggleEffect(".checkout .paymentForm");
    toggleEffect(".foldComponent b");
    toggleEffect(".faqContainer > .accComponent li h3");
    toggleEffect(".retailerContainer .retailerForm");
    quantityComponent(".count #countNumb",".countPlus",".countMinus");
    quantityComponent(".count #countNumb_01",".marketlistTable li:nth-of-type(2) .countPlus",".marketlistTable li:nth-of-type(2) .countMinus");
    quantityComponent(".count #countNumb_02",".marketlistTable li:nth-of-type(3) .countPlus",".marketlistTable li:nth-of-type(3) .countMinus");
    imgGallery(".thumb_Content li img",".big_Content img");
    radioPrice(".detailContainer .sizeCheck li",".detailContainer > div:nth-of-type(2) > div #targetPrice");
    sliderEvent('.mainSlider',true,3,1520,50,1000,false);
    sliderEvent('.tickerSlider',false,5,300,50,20000,true);
});


function openPanel(target){
    var panel = null;
    $(target).click(function(){
        panel = "#" + $(this).attr("data-panel");
        $(panel).addClass("active");
    });
    $(".btn_close").click(function(){
        $(panel).removeClass("active");
    });
}
function toggleEffect(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}
function quantityComponent(target,plus,minus){
    var resultTarget = $(target);
    var countNumber = $(resultTarget).val();
    $(plus).click(function(){
        countNumber ++;
        if(countNumber >= 99){
            countNumber = 99;
        }
        resultTarget.val(countNumber);
    });  
    $(minus).click(function(){
        countNumber --;
        if(countNumber <= 1){
            countNumber = 1;
        }
        resultTarget.val(countNumber);
    }); 
}
function imgGallery(target,imgField){
    var smallImg = null;
    var bigImg = null;
    $(target).click(function(){
        smallImg = $(this).attr("src");
        bigImg = smallImg.replace("small","big");
        $(imgField).attr("src",bigImg);
    });
}
function radioPrice(target,priceField){
    var targetPrice = null;
    $(target).click(function(){
        targetPrice=$(this).attr("data-price");
        $(priceField).text(targetPrice);
    });
}
function radioPayment(target,closeTarget){
    var radioPanel=null;
    $(target).click(function(){
        radioPanel=$(this).addClass("active");
    });
    $(closeTarget).click(function(){
        $(radioPanel).removeClass("active");
    });
}
function sliderEvent(slider,ctrl,mxs,sldwdth,sldmg,sldspd,tckr){
    $(slider).bxSlider({
        mode:'horizontal',
        pager: false,
        controls: ctrl,
        minSlides: 1,
        maxSlides: mxs,
        slideWidth: sldwdth,
        slideMargin: sldmg,
        speed: sldspd,
        moveSlides: 1,
        ticker: tckr,
        touchEnabled : (navigator.maxTouchPoints > 0),
        touchEnabled:false
    });
}