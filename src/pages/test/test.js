// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@static/css/reset.css';
import '@common/js/setRem.js';
import Vue from 'vue';
import Test from './test.vue';

/* eslint-disable no-new */
new Vue({
  el: '#test',
  template: '<Test/>',
  components: { Test }
});
// router.replace('goods');
