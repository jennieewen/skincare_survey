$(document).ready(function () {

    $('.tableAdmin tbody tr').click(function () {
        $('.tableAdmin tbody tr').removeClass('selected');
        $(this).addClass('selected');

        var aid = $(this).children().first().html();
        window.location.href = "../adm/item.aspx?aid=" + aid;
    });

    $('#btn-preview').click(function () {
        if ($('.tinymce').val().length > 0) {
            return hs.htmlExpand(this, { contentId: 'msg-preview' });
        } else {
            alert("You must enter content to 'Preview'");
        };
    });

    $('#btn-addnew').click(function () {
        window.location.href = "../adm/item.aspx";
    });


    hs.Expander.prototype.onBeforeExpand = function () {
        $('#preview-body').html($('.tinymce').val());
    };

    $('textarea.tinymce').tinymce({
        // Location of TinyMCE script
        script_url: '../js/jquery/tiny_mce/tiny_mce.js',

        // General options
        theme: "advanced",
        plugins: "autolink,lists,style,advlink,iespell,inlinepopups,insertdatetime,preview,paste,directionality,noneditable,nonbreaking",

        // Theme options
        theme_advanced_buttons1: "bold,italic,underline,|,formatselect,|,cut,copy,paste,pastetext,pasteword,|,bullist,numlist,|,outdent,indent,|,undo,redo,link,unlink,|,cleanup,code,|,forecolor,backcolor",
        theme_advanced_buttons2: "",
        theme_advanced_buttons3: "",
        theme_advanced_toolbar_location: "top",
        theme_advanced_toolbar_align: "left",
        theme_advanced_statusbar_location: "none",
        theme_advanced_resizing: true,

        // Example content CSS (should be your site CSS)
        content_css: "../css/tinymce.css"
    });

});


