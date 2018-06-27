// JS Goes here - ES6 supported
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default'
import { initPhotoSwipeFromDOM } from "./initPhotoSwipeFromDOM"

console.log(PhotoSwipeUI_Default);

window.PhotoSwipe = PhotoSwipe;
window.PhotoSwipeUI_Default = PhotoSwipeUI_Default;

initPhotoSwipeFromDOM('.my-gallery');


if (window.netlifyIdentity) {
  window.netlifyIdentity.on("init", user => {
    if (!user) {
      window.netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
