import { renderTodos } from "./todo";

let googleAuth;
const GOOGLE_CLIENT_ID =
  "1052846594787-eeitv1eunmcu1e84h2u23rmu4uv3p39e.apps.googleusercontent.com";
const WRAPPER_ID = "wrapper";

function renderContent(isLoggedIn) {
  if (isLoggedIn) {
    const googleUser = googleAuth.currentUser.get();
    const { id_token: idToken } = googleUser.getAuthResponse();
    renderTodos(idToken);
  } else {
    renderLogin();
  }
}

function renderLogin() {
  gapi.signin2.render(WRAPPER_ID);
}

window.startApp = function () {
  console.log("dijsaidsj");
  gapi.load("auth2", () => {
    googleAuth = gapi.auth2.init({
      client_id: GOOGLE_CLIENT_ID,
    });

    const isLoggedIn = googleAuth.isSignedIn.get();
    googleAuth.isSignedIn.listen(renderContent);
    renderContent(isLoggedIn);
  });
};
