var mapContainer = document.getElementById("map-container");
var iframe = document.createElement("iframe");
iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.7536073897313!2d-104.8651161239862!3d21.478182372189487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737cece0a2ad9%3A0x466ffc674c08577c!2sLalaween!5e0!3m2!1en!2smx!4v1696361877267!5m2!1en!2smx";
iframe.style.border = "0";
iframe.allowfullscreen = true;
iframe.title = "Ubicación de LalaWeen";
iframe.loading = "lazy";
iframe.referrerpolicy = "no-referrer-when-downgrade";
mapContainer.appendChild(iframe);