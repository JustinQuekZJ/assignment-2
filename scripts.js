// Birthstone data for each month
var birthstones = {
    'January': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Garnet_Andradite20.jpg/800px-Garnet_Andradite20.jpg',
        text: 'Garnet',
        chem: 'X3Y2(SiO4)3',
        hardness: '6.5-7.5'
    },
    'February': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Amatista_Laye_2.jpg/1200px-Amatista_Laye_2.jpg',
        text: 'Amethyst',
        chem: 'SiO2',
        hardness: '6.5-7.5'
    },
    'March': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Aquamarine_P1000141.JPG/640px-Aquamarine_P1000141.JPG',
        text: 'Aquamarine',
        chem: 'Be3Al2Si6O18',
        hardness: '7.5-8'
    },
    'April': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Diamond-dimd15a.jpg/520px-Diamond-dimd15a.jpg',
        text: 'Diamond',
        chem: 'C',
        hardness: '10'
    },
    'May': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_2.jpg/520px-B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_2.jpg',
        text: 'Emerald',
        chem: 'Be3Al2(SiO3)6',
        hardness: '7.5-8'
    },
    'June': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pearls_2.jpg/275px-Pearls_2.jpg',
        text: 'Pearl',
        chem: 'CaCO3',
        hardness: '2.5-4.5'
    },
    'July': {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Corundum-215330.jpg/520px-Corundum-215330.jpg',
        text: 'Ruby',
        chem: 'Al2O3',
        hardness: '9-9.5'
    },
    'August': {
        image: 'https://www.mineralmike.com/cdn/shop/products/RawPeridotCrystalMineralSpecimenPakistan13_1200x.jpg?v=1709005617',
        text: 'Peridot',
        chem: '(Mg,Fe)2SiO4',
        hardness: '6.5-7'
    },
    'September': {
        image: 'https://m.media-amazon.com/images/I/616SUBr9SWL._AC_UY1000_.jpg',
        text: 'Sapphire',
        chem: 'Al2O3',
        hardness: '9-9.5'
    },
    'October': {
        image: 'https://www.mindat.org/imagecache/71/7e/06248740015652501009941.jpg',
        text: 'Opal',
        chem: 'SiO2·nH2O',
        hardness: '5.5-6.5'
    },
    'November': {
        image: 'https://minerals-stones.com/7597-large_default/topaz-imperial-top-quality-416-g-natural-crystal.jpg',
        text: 'Topaz',
        chem: 'Al2SiO4(F,OH)2',
        hardness: '8-8.5'
    },
    'December': {
        image: 'https://www.weinrichmineralsinc.com/userfiles/products/large/9/5/9530102.jpg',
        text: 'Tanzanite',
        chem: 'Ca2Al3Si3O12(OH)',
        hardness: '6-6.5'
    },
};

// Click event handler for columns
$('.column').on('click', function () {
    var $birthstoneImage = $(this).find('.birthstone-image');
    var $birthstoneName = $(this).find('.birthstone-name');
    var $birthstoneChem = $(this).find('.birthstone-chem');
    var $birthstoneHardness = $(this).find('.birthstone-hardness');

    if ($birthstoneImage.length) {
        // If birthstone image is already displayed, remove both image and name
        $birthstoneImage.remove();
        $birthstoneName.remove();
        $birthstoneChem.remove();
        $birthstoneHardness.remove();
    }

    else {
        var month = $(this).data('month');
        var data = birthstones[month];
        // If birthstone image is not displayed, add both image and name
        $(this).append('<img class="birthstone-image" src="' + data.image + '" alt="' + data.text + '">');
        $(this).append('<p class="birthstone-name"><strong>Name:</strong> ' + data.text + '</p>');
        $(this).append('<p class="birthstone-chem"><strong>Chemical Formula:</strong> ' + formatChemicalFormula(data.chem) + '</p>');
        $(this).append('<p class="birthstone-hardness"><strong>Hardness:</strong> ' + data.hardness + '</p>');
    
        // Turning numbers in chemical formulae to subscript
        function formatChemicalFormula(formula) {
            return formula.replace(/(\d+)/g, '<sub>$1</sub>');
        }
    }
});
