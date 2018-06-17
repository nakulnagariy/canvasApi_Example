const images = document.querySelectorAll('img');

        [...images].forEach( function(image) {
        const canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        photo = new Image();


        photo.onload = () => {
            canvas.width = photo.width;
            canvas.height = photo.height;

            const x = canvas.width - 60,
            y = canvas.height - 3;
            ctx.drawImage(photo, 0, 0);

            let data = ctx.getImageData(x, y, 50, 3).data;
            let dataAverage = data.reduce((prev, current) => {
                return prev + current;
            })/data.length;

            ctx.fillStyle = dataAverage < 200 ? "#fff" : "#000";
            ctx.fillText("@copy-2018", x, y);

            image.parentNode.replaceChild(canvas, image)
            
        };
            photo.src = image.src;
        });

        setTimeout(incodeBase64, 2500);

        function incodeBase64 (img) {
            let image;
            let app = document.getElementById('app');
            let cndata = document.querySelectorAll('canvas');
                for( let i = 0; i < cndata.length; i++) {
                    console.log("Base64 of image "[i], cndata[i].toDataURL());
                    image = document.createElement('img');
                    image.setAttribute('src', cndata[i].toDataURL());
                    app.innerHTML =  image;
                }      
        }