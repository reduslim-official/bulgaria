$(function() {
    country = $.url(location.href).param('country');

    if (country == 'BG') {
        bg_selected = 'selected="selected"';
    } else {
        bg_selected = '';
    }


    selects = $("select[name='country']");
    selects.append('<option value="BG" ' + bg_selected + '>България</option>');

    var change = 0,
        updatePrices = function(item) {
            change = 1;

            $(item.children).each(function() {
                if (this.selected) sel = $(this).val();
            });

            if (typeof sel === 'undefined') {
                sel = 'BG';
            }

            if (sel == 'BG') {
                $('.old_price_val').html('118');
                $('.old_price_cur').html('левa');
                $('.old_price_sig').html('левa');
                $('.new_price_val').html('59');
                $('.new_price_cur').html('левa');
                $('.new_price_sig').html('левa');
                $('select').val('BG').trigger('change');
                initializeMask({ mask: "(+35\\9\\)99999999[99]", removeMaskOnSubmit: false })
            }

            change = 0;
        };
    $("select").change(function() {

        if (change == 0) updatePrices(this);
    }).change();

    function initializeMask(mask) {
        $('[name=phone]').inputmask(mask);
    }
});