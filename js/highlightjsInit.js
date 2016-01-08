(function ($, Hljs, Drupal) {
  'use strict';

  Drupal.behaviors.hljs = {
    attach: function (context, settings) {

      $('code', context).once('hljs').each(function (i, block) {
        Hljs.highlightBlock(block);
      });
    }
  };

})(jQuery, window.hljs, window.Drupal);
