import { renderTodos } from "./todo";

function renderButtonGoogleApi() {
  gapi.signin2.render(fullContent);
  console.log("Não logou!");
}
function renderContent(googleAuth) {
  const googleUser = googleAuth.currentUser.get();
  const idToken = googleUser.getAuthResponse();
  //objeto idToken com a propriedade do objeto que seria o ID do token
  renderTodos(idToken.id_token);
  console.log("logou");
}

function verificationLogin(userLogado, googleAuth) {
  if (userLogado) {
    renderContent(googleAuth);
  } else {
    renderButtonGoogleApi();
  }
}

window.startApp = function () {
  gapi.load("auth2", function () {
    let config = {
      client_id:
        "1052846594787-eeitv1eunmcu1e84h2u23rmu4uv3p39e.apps.googleusercontent.com",
    };
    gapi.auth2.init(config).then(function (googleAuth) {
      console.log("Google auth inicializado!");
      const userLogado = googleAuth.isSignedIn.get();
      googleAuth.isSignedIn.listen((indicativo) =>
        verificationLogin(indicativo, googleAuth)
      );
      verificationLogin(userLogado, googleAuth);
    });
  });

  console.log("startei o role");
};
