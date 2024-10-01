var FORMALIZE=function(a,b,c,d){function e(a){var b=c.createElement("b");return b.innerHTML="<!--[if IE "+a+"]><br><![endif]-->",!!b.getElementsByTagName("br").length}var f="placeholder"in c.createElement("input"),g="autofocus"in c.createElement("input"),h=e(6),i=e(7);return{go:function(){var a,b=this.init;for(a in b)b.hasOwnProperty(a)&&b[a]()},init:{disable_link_button:function(){a(c.documentElement).on("click","a.button_disabled",function(){return!1})},full_input_size:function(){i&&a("textarea, input.input_full").length&&a("textarea, input.input_full").wrap('<span class="input_full_wrap"></span>')},ie6_skin_inputs:function(){if(h&&a("input, select, textarea").length){var b=/button|submit|reset/,c=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;a("input").each(function(){var d=a(this);this.getAttribute("type").match(b)?(d.addClass("ie6_button"),this.disabled&&d.addClass("ie6_button_disabled")):this.getAttribute("type").match(c)&&(d.addClass("ie6_input"),this.disabled&&d.addClass("ie6_input_disabled"))}),a("textarea, select").each(function(){this.disabled&&a(this).addClass("ie6_input_disabled")})}},autofocus:function(){if(!g&&a(":input[autofocus]").length){var b=a("[autofocus]")[0];b.disabled||b.focus()}},placeholder:function(){!f&&a(":input[placeholder]").length&&(FORMALIZE.misc.add_placeholder(),a(":input[placeholder]").each(function(){if("password"!==this.type){var b=a(this),c=b.attr("placeholder");b.focus(function(){b.val()===c&&b.val("").removeClass("placeholder_text")}).blur(function(){FORMALIZE.misc.add_placeholder()}),b.closest("form").submit(function(){b.val()===c&&b.val("").removeClass("placeholder_text")}).on("reset",function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})}}))}},misc:{add_placeholder:function(){!f&&a(":input[placeholder]").length&&a(":input[placeholder]").each(function(){if("password"!==this.type){var b=a(this),c=b.attr("placeholder");(!b.val()||b.val()===c)&&b.val(c).addClass("placeholder_text")}})}}}}(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()}),function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(a){return a}function c(a){return decodeURIComponent(a.replace(e," "))}function d(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return f.json?JSON.parse(a):a}catch(b){}}var e=/\+/g,f=a.cookie=function(e,g,h){if(void 0!==g){if(h=a.extend({},f.defaults,h),"number"==typeof h.expires){var i=h.expires,j=h.expires=new Date;j.setDate(j.getDate()+i)}return g=f.json?JSON.stringify(g):String(g),document.cookie=[f.raw?e:encodeURIComponent(e),"=",f.raw?g:encodeURIComponent(g),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("")}for(var k=f.raw?b:c,l=document.cookie.split("; "),m=e?void 0:{},n=0,o=l.length;o>n;n++){var p=l[n].split("="),q=k(p.shift()),r=k(p.join("="));if(e&&e===q){m=d(r);break}e||(m[q]=d(r))}return m};f.defaults={},a.removeCookie=function(b,c){return void 0!==a.cookie(b)?(a.cookie(b,"",a.extend({},c,{expires:-1})),!0):!1}}),function(a){"use strict";a.fn.fitVids=function(b){var c={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var d=document.head||document.getElementsByTagName("head")[0],e=".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",f=document.createElement("div");f.innerHTML='<p>x</p><style id="fit-vids-style">'+e+"</style>",d.appendChild(f.childNodes[1])}return b&&a.extend(c,b),this.each(function(){var b=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];c.customSelector&&b.push(c.customSelector);var d=".fitvidsignore";c.ignore&&(d=d+", "+c.ignore);var e=a(this).find(b.join(","));e=e.not("object object"),e=e.not(d),e.each(function(){var b=a(this);if(!(b.parents(d).length>0||"embed"===this.tagName.toLowerCase()&&b.parent("object").length||b.parent(".fluid-width-video-wrapper").length)){b.css("height")||b.css("width")||!isNaN(b.attr("height"))&&!isNaN(b.attr("width"))||(b.attr("height",9),b.attr("width",16));var c="object"===this.tagName.toLowerCase()||b.attr("height")&&!isNaN(parseInt(b.attr("height"),10))?parseInt(b.attr("height"),10):b.height(),e=isNaN(parseInt(b.attr("width"),10))?b.width():parseInt(b.attr("width"),10),f=c/e;if(!b.attr("id")){var g="fitvid"+Math.floor(999999*Math.random());b.attr("id",g)}b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*f+"%"),b.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto);var is_webkit=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,is_opera=navigator.userAgent.toLowerCase().indexOf("opera")>-1,is_ie=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((is_webkit||is_opera||is_ie)&&"undefined"!=typeof document.getElementById){var eventMethod=window.addEventListener?"addEventListener":"attachEvent";window[eventMethod]("hashchange",function(){var a=document.getElementById(location.hash.substring(1));a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus())},!1)}!function(a){"use strict";function c(){a("body").hasClass("pseudo-preloader")&&a("html").addClass("content-loaded"),a("a").on("click",function(){b=a(this).attr("href")})}var b="";jQuery(document).ready(function(a){c();self.setInterval(function(){c()},4e3)}),a(window).bind("beforeunload",function(){b.indexOf("mailto:")<0&&a("body").hasClass("pseudo-preloader")&&a("html").removeClass("content-loaded")}),jQuery(document).ready(function(a){function c(a){if(!a)return!1;var b=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;return b.test(a)}function i(b){if(a(".dslca-modal-allicons").length<1){var c=a(window).height(),d=a(".dslca-container").outerHeight(),e=c-d-90,f='<div class="dslca-modal dslca-modal-allicons" data-bg="#ca564f"><div class="modal-content"></div></div><!-- .dslca-modal -->';f+="<style> .dslca-modal-allicons { height:"+e+"px;} </style>",a(".dslca-container").after(f),a(".dslca-modal-allicons .modal-content").load("./wp-admin/?lbmn_listicons=all_icons",function(){b(!0)})}else b(!0)}function j(b){i(function(){a(".dslca-modal-allicons .icon-item").on("click",function(c){var d=a(this).find(".icon-item__name").text();b(d),dslc_hide_modal("",jQuery(".dslca-modal:visible")),c.stopImmediatePropagation()})})}function k(){a(".dslca-module-edit-option-icon").each(function(b,c){var d=a(this);if(!d.hasClass("lbmn-icons-extended")){var e=' <span class="dslca-open-modal-hook dslca-module-option-button" data-modal=".dslca-modal-allicons"><span class="dslca-icon dslc-icon-th"></span></span>';d.append(e),a(d).find(".dslca-module-option-button").on("click",function(b){h=a(d).find("input[type=text]").attr("name"),j(function(b){a("input[name="+h+"]").val(b).change()})}),d.addClass("lbmn-icons-extended")}})}var b=a(".notification-panel").data("uniquehash");"closed"===a.cookie(b)||a("body").hasClass("in-wp-customizer")||a(".notification-panel").slideDown(),a("body").hasClass("in-wp-customizer")&&a(".notification-panel").show(),a(".notification-panel__close").on("click",function(b){a(".notification-panel").slideUp(),a.cookie(a(".notification-panel").data("uniquehash"),"closed",{expires:7,path:"/"})}),a("input[type=submit]").addClass("button"),a(".close-help-popup").on("click",function(b){b.preventDefault(),a(this).parents(".message-popup").hide()}),a(".site-content, .site-footer").fitVids(),a(".mc4wp-form [type=submit], .nsu-form [type=submit]").hide(),a(".mc4wp-form [type=email], .nsu-form [type=email], .mc4wp-form [type=text], .nsu-form [type=text]").keyup(function(){c(a(this).val())?a(".mc4wp-form [type=submit], .nsu-form [type=submit]").show():a(".mc4wp-form [type=submit], .nsu-form [type=submit]").hide()}),a(".modal").each(function(b,c){var d=a(this);d.addClass("theme-lumberman"),d.find(".title").wrapInner("<h3></h3>")}),a(".social-icons-fullwidth .essb_links_list").css("width","auto"),1==customizerOffCanvasMobileMenu.mobile_menu&&(a(".header-menu .mobile_toggle").unbind(),a(".header-menu .mobile_toggle").on("click",function(b){b.preventDefault(),a(this).closest(".off-canvas-wrap").toggleClass("move-left")}),a(".exit-off-canvas").on("click",function(b){b.preventDefault(),a(".off-canvas-wrap").removeClass("move-right").removeClass("move-left")}));var d=a(".admin-bar .site-main").outerHeight();if(1>d){var e=a(window).height(),f=a("#global-container").outerHeight(),g=e-f;0>g&&(g=160),a("#content").css("min-height",g+"px"),a(".dslca-activate-composer-hook").clone().appendTo("#content .entry-content"),a("body:not(.single-lbmn_footer) #content .entry-content .dslca-activate-composer-hook").css({position:"absolute",bottom:"50%",right:"50%","margin-right":"-80px","margin-bottom":"-30px",padding:"20px","letter-spacing":"2px"})}a("body").hasClass("in-wp-customizer")&&a(".dslca-activate-composer-hook").hide(),a(".nav_search_box form input[type=text]").bind("focus",function(b){a(this).parent("form").addClass("search_form_focused")}),a(".nav_search_box form input[type=text]").bind("blur",function(b){a(this).parent("form").removeClass("search_form_focused")});var h="";a(document).on("click",".dslca-module-edit-hook",function(){a(".dslca-options-filter-hook").on("click",function(){a(".dslca-module-edit-option-icon:not(.lbmn-icons-extended)").length>0&&k()})}),a("body").hasClass("dslca-enabled")&&(a(document).on("click",".dslca-module-edit-hook",function(){a(".dslca-options-filter-hook").on("click",function(){var b='<span class="button-reset">Reset to default</span>';a(".dslca-module-edit-option-font, .dslca-module-edit-option-css_main_font_size, .dslca-module-edit-option-css_h1_font_size, .dslca-module-edit-option-css_h2_font_size, .dslca-module-edit-option-css_h3_font_size, .dslca-module-edit-option-css_h4_font_size, .dslca-module-edit-option-css_h5_font_size, .dslca-module-edit-option-css_h6_font_size, .dslca-module-edit-option-css_main_font_weight, .dslca-module-edit-option-css_h1_font_weight, .dslca-module-edit-option-css_h2_font_weight, .dslca-module-edit-option-css_h3_font_weight, .dslca-module-edit-option-css_h4_font_weight, .dslca-module-edit-option-css_h5_font_weight, .dslca-module-edit-option-css_h6_font_weight, .dslca-module-edit-option-css_main_line_height, .dslca-module-edit-option-css_h1_line_height, .dslca-module-edit-option-css_h2_line_height, .dslca-module-edit-option-css_h3_line_height, .dslca-module-edit-option-css_h4_line_height, .dslca-module-edit-option-css_h5_line_height, .dslca-module-edit-option-css_h6_line_height, .dslca-module-edit-option-css_h1_margin_bottom, .dslca-module-edit-option-css_h2_margin_bottom, .dslca-module-edit-option-css_h3_margin_bottom, .dslca-module-edit-option-css_h4_margin_bottom, .dslca-module-edit-option-css_h5_margin_bottom, .dslca-module-edit-option-css_h6_margin_bottom, .dslca-module-edit-option-css_link_color, .dslca-module-edit-option-css_link_color_hover, .dslca-module-edit-option-css_main_color, .dslca-module-edit-option-css_h1_color, .dslca-module-edit-option-css_h2_color, .dslca-module-edit-option-css_h3_color, .dslca-module-edit-option-css_h4_color, .dslca-module-edit-option-css_h5_color, .dslca-module-edit-option-css_h6_color").each(function(c,d){0==a(this).find(".button-reset").length&&a(this).find(".dslca-module-edit-label").append(b)}),a(".dslca-module-edit-option-font").each(function(b,c){a(this).append('<span class="dslc-icon-refresh dslc-icon-spin"></span>')})})}),dslcAllFontsArray.push(""),dslcRegularFontsArray.push(""),a(document).on("click",".dslca-module-edit-options-wrapper .button-reset",function(b){var c=a(this).closest(".dslca-module-edit-option");a(c).find("input").val("").change(),a(c).find(".dslca-module-edit-field-font-suggest").text(""),a(c).find(".ui-slider-handle").css("left","0"),a(c).find(".sp-preview-inner").addClass("sp-clear-display").css("background-color","transparent")})),a('a[href*="\\#"]:not([href="\\#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")||location.hostname==this.hostname){var b=a(this.hash);if("#top"==this.hash)return a("html,body").animate({scrollTop:0},600),!1;if(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),b.length)return a("html,body").animate({scrollTop:b.offset().top-70},1e3),!1}})})}(jQuery);