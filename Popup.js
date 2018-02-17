//Append popup container
$('body').append('<div id="popup_window" class="popup_window"><div class="popup_front"><div class="tw_bg_tl"></div><div class="tw_bg_tr"></div><div class="tw_bg_bl"></div><div class="tw_bg_br"></div></div><div id="popup_contents" class="popup_contents"></div></div>');

//Set events
$(document).on('mouseenter', '.item_container', function(e) {
    Popup.show(this);
    Popup.setPosition(e);
});
$(document).on('mouseleave', '.item_container', function() {
    Popup.hide();
});
$(document).on('mousemove', '.item_container', function(e) {
    Popup.setPosition(e);
});

$('.item_level').mousedown(function(e) {
    e.preventDefault();
});
$(document).on('click', '.upgrade', function() {
    var container = $(this).closest('.item_container');
    var lvl = parseInt(container.attr('data-lvl'));
    if (lvl !== 5) {
        container.attr('data-lvl', lvl + 1);
        container.find('.level').html(lvl + 1);
    }
    Popup.show(container[0]);
});
$(document).on('click', '.downgrade', function() {
    var container = $(this).closest('.item_container');
    var lvl = parseInt(container.attr('data-lvl'));
    if (lvl !== 0) {
        container.attr('data-lvl', lvl - 1);
        container.find('.level').html(lvl - 1);
    }
    Popup.show(container[0]);
});

//Append input level
if ($("#input_level").length == 1) {
    var input_level = $('<input type="number" style="width:80px;" class="west" placeholder="Your level" min="0" max="150">').bind("propertychange keyup input paste", function() {
        if (this.value > 150) {
            this.value = 150;
        } else if (this.value < 0) {
            this.value = 0;
        }
        $(".calc").each(function() {
            if (input_level.val() == 0) {
                $(this).html(this.id);
                $('.per_level_off').addClass('per_level').removeClass('per_level_off');
            } else {
                $(this).html(Math.ceil(Number(this.id) * input_level.val()));
                $('.per_level').addClass('per_level_off').removeClass('per_level');
            }
        });
    }).appendTo($("#input_level"));
}


//Search
if ($("#input_search").length == 1) {
    var input_search = $('<input type="search" class="west" placeholder="Search">').bind("propertychange keyup input paste", function() {
        var val = this.value.toLowerCase();
        if (val == '') {
            $('.item_container').show();
        } else {
            $('.item_container').hide();
            $('.item_container').filter(function() {
                return $(this).attr('data-popup').toLowerCase().indexOf(val) > -1;
            }).show();
        }
    }).appendTo($("#input_search"));
}

//Switch weapons
if ($("#switch").length == 1) {
    $("#fire").hide();
    $("#switch").on("click", function() {
        $('#melee, #fire').toggle()
    });
}

