$(".js-select2").each(function(){
    $(this).on('select2',{
        minimumResultsForSearch: 20,
        dropdownParent: $(this).next('.dropDownSelect2')
    });
})
$(".js-select2").each(function(){
    $(this).on('select2:open', function (e){
        $(this).parent().next().addClass('eff-focus-selection');
    });
});
$(".js-select2").each(function(){
    $(this).on('select2:close', function (e){
        $(this).parent().next().removeClass('eff-focus-selection');
    });
});