'use strict';

$(document).ready(function(){
    var dataPictureLi,
        dataPictureImg,
        dataPartLi,
        dataPartImg,
        plans = $('aside > ul > li'),
        partialsPlan = $('.partials-plan');

    function selectCarClass() {
        $('.car-class *').click(function(e){
            $('.car-class p').removeClass('car-class-active');
            $(this).parent().find('p').addClass('car-class-active');
            plans.removeClass('tariff-active');
            $('.tariff-default').addClass('tariff-active');
        });
    }

    function setActivePlan() {
        $('aside > ul > li:not(.partials-plan)').click(function() {
            plans.removeClass('tariff-active');
            $(this).addClass('tariff-active');
        });
        partialsPlan.find('li').click(function() {
            partialsPlan.find('li').removeClass('tariff-active');
            $(this).addClass('tariff-active');
        });
    }
    function selectPartialsPlan() {
        partialsPlan.find('p').click(function(){
            $(this).parent().find('ul').toggleClass('hidden');
            $(this).find('i').toggleClass('fas-hide');
        });
    }

    function changeCarImgByPlan() {
        plans.click(function() {
            dataPictureLi = $(this).attr('data-picture');
            $('.cars-img img').addClass('hidden');
            $('.cars-img img').each(function() {
                console.log()
                dataPictureImg = $(this).attr('data-picture')
                if ( dataPictureImg === dataPictureLi) {
                    $(this).removeClass('hidden');
                }
            });
        });
    }

    function selectCarParts() {
        partialsPlan.find('li').click(function() {
            dataPartLi = $(this).attr('data-part');
            dataPartImg;
            $('.cars-parts img').each(function() {
                dataPartImg = $(this).attr('data-part');
                if (dataPartImg === dataPartLi) {
                    $(this).toggleClass('hidden');
                }
            });
        });
    }

    selectCarClass();
    setActivePlan();
    selectPartialsPlan();
    changeCarImgByPlan();
    selectCarParts();
});
