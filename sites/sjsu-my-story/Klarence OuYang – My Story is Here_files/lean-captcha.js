var lc_timer;
var lc_sound = new Array;
var lc_sound_started = false;

jQuery(document).ready(
    function () {
        jQuery('textarea[name=comment]').after( '<div style="display:block;position:relative;clear:both;" id="secureimgdiv" ></div>' );
		if (typeof jQuery('#secureimgdiv').on == 'function') {
			jQuery('#secureimgdiv').on('click', '#lc_reload_action', function() {
				lean_captcha_load_img();
				return false;
			});
            jQuery('#secureimgdiv').on('click', '#lc_audio_action', function() {
                jQuery(this).addClass('lc_loading');
                lean_captcha_load_audio(this);
                return false;
            });
		} else {
			jQuery('#secureimgdiv').live('click', '#lc_reload_action', function() {
				lean_captcha_load_img();
				return false;
			});
            jQuery('#secureimgdiv').live('click', '#lc_audio_action', function() {
                jQuery(this).addClass('lc_loading');
                lean_captcha_load_audio(this);
                return false;
            });
		}
        lean_captcha_load_img();
    }
);

function lean_captcha_load_img() {
    lc_sound = new Array;
    lc_sound_started = false;
    jQuery('#secureimgdiv').load(lean_captcha_object.ajax_url, 
        {'action': 'lean_captcha_render', 'key' : lean_captcha_object.key},
        function () {
            var lc_timer;
            if (typeof lc_timer !== undefined) {
				clearTimeout(lc_timer);
			}
    	    
			lc_timer = setTimeout('lean_captcha_load_img();', 290000);
			lean_captcha_fix_tab_index();
		}
    );
}

function lean_captcha_audio_focus() {
	jQuery('#securitycode').focus();
	return false;
}

function lean_captcha_refresh_alert() {
	jQuery('.lean-captcha-refresh-notification').attr({'aria-hidden': false, 'role': 'alert'});
	setTimeout(function() {
		jQuery('#securitycode').focus();
	},1000);
	return false;
}

function lean_captcha_load_audio(anchor) {
    if (lc_sound_started) {
        return;
    }

    lc_sound_started = true;

    href = jQuery(anchor).attr('href');

    lc_sound[0] = new Howl({
        urls: [ href + '&c=0' ],
        format: 'mp3',
        onend: lean_captch_play_audio_1,
        autoplay:true,
        onplay: function () {
            jQuery('#lc_audio_action').removeClass('lc_loading').addClass('lc_playing');
        }
    });
    lc_sound[1] = new Howl({
        urls: [ href + '&c=1' ],
        format: 'mp3',
        onend: lean_captch_play_audio_2,
    });
    lc_sound[2] = new Howl({
        urls: [ href + '&c=2' ],
        format: 'mp3',
        onend: lean_captch_play_audio_3,
    });
    lc_sound[3] = new Howl({
        urls: [ href + '&c=3' ],
        format: 'mp3',
        onend: lean_captch_play_audio_4,
    });
    lc_sound[4] = new Howl({
        urls: [ href + '&c=4' ],
        format: 'mp3',
        onend: lean_captch_play_audio_5,
    });
    lc_sound[5] = new Howl({
        urls: [ href + '&c=5' ],
        format: 'mp3',
        onend: lean_captch_play_audio_6,
    });
    lc_sound[6] = new Howl({
        urls: [ href + '&c=6' ],
        format: 'mp3',
        onend: lean_captch_play_audio_7,
    });
    lc_sound[7] = new Howl({
        urls: [ href + '&c=7' ],
        format: 'mp3',
        onend: lean_captch_play_audio_8,
    });
    lc_sound[8] = new Howl({
        urls: [ href + '&c=8' ],
        format: 'mp3',
        onend: function () {
            lc_sound_started = false;
            jQuery('#lc_audio_action').removeClass('lc_loading').removeClass('lc_playing');
        }
    });
}

function lean_captch_play_audio_1() {
    lean_captch_play_audio(1);
}

function lean_captch_play_audio_2() {
    lean_captch_play_audio(2);
}

function lean_captch_play_audio_3() {
    lean_captch_play_audio(3);
}

function lean_captch_play_audio_4() {
    lean_captch_play_audio(4);
}

function lean_captch_play_audio_5() {
    lean_captch_play_audio(5);
}

function lean_captch_play_audio_6() {
    lean_captch_play_audio(6);
}

function lean_captch_play_audio_7() {
    lean_captch_play_audio(7);
}

function lean_captch_play_audio_8() {
    lean_captch_play_audio(8);
}

function lean_captch_play_audio_9() {
    lean_captch_play_audio(9);
}

function lean_captch_play_audio(i) {
    lc_sound[i].play();
}

function lean_captcha_fix_tab_index() {
    var tabindex = 1;
    jQuery('#commentform input,select,textarea,.lc_action').each(function() {
    	if (this.type != "hidden") {
	    var $input = jQuery(this);
	    $input.attr("tabindex", tabindex);
	    tabindex++;
        }
    });
}
