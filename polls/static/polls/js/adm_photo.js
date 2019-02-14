$(document).ready(function () {

    $('.tableAdmin tbody tr').click(function () {
        $('.tableAdmin tbody tr').removeClass('selected');
        $(this).addClass('selected');

        var pid = $(this).children().first().html();
        window.location.href = "../adm/photoadmin.aspx?pid=" + pid;
    });

    $('#btn-addnew').click(function () {
        window.location.href = "../adm/photoadmin.aspx";
    });

});


