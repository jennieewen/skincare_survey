//var $jq = jQuery.noConflict();


// Highslide Gallery Config
hs.graphicsDir = '../i/_gallery/';
hs.align = 'center';
hs.showCredits = false;
hs.numberOfImagesToPreload = 1;
hs.dimmingOpacity = 0.7;
hs.registerOverlay(
	{
	    overlayId: 'controlbar',
	    position: 'top right',
	    hideOnMouseOut: true
	}
    );
hs.preserveContent = false;
hs.outlineType = 'rounded-white-cp';
hs.minWidth = 600;
hs.maxHeight = 600;
hs.cacheAjax = false;


/*--------------- Form Validation  -----------------*/

ValidationEngine = function () {
    var self = {
        init: function (formId, rules, messages) {
            $(formId).validate({
                rules: rules,
                messages: messages,
                onchange: true,
                errorPlacement: function (error, element) {
                    // Set positioning based on the elements position in the form
                    var elem = $(element),
                           corners = ['left center', 'right center'],
                           flipIt = elem.parents('span.right').length > 0;

                    // Check we have a valid error message
                    if (!error.is(':empty')) {
                        // Apply the tooltip only if it isn't valid
                        elem.filter(':not(.valid)').qtip({
                            overwrite: true,
                            content: error,
                            position: {
                                my: 'bottom left',
                                at: 'top right',
                                viewport: $(window),
                                adjust: {
                                    method: 'flip',
                                    x: -40
                                }
                            },
                            show: {
                                event: false,
                                ready: true
                            },
                            hide: false,
                            style: {
                                classes: 'ui-tooltip-rounded ui-tooltip-cperror'
                            }
                        })

                        // If we have a tooltip on this element already, just update its content
                           .qtip('option', 'content.text', error);
                    }

                    // If the error is empty, remove the qTip
                    else { elem.qtip('destroy'); }
                },
                // specifying a submitHandler prevents the default submit
                submitHandler: function (form) {
                    form.submit();
                },
                // set this class to error-labels to indicate valid fields
                success: function (label) {
                    return true;
                }
            });

        }
    };
    return self;
} ();

/*--------------- End of Form Validation ------------*/

function trim(str) {
    var processed = str.replace(/^[ \t]+|[ \t]+$/g, '');
    processed = processed.replace('&nbsp;','');
    return processed;
}

function isInteger(str) {
    var NumberRegex = /^[0-9]+$/;
    var ret = NumberRegex.test(str);
    return ret;
}

function isDecimal(str) {
    var NumberRegex = /^[0-9.]+$/;
    var ret = NumberRegex.test(str);
    return ret;
}

