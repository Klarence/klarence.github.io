( function( $ ) {

	/*
	 * A function to help debouncing.
	 */
	var debounce = function( func, wait ) {
		var timeout, args, context, timestamp;
		return function() {
			context = this;
			args = [].slice.call( arguments, 0 );
			timestamp = new Date();
			var later = function() {
				var last = ( new Date() ) - timestamp;
				if ( last < wait ) {
					timeout = setTimeout( later, wait - last );
				} else {
					timeout = null;
					func.apply( context, args );
				}
			};
			if ( ! timeout ) {
				timeout = setTimeout( later, wait );
			}
		};
	};

	/*
	 * Remove body "blog" class when a user is logged in and doesn't have a post yet.
	 */
	if ( $( '.site-main' ).children().hasClass( 'not-found' ) && $( 'body' ).hasClass( 'blog' ) ) {
		$( 'body' ).removeClass( 'blog' ).addClass( 'search-no-results' );
	}

	/*
	 * Move the Page Links before Sharedaddy.
	 */
	$( '.single .hentry' ).each( function() {
		$( this ).find( '.page-links' ).insertBefore( $( this ).find( '.sharedaddy' ).first() );
	} );

	/*
	 * Format Video: Move videos above the Entry Header.
	 */
	$( '.single .format-video' ).find( 'embed, iframe, object, video' ).parent().each( function() {
		if ( ! $( this ).hasClass( 'entry-content' ) ) {
			$( this ).addClass( 'entry-media' )
			         .insertBefore( $( '.entry-header' ) );
		}
	} );

	/*
	 * Make sure tables don't overflow in Entry Content.
	 */
	$( '.entry-content' ).find( 'table' ).each( function() {
		if ( $( this ).width() > $( this ).parent().width() ) {
			$( this ).css( 'table-layout', 'fixed' );
		}
	} );

	/*
	 * Remove border from linked images.
	 */
	$( '.entry-content a' ).each( function() {
		$( this ).has( 'img' ).addClass( 'no-border' );
	} );

	/*
	 * Add hover class to Search Submit.
	 */
	function search_add_class() {
		$( this ).closest( '.search-form' ).addClass( 'hover' );
	}
	function search_remove_class() {
		$( this ).closest( '.search-form' ).removeClass( 'hover' );
	}
	var search_submit = $( '.search-submit' );
	search_submit.hover( search_add_class, search_remove_class );
	search_submit.focusin( search_add_class );
	search_submit.focusout( search_remove_class );


	/*
	 * Remove Comment Reply if empty.
	 */
	$( '.comment .reply' ).each( function() {
		if ( $.trim( $( this ).text() ) === '' ) {
			$( this ).remove();
		}
	} );

	/*
	 * Remove Byline if hidden and Entry Footer if empty.
	 */
	if ( $( '.byline' ).is( ':hidden') ) {
		$( '.byline' ).remove();
	}
	$( '.entry-footer' ).filter( function() {
		return $.trim( $( this ).text() ) === ''
	} ).addClass( 'empty' );

	/*
	 * Add dropdown toggle that display child menu items.
	 */
	$( '.main-navigation .page_item_has_children > a, .main-navigation .menu-item-has-children > a, .widget_nav_menu .page_item_has_children > a, .widget_nav_menu .menu-item-has-children > a' ).append( '<button class="dropdown-toggle" aria-expanded="false"/>' );
	$( '.dropdown-toggle' ).click( function( event ) {
		event.preventDefault();
		$( this ).toggleClass( 'toggle-on' );
		$( this ).parent().next( '.children, .sub-menu' ).toggleClass( 'toggle-on' );
		$( this ).attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
	} );

	/*
	 * Sidebar toggle.
	 */
	var scroll_top_position = 0,
	    scroll_left_position = 0;
	$( '.sidebar-toggle' ).click( function( event ) {
		event.preventDefault();
		if ( ! $( 'body' ).hasClass( 'sidebar-open' ) ) {
			scroll_top_position = $( 'body' ).scrollTop();
			scroll_left_position = $( 'body' ).scrollLeft();
		}
		$( this ).toggleClass( 'toggle-on' )
		         .attr( 'aria-expanded', $( this ).attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
		$( 'body' ).toggleClass( 'sidebar-open' )
		           .trigger( 'resize' );
		$( '#sidebar' ).attr( 'aria-hidden', $( '#sidebar' ).attr( 'aria-hidden' ) === 'false' ? 'true' : 'false' );
		if ( $( 'body' ).hasClass( 'sidebar-open' ) ) {
			$( '.site-main' ).hide();
			$( 'html, body' ).animate( {
				scrollTop: 0,
				scrollLeft: 0
			}, 0 );
		} else {
			$( '.site-main' ).show();
			$( 'html, body' ).animate( {
				scrollTop: scroll_top_position,
				scrollLeft: scroll_left_position
			}, 0 );
			heights();
		}
	} );

	/*
	 * Close Sidebar with escape key.
	 */
	$( document ).keyup( function( event ) {
		if ( event.keyCode === 27 && $( '.sidebar-toggle' ).hasClass( 'toggle-on' ) ) {
			$( 'body' ).removeClass( 'sidebar-open' );
			$( '.sidebar-toggle' ).removeClass( 'toggle-on' )
			                      .attr( 'aria-expanded', 'false' );
			$( '#sidebar' ).attr( 'aria-hidden', 'true' );
			$( '.site-main' ).show();
			$( 'html, body' ).animate( {
				scrollTop: scroll_top_position,
				scrollLeft: scroll_left_position
			}, 0 );
			heights();
		}
	} );

	/*
	 * Make sure to remove all image attributes to fit perfectly.
	 */
	function remove_image_attributes() {
		if ( ( $( 'body' ).hasClass( 'page' ) || $( 'body' ).hasClass( 'single' ) ) && $( '.site-main > .hentry' ).hasClass( 'has-post-thumbnail' ) ) {
			$( '.entry-thumbnail' ).find( 'img' ).removeAttr( 'width' ).removeAttr( 'height' );
		}
	}

	/*
	 * Define Site Main width depending on the number of Hentry.
	 */
	function site_main_width() {
		$( '.archive .site-main, .blog .site-main, .search-results .site-main' ).each( function() {
			var total_width = 0;
			$( this ).find( '.hentry' ).each( function() {
				if ( $( window ).width() > 1279 ) {
					$( this ).width( Math.round( $( window ).width() / 100 * 24 ) );
					total_width += Math.round( $( window ).width() / 100 * 24 );
				} else if ( $( window ).width() > 959 ) {
					$( this ).width( Math.round( $( window ).width() / 100 * 32 ) );
					total_width += Math.round( $( window ).width() / 100 * 32 );
				} else if ( $( window ).width() > 767 ) {
					$( this ).width( Math.round( $( window ).width() / 100 * 46 ) );
					total_width += Math.round( $( window ).width() / 100 * 46 );
				} else {
					$( this ).css( 'width', '' );
				}
			} );
			if ( $( window ).width() > 767 ) {
				$( this ).width( total_width );
			} else {
				$( this ).css( 'width', '' );
			}
		} );
	}

	/*
	 * Define theme heights.
	 */
	function heights() {
		var site_header_height = $( '.site-header' ).outerHeight(),
		    site_header_height_backup = site_header_height,
		    site_footer_height = $( '.site-footer' ).outerHeight();
		if ( $( 'body' ).hasClass( 'admin-bar' ) ) {
			var admin_bar_height = $( '#wpadminbar' ).outerHeight();
			site_header_height += admin_bar_height;
			$( '.site-header' ).css( 'top', admin_bar_height );
		}
		if ( $( window ).width() > 767 ) {
			$( '.archive .page-header, .search-results .page-header' ).css( 'top', site_header_height );
		}
		$( '.sidebar-toggle' ).css( 'height', site_header_height_backup - 1 );
		$( '.sidebar' ).css( 'top', site_header_height );
		$( '.sidebar, .single .attachment-boardwalk-hero-image' ).css( 'min-height', $( window ).height() - site_header_height );
		if ( $( 'body' ).hasClass( 'archive' ) || $( 'body' ).hasClass( 'search-results' ) ) {
			site_header_height += $( '.page-header' ).outerHeight();
			site_header_height_backup += $( '.page-header' ).outerHeight();
		}
		var content_area_height = $( window ).height() - site_header_height - site_footer_height;
		if ( $( window ).width() > 767 ) {
			$( '.site-main' ).css( {
				'margin-top': site_header_height_backup,
				'min-height': content_area_height
			} );
			$( '.blog .site-main, .blog .paging-navigation .nav-links' ).height( content_area_height );
			$( '.archive .site-main, .archive .paging-navigation .nav-links, .search-results .site-main, .search-results .paging-navigation .nav-links' ).height( content_area_height - $( '.page-header' ).outerHeight() );
			$( '.paging-navigation .nav-next' ).css( 'top', '' );
		} else {
			$( '.site-main' ).css( {
				'margin-top': '',
				'min-height': ''
			} );
			$( '.archive .site-main, .archive .paging-navigation .nav-links, .blog .site-main, .blog .paging-navigation .nav-links, .search-results .site-main, .search-results .paging-navigation .nav-links' ).css( 'height', '' );
			$( '.paging-navigation .nav-next' ).css( 'top', $( '.page-header' ).outerHeight() );
		}
		$( 'body.page .entry-thumbnail, body.single .entry-thumbnail, .entry-media iframe, .entry-media object, .entry-media embed, .entry-media video, .entry-media .wp-video-shortcode' ).height( $( window ).height() - site_header_height );
		if ( ( $( 'body' ).hasClass( 'single' ) || $( 'body' ).hasClass( 'page' ) ) && $( '.hentry' ).hasClass( 'has-post-thumbnail' ) ) {
			if ( $( '.entry-header' ).outerHeight() + 48 >  $( window ).height() - site_header_height ) {
				$( '.entry-thumbnail' ).css( 'min-height', $( '.entry-header' ).outerHeight() + 48 );
			} else {
				$( '.entry-thumbnail' ).css( 'min-height', '' );
			}
		}
		$( '.search-no-results .site-main' ).css( 'min-height', content_area_height );
		$( '.single .hentry' ).css( 'min-height', content_area_height - $( '.post-navigation' ).outerHeight() );

		// Ratio Entry Thumbnail
		if ( ( $( 'body' ).hasClass( 'page' ) || $( 'body' ).hasClass( 'single' ) ) && $( '.site-main > .hentry' ).hasClass( 'has-post-thumbnail' ) ) {
			$( '.wp-post-image' ).each( function() {
				var img = $( this ),
				    new_img = new Image();
				new_img.src = img.attr( 'src' );
				$( new_img ).load( function() {
					var img_width = new_img.width,
					    img_height = new_img.height,
					    ratio_screen = $( '.entry-thumbnail' ).width() / $( '.entry-thumbnail' ).height(),
					    ratio_image = img_width / img_height;
					if ( ratio_image >= ratio_screen ) {
						img.css( {
							'height': site_header_height,
							'max-width': 'none'
						} );
					} else {
						img.css( {
							'height': '',
							'max-width': '100%'
						} );
					}
				} );
			} );
		}
	}

	/*
	 * Add a class to big image and caption > 767px.
	 */
	function image_big() {
		$( '.page .entry-content, .single .entry-content' ).find( 'img:not(.latex)' ).each( function() {
			// Ignore table, VideoPress, portfolio and recipe images
			if ( $( this ).parents( 'table' ).length || $( this ).parents( '.video-player' ).length || $( this ).parents( '.portfolio-entry' ).length || $( this ).parents( '.jetpack-recipe' ).length ) {
				$( this ).addClass( 'resized' );
			}
			if ( ! $( this ).closest( '.gallery, .tiled-gallery' ).length ) {
				var img = $( this ),
				    caption = $( this ).closest( 'figure' ),
				    new_img = new Image();
				new_img.src = img.attr( 'src' );
				$( new_img ).load( function() {
					var img_width = new_img.width;
					if ( img_width > 767 && ! img.hasClass( 'resized' ) ) {
						img.wrap( '<span class="image-big" />' );
						img.addClass( 'resized' );
					}
					if ( caption.hasClass( 'wp-caption' ) && img_width > 767 ) {
						caption.addClass( 'caption-big' ).css( 'width', '' );
					}
				} );
			}
		} );
	}

	/*
	 * Load all the functions once it's ready.
	 */
	$( window ).load( function() {

		// Load the functions.
		remove_image_attributes();
		site_main_width();
		heights();
		image_big();

		// If Infinite Scroll is active.
		if ( $( 'body' ).hasClass( 'infinite-scroll' ) ) {
			$( '.archive .hentry, .blog .hentry, .search-results .hentry' ).each( function() {
				$( this ).addClass( 'post-loaded' )
				         .fadeTo( 125, 1 );
			} );
			if ( $( '#infinite-handle' ).length > 0 ) {
				$( 'body' ).addClass( 'infinity-handle' );
			}

			// Layout posts that arrive via infinite scroll.
			$( document.body ).on( 'post-load', function () {

				// Completly remove .infinite-loader
				$( '.infinite-loader' ).each( function() {
					if ( ! $( this ).is( ':visible' )  ) {
						$( this ).remove();
					}
				} );

				// Force layout correction after 125 milliseconds.
				setTimeout( function() {
					site_main_width();
					$( '#infinite-handle' ).show();
					if ( $( '#infinite-handle' ).length === 0 && $( 'body' ).hasClass( 'infinity-handle' ) ) {
						$( 'body' ).addClass( 'infinity-end' );
						site_main_width();
					}
					var delay = 0;
					$( '.hentry:not(.post-loaded)' ).each( function() {
						$( this ).addClass( 'post-loaded' )
						         .delay( delay++ * 125 ).fadeTo( 125, 1 );
					} );
				}, 125 );
			} );
		}

	} ).resize( debounce( function() {

		// Reset the Sidebar Toggle height.
		$( '.sidebar-toggle' ).height( 'auto' );

		// Load the functions.
		remove_image_attributes();
		site_main_width();
		heights();
		image_big();

	}, 500 ) );

} )( jQuery );
