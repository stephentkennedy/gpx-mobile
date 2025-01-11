var weather_fx = {
    draw_function: false,
    canvas: false,
    ctx: false,
    wind_var: 0,
    max_fps: 60,
    clamp: false,
    min_frame_time: false,
    calc_prev: false,
    prev: false,
    now: false,
    then: false,
    elapsed: false,
    frames: 0,
    ideal_fps: 60,
    current_fps: 0,
    adjust: 1,
    inited: false,
    request_animation_frame: function(){
        weather_fx.prev = weather_fx.now;
        weather_fx.now = Date.now();
        //console.log('Frame: ' + weather_fx.frames);
        if(
            weather_fx.then != false
        ){
            weather_fx.elapsed = weather_fx.now - weather_fx.then; 

        }else{
           weather_fx.elapsed = weather_fx.min_frame_time + 1; //Always run our first frame.
           weather_fx.then = Date.now();
        }

        if(
            weather_fx.draw_function !== false
            && typeof weather_fx.draw_functions[weather_fx.draw_function] == 'function'
            && (
                weather_fx.elapsed > weather_fx.min_frame_time
                || weather_fx.clamp == false
            )
        ){
           weather_fx.then = weather_fx.now - (weather_fx.elapsed % weather_fx.min_frame_time);
           weather_fx.calc_fps();
           weather_fx.draw_functions[weather_fx.draw_function]();

        }
        window.requestAnimationFrame(weather_fx.request_animation_frame);
    },
    calc_fps: function(){
        var diff = weather_fx.now - weather_fx.prev;
        var fps = diff / 1000;
        fps = 1 / fps;
        if(weather_fx.clamp){
            if(fps > weather_fx.max_fps){
                fps = weather_fx.max_fps;
            }
        }
        weather_fx.current_fps = fps;
        weather_fx.adjust = weather_fx.ideal_fps / fps;
    },
    set_fps: function(fps){
        console.log('Changing FPS to',fps);
        var resume = false;
        if(weather_fx.draw_function != false){
            resume = weather_fx.draw_function;
            weather_fx.clear_effect();
        }
        if(typeof fps == 'undefined' || fps == '' || fps == 0){
            weather_fx.clamp = false;
            weather_fx.max_fps = 60;
        }else{
            weather_fx.clamp = true;
            weather_fx.max_fps = fps;
        }
        weather_fx.min_frame_time = 1000 / weather_fx.max_fps;
        if(resume != false){
            weather_fx.start_effect(resume);
        }
    },
    get_context: function($canvas){
        var canvas = $canvas[0];
        var ctx = canvas.getContext("2d");
        weather_fx.canvas = canvas;
        weather_fx.ctx = ctx;
    },
    clear_canvas: function(){
        weather_fx.ctx.clearRect(0, 0, weather_fx.canvas.width, weather_fx.canvas.height);
    },
    make_windy: function(){
        weather_fx.wind_var = weather_fx.util.rand(-10, 10);
    },
    clear_wind: function(){
        weather_fx.wind_var = 0;
    },
    frame_storage: {},
    util: {
        rgbMe: function(colorObj){
            if(colorObj.a == undefined){
				colorObj.a = 1;
			}
			var string = 'rgba(' + colorObj.r + ',' + colorObj.g + ',' + colorObj.b + ',' + colorObj.a + ')';
			return string;
        },
        drawBar: function(x1, y1, x2, y2, width, colorObj){
            var ctx = weather_fx.ctx;
            var lineColor = weather_fx.util.rgbMe(colorObj);
            ctx.strokeStyle = lineColor;
			ctx.lineWidth = width;
			ctx.beginPath();
			ctx.moveTo(x1,y1);
			ctx.lineTo(x2,y2);
			ctx.stroke();
        },
        rand: function(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        rand_alpha: function(min, max){
            return weather_fx.util.rand(min, max) / 100;
        },
        decimal: function(number){
            return Number(number.toFixed(2));
        },
    },
    adjust_speed: function(speed){
        return speed * weather_fx.adjust;
    },
    draw_functions: {
        rain: function(){
            weather_fx.clear_canvas();
            var stor = weather_fx.frame_storage;
            var util = weather_fx.util;
            var drop_numbers = Math.floor(weather_fx.canvas.width / 7);
            if(typeof stor.drop_array == 'undefined'){
                //Then we need to initialize ourself.
                var drop_array = [];
                for(var i = 0; i <= drop_numbers; i++){
                    drop_array.push({
                        x: util.rand(0, weather_fx.canvas.width),
                        y: util.rand(-255, 0),
                        y_speed: weather_fx.adjust_speed(Math.floor(util.rand(5, weather_fx.canvas.height) / 32) + 1),
                        x_speed: weather_fx.adjust_speed(util.rand(-5, 5)),
                        x_step: weather_fx.adjust_speed(0.01),
                        y_step: weather_fx.adjust_speed(0.01),
                        x_to: util.rand(-5, 5),
                        y_to: Math.floor(util.rand(5, weather_fx.canvas.height) / 32) + 1,
                        color: {
                            r: 150,
                            g: 150,
                            b: util.rand(150, 255),
                            a: util.rand_alpha(0, 100)
                        }
                    });
                }
                stor.drop_array = drop_array;
            }

            for(var i = 0; i <= drop_numbers; i++){
                var drop = stor.drop_array[i];

                //Speed transitions
                var x_to = util.decimal(drop.x_to);
                var x_speed = util.decimal(drop.x_speed);
                if(x_to != x_speed){
                    var speed_mult = drop.x_step;
                    if(x_to < x_speed){
                        speed_mult = speed_mult * -1;
                    }
                    x_speed += speed_mult;
                    drop.x_speed = x_speed;
                }else{
                    x_to = util.rand(-5, 5);
                    drop.x_to = x_to;
                }

                var y_to = util.decimal(drop.y_to);
                var y_speed = util.decimal(drop.y_speed);
                if(y_to != y_speed){
                    var speed_mult = drop.y_step;
                    if(y_to < y_speed){
                        speed_mult = speed_mult * -1;
                    }
                    y_speed += speed_mult;
                    drop.y_speed = y_speed;
                }else{
                    y_to = Math.floor(util.rand(5, weather_fx.canvas.height) / 32) + 1;
                    drop.y_to = y_to;
                }

                var x = drop.x;
                var y = drop.y;
                var x2 = x + x_speed;
                if(weather_fx.wind_var != 0){
                    x2 = x + (x_speed + weather_fx.wind_var);
                }
                var y2 = y + y_speed;

                if(y2 > weather_fx.canvas.height){
                    if(x2 > 0 && x2 <= weather_fx.canvas.width){
                        var rise = y - y2;
                        var run = x - x2;
                        var slope = Number((rise/run).toFixed());

                        var adjusted_x = ((weather_fx.canvas.height - y) / slope) + x;

                        x2 = adjusted_x;

                        var left_x = x2 - 4;
                        var right_x = x2 + 4;
                        util.drawBar(x2, weather_fx.canvas.height, left_x, weather_fx.canvas.height - 4, 1, drop.color);
                        util.drawBar(x2, weather_fx.canvas.height, right_x, weather_fx.canvas.height - 4, 1, drop.color);
                    }

                    drop.y = util.rand(-255, 0);
                    drop.x = util.rand(0, weather_fx.canvas.width);

                }else{
                    drop.y = y2;
                    drop.x = x2;
                }

                if(x2 < 0){
                    drop.x += weather_fx.canvas.width;
                    x += weather_fx.canvas.width;
                    x2 += weather_fx.canvas.width;
                }else if(x2 >= weather_fx.canvas.width){
                    drop.x += weather_fx.canvas.width * -1;
                    x += weather_fx.canvas.width * -1;
                    x2 += weather_fx.canvas.width * -1;
                }

                util.drawBar(x, y, x2, y2, 3, drop.color);
                stor.drop_array[i] = drop;
            }
        },
        snow: function(){
            weather_fx.clear_canvas();
            var stor = weather_fx.frame_storage;
            var util = weather_fx.util;
            var drop_numbers = Math.floor(weather_fx.canvas.width / 2);
            if(typeof stor.drop_array == 'undefined'){
                //Then we need to initialize ourself.
                var drop_array = [];
                for(var i = 0; i <= drop_numbers; i++){
                    drop_array.push({
                        x: util.rand(0, weather_fx.canvas.width),
                        y: util.rand(-255, 0),
                        y_speed: weather_fx.adjust_speed(Math.floor(util.rand(5, weather_fx.canvas.height) / 256) + 1),
                        x_speed: weather_fx.adjust_speed(util.rand(-5, 5)),
                        x_step: weather_fx.adjust_speed(0.01),
                        y_step: weather_fx.adjust_speed(0.01),
                        x_to: util.rand(-5, 5),
                        y_to: Math.floor(util.rand(5, weather_fx.canvas.height) / 256) + 1,
                        color: {
                            r: 200,
                            g: 200,
                            b: util.rand(200, 255),
                            a: util.rand_alpha(0, 100)
                        }
                    });
                }
                stor.drop_array = drop_array;
            }

            for(var i = 0; i <= drop_numbers; i++){
                var drop = stor.drop_array[i];

                //Speed transitions
                var x_to = util.decimal(drop.x_to);
                var x_speed = util.decimal(drop.x_speed);
                if(x_to != x_speed){
                    var speed_mult = drop.x_step;
                    if(x_to < x_speed){
                        speed_mult = speed_mult * -1;
                    }
                    x_speed += speed_mult;
                    drop.x_speed = x_speed;
                }else{
                    x_to = util.rand(-5, 5);
                    drop.x_to = x_to;
                }

                var y_to = util.decimal(drop.y_to);
                var y_speed = util.decimal(drop.y_speed);
                if(y_to != y_speed){
                    var speed_mult = drop.y_step;
                    if(y_to < y_speed){
                        speed_mult = speed_mult * -1;
                    }
                    y_speed += speed_mult;
                    drop.y_speed = y_speed;
                }else{
                    y_to = Math.floor(util.rand(5, weather_fx.canvas.height) / 256) + 1;
                    drop.y_to = y_to;
                }

                var x = drop.x;
                var y = drop.y;
                var x2 = x + x_speed;
                if(weather_fx.wind_var != 0){
                    x2 = x + (x_speed + weather_fx.wind_var);
                }
                var y2 = y + y_speed;

                if(y2 > weather_fx.canvas.height){
                    if(x2 > 0 && x2 <= weather_fx.canvas.width){
                        var rise = y - y2;
                        var run = x - x2;
                        var slope = Number((rise/run).toFixed());

                        var adjusted_x = ((weather_fx.canvas.height - y) / slope) + x;

                        x2 = adjusted_x;
                    }

                    drop.y = util.rand(-255, 0);
                    drop.x = util.rand(0, weather_fx.canvas.width);

                }else{
                    drop.y = y2;
                    drop.x = x2;
                }

                if(x2 < 0){
                    drop.x += weather_fx.canvas.width;
                    x += weather_fx.canvas.width;
                    x2 += weather_fx.canvas.width;
                }else if(x2 >= weather_fx.canvas.width){
                    drop.x += weather_fx.canvas.width * -1;
                    x += weather_fx.canvas.width * -1;
                    x2 += weather_fx.canvas.width * -1;
                }

                util.drawBar(x, y, x2, y2, 3, drop.color);
                stor.drop_array[i] = drop;
            }
        },
        fog: function(){
            var fog_img = 'img/animated-fog.png';
            var image = new Image(weather_fx.canvas.width, weather_fx.canvas.height);
            image.src = fog_img;
            weather_fx.clear_canvas();
            var stor = weather_fx.frame_storage;
            var util = weather_fx.util;

            if(typeof stor.imgs == 'undefined'){
                var imgs = [];
                imgs.push({
                    x: 0,
                    y: 0,
                    x2: weather_fx.canvas.width,
                    y2: weather_fx.canvas.height,
                    x_speed: 0,
                    y_speed: 0,
                    x_to: util.rand(0, 25),
                    y_to: util.rand(0, 25),
                    x_step: 0.01,
                    y_step: 0.01,
                });
                imgs.push({
                    x: weather_fx.canvas.width,
                    y: 0,
                    x2: weather_fx.canvas.width * 2,
                    y2: weather_fx.canvas.height
                });
                imgs.push({
                    x: 0,
                    y: weather_fx.canvas.height,
                    x2: weather_fx.canvas.width,
                    y2: weather_fx.canvas.height * 2
                });
                imgs.push({
                    x: weather_fx.canvas.width,
                    y: weather_fx.canvas.height,
                    x2: weather_fx.canvas.width * 2,
                    y2: weather_fx.canvas.height * 2
                });
                var layers = [];
                for(var i = 0; i < 3; i++){
                    layers.push(imgs);
                }
                stor.imgs = layers;
            }

            for(var i = 0; i < stor.imgs.length; i++){
                var layer = stor.imgs[i];
                var drop = layer[0];
                //Speed transitions
                var x_to = util.decimal(drop.x_to);
                var x_speed = util.decimal(drop.x_speed);
                if(x_to != x_speed){
                    var speed_mult = drop.x_step;
                    if(x_to < x_speed){
                        speed_mult = speed_mult * -1;
                    }
                    x_speed += speed_mult;
                    drop.x_speed = x_speed;
                }else{
                    x_to = util.rand(0, 25);
                    drop.x_to = x_to;
                }

                var y_to = util.decimal(drop.y_to);
                var y_speed = util.decimal(drop.y_speed);
                if(y_to != y_speed){
                    var speed_mult = drop.y_step;
                    if(y_to < y_speed){
                        speed_mult = speed_mult * -1;
                    }
                    y_speed += speed_mult;
                    drop.y_speed = y_speed;
                }else{
                    y_to = util.rand(0, 25);
                    drop.y_to = y_to;
                }


                if(y_to != y_speed){
                    var speed_mult = drop.y_step;
                    if(y_to < y_speed){
                        speed_mult = speed_mult * -1;
                    }
                    y_speed += speed_mult;
                    drop.y_speed = y_speed;
                }else{
                    y_to = Math.floor(util.rand(5, weather_fx.canvas.height) / 256) + 1;
                    drop.y_to = y_to;
                }

                for(var j = 0; j < layer.length; j++){
                    var img = layer[j];
                    var x = img.x + x_speed;
                    var x2 = img.x2 + x_speed;
                    var y = img.y + y_speed;
                    var y2 = img.y2 + y_speed;

                    if(x2 < 0){
                        x += weather_fx.canvas.width;
                        x2 += weather_fx.canvas.width;
                    }else if(x2 > weather_fx.canvas.width){
                        x += weather_fx.canvas.width * -1;
                        x2 += weather_fx.canvas.width * -1; 
                    }

                    if(y2 < 0){
                        y += weather_fx.canvas.height;
                        y2 += weather_fx.canvas.height;
                    }else if (y2 > weather_fx.canvas.height){
                        y += weather_fx.canvas.height * -1;
                        y2 += weather_fx.canvas.height * -1;
                    }

                    img.x = x;
                    img.x2 = x2;
                    img.y = y;
                    img.y2 = y2;
                    layer[j] = img;

                    weather_fx.ctx.drawImage(image, x, y);
                }

                stor.imgs[i] = layer;
            }
        }
    },
    init: function(){
        if(this.inited){
            return;
        }
        var to_insert = '<canvas width="' + $(window).width() + '" height="'+ $(window).height() +'" id="weather_fx"></canvas>';

        $('body').append(to_insert);

        var $canvas = $('#weather_fx');
        weather_fx.get_context($canvas);
        this.min_frame_time = 1000 / this.max_fps;

        jQuery(document, 'select.max-framerate').on('change', function(e){
            if(!jQuery(e.target).is('select.max-framerate')){
                return;
            }
            var new_value = jQuery(e.target).val();
            weather_fx.set_fps(new_value);
        });

        window.requestAnimationFrame(weather_fx.request_animation_frame);
        this.inited = true;
    },
    clear_effect: function(){
        weather_fx.draw_function = false;
        weather_fx.frame_storage = {};
        weather_fx.clear_canvas();
    },
    start_effect: function(name){
        if(typeof weather_fx.draw_functions[name] == 'function'){
            weather_fx.draw_function = name;
        }
    }
};