class Slider {
    constructor(images){
        this.images = images;
        this.slide = null;
        this.prevBtn = null;
        this.nextBtn = null;


        this.UiSelectors = {
            slide: '[date-slide]',
            buttonPrev: '[data-button-prev]',
            buttonNext: '[data-button-next]'
        
    } }



    initializeSlider() {

            this.slide = document.querySelector(this.UiSelectors.slide);
            this.prevBtn = document.querySelector(this.UiSelectors.buttonPrev);
            this.buttonNext = document.querySelector(this.UiSelectors.buttonNext);
    }
}