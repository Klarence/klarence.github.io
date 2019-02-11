    
    $(document).ready(function () {
        // if ($('.menu-items').length) {
        //     var $galleryFilter = $('.menu-items').isotope({
        //         itemSelector: '.menu-item',
        //         masonry: {
        //             columnWidth: '.menu-item'
        //         }
        //     });
        //
        //     var filters = {};
        //
        //     $('.menu-filter-list').on('click', 'li', function () {
        //         // var filterValue = $(this).attr('data-filter');
        //
        //         filters[ filterGroup ] = $this.attr('data-filter');
        //
        //         filterValue = concatValues( menu-filter-list );
        //
        //         function concatValues( obj ) {
        //             var value = '';
        //             for ( var prop in obj ) {
        //                 value += obj[ prop ];
        //             }
        //             return value;
        //         }
        //         $('.menu-filter-list').find('.is-checked').removeClass('is-checked');
        //         $(this).addClass('is-checked');
        //         $galleryFilter.isotope({filter: filterValue});
        //
        //
        //     });
        //
        //     $galleryFilter.imagesLoaded().progress(function () {
        //         $galleryFilter.isotope('layout');
        //     });
        //
        //
        // }


        // $('#options').on( 'change', function( event ) {
        //     var checkbox = event.target;
        //     var $checkbox = $( checkbox );
        //     var group = $checkbox.parents('.option-set').attr('data-group');
        //     // create array for filter group, if not there yet
        //     var filterGroup = filters[ group ];
        //     if ( !filterGroup ) {
        //         filterGroup = filters[ group ] = [];
        //     }
        //     // add/remove filter
        //     if ( checkbox.checked ) {
        //         // add filter
        //         filterGroup.push( checkbox.value );
        //     } else {
        //         // remove filter
        //         var index = filterGroup.indexOf( checkbox.value );
        //         filterGroup.splice( index, 1 );
        //     }
        //
        //     var comboFilter = getComboFilter();
        //     $container.isotope({ filter: comboFilter });
        //     // $filterDisplay.text( comboFilter );
        // });

        {
            let $items = $('.menu-items').isotope({
                itemSelector: '.menu-item'
            });

            let filters = {};

            $('.menu-filter-list').on('click', '.btn', function () {
                let $this = $(this);
                // get group key
                let $buttonGroup = $this.parents('.btn-group');
                let filterGroup = $buttonGroup.attr('data-filter-group');
                // set filter for group
                filters[filterGroup] = $this.attr('data-filter');

                // // add/remove filter
                // if ( $this.checked ) {
                //     // add filter
                //     filterGroup.push( $this.value );
                // } else {
                //     // remove filter
                //     var index = filterGroup.indexOf( $this.value );
                //     filterGroup.splice( index, 1 );
                // }
                //     var comboFilter = getComboFilter();

                // combine filters
                let filterValue = concatValues(filters);
                // set filter for Isotope
                $items.isotope({filter: filterValue});
            });

            // function getComboFilter() {
            //     var combo = [];
            //     for ( var prop in filters ) {
            //         var group = filters[ prop ];
            //         if ( !group.length ) {
            //             // no filters in group, carry on
            //             continue;
            //         }
            //         // add first group
            //         if ( !combo.length ) {
            //             combo = group.slice(0);
            //             continue;
            //         }
            //         // add additional groups
            //         var nextCombo = [];
            //         // split group into combo: [ A, B ] & [ 1, 2 ] => [ A1, A2, B1, B2 ]
            //         for ( var i=0; i < combo.length; i++ ) {
            //             for ( var j=0; j < group.length; j++ ) {
            //                 var item = combo[i] + group[j];
            //                 nextCombo.push( item );
            //             }
            //         }
            //         combo = nextCombo;
            //     }
            //     var comboFilter = combo.join(', ');
            //     return comboFilter;
            // }

            // change is-checked class on buttons
            $('.button-group').each(function (i, buttonGroup) {
                let $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
                // add/remove filter
                // if ( checkbox.checked ) {
                //     // add filter
                //     filterGroup.push( checkbox.value );
                // } else {
                //     // remove filter
                //     var index = filterGroup.indexOf( checkbox.value );
                //     filterGroup.splice( index, 1 );
                // }
                // $buttonGroup.on( 'click', 'checkbox', function() {
                //     $buttonGroup.find('.is-checked').removeClass('is-checked');
                //     $( this ).addClass('is-checked');
                // });
            });

            // flatten object by concatenating values
            function concatValues(obj) {
                let value = '';
                for (let prop in obj) {
                    value += obj[prop];
                }
                return value;
            }
        }
    });
