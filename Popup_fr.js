westui = {
  lang: {
    input_level: "Niveau",
    input_search: "Recherche",
    damages: "Dégâts",
    per_level: "par Niveau",
    speed: "Vitesse",
    level: "Niveau",
    unsalable: "Non vendable",
    auction: "Peut être acheté/vendu aux enchères",
    not_auction: "Ne peut pas être acheté/vendu aux enchères",
    not_upgrade: "Non améliorable",
    upgrade: "Améliorable",
    total: "Total",
    popup: {
      dmg: {
        dglvl: '<p class="popup_dmg">+ #1 Dégâts#2</p>'
      },
      skills: {
        fo: '<p class="popup_attribute">+ #1 Force#2</p>',
        mo: '<p class="popup_attribute">+ #1 Mobilité#2</p>',
        ha: '<p class="popup_attribute">+ #1 Habileté#2</p>',
        ch: '<p class="popup_attribute">+ #1 Charisme#2</p>',
        co: '<p class="popup_skill">+ #1 Construction#2</p>',
        pu: '<p class="popup_skill">+ #1 Puissance#2</p>',
        te: '<p class="popup_skill">+ #1 Ténacité#2</p>',
        pe: '<p class="popup_skill">+ #1 Persévérance#2</p>',
        pv: '<p class="popup_skill">+ #1 Points de vie#2</p>',
        mc: '<p class="popup_skill">+ #1 Monter à cheval#2</p>',
        rx: '<p class="popup_skill">+ #1 Réflexe#2</p>',
        ev: '<p class="popup_skill">+ #1 Eviter#2</p>',
        ca: '<p class="popup_skill">+ #1 Se cacher#2</p>',
        na: '<p class="popup_skill">+ #1 Nager#2</p>',
        vi: '<p class="popup_skill">+ #1 Viser#2</p>',
        ti: '<p class="popup_skill">+ #1 Tirer#2</p>',
        pi: '<p class="popup_skill">+ #1 Piéger#2</p>',
        de: '<p class="popup_skill">+ #1 Dextérité#2</p>',
        re: '<p class="popup_skill">+ #1 Réparer#2</p>',
        di: '<p class="popup_skill">+ #1 Diriger#2</p>',
        ta: '<p class="popup_skill">+ #1 Tactique#2</p>',
        ma: '<p class="popup_skill">+ #1 Marchander#2</p>',
        an: '<p class="popup_skill">+ #1 Manier les animaux#2</p>',
        pr: '<p class="popup_skill">+ #1 Prestance#2</p>'
      },
      fb: {
        fbdef: '<p class="popup_fb">+ #1 <b>Défense</b> (Bonus de BdF)</p>',
        fboff: '<p class="popup_fb">+ #1 <b>Attaque</b> (Bonus de BdF)</p>',
        fbres: '<p class="popup_fb">+ #1 <b>Résistance</b> (Bonus de BdF)</p>',
        fbdefs: '<p class="popup_fb">+ #1 <b>Défense</b> (Bonus de secteur de BdF)</p>',
        fboffs: '<p class="popup_fb">+ #1 <b>Attaque</b> (Bonus de secteur de BdF)</p>',
        fbdmgs: '<p class="popup_fb">+ #1 <b>Dégâts</b> (Bonus de secteur de BdF)</p>'
      },
      special: {
        xp: '<p class="popup_txtgreen">+ #1% d\'expérience pour les travaux, duels et batailles de fort#2</p>',
        money: '<p class="popup_txtgreen">+ #1% d\'argent en travaux et duels#2</p>',
        luck: '<p class="popup_txtgreen">+ #1% de probabilité de chance en plus#2</p>',
        regen: '<p class="popup_txtgreen">+ #1% Régénération#2</p>',
        drop: '<p class="popup_txtgreen">+ #1% de chance de drop#2</p>',
        labor_pts: '<p class="popup_txtgreen">+ #1 points de travail#2</p>',
        spd: '<p class="popup_txtgreen">+ #1% Vitesse#2</p>'
      }
    }
  },
  config: {
    enable_set_calc: true,
    plain_popup: false,
    redirect_on_dblclick: false,
    link_on_dblclick: false,
    enable_sorting: true,
    cdn: "https://westzz.innogamescdn.com",
    img_buyprice: "/images/2/22/Achat.png",
    img_sellprice: "/images/3/3b/Vente.png",
    img_male: "/images/8/83/Homme.png",
    img_female: "/images/8/8c/Femme.png",
    set_bonus: {
      fo: {
        name: "Force",
        img: "/images/thumb/0/09/Force.png/40px-Force.png"
      },
      mo: {
        name: "Mobilité",
        img: "/images/thumb/c/c1/Mobilit%C3%A9.png/40px-Mobilit%C3%A9.png"
      },
      ha: {
        name: "Habileté",
        img: "/images/thumb/1/1a/Habilet%C3%A9.png/40px-Habilet%C3%A9.png"
      },
      ch: {
        name: "Charisme",
        img: "/images/thumb/8/8f/Charisme.png/40px-Charisme.png"
      },
      co: {
        name: "Construire",
        img: "/images/thumb/0/0e/Construire.png/40px-Construire.png"
      },
      pu: {
        name: "Puissance",
        img: "/images/thumb/f/f4/Puissance.png/40px-Puissance.png"
      },
      te: {
        name: "Ténacité",
        img: "/images/thumb/8/85/T%C3%A9nacit%C3%A9.png/40px-T%C3%A9nacit%C3%A9.png"
      },
      pe: {
        name: "Persévérance",
        img: "/images/thumb/e/e9/Pers%C3%A9v%C3%A9rance.png/40px-Pers%C3%A9v%C3%A9rance.png"
      },
      pv: {
        name: "Points de vie",
        img: "/images/thumb/b/bb/Points_de_vie_aptitude.png/40px-Points_de_vie_aptitude.png"
      },
      mc: {
        name: "Monter à cheval",
        img: "/images/thumb/0/01/Monter_%C3%A0_cheval.png/40px-Monter_%C3%A0_cheval.png"
      },
      rx: {
        name: "Réflexe",
        img: "/images/thumb/5/52/R%C3%A9flexe.png/40px-R%C3%A9flexe.png"
      },
      ev: {
        name: "Eviter",
        img: "/images/thumb/f/ff/Eviter.png/40px-Eviter.png"
      },
      ca: {
        name: "Se cacher",
        img: "/images/thumb/5/5f/Se_cacher.png/40px-Se_cacher.png"
      },
      na: {
        name: "Nager",
        img: "/images/thumb/b/b8/Nager.png/40px-Nager.png"
      },
      vi: {
        name: "Viser",
        img: "/images/thumb/6/68/Viser.png/40px-Viser.png"
      },
      ti: {
        name: "Tirer",
        img: "/images/thumb/f/f9/Tirer.png/40px-Tirer.png"
      },
      pi: {
        name: "Piéger",
        img: "/images/thumb/2/26/Pi%C3%A9ger.png/40px-Pi%C3%A9ger.png"
      },
      de: {
        name: "Dextérité",
        img: "/images/thumb/4/4a/Dext%C3%A9rit%C3%A9.png/40px-Dext%C3%A9rit%C3%A9.png"
      },
      re: {
        name: "Réparer",
        img: "/images/thumb/c/cc/R%C3%A9parer.png/40px-R%C3%A9parer.png"
      },
      di: {
        name: "Diriger",
        img: "/images/thumb/b/b5/Diriger.png/40px-Diriger.png"
      },
      ta: {
        name: "Tactique",
        img: "/images/thumb/2/2c/Tactique.png/40px-Tactique.png"
      },
      ma: {
        name: "Marchander",
        img: "/images/thumb/c/ca/Marchander_aptitude.png/40px-Marchander_aptitude.png"
      },
      an: {
        name: "Manier les animaux",
        img: "/images/thumb/b/be/Manier_les_animaux.png/40px-Manier_les_animaux.png"
      },
      pr: {
        name: "Prestance",
        img: "/images/thumb/c/cb/Prestance.png/40px-Prestance.png"
      },
      fbdef: {
        name: "<b>Défense</b> (Bonus de bataille de fort)",
        img: "/images/thumb/2/2d/D%C3%A9fense.png/40px-D%C3%A9fense.png"
      },
      fboff: {
        name: "<b>Attaque</b> (Bonus de bataille de fort)",
        img: "/images/thumb/e/ef/Attaque.png/40px-Attaque.png"
      },
      fbres: {
        name: "<b>Résistance</b> (Bonus de bataille de fort)",
        img: "/images/4/4a/R%C3%A9sistance.png"
      },
      fbdefs: {
        name: "<b>Défense</b> (Bonus de secteur de bataille de fort)",
        img: "/images/thumb/2/2d/D%C3%A9fense.png/40px-D%C3%A9fense.png"
      },
      fboffs: {
        name: "<b>Attaque</b> (Bonus de secteur de bataille de fort)",
        img: "/images/thumb/e/ef/Attaque.png/40px-Attaque.png"
      },
      fbdmgs: {
        name: "<b>Dégâts</b> (Bonus de secteur de bataille de fort)",
        img: "/images/5/54/Dommages.png"
      },
      fbdmg: {
        name: "<b>Dégâts</b> (Bonus de bataille de fort)",
        img: "/images/5/54/Dommages.png"
      },
      xp: {
        name: "Expérience pour les travaux, duels et batailles de fort (%)",
        img: "/images/0/01/Xxp.png"
      },
      money: {
        name: "Argent en travaux et duels (%)",
        img: "/images/f/fd/Dollarb.png"
      },
      luck: {
        name: "Probabilité de chance en plus (%)",
        img: "/images/f/f0/Luck.png"
      },
      regen: {
        name: "Régénération (%)",
        img: "/images/4/44/R%C3%A9g%C3%A9n%C3%A9ration.png",
      },
      drop: {
        name: "Chance de drop améliorée pour les <b>produits</b> (%)",
        img: "/images/thumb/f/f6/Luck_prod.png/40px-Luck_prod.png"
      },
      labor_pts: {
        name: "Points de travail supplémentaires (sur tous les travaux)",
        img: "/images/thumb/d/df/Jobs.png/40px-Jobs.png"
      },
      spd: {
        name: "Vitesse",
        img: "/images/thumb/f/fb/Vitesse.png/40px-Vitesse.png"
      }
    },
    sorting: {
      'Aucun': '{"id":1}',
      'Force': '{"fo":1}',
      'Mobilité': '{"mo":1}',
      'Habileté': '{"ha":1}',
      'Charisme': '{"ch":1}',
      'Construction': '{"fo":1,"co":1}',
      'Puissance': '{"fo":1,"pu":1}',
      'Ténacité': '{"fo":1,"te":1}',
      'Persévérance': '{"fo":1,"pe":1}',
      'Points de vie': '{"fo":1,"pv":1}',
      'Monter à cheval': '{"mo":1,"mc":1}',
      'Réflexe': '{"mo":1,"rx":1}',
      'Eviter': '{"mo":1,"ev":1}',
      'Se cacher': '{"mo":1,"ca":1}',
      'Nager': '{"mo":1,"na":1}',
      'Viser': '{"ha":1,"vi":1}',
      'Tirer': '{"ha":1,"ti":1}',
      'Piéger': '{"ha":1,"pi":1}',
      'Dextérité': '{"ha":1,"de":1}',
      'Réparer': '{"ha":1,"re":1}',
      'Diriger': '{"ch":1,"di":1}',
      'Tactique': '{"ch":1,"ta":1}',
      'Marchander': '{"ch":1,"ma":1}',
      'Manier les animaux': '{"ch":1,"an":1}',
      'Prestance': '{"ch":1,"pr":1}',
      'Points de travail pour construire': '{"fo":3,"co":3,"ha":1,"re":1,"ch":1,"di":1}',
      'Expérience pour les travaux, duels et batailles de fort (%)': '{"xp":1}',
      'Argent en travaux et duels (%)': '{"money":1}',
      'Probabilité de chance en plus (%)': '{"luck":1}',
      'Régénération (%)': '{"regen":1}',
      'Chance de drop (%)': '{"drop":1}',
      'Vitesse (%)': '{"spd":1,"hspd":1,"mo":1,"mc":1}',
      'Dégât moyen': '{"dgmin":0.5,"dgmax":0.5,"dglvl":1}',
      'Dégât maximal': '{"dgmax":1,"dglvl":1}',
    }
  },
  initPage: function() {
    //Append input level
    if ($("#input_level").length === 1) {
      var input_level = $('<input type="number" style="width:80px;" class="west" placeholder="' + westui.lang.input_level + '" min="0" max="150">').bind("propertychange keyup input paste", function() {
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
    if ($("#input_search").length === 1) {
      var input_search = $('<input type="search" class="west" placeholder="' + westui.lang.input_search + '">').bind("propertychange keyup input paste", function() {
        var val = this.value.toLowerCase();
        if (val === '') {
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
    if ($("#switch").length === 1) {
      $("#fire").hide();
      $("#switch").on("click", function() {
        $('#melee, #fire').toggle();
      });
    }

    //Switch products
    if ($("#switch_prod").length === 1) {
      $("#prod2").hide();
      $("#switch_prod").on("click", function() {
        $('#prod, #prod2').toggle();
      });
    }

    //Show a "plain text" popup in the template
    if (westui.config.plain_popup && (new RegExp(mw.config.get('wgFormattedNamespaces')[10] + '\:Item\_*').test(mw.config.get('wgPageName'))) && ($('.item_container').length === 1)) {
      $('#mw-content-text').append('<center><div id="popup_plain" class="popup_window"><div class="popup_front"><div class="tw_bg_popup_tl"></div><div class="tw_bg_popup_tr"></div><div class="tw_bg_popup_bl"></div><div class="tw_bg_popup_br"></div></div><div id="popup_plain_contents" class="popup_contents"></div></div></center>');
      $('#popup_plain').hide();
      $('#popup_plain_contents').append(westui.popup.createPopup($('.item_container'), 0));
      $('#popup_plain').slideDown();
    }

    //On dbl click on item, redirect the user to the template
    if (westui.config.redirect_on_dblclick) {
      $('.item_container img').on('dblclick', function() {
        window.location = '/wiki/' + mw.config.get('wgFormattedNamespaces')[10] + ':Item_' + JSON.parse($(this).parent().attr('data-popup')).id / 1000;
      });
    }
    if (westui.config.link_on_dblclick) {
      $('.item_container img').on('dblclick', function() {
        window.location = '/wiki/' + $(this).parent().attr('data-link');
      });
    }

  },
  popup: {
    content: "",
    delay: 200,
    active: false,
    show: function(obj) {
      westui.popup.content = westui.popup.createPopup($(obj), parseInt($(obj).attr('data-lvl')));
      westui.popup.active = true;
      westui.popup.setTimeout();
      westui.popup.getContainer().html(westui.popup.content);
    },
    hide: function() {
      westui.popup.getEl().css({
        display: 'none',
        top: 0,
        left: 0
      });
      westui.popup.active = false;
      westui.popup.clearTimeout();
    },
    setTimeout: function() {
      westui.popup.clearTimeout();
      westui.popup.timer = window.setTimeout(function() {
        westui.popup.getEl().css('display', 'block');
      }, westui.popup.delay);
    },
    clearTimeout: function() {
      if (westui.popup.timer) window.clearTimeout(westui.popup.timer);
    },
    getEl: function() {
      return $('#popup_window');
    },
    getContainer: function() {
      return $('#popup_contents');
    },
    createPopup: function(el, lvl) {
      var data = JSON.parse(el.attr('data-popup'));
      var cdn_cat = el.attr('data-cdn-cat');
      var cdn_name = el.attr('data-cdn-img');
      var html = '<div class="popup_image"><img src="' + westui.config.cdn + '/images/items/' + data.cdn_cat + '/' + data.cdn_img + '.png' + '?1"/></div><div class="popup_divider"></div><p class="popup_name">' + data.name + '</p><p class="popup_type">' + data.type + '</p><br/>';
      var upgraded = false;
      if ((lvl >= 1) && (lvl <= 5)) {
        upgraded = true;
        data.auc = false;
      }
      if (data.dgmin && data.dgmax) {
        if (upgraded) {
          data.dgmin += Math.round(Math.max(1, data.dgmin * 0.1 * lvl));
          data.dgmax += Math.round(Math.max(1, data.dgmax * 0.1 * lvl));
        }
        html += '<p class="popup_dmg">' + data.dgmin + '-' + data.dgmax + ' ' + westui.lang.damages + '</p>';
      }
      if (data.text) {
        for (var i = 0; i < data.text.length; i++) {
          html += '<p class="popup_text">' + data.text[i] + '</p>';
        }
        html += '<br/>';
      }
      for (var cat in westui.lang.popup) {
        var cnt = 0;
        for (var key in westui.lang.popup[cat]) {
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
                per_level = " (" + westui.lang.per_level + ")";
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
            html += westui.lang.popup[cat][key].replace('#1', data[key]).replace('#2', per_level);
          }
        }
        if (cnt > 0) {
          html += '<br/>';
        }
      }
      if (data.textjob) {
        for (var i = 0; i < data.textjob.length; i++) {
          html += '<p class="popup_txtgreen">' + data.textjob[i] + '</p>';
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
          html += '<tr><td><img src="' + westui.config.cdn + '/images/jobs/' + data.jobs[i][1] + '.png"/></td><td><span>&nbsp;&nbsp;' + data.jobs[i][0] + '</span></td></tr>';
        }
        html += '</table></div>';
      }
      if (data.craft) {
        html += '<div style="text-align:center;"><table  class="popup_crafteditem"><tr><td><img src="' + westui.config.cdn + '/images/crafting/profsymbol_' + data.craft.id + '_small.png"/></td><td><table><tr>';
        for (var i = 0; i < data.craft.req.length; i++) {
          html += '<td><img style="width:36px;height:36px;" src="' + westui.config.cdn + '/images/items/yield/' + data.craft.req[i][0] + '.png"/></td>';
        }
        html += '</tr><tr>';
        for (var i = 0; i < data.craft.req.length; i++) {
          html += '<td><span>x' + data.craft.req[i][1] + '</span></td>';
        }
        html += '</tr></table></td></tr></table></div>';
      }
      html += '<div class="popup_infos">';
      if (data.hspd) {
        if (upgraded) {
          data.hspd += Math.round(Math.max(1, data.hspd * 0.1 * lvl));
        }
        html += '<p class="popup_speed">' + westui.lang.speed + ': +' + data.hspd + '%</p><br/>';
      }
      if (data.set) html += '<p><a class="popup_set" href="/wiki/' + data.set + '">' + data.set + '</a></p><br/>';
      if (data.sp) {
        html += '<img src="' + westui.config.img_buyprice + '"/>' + data.bp + '&nbsp;&nbsp;&nbsp;&nbsp;<img src="' + westui.config.img_sellprice + '"/>&nbsp;' + data.sp + '<br/><br/>';
      } else {
        html += '<i>' + westui.lang.unsalable + '</i><br/><br/>';
      }
      if (data.lvl) html += westui.lang.level + ' <b>' + data.lvl + '</b><br/>';
      if (data.sex) {
        if (data.sex == 0) {
          html += '<img src="' + westui.config.img_male + '"/>&nbsp;&nbsp;&nbsp;';
        } else {
          html += '<img src="' + westui.config.img_female + '"/>&nbsp;&nbsp;&nbsp;';
        }
      }
      if (data.auc == 1) {
        html += '<span class="popup_txtgreen">' + westui.lang.auction + '</span><br/>';
      } else {
        html += '<span class="popup_txtred">' + westui.lang.not_auction + '</span><br/>';
      }
      if (data.upg == 0) {
        html += '<span class="popup_txtred">' + westui.lang.not_upgrade + '</span><br/>';
      } else {
        html += '<span class="popup_txtgreen">' + westui.lang.upgrade + '</span><br/>';
      }
      html += '<br/><p class="popup_id">[item=<b>' + data.id + '</b>]</p></div>';
      return html;
    },
    setPosition: function(e) {
      var window_width = $(window).width();
      var window_height = $(window).height();
      var popup_width = westui.popup.getEl().outerWidth();
      var popup_height = westui.popup.getEl().outerHeight();
      var pos_x = e.clientX;
      var pos_y = e.clientY;
      var top;
      var left;
      var margin_top = 20;
      var margin_left = 20;
      if (pos_x + popup_width + margin_left > window_width) {
        if (pos_x - popup_width - margin_left < 0) {
          left = e.pageX - e.clientX;
        } else {
          left = e.pageX - popup_width - margin_left;
        }
      } else {
        left = margin_left + e.pageX;
      }
      if (pos_y + popup_height + margin_top > window_height) {
        top = window_height - popup_height + (e.pageY - e.clientY);
      } else {
        top = margin_top + e.pageY;
      }
      westui.popup.getEl().css({
        top: top,
        left: left
      });
    },
    init: function() {

      //Append popup container
      $('body').append('<div id="popup_window" class="popup_window"><div class="popup_front"><div class="tw_bg_popup_tl"></div><div class="tw_bg_popup_tr"></div><div class="tw_bg_popup_bl"></div><div class="tw_bg_popup_br"></div></div><div id="popup_contents" class="popup_contents"></div></div>');

      //Set events
      $(document).on('mouseenter', '.item_container', function(e) {
        westui.popup.show(this);
        westui.popup.setPosition(e);
      });
      $(document).on('mouseleave', '.item_container', function() {
        westui.popup.hide();
      });
      $(document).on('mousemove', '.item_container', function(e) {
        westui.popup.setPosition(e);
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
        westui.popup.show(container[0]);
      });
      $(document).on('click', '.downgrade', function() {
        var container = $(this).closest('.item_container');
        var lvl = parseInt(container.attr('data-lvl'));
        if (lvl !== 0) {
          container.attr('data-lvl', lvl - 1);
          container.find('.level').html(lvl - 1);
        }
        westui.popup.show(container[0]);
      });
    }
  },
  set_calc: {
    bonus: {
      //If there are any other "special" bonuses, they will be dynamically retrieved and stored there
      extra_set_bonus: {}
    },
    //Bonuses from all sets / items :
    data: {},
    //Status of all items (item lvl, activated or not)
    itemStatus: {},
    getData: function() {
      $('.set_container').each(function() {
        var set_id = $(this).attr('data-set-id');
        westui.set_calc.itemStatus[set_id] = {};
        westui.set_calc.data[set_id] = {
          items: {},
          set: {}
        };
      });
      //Get bonuses from all sets
      $('.infoSet').each(function() {
        var set_id = $(this).attr('data-set-id');
        $(this).find('.infosetatt').each(function() {
          var nb = $(this).attr('data-nb');
          westui.set_calc.data[set_id].set[nb] = {};
          $(this).find('.set_bonus').each(function() {
            key = $(this).attr('data-type');
            if ($(this).find('.calc').length !== 0) {
              westui.set_calc.data[set_id].set[nb][key] = -parseFloat($(this).find('.calc').attr('id'));
            } else {
              westui.set_calc.data[set_id].set[nb][key] = parseFloat($(this).find('.val').text());
            }
            if (!westui.config.set_bonus.hasOwnProperty(key)) {
              westui.set_calc.bonus.extra_set_bonus[key] = {
                img: $(this).find('img').attr('src'),
                name: $(this).find('#tooltip_content').text()
              };
            }
          });
        });
      });
      //Get bonuses from all item sets
      $('.set_container').each(function() {
        var set_id = $(this).attr('data-set-id');
        $(this).find('.item_container').each(function() {
          var json = JSON.parse($(this).attr('data-popup'));
          if ($(this).is(":hidden")) {
            westui.set_calc.itemStatus[set_id][json.id] = false;
          } else {
            westui.set_calc.itemStatus[set_id][json.id] = 0;
          }
          for (var prop in json) {
            if (json.hasOwnProperty(prop) && (westui.config.set_bonus.hasOwnProperty(prop) || westui.set_calc.bonus.extra_set_bonus.hasOwnProperty(prop))) {
              if (!westui.set_calc.data[set_id].items[prop]) {
                westui.set_calc.data[set_id].items[prop] = {};
              }
              westui.set_calc.data[set_id].items[prop][json.id] = json[prop];
            }
          }
        });
      });
    },
    calc: function() {
      //Only calc if a player level is provided
      if ($('#input_level').length === 0 | $('#input_level input').val() !== "") {
        var level = parseInt($('#input_level input').val());
        total = {};
        for (var set_id in westui.set_calc.data) {
          for (var key in westui.set_calc.data[set_id].items) {
            for (var item_id in westui.set_calc.data[set_id].items[key]) {
              if (westui.set_calc.itemStatus[set_id][item_id] !== false) {
                lvl = westui.set_calc.itemStatus[set_id][item_id];
                if (!total[key]) {
                  total[key] = 0;
                }
                var value = westui.set_calc.data[set_id].items[key][item_id];

                if (westui.set_calc.data[set_id].items[key][item_id] < 0) {
                  //If bonus (per Level)
                  value = -value;

                  if (westui.set_calc.itemStatus[set_id][item_id] > 0) {
                    //If item upgraded
                    total[key] += Math.ceil(value * level) + Math.round(Math.max(1, Math.ceil(value * level) * 0.1 * lvl));
                  } else {
                    total[key] += Math.ceil(value * level);
                  }
                } else {
                  if (westui.set_calc.itemStatus[set_id][item_id] > 0) {
                    if (value < 1) {
                      total[key] += Math.round(1e6 * (value * 1 + Math.round(Math.max(1, value * 1000 * lvl)) / 10000)) / 1e6;
                    } else {
                      total[key] += value + Math.round(Math.max(1, value * 0.1 * lvl));
                    }
                  } else {
                    total[key] += value;
                  }
                }
              }
            }
          }
          var item_nb = 0;
          for (var item_id in westui.set_calc.itemStatus[set_id]) {
            if (westui.set_calc.itemStatus[set_id][item_id] !== false) {
              item_nb++;
            }
          }
          for (var key in westui.set_calc.data[set_id].set[item_nb]) {
            if (!total[key]) {
              total[key] = 0;
            }
            if (westui.set_calc.data[set_id].set[item_nb][key] < 0) {
              total[key] += Math.ceil(-westui.set_calc.data[set_id].set[item_nb][key] * level);
            } else {
              total[key] += westui.set_calc.data[set_id].set[item_nb][key];
            }
          }
        }
        //Create the html table
        var html = '<center><table class="infoSet"><caption><br><big><b>' + westui.lang.total + '</b></big></caption><tbody><tr><td></center>';
        for (var key in westui.config.set_bonus) {
          if (total.hasOwnProperty(key)) {
            html += '<div class="set_bonus tooltip_container"><img src="' + westui.config.set_bonus[key].img + '"><b>+' + total[key] + (['xp', 'money', 'luck', 'spd', 'regen', 'drop'].indexOf(key) !== -1 ? "%" : "") + '</b><div class="tooltip_outer"><div class="tooltip"><div class="tw_bg_tl"></div><div class="tw_bg_tr"></div><div class="tw_bg_bl"></div><div class="tw_bg_br"></div><div id="tooltip_content">' + westui.config.set_bonus[key].name + '</div></div></div></div>';
          }
        }
        for (var key in westui.set_calc.bonus.extra_set_bonus) {
          if (total.hasOwnProperty(key)) {
            html += '<div class="set_bonus tooltip_container"><img src="' + westui.set_calc.bonus.extra_set_bonus[key].img + '"><b>+' + total[key] + (['xp', 'money', 'luck', 'spd', 'regen', 'drop'].indexOf(key) !== -1 ? "%" : "") + '</b><div class="tooltip_outer"><div class="tooltip"><div class="tw_bg_tl"></div><div class="tw_bg_tr"></div><div class="tw_bg_bl"></div><div class="tw_bg_br"></div><div id="tooltip_content">' + westui.set_calc.bonus.extra_set_bonus[key].name + '</div></div></div></div>';
          }
        }
        //Display the result at the bottom of the page
        $('#set_calc').html(html);
      } else {
        $('#set_calc').html("");
      }
    },
    initEvents: function() {
      //Deactivate / activate item on click
      $('.item_container > img').on('click', function() {
        var item_container = $(this).closest('.item_container');
        item_container.toggleClass('item_off');
        var set_id = item_container.closest('.set_container').attr('data-set-id');
        var item_id = JSON.parse(item_container.attr('data-popup')).id;
        if (item_container.hasClass('item_off') || item_container.is(":hidden")) {
          westui.set_calc.itemStatus[set_id][item_id] = false;
        } else {
          westui.set_calc.itemStatus[set_id][item_id] = parseInt(item_container.attr('data-lvl'));
        }
        westui.set_calc.calc();
      });
      //Update item level on upgrade / downgrade
      $(document).on('click', '.upgrade, .downgrade', function() {
        var item = $(this).closest('.item_container');
        var set_id = item.closest('.set_container').attr('data-set-id');
        if (!item.hasClass('item_off') && !item.is(":hidden")) {
          westui.set_calc.itemStatus[set_id][JSON.parse(item.attr('data-popup')).id] = parseInt(item.attr('data-lvl'));
          westui.set_calc.calc();
        }
      });
      //Calc again when player level changes
      $("#input_level").bind("propertychange keyup input paste", function() {
        westui.set_calc.calc();
      });
      //Activate/deactivate melee/fire weapon when the switch btn is clicked
      $("#switch").on('click', function() {
        $('#melee, #fire').each(function() {
          var item = $(this).find('.item_container');
          var set_id = $(this).closest('.set_container').attr('data-set-id');
          if ($(this).is(":hidden")) {
            westui.set_calc.itemStatus[set_id][JSON.parse(item.attr('data-popup')).id] = false;
          } else {
            westui.set_calc.itemStatus[set_id][JSON.parse(item.attr('data-popup')).id] = parseInt(item.attr('data-lvl'));
          }
        });
        westui.set_calc.calc();
      });
    },
    init: function() {
      westui.set_calc.initEvents();
      westui.set_calc.getData();
      $('#mw-content-text').append('<div id="set_calc"></div>');
      if ($('#input_level').length === 0)
        westui.set_calc.calc();
    }
  },
  sorting: {
    sortItems: function(param) {
      $('.item_container').removeAttr('data-sort').show();
      function calcSortVal(el) {
        var data = JSON.parse($(el).attr('data-popup'));
        var char_lvl = $('#input_level input').val();
        char_lvl = (char_lvl ? char_lvl : 150);
        var none = Object.keys(param).indexOf('id')!==-1;
        var val = 0;
        for (var prop in param) {
          if (prop==="id"){
            val -= data[prop];
          } else if ((!data.lvl || data.lvl <= char_lvl)) {
            if (data[prop]) {
              if (data[prop] < 0) {
                val += Math.ceil(-data[prop] * char_lvl) * param[prop];
              } else {
                val += data[prop] * param[prop];
              }
            }
          }
        }
        $(el).attr('data-sort', val);
        if (val == 0) {
          $(el).hide();
        }
        if ($(el).find('.sortval').length !== 0) {
          if (none){
            $(el).find('.sortval').html('');
          } else {
            $(el).find('.sortval').html(val);
          }
        } else if (!none){
          $(el).append('<div class="sortval">' + val + '</div>');
        }
      }
      $('#mw-content-text').find('.sorting_hidden').hide();
      $('.sorting_container').each(function() {
        $(this).find('.item_container').sort(function(a, b) {
          if (!$(a).attr('data-sort')) {
            calcSortVal(a);
          }
          if (!$(b).attr('data-sort')) {
            calcSortVal(b);
          }
          return $(b).attr('data-sort') - $(a).attr('data-sort');
        }).appendTo($(this));
      })
    },
    init: function() {
      if ($('div#sort_items').length === 1) {
        var html = "<div id='input_search'><select id='sort_items' class='west'><option selected disabled>Trier par :</option>";
        for (var prop in westui.config.sorting) {
          html += "<option value='" + westui.config.sorting[prop] + "'>" + prop + "</option>";
        }
        html += "</select></div>";
        $('div#sort_items').html(html);
        $('select#sort_items').on('change', function() {
          westui.sorting.sortItems(JSON.parse($(this).find("option:selected").attr('value')));
        });
      }
    }
  },
  init: function() {
    westui.initPage();
    westui.popup.init();
    if (westui.config.enable_sorting)
      westui.sorting.init();
    if (westui.config.enable_set_calc && $('.infoSet').length !== 0) {
      westui.set_calc.init();
    }
  }
};
westui.init();
