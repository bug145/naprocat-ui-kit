import MobileDetect from 'mobile-detect';
import Vue from 'vue';

export default ({ req }, inject) => {
  const userAgent = process.client ? window.navigator.userAgent : req.headers['user-agent'];

  const device = MobileDetect
    ? new MobileDetect(userAgent)
    : {
      os() {
        return '';
      },
      mobile() {
        return false;
      },
    };

  const reactiveIsMobile = Vue.observable({
    isMobile: process.client ? window.matchMedia('(max-width: 768px)').matches : !!device.mobile(),
    isIOS: ['iOS', 'iPadOS'].includes(device.os()),
  });

  inject('device', reactiveIsMobile);

  if (process.client) {
    window.addEventListener('resize', () => {
      const newIsMobile = window.matchMedia('(max-width: 768px)').matches;
      if (newIsMobile !== reactiveIsMobile.isMobile) {
        reactiveIsMobile.isMobile = newIsMobile;
      }
    });
  }
};
