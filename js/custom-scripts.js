$(document).ready(function () {

    $('.calendar').datepicker(
        {
            firstDay: 1,
            dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
            monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
        }
    );

    $('.slider').slick({
        appendArrows: '.slider-controls',
        prevArrow: '.left',
        nextArrow: '.right',
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '50px'
    });

});