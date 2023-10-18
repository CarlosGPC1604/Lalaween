window.fbAsyncInit = function () {
    FB.init({
        appId: '1052514895765179', // Reemplaza 'TU_APP_ID' con el ID de tu App de Facebook
        xfbml: true,
        version: 'v10.0' // Verifica la versión más reciente en la documentación de Facebook
    });
    FB.AppEvents.logPageView();
};

function shareOnFacebook() {
    FB.ui({
        method: 'share',
        href: 'https://www.facebook.com/LalaWeen/',  // Reemplaza con la URL que quieres compartir
    }, function (response) {
        // Aquí puedes agregar lógica adicional después de que el usuario comparta o cancele
    });
}
