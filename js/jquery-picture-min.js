/**
 * jQuery Picture
 * http://jquerypicture.com
 * http://github.com/Abban/jQuery-Picture
 *
 * May 2012
 *
 * @version 0.9
 * @author Abban Dunne http://abandon.ie
 * @license MIT
 *
 * jQuery Picture is a plugin to add support for responsive images to your layouts.
 * It supports both figure elements with some custom data attributes and the new
 * proposed picture format. This plugin will be made redundant when the format is
 * approved and implemented by browsers. Lets hope that happens soon. In the meantime
 * this plugin will be kept up to date with latest developments.
 *
 */!function(t){t.fn.picture=function(e){var i={container:null,ignorePixelRatio:!1,useLarger:!1,insertElement:">a",inlineDimensions:!1},n=t.extend({},i,e);this.each(function(){function e(e){if(e){if("figure"==c.get(0).tagName.toLowerCase()){var o=c.data();t.each(o,function(t){var e;e=t.replace(/[^\d.]/g,""),e&&l.push(parseInt(e))})}else c.find("source").each(function(){var e,i;e=t(this).attr("media"),e&&(i=e.replace(/[^\d.]/g,""),l.push(parseInt(i)))});l.sort(function(t,e){return t-e})}var g=0;a=null==n.container?t(window).width()*d:t(n.container).width()*d,t.each(l,function(t,e){parseInt(a)>=parseInt(e)&&parseInt(g)<=parseInt(e)&&(g=e)}),n.useLarger&&(idx=l.indexOf(g),idx<l.length-1&&(g=l[idx+1])),s!==g&&(s=g,"figure"==c.get(0).tagName.toLowerCase()?r():i())}function i(){var e=new Object;if(c.find("source").each(function(){var i,n,r;i=t(this).attr("media"),n=t(this).attr("src"),r=i?i.replace(/[^\d.]/g,""):0,e[r]=n}),0==c.find("img").length){var i='<img src="'+e[s]+'"';c.attr("style")&&(i+=' style="'+c.attr("style")+'"'),c.attr("alt")&&(i+=' alt="'+c.attr("alt")+'"'),i+=">",0==t(n.insertElement,c).length?c.append(i):t(n.insertElement,c).append(i)}else c.find("img").attr("src",e[s]);n.inlineDimensions&&t("<img/>").attr("src",t("img",c).attr("src")).load(function(){t("img",c).attr("height",this.height),t("img",c).attr("width",this.width)})}function r(){var e=new Object,i=c.data();if(t.each(i,function(t,i){var n;n=t.replace(/[^\d.]/g,""),n||(n=0),e[n]=i}),0==c.find("img").length){var r='<img src="'+e[s]+'"';c.attr("style")&&(r+=' style="'+c.attr("style")+'"'),c.attr("title")&&(r+=' alt="'+c.attr("title")+'"'),r+=">",0==t(n.insertElement,c).length?c.append(r):t(n.insertElement,c).append(r)}else t("img",c).attr("src",e[s]);n.inlineDimensions&&t("<img/>").attr("src",t("img",c).attr("src")).load(function(){t("img",c).attr("height",this.height),t("img",c).attr("width",this.width)})}var a,s,c,o,l=new Array,d=1;n.ignorePixelRatio||void 0===window.devicePixelRatio||(d=window.devicePixelRatio),c=t(this),c.find("noscript").remove(),e(!0),o=!1,t(window).bind("resize.picture",function(){o!==!1&&clearTimeout(o),o=setTimeout(e,200)})})}}(jQuery);