var Popup = {
    content: "",
    delay: 200,
    active: false,
    show: function(obj) {
        Popup.content = Popup.createPopup($(obj).attr('data-popup'), $(obj).attr('data-cdn-cat'), $(obj).attr('data-cdn-img'), parseInt($(obj).attr('data-lvl')));
        Popup.active = true;
        Popup.setTimeout();
        Popup.getContainer().html(Popup.content);
    },
    hide: function() {
        Popup.getEl().css({
            display: 'none',
            top: 0,
            left: 0
        });
        Popup.active = false;
        Popup.clearTimeout();
    },
    setTimeout: function() {
        Popup.clearTimeout();
        Popup.timer = window.setTimeout(function() {
            Popup.getEl().css('display', 'block');
        }, Popup.delay);
    },
    clearTimeout: function() {
        if (Popup.timer) window.clearTimeout(Popup.timer);
    },
    getEl: function() {
        return $('#popup_window');
    },
    getContainer: function() {
        return $('#popup_contents');
    },
    createPopup: function(data, cdn_cat, cdn_name, lvl) {
        data = JSON.parse(data);
        var html = '<div class="popup_image"><img src="https://westzz.innogamescdn.com/images/items/' + data.cdn_cat + '/' + data.cdn_img + '.png' + '"/></div><div class="popup_divider"></div><p class="popup_name">' + data.name + '</p><p class="popup_type">' + data.type + '</p><br/>';
        var upgraded = false;
        if ((lvl >= 1) && (lvl <= 5)) {
            upgraded = true;
            data.auc = false;
        }
        if (data.dmg_min && data.dmg_max) {
            if (upgraded) {
                data.dmg_min += Math.round(Math.max(1, data.dmg_min * 0.1 * lvl));
                data.dmg_max += Math.round(Math.max(1, data.dmg_max * 0.1 * lvl));
            }
            html += '<p class="popup_dmg">' + data.dmg_min + '-' + data.dmg_max + ' Damages</p>';
        }
        for (var cat in Popup.data) {
            var cnt = 0;
            for (var key in Popup.data[cat]) {
                if (data.hasOwnProperty(key)) {
                    cnt++;
                    var per_level = "";
                    if (data[key] < 0) {
                        if ($('#input_level input').val() > 0) {
                            data[key] = Math.ceil($('#input_level input').val() * -data[key]);
                            if (upgraded) {
                                data[key] += Math.round(Math.max(1, data[key] * 0.1 * lvl));
                            }
                        } else {
                            data[key] = -data[key];
                            per_level = " (per Level)";
                            if (upgraded) {
                                data[key] = Math.round(1e6 * (data[key] * 1 + Math.round(Math.max(1, data[key] * 1000 * lvl)) / 10000)) / 1e6;
                            }
                        }
                    } else if (upgraded) {
                        if (data[key] < 1) {
                            data[key] = Math.round(1e6 * (data[key] * 1 + Math.round(Math.max(1, data[key] * 1000 * lvl)) / 10000)) / 1e6;
                        } else {
                            data[key] += Math.round(Math.max(1, data[key] * 0.1 * lvl));
                        }
                    }
                    html += Popup.data[cat][key].replace('#1', data[key]).replace('#2', per_level);
                }
            }
            if (cnt > 0) {
                html += '<br/>';
            }
        }
        if (data.text) {
            for (var i = 0; i < data.text.length; i++) {
                html += '<p class="popup_text">' + data.text[i] + '</p>';
            }
            html += '<br/>';
        }
        if (data.bonus) {
            for (var i = 0; i < data.bonus.length; i++) {
                html += '<p class="popup_bonus">' + data.bonus[i] + '</p>';
            }
            html += '<br/>';
        }
        if (data.jobs) {
            html += '<div style="text-align:center;"><table class="popup_job">';
            for (var i = 0; i < data.jobs.length; i++) {
                html += '<tr><td><img src="https://westzz.innogamescdn.com/images/jobs/' + data.jobs[i][1] + '.png"/></td><td><span>&nbsp;&nbsp;' + data.jobs[i][0] + '</span></td></tr>';
            }
            html += '</table></div>';
        }
        if (data.craft) {
            html += '<div style="text-align:center;"><table  class="popup_crafteditem"><tr><td><img src="https://westzz.innogamescdn.com/images/crafting/profsymbol_' + data.craft.id + '_small.png"/></td><td><table><tr>';
            for (var i = 0; i < data.craft.req.length; i++) {
                html += '<td><img style="width:36px;height:36px;" src="https://westzz.innogamescdn.com/images/items/yield/' + data.craft.req[i][0] + '.png"/></td>';
            }
            html += '</tr><tr>';
            for (var i = 0; i < data.craft.req.length; i++) {
                html += '<td><span>x' + data.craft.req[i][1] + '</span></td>';
            }
            html += '</tr></table></td></tr></table></div>';
        }
        html += '<div class="popup_infos">';
        if (data.spd) {
            if (upgraded) {
                data.spd += Math.round(Math.max(1, data.spd * 0.1 * lvl));
            }
            html += '<p class="popup_speed">Speed: +' + data.spd + '%</p><br/>';
        }
        if (data.set) html += '<p><a class="popup_set" href="/wiki/' + data.set + '">' + data.set + '</a></p><br/>';
        if (data.sp) {
            html += '<img src="/images/5/57/Buy_price.png"/>' + data.bp + '&nbsp;&nbsp;&nbsp;&nbsp;<img src="/images/f/fc/Sell_price.png"/>&nbsp;' + data.sp + '<br/><br/>';
        } else {
            html += '<i>Unsalable</i><br/><br/>';
        }
        if (data.lvl) html += 'Level <b>' + data.lvl + '</b><br/>';
        if (data.sex) {
            if (data.sex == 0) {
                html += '<img src="/images/c/c5/Gender_m.png"/>&nbsp;&nbsp;&nbsp;';
            } else {
                html += '<img src="/images/4/41/Gender_f.png"/>&nbsp;&nbsp;&nbsp;';
            }
        }
        if (data.auc == 1) {
            html += '<span class="popup_txtgreen">Auctionable</span><br/>';
        } else {
            html += '<span class="popup_txtred">Not auctionable</span><br/>';
        }
        if (data.upg == 0) {
            html += '<span class="popup_txtred">Not upgradeable</span><br/>';
        } else {
            html += '<span class="popup_txtgreen">Upgradeable</span><br/>';
        }
        html += '<br/><p class="popup_id">[item=<b>' + data.id + '</b>]</p></div>';
        return html;
    },
    setPosition: function(e) {
        var window_width = $(window).width();
        var window_height = $(window).height();
        var popup_width = Popup.getEl().outerWidth();
        var popup_height = Popup.getEl().outerHeight();
        var pos_x = e.clientX;
        var pos_y = e.clientY;
        var top;
        var left;
        var margin_top = 20;
        var margin_left = 20;
        if (pos_x + popup_width + margin_left > window_width) {
            left = pos_x - popup_width - margin_left + (e.pageX - e.clientX);
        } else {
            left = pos_x + margin_left + (e.pageX - e.clientX);
        }
        if (pos_y + popup_height + margin_top > window_height) {
            top = window_height - popup_height + (e.pageY - e.clientY);
        } else {
            top = pos_y + margin_top + (e.pageY - e.clientY);
        }
        Popup.getEl().css({
            top: top,
            left: left
        });
    },
    data: {
        dmg: {
            dmglvl: '<p class="popup_dmg">+ #1 Damages#2</p>'
        },
        skills: {
            str: '<p class="popup_attribute">+ #1 Strength#2</p>',
            mob: '<p class="popup_attribute">+ #1 Mobility#2</p>',
            dex: '<p class="popup_attribute">+ #1 Dexterity#2</p>',
            cha: '<p class="popup_attribute">+ #1 Charisma#2</p>',
            con: '<p class="popup_skill">+ #1 Construction#2</p>',
            vig: '<p class="popup_skill">+ #1 Vigor#2</p>',
            tou: '<p class="popup_skill">+ #1 Toughness#2</p>',
            sta: '<p class="popup_skill">+ #1 Stamina#2</p>',
            hea: '<p class="popup_skill">+ #1 Health Points#2</p>',
            rid: '<p class="popup_skill">+ #1 Horseback Riding#2</p>',
            ref: '<p class="popup_skill">+ #1 Reflex#2</p>',
            dod: '<p class="popup_skill">+ #1 Dodging#2</p>',
            hid: '<p class="popup_skill">+ #1 Hiding#2</p>',
            swi: '<p class="popup_skill">+ #1 Swimming#2</p>',
            aim: '<p class="popup_skill">+ #1 Aiming#2</p>',
            sho: '<p class="popup_skill">+ #1 Shooting#2</p>',
            pit: '<p class="popup_skill">+ #1 Setting traps#2</p>',
            fin: '<p class="popup_skill">+ #1 Fine Motor Skills#2</p>',
            rep: '<p class="popup_skill">+ #1 Repairing#2</p>',
            lea: '<p class="popup_skill">+ #1 Leadership#2</p>',
            tac: '<p class="popup_skill">+ #1 Tactics#2</p>',
            tra: '<p class="popup_skill">+ #1 Trading#2</p>',
            ani: '<p class="popup_skill">+ #1 Animal Instinct#2</p>',
            app: '<p class="popup_skill">+ #1 Appearance#2</p>'
        },
        fb: {
            fbdef: '<p class="popup_fb">+ #1 <b>Defense</b> (Fort battle bonus)</p>',
            fboff: '<p class="popup_fb">+ #1 <b>Attack</b> (Fort battle bonus)</p>',
            fbres: '<p class="popup_fb">+ #1 <b>Resistance</b> (Fort battle bonus)</p>',
            fbdefs: '<p class="popup_fb">+ #1 <b>Defense</b> (Fort battle sector bonus)</p>',
            fboffs: '<p class="popup_fb">+ #1 <b>Attack</b> (Fort battle sector bonus)</p>',
            fbdmgs: '<p class="popup_fb">+ #1 <b>Damages</b> (Fort battle sector bonus)</p>'
        }
    }
};

//Show a "plain text" popup in the template
if ((new RegExp(mw.config.get('wgFormattedNamespaces')[10] + '\:Item\_*').test(mw.config.get('wgPageName'))) && ($('.item_container').length == 1)) {
    $('#mw-content-text').append('<center><div id="popup_plain" class="popup_window"><div class="popup_front"><div class="tw_bg_tl"></div><div class="tw_bg_tr"></div><div class="tw_bg_bl"></div><div class="tw_bg_br"></div></div><div id="popup_plain_contents" class="popup_contents"></div></div></center>');
    $('#popup_plain').hide();
    $('#popup_plain_contents').append(Popup.createPopup($('.item_container').attr('data-popup'), $('.item_container').attr('data-cdn-cat'), $('.item_container').attr('data-cdn-img'), 0))
    $('#popup_plain').slideDown();
}

//On dbl click on item, redirect the user to the template
$('.item_container img').on('dblclick', function() {
    window.location = '/wiki/' + mw.config.get('wgFormattedNamespaces')[10] + ':Item_' + JSON.parse($(this).parent().attr('data-popup'))['id'] / 1000
});
