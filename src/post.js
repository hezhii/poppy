import hljs from 'highlight.js/lib/highlight';
import 'highlight.js/styles/default.css';
import QRCode from 'qrcode';

import './img/creativecommons-cc.svg';
import './img/m_alipay.jpg';
import './img/m_wx.jpg';

// @see https://github.com/highlightjs/highlight.js#commonjs
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
hljs.registerLanguage('css', require('highlight.js/lib/languages/css'));
hljs.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('json', require('highlight.js/lib/languages/json'));
hljs.registerLanguage('java', require('highlight.js/lib/languages/java'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
hljs.registerLanguage('python', require('highlight.js/lib/languages/python'));
hljs.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
hljs.registerLanguage('go', require('highlight.js/lib/languages/go'));
hljs.initHighlightingOnLoad();

// Toggle reward overlay
const rewardOverlay = document.getElementById('rewardOverlay');
const toggleRewardOverlay = function() {
  rewardOverlay.classList.toggle('show');
};

document.getElementById('rewardBtn')
  .addEventListener('click', toggleRewardOverlay);
document.getElementById('closeReward')
  .addEventListener('click', toggleRewardOverlay);

// wechat share
let haveGenerated = false;

function generateQrcode(callback) {
  if (haveGenerated) {
    callback();
  } else {
    QRCode.toCanvas(document.getElementById('qrcodeCanvas'), window.location.href, { width: 300 }, function(error) {
      if (error) console.error(error);
      haveGenerated = true;
      callback && callback();
    });
  }
}

const wechatShare = document.getElementById('wechatShare');
const toggleWechatShare = function() {
  wechatShare.classList.toggle('show');
};
document.getElementById('wechatShareBtn')
  .addEventListener('click', function() {
    generateQrcode(toggleWechatShare);
  });
document.getElementById('closeWechatShare')
  .addEventListener('click', toggleWechatShare);