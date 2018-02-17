if ($('.set_container').length!=0){
	//If it's a set page
	var set_calc = {
		bonus: {
    //List of usual bonuses matched with tooltip and image url
			set_bonus: {
				str: {
					name: "Strength",
					img: "/images/thumb/8/8b/Strength.png/40px-Strength.png"
				},
				mob: {
					name: "Mobility",
					img: "/images/thumb/5/5a/Mobility.png/40px-Mobility.png"
				},
				dex: {
					name: "Dexterity",
					img: "/images/thumb/0/0d/Dexterity.png/40px-Dexterity.png"
				},
				cha: {
					name: "Charisma",
					img: "/images/thumb/c/c9/Charisma.png/40px-Charisma.png"
				},
				con: {
					name: "Construction",
					img: "/images/thumb/3/37/Construction.png/40px-Construction.png"
				},
				vig: {
					name: "Vigor",
					img: "/images/thumb/9/90/Skill_Punch.png/40px-Skill_Punch.png"
				},
				tou: {
					name: "Toughness",
					img: "/images/thumb/f/f8/Skill_Tough.png/40px-Skill_Tough.png"
				},
				sta: {
					name: "Stamina",
					img: "/images/thumb/8/8d/Stamina.png/40px-Stamina.png"
				},
				hea: {
					name: "Health Points",
					img: "/images/thumb/9/94/Health.png/40px-Health.png"
				},
				rid: {
					name: "Horseback Riding",
					img: "/images/thumb/7/78/Hbr.png/40px-Hbr.png"
				},
				ref: {
					name: "Reflex",
					img: "/images/thumb/e/e9/Skill_Reflex.png/40px-Skill_Reflex.png"
				},
				dod: {
					name: "Dodging",
					img: "/images/thumb/0/07/Skill_Dodge.png/40px-Skill_Dodge.png"
				},
				hid: {
					name: "Hiding",
					img: "/images/thumb/9/97/Hiding.png/40px-Hiding.png"
				},
				swi: {
					name: "Swimming",
					img: "/images/thumb/f/f4/Swimming.png/40px-Swimming.png"
				},
				aim: {
					name: "Aiming",
					img: "/images/thumb/5/53/Skill_Aim.png/40px-Skill_Aim.png"
				},
				sho: {
					name: "Shooting",
					img: "/images/thumb/7/73/Skill_Shot.png/40px-Skill_Shot.png"
				},
				pit: {
					name: "Setting traps",
					img: "/images/thumb/e/e1/Trapping.png/40px-Trapping.png"
				},
				fin: {
					name: "Fine Motor Skills",
					img: "/images/thumb/1/18/Fms.png/40px-Fms.png"
				},
				rep: {
					name: "Repairing",
					img: "/images/thumb/d/d5/Repairing.png/40px-Repairing.png"
				},
				lea: {
					name: "Leadership",
					img: "/images/thumb/4/44/Leadership.png/40px-Leadership.png"
				},
				tac: {
					name: "Tactics",
					img: "/images/thumb/9/91/Skill_Tactic.png/40px-Skill_Tactic.png"
				},
				tra: {
					name: "Trading",
					img: "/images/thumb/f/f3/Skill_Trading.png/40px-Skill_Trading.png"
				},
				ani: {
					name: "Animal Instinct",
					img: "/images/thumb/9/9d/AnimalInstinct.png/40px-AnimalInstinct.png"
				},
				app: {
					name: "Appearance",
					img: "/images/thumb/4/4c/Skill_Appearance.png/40px-Skill_Appearance.png"
				},
				fbdef: {
					name: "<b>Defense</b> (Fort battle bonus)",
					img: "/images/8/82/Set_Fb_defense.png"
				},
				fboff: {
					name: "<b>Attack</b> (Fort battle bonus)",
					img: "/images/3/30/Set_Fb_offense.png"
				},
				fbres: {
					name: "<b>Resistance</b> (Fort battle bonus)",
					img: "/images/4/4b/Resistance.png"
				},
				fbdefs: {
					name: "<b>Defense</b> (Fort battle sector bonus)",
					img: ""
				},
				fboffs: {
					name: "<b>Attack</b> (Fort battle sector bonus)",
					img: ""
				},
				fbdmgs: {
					name: "<b>Damages</b> (Fort battle sector bonus)",
					img: "/images/b/b3/Damages_sector.png"
				}
			},
      //If there are any other "special" bonuses, they will be dynamically retrieved and stored there
			extra_set_bonus: {}
		},
    //Bonuses from all sets / items :
		data: {},
    //Status of all items (item lvl, activated or not)
		itemStatus: {},
		getData: function() {
    //Get bonuses from all item sets
			$('.set_container').each(function() {
				var set_id = $(this).attr('data-set-id');
				set_calc.itemStatus[set_id] = {};
				set_calc.data[set_id] = {
					items: {},
					set: {}
				};
				$(this).find('.item_container').each(function() {
					var json = JSON.parse($(this).attr('data-popup'));
					if ($(this).is(":hidden")){
						set_calc.itemStatus[set_id][json.id] = false;
					} else {
						set_calc.itemStatus[set_id][json.id] = 0;
					}
					for (prop in json) {
						if (json.hasOwnProperty(prop) && set_calc.bonus.set_bonus.hasOwnProperty(prop)) {
							if (!set_calc.data[set_id].items[prop]) {
								set_calc.data[set_id].items[prop] = {}
							}
							set_calc.data[set_id].items[prop][json.id] = json[prop];
						}
					}
				})
			})
      //Get bonuses from all sets
			$('.infoSet').each(function() {
				var set_id = $(this).attr('data-set-id');
				$(this).find('.infosetatt').each(function() {
					var nb = $(this).attr('data-nb');
					set_calc.data[set_id].set[nb] = {}
					$(this).find('.set_bonus').each(function() {
						key = $(this).attr('data-type');
						if ($(this).find('.calc').length !== 0) {
							set_calc.data[set_id].set[nb][key] = -parseFloat($(this).find('.calc').attr('id'));
						} else {
							set_calc.data[set_id].set[nb][key] = parseFloat($(this).find('.val').text());
						}
						if (!set_calc.bonus.set_bonus.hasOwnProperty(key)) {
							set_calc.bonus.extra_set_bonus[key] = {
								img: $(this).find('img').attr('src'),
								name: $(this).find('#tooltip_content').text()
							}
						}
					})
				})
			})

		},
		calc: function() {
    //Only calc if a player level is provided
			if ($('#input_level input').val()!==""){
				var level = parseInt($('#input_level input').val());
				total = {}
				for (var set_id in set_calc.data) {
					for (var key in set_calc.data[set_id].items) {
						for (var item_id in set_calc.data[set_id].items[key]) {
							if (set_calc.itemStatus[set_id][item_id]!==false) {
								lvl = set_calc.itemStatus[set_id][item_id];
								if (!total[key]) {
									total[key] = 0;
								}
								var value = set_calc.data[set_id].items[key][item_id];
                
								if (set_calc.data[set_id].items[key][item_id] < 0) {
                //If bonus (per Level)
									value = -value;
                 
									if (set_calc.itemStatus[set_id][item_id]>0){
										//If item upgraded
										total[key] += Math.ceil(value*level)+Math.round(Math.max(1, Math.ceil(value*level) * 0.1  * lvl));;
									} else {
										total[key] += Math.ceil(value * level);
									}
								} else {
									if (set_calc.itemStatus[set_id][item_id]>0){
										if (value<1){
											total[key] += Math.ceil((Math.round(1e6 * (value * 1 + Math.round(Math.max(1, value * 1000 * lvl)) / 10000)) / 1e6)*level);
										} else {
											total[key] += Math.round(Math.max(1, value * 0.1  * lvl));
										}
									} else {
										total[key] += value;
									}
								}
							}
						}
					}
					var item_nb = 0;
					for (var item_id in set_calc.itemStatus[set_id]) {
						if (set_calc.itemStatus[set_id][item_id]!==false){
							item_nb++;
						}
					}
					for (var key in set_calc.data[set_id].set[item_nb]) {
						if (!total[key]) {
							total[key] = 0;
						}
						if (set_calc.data[set_id].set[item_nb][key] < 0) {
							total[key] += Math.ceil(-set_calc.data[set_id].set[item_nb][key] * level);
						} else {
							total[key] += set_calc.data[set_id].set[item_nb][key];
						}
					}
				}
        //Create the html table
				var html = '<center><table class="infoSet"><caption><br><big><b>Total</b></big></caption><tbody><tr><td></center>';
				for (var key in set_calc.bonus.set_bonus) {
					if (total.hasOwnProperty(key)) {
						html += '<div class="set_bonus tooltip_container"><img src="' + set_calc.bonus.set_bonus[key].img + '"><b>+' + total[key] + '</b><div class="tooltip_outer"><div class="tooltip"><div class="tt_bg_tl"></div><div class="tt_bg_tr"></div><div class="tt_bg_bl"></div><div class="tt_bg_br"></div><div id="tooltip_content">' + set_calc.bonus.set_bonus[key].name + '</div></div></div></div>'
					}
				}
				for (var key in set_calc.bonus.extra_set_bonus) {
					if (total.hasOwnProperty(key)) {
						html += '<div class="set_bonus tooltip_container"><img src="' + set_calc.bonus.extra_set_bonus[key].img + '"><b>+' + total[key] + '</b><div class="tooltip_outer"><div class="tooltip"><div class="tt_bg_tl"></div><div class="tt_bg_tr"></div><div class="tt_bg_bl"></div><div class="tt_bg_br"></div><div id="tooltip_content">' + set_calc.bonus.extra_set_bonus[key].name + '</div></div></div></div>'
					}
				}
        //Display the result at the bottom of the page
				$('#set_calc').html(html);
			}
		},
		initEvents:function(){
    //Deactivate / activate item on click
			$('.item_container > img').click(function(){
				item_container = $(this).closest('.item_container');
				item_container.toggleClass('item_off');
				set_id = item_container.closest('.set_container').attr('data-set-id');
				item_id = JSON.parse(item_container.attr('data-popup')).id;
				if (item_container.hasClass('item_off')||item_container.is(":hidden")){
					set_calc.itemStatus[set_id][item_id]=false;
				} else {
					set_calc.itemStatus[set_id][item_id]=parseInt(item_container.attr('data-lvl'));
				}
				set_calc.calc();
			});
      //Update item level on upgrade / downgrade
			$(document).on('click','.upgrade, .downgrade',function(){
				var item = $(this).closest('.item_container');
				var set_id = item.closest('.set_container').attr('data-set-id');
				if (!item.hasClass('item_off')&&!item.is(":hidden")){
					set_calc.itemStatus[set_id][JSON.parse(item.attr('data-popup')).id]=parseInt(item.attr('data-lvl'));
					set_calc.calc();
				}
			});
      //Calc again when player level changes
			$("#input_level").bind("propertychange keyup input paste", function() {
				set_calc.calc();
			});
      //Activate/deactivate melee/fire weapon when the switch btn is clicked
			$("#switch").click(function(){
				$('#melee, #fire').each(function(){
					var item = $(this).find('.item_container');
					var set_id = $(this).closest('.set_container').attr('data-set-id');
					if ($(this).is(":hidden")){
						set_calc.itemStatus[set_id][JSON.parse(item.attr('data-popup')).id]=false;
					} else {
						set_calc.itemStatus[set_id][JSON.parse(item.attr('data-popup')).id]=parseInt(item.attr('data-lvl'));
					}
				});
				set_calc.calc();
			});
		},
		init:function(){
			set_calc.initEvents();
			set_calc.getData();
			$('#mw-content-text').append('<div id="set_calc"></div>');
		}
	}
	set_calc.init();
}
