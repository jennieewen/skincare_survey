//var $ = jQuery.noConflict();

$(document).ready(function () {

    //init Sortable List
    $(function () {
        $("#sourcelist, #targetlist").sortable({
            connectWith: ".connectedSortable"
        }).disableSelection();
    });

    //click Save
    $(".btnUpdate").click(function () {

        var catalogid = $(".CatalogID")[0].innerHTML;
        if (catalogid == '') {
            alert("Please select item to update or add item by clicking Add New.");
            return false;
        }

        var targetlist = "";
        var list = $("#targetlist").children("li");
        for (var i = 0; i < list.length; i++) {
            targetlist += list[i].innerHTML.substring(0, 4) + ",";
        }

        GoldenArchWeb.svc.kbawebsvc.adm_ContentUpdate(
        catalogid,
        targetlist,
        SucceededUpdCallback);

    });

    function SucceededUpdCallback(result) {
        if (result == "OK") {
            $("#message").html("Successfully SAVED into Database.");
        }
        else {
            $("#message").html("Cannot SAVED data, please try again later.");
        }
    }

})
  