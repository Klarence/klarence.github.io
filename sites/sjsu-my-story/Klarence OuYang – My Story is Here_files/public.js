jQuery(document).ready(function() {
	function getRssData(widget){
		if(widget.find('ul.widget-rss-source-multisite').length) {
			return false;
		}

		var now = new Date();
		var year = now.getUTCFullYear();
		var month = now.getUTCMonth();
		var day = now.getUTCDate();
		var hour = now.getUTCHours();
		var minute = now.getUTCMinutes();

		var every = 5;
		var check = 0;
		while ( minute != check ) {
			if(minute < check+every) {
				minute = check;
			}
			else
				check = check+every;
		}

		var widget_id = widget.attr('id');
		if(!widget.attr('id'))
			return;
		var widget_id = widget_id.split('-');
		var widget_id = widget_id[widget_id.length-1];
		if(typeof(rss_options) != "undefined") {
			if(widget_id in rss_options) {
				var widget_options = rss_options[widget_id];
			}
			else 
				return;
		}
		var rss_url_update = widget_options['url'];

		if(widget_options['allow_html'])
			var allow_html = true;
		else
			var allow_html = false;

		var sample_item = jQuery('<div></div>').append('<a class="rsswidget"></a>');
		if(widget_options['show_date'])
			sample_item.append('<span class="rss-date"></span>');
		if(widget_options['show_summary'])
			sample_item.append('<div class="rssSummary"></div>');
		if(widget_options['show_author'])
			sample_item.append('<cite></cite>');
		var first_item_url = widget.find( "ul li" ).first().find( "a" ).attr('href');
		var item_count = widget.find( "ul li" ).size();

		jQuery.ajax({
			url: 'https://api.rss2json.com/v1/api.json',
			method: 'GET',
			data: {
				rss_url: rss_url_update,
				api_key: 'xsxo0nxqxt1p3z2mnghqtcsbqjrlps3fdabbddrw', // put your api key here
				count: 20
			},
			dataType: 'json',
			success: function(data) {
				widget_title = widget.find('h1 a:last, h2 a:last, h3 a:last, h4 a:last');

				if(data.status == 'ok') {
					if(!widget_title.attr('href')) {
						widget_title.attr('href', data.feed.link);
						if(widget_title.html() != widget_options['title']) {
							widget_title.text(data.feed.title);
						}
					}
				  	var count_added = 0;
				  	jQuery.each(data.items, function() {
				  		if(this.link == first_item_url)
				  			return false;
				  		else {
							
				  			if(widget_options['items'] > count_added) {
					  			count_added ++;

					  			link = sample_item.find('a').first();
					  			date = sample_item.find('.rss-date').first();
					  			summary = sample_item.find('.rssSummary').first();
					  			author = sample_item.find('cite').first();

								if(allow_html) {
									link.html(this.title);
								}
								else {
									link.text(this.title);
								}
					  			
					  			link.attr('href', this.link);

					  			feed_full_date = new Date(this.pubDate);
					  				months_names = [ "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December" ];
					  				feed_date = feed_full_date.getDate();
					  				feed_month = months_names[feed_full_date.getMonth()];
					  				feed_year = feed_full_date.getFullYear();
					  			date.text(' '+feed_month+' '+feed_date+', '+feed_year);

								if(allow_html) {
									content = this.content;
								}
								else {
									content = jQuery('<div>'+this.content+'</div>').text();
								}

					  			if(!allow_html && content.length > 360)
									content = content.substr(0,360)+'[...]';
								
								if(allow_html) {
									summary.html(content);
								}
								else {
									summary.text(content);
								}

					  			author.text(this.author);

					  			if(count_added > 1)
					  				widget.find('ul li.added-by-js:last').after('<li class="added-by-js">'+sample_item.html()+'</li>');
					  			else
					  				widget.find('ul').prepend('<li class="added-by-js">'+sample_item.html()+'</li>');
				  			}
				  		}
				  	});

					if(widget_options['items'] < item_count + count_added) {
						var count_removed = 0
						while(count_removed < count_added) {
							count_removed ++;
							widget.find( "ul li:last" ).remove();
						}
					}

					//lets check if we ended up with no results
					if(typeof rss_options[widget_id]['empty_message'] !== 'undefined' && widget.find( "ul li" ).size() == 0) {
						widget.addClass('wmd-rss-empty');
						widget.find('ul').prepend('<li class="added-by-js">'+rss_options[widget_id]['empty_message']+'</li>');
					}
				}
				else {
					widget_title.html(data.responseDetails);
				}
			}
		});
	}

	var delay = 0;
	jQuery( ".widget_rss, .wmd-rss" ).each(function() {
		var widget = jQuery(this);

		//hopefully delay will fix issue with google
		setTimeout(getRssData(widget), delay);
		delay = delay + 50;
	});
});