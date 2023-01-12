let cod =`
<div class="contenedor">
    <img class="logo" src="Imgs/LOGO/JS.png">
    <h1>JS Arquitectura Digital</h1>
    <input type="checkbox" id="checkmenu">
    <label class="menuicono" for="checkmenu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </label>
    <nav class="menu">
        <a href="index.html" id="op0">Inicio</a>
        <a href="3d.html" id="op1">3D</a>
        <a href="comparativa.html" id="op2">Comparativas</a>
        <a href="antes y despues.html" id="op3">Antes y después</a>
        <a href="fotomontajes.html" id="op4">Fotomontajes</a>
        <a href="contacto.html" id="op5">Contacto</a>
    </nav>
</div>

`

let cad =`
<div class="footer-ultimo">
    <div class="footer-columna1">
        <div class="imagenytexto">
            <img class="footer-logo" src="Imgs/LOGO/JS.png"><span>Arquitectura<span>&</span> diseño digital</span></div>				
            <p class="footer-links">
                <a href="index.html" class="link-1">Inicio</a>
                <a href="3d.html">3d</a>
                <a href="comparativa.html">Comparativas</a>
                <a href="antes y despues.html">Antes y después</a>
                <a href="fotomontajes.html">Fotomontajes</a>
            </p>
            <p class="derechos">TPO Claudio Ferrer Ornth - Codo a Codo 2022 - Comisión nro. 22078 -</p>
        </div>
    <div class="footer-columna2">
        <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Calle 424 nro. 861</span> Villa Elisa, La Plata</p>
        </div>
        <div>
            <i class="fa fa-phone"></i>
            <p>+54 221 641-1310</p>
        </div>
        <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:safa.arq@gmail.com">safa.arq@gmail.com</a></p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.877200369436!2d-58.0773423851819!3d-34.85931278039403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2dee9d2a6ccb5%3A0x4a97b6f95e65c512!2sC.%20424%20861%2C%20Villa%20Elisa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1653177199814!5m2!1ses!2sar" width="250" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">Villa Elisa</iframe>
    </div>
    <div class="footer-columna3">
        <p class="footer-nosotros">
            <span>Contactanos!</span>
            Nuestro equipo de arquitectos y diseñadores ofrece desarrollo digital, planos, dirección de obra, trámites municipales y asesoramiento integral. <br><br>
            Contanos sobre tu proyecto y obtené presupuesto sin cargo. 
        </p>
        <div class="footer-iconos">
            <a href="https://facebook.com"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/juansafa.arquitectura/"><i class="fa fa-instagram"></i></a>
            <a href="https://linkedin.com"><i class="fa fa-linkedin"></i></a>
        </div>
    </div>
</div>

`


document.getElementById("footermio").innerHTML = cad;
document.getElementById("headermio").innerHTML = cod;

