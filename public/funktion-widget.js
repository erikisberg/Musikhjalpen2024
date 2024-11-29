document.addEventListener('DOMContentLoaded', (event) => {
    (function() {

    (function(e,b){if(!b.__SV){var a,f,i,g;window.mixpanel=b;b._i=[];b.init=function(a,e,d){function f(b,h){var a=h.split(".");2==a.length&&(b=b[a[0]],h=a[1]);b[h]=function(){b.push([h].concat(Array.prototype.slice.call(arguments,0)))}}var c=b;"undefined"!==typeof d?c=b[d]=[]:d="mixpanel";c.people=c.people||[];c.toString=function(b){var a="mixpanel";"mixpanel"!==d&&(a+="."+d);b||(a+=" (stub)");return a};c.people.toString=function(){return c.toString(1)+".people (stub)"};i="disable time_event track track_pageview track_links track_forms register register_once alias unregister identify name_tag set_config reset people.set people.set_once people.unset people.increment people.append people.union people.track_charge people.clear_charges people.delete_user".split(" ");
        for(g=0;g<i.length;g++)f(c,i[g]);b._i.push([a,e,d])};b.__SV=1.2;a=e.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.mxpnl.com/libs/mixpanel-2-latest.min.js";f=e.getElementsByTagName("script")[0];f.parentNode.insertBefore(a,f)}})(document,window.mixpanel||[]);
        mixpanel.init("7d7d21dd4ea84a7c89e129dfec7b0917");
        

    // Add this at the beginning of your script
    const googleFontLink = `
    <style>
        @import url('https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Public+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        #charity-popup * {
            font-family: 'Public Sans', sans-serif !important;
        }
        #charity-popup h1 {
            font-family: 'Public Sans', sans-serif !important;
        }
        #charity-popup h2 {
            font-family: 'Public Sans', sans-serif !important;
        }    

    
    </style>
`;

document.head.insertAdjacentHTML('beforeend', googleFontLink);
    

    // Styling för mobil
    const mobileStyles = `
    <style>
    @media (max-width: 600px) {
        #charity-popup {
            width: 90% !important;
            padding: 1REM;
            border: 0px !important;
            border-radius: 0px !important;
        }
        #buttoncontainer {
            flex-direction: column;
        }
        #close-popup {
            padding-right: 1rem;
        }
        #swishqr {
            display: none !important;
        }
        #close-popup {
            position: absolute; 
            top: 10px; 
            right: 10px !important;
        }
        #mhlogo {
            width: 120px !important;
        }
        h1 {
            font-size: 24px !important;
        }
        #copy-phone, #second-button {
            width: 80%;
            margin: 0 auto;
        }
        #popup-button {
        max-width: 100px;
        }
    }
    </style>`;


    document.head.insertAdjacentHTML('beforeend', mobileStyles);

    // div för widget
    const widgetHTML = `
        <div id="charity-widget" style="position: fixed; bottom: 10px; left: 10px; z-index: 1000;">
            <img src="https://cdn.prod.website-files.com/5d9cc2c7b5891d21c8901fd2/6747832c294917caa81d0625_logoMH.avif" id="popup-button" style="width: 130px; height: auto; cursor: pointer;">
        </div>
        <div id="charity-overlay" style="display:none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.5); z-index: 1001;">
         <div id="charity-popup" style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background-image: url('https://cdn.prod.website-files.com/5d9cc2c7b5891d21c8901fd2/6747815ed8e35a532d380e12_background.avif'); background-size: cover; width: 100%; max-width: 500px; padding: 30px; font-family: 'Public Sans', sans-serif !important; text-align: center; line-height: Normal !important; justify-content: center; border-radius: 10px; padding-bottom: 50px;">
            <span id="close-popup" style="position: absolute; top: 20px; right: 30px; cursor: pointer; font-size: 12px; color: white;">Stäng</span>
            <img src="https://cdn.prod.website-files.com/5d9cc2c7b5891d21c8901fd2/6747832c294917caa81d0625_logoMH.avif" id="mhlogo" style="width: 25%; display: block; margin-left: auto; margin-right: auto; margin-top: 0px; ">
            <h2 style="font-family: 'Public Sans', serif !important; font-weight: 500; margin-bottom: 10px; text-align: center; font-size: 18px; color: white;">Musikhjälpen 2024</h2>
            <h1 id="popuph1" style="font-family: 'Public Sans', serif !important; font-weight: 600; max-width: 400px; margin-top: 0px; margin-bottom: 10px; text-align: center; font-size: 38px; color: white; margin-left: auto; margin-right: auto; ">Alla har rätt att överleva sin graviditet</h1>
            <p style="font-size: 19px; color: white; line-height: 18px; font-size: 15px; max-width: 450px; margin-top: 0px; width: 100%; margin: auto;">Varannan minut dör en kvinna i världen kopplat till graviditet och förlossning. Ditt bidrag till Musikhjälpen gör skillnad!</p>
            <img src="https://uploads-ssl.webflow.com/5d9cc2c7b5891d21c8901fd2/656b7ff8d387405af14fe80f_swish-QR.webp" id="swishqr" style="width: 100%; max-width:150px; display: block; margin: auto; margin-top: 30px; border-radius: 10px;">
            <div id="buttoncontainer" style="display: flex; justify-content: center; gap: 20px; margin-top: 30px;">
                <a href="#" id="copy-phone" style="font-size: 12px; display: inline-block; padding: 10px 20px; background-color: none; color: white; text-decoration: none; text-align: center; border-radius: 5px; border: 1px solid white;">Kopiera Swish-nummer</a>
                <a href="https://bossan.musikhjalpen.se/" target="blank" id="second-button" style="display: inline-block; padding: 10px 20px; color: white; font-size: 12px; border: 1px solid white; text-decoration: none; text-align: center; border-radius: 5px;">Gå till Musikhjälpen</a>
            </div>
            <a href="https://www.gofantastic.org/posts/musikhjalpen-2023-widget" target="_blank" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); color: white; font-size: 10px; font-style: italic; text-decoration: underline; z-index: 1002;">Använd denna popup på er hemsida</a>
        </div>`;
        
        

        document.body.insertAdjacentHTML('beforeend', widgetHTML);

        mixpanel.track("Widget Loaded");

    
        document.getElementById("charity-widget").addEventListener("click", function() {
            document.getElementById("charity-overlay").style.display = "block";
            mixpanel.track("Widget Opened");
        });

        // Kopiera swish-nummer
        document.getElementById("copy-phone").addEventListener("click", function(event) {
            mixpanel.track("Swish Number Copied");
            event.preventDefault();
            const el = document.createElement('textarea');
            el.value = '9019506';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            
            const originalText = this.textContent;
            this.textContent = 'Kopierat!';
            this.style.backgroundColor = 'white';
            this.style.color = '#009D7E';
    
            setTimeout(() => {
                this.textContent = originalText;
                this.style.backgroundColor = 'transparent';
                this.style.color = 'white';
            }, 2000);
        });


        // Stäng popup
        document.getElementById("close-popup").addEventListener("click", function() {
            document.getElementById("charity-overlay").style.display = "none";
        });

        document.getElementById("second-button").addEventListener("click", function() {
            mixpanel.track("Donate via Web Clicked");
        });
        
    
        // Stäng popup vid klick utanför
        document.getElementById("charity-overlay").addEventListener("click", function(event) {
            if (event.target === this) {
                this.style.display = "none";
            }
        });
        
    })();
});