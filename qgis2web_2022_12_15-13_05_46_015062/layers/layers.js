var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_UC_GB_1 = new ol.format.GeoJSON();
var features_UC_GB_1 = format_UC_GB_1.readFeatures(json_UC_GB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UC_GB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UC_GB_1.addFeatures(features_UC_GB_1);
var lyr_UC_GB_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UC_GB_1, 
                style: style_UC_GB_1,
                interactive: true,
                title: '<img src="styles/legend/UC_GB_1.png" /> UC_GB'
            });
var format_Tehsil_2 = new ol.format.GeoJSON();
var features_Tehsil_2 = format_Tehsil_2.readFeatures(json_Tehsil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tehsil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tehsil_2.addFeatures(features_Tehsil_2);
var lyr_Tehsil_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tehsil_2, 
                style: style_Tehsil_2,
                interactive: true,
                title: '<img src="styles/legend/Tehsil_2.png" /> Tehsil'
            });
var format_District_3 = new ol.format.GeoJSON();
var features_District_3 = format_District_3.readFeatures(json_District_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_3.addFeatures(features_District_3);
var lyr_District_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District_3, 
                style: style_District_3,
                interactive: true,
                title: '<img src="styles/legend/District_3.png" /> District'
            });

lyr_OSMStandard_0.setVisible(true);lyr_UC_GB_1.setVisible(true);lyr_Tehsil_2.setVisible(true);lyr_District_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_UC_GB_1,lyr_Tehsil_2,lyr_District_3];
lyr_UC_GB_1.set('fieldAliases', {'UC': 'UC', });
lyr_Tehsil_2.set('fieldAliases', {'adm2_n_en': 'adm2_n_en', 'adm3_n_en': 'adm3_n_en', });
lyr_District_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'adm1_n_en': 'adm1_n_en', 'adm2_n_en': 'adm2_n_en', });
lyr_UC_GB_1.set('fieldImages', {'UC': '', });
lyr_Tehsil_2.set('fieldImages', {'adm2_n_en': 'TextEdit', 'adm3_n_en': 'TextEdit', });
lyr_District_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'adm1_n_en': 'TextEdit', 'adm2_n_en': 'TextEdit', });
lyr_UC_GB_1.set('fieldLabels', {'UC': 'inline label', });
lyr_Tehsil_2.set('fieldLabels', {'adm2_n_en': 'inline label', 'adm3_n_en': 'inline label', });
lyr_District_3.set('fieldLabels', {'OBJECTID': 'inline label', 'adm1_n_en': 'inline label', 'adm2_n_en': 'inline label', });
lyr_District_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});