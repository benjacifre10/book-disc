import { router } from './router.js';
import { checkAuth } from './modules/auth/authController.js';

document.addEventListener('DOMContentLoaded', () => {
  if (!checkAuth()) {
    window.location.hash = '#/login';
  } else {
    window.location.hash = '#/home';
  }

  window.onhashchange = router;
  router();
})
