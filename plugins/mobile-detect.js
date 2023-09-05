import MobileDetect from 'mobile-detect';

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

  const isIOS = ['iOS', 'iPadOS'].includes(device.os());
  inject('isIOS', isIOS);

  const isMobile = process.client ? window.matchMedia('(max-width: 768px)').matches : !!device.mobile();
  inject('isMobile', isMobile);

  if (process.client) {
    window.addEventListener('resize', () => {
      inject('isMobile', window.matchMedia('(max-width: 768px)').matches);
    });
  }
};
