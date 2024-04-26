// plugins/gsap.js
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default ({ app }, inject) => {
  // GSAP und ScrollTrigger global verfügbar machen
  app.gsap = gsap;
  app.ScrollTrigger = ScrollTrigger;
  inject('gsap', gsap);
  inject('ScrollTrigger', ScrollTrigger);
};
