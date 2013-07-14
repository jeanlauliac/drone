(function (app, $) {
    'use strict';
    
    /***********************
    ** Canvas class
    ***********************/
    app.Canvas = function (canvasEl) {
        this.el = canvasEl;
        this.context = this.el.getContext('2d');
    }
    
    app.Canvas.prototype.render = function (imgData) {
        var img = new Image();
        
        console.log(imgData);
        img.onload = function () {
            this.context.drawImage(this, 0, 0, this.el.width, this.el.height);
        }
        img.src = 'data:image/png;base64,' + imgData;
    }
    app.Canvas.prototype.renderRectangles = function (rectangles) {

        //Expects an array of rectangles
        _.forEach(rectangles, renderRectangle, this);
    }
    app.Canvas.prototype.getImg = function () {
        return this.el.toDataURL('png');
    }

    //'private' methods
    function renderRectangle (rect) {
        this.context.save();
        this.context.rect(rect.x, rect.y, rect.width, rect.height);
        this.context.lineWidth = 3;
        this.context.strokeStyle = 'black';
        this.context.stroke();
        this.context.reset();
    }
})(window.app, jQuery);