var wms_layers = [];

var lyr_ALOSRECORTADOFINAL_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "ALOSRECORTADOFINAL",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ALOSRECORTADOFINAL_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11140571.125489, 2324472.572708, -11105553.142320, 2357131.880119]
                            })
                        });
var format_Litologas_1 = new ol.format.GeoJSON();
var features_Litologas_1 = format_Litologas_1.readFeatures(json_Litologas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Litologas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Litologas_1.addFeatures(features_Litologas_1);
var lyr_Litologas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Litologas_1, 
                style: style_Litologas_1,
                popuplayertitle: "Litologías",
                interactive: true,
    title: 'Litologías<br />\
    <img src="styles/legend/Litologas_1_0.png" /> Aluvial<br />\
    <img src="styles/legend/Litologas_1_1.png" /> Andesita-Basalto<br />\
    <img src="styles/legend/Litologas_1_2.png" /> Arenisca-Conglomerado poligénico<br />\
    <img src="styles/legend/Litologas_1_3.png" /> Basalto<br />\
    <img src="styles/legend/Litologas_1_4.png" /> Conglomerado poligénico-Arenisca<br />\
    <img src="styles/legend/Litologas_1_5.png" /> No aplicable<br />\
    <img src="styles/legend/Litologas_1_6.png" /> Riolita-Toba riolítica<br />\
    <img src="styles/legend/Litologas_1_7.png" /> Toba riolítica-Toba dacítica<br />'
        });
var format_DomoCadereyta_2 = new ol.format.GeoJSON();
var features_DomoCadereyta_2 = format_DomoCadereyta_2.readFeatures(json_DomoCadereyta_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomoCadereyta_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomoCadereyta_2.addFeatures(features_DomoCadereyta_2);
var lyr_DomoCadereyta_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DomoCadereyta_2, 
                style: style_DomoCadereyta_2,
                popuplayertitle: "Domo Cadereyta",
                interactive: true,
                title: '<img src="styles/legend/DomoCadereyta_2.png" /> Domo Cadereyta'
            });
var format_DomoLaTrinidad_3 = new ol.format.GeoJSON();
var features_DomoLaTrinidad_3 = format_DomoLaTrinidad_3.readFeatures(json_DomoLaTrinidad_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomoLaTrinidad_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomoLaTrinidad_3.addFeatures(features_DomoLaTrinidad_3);
var lyr_DomoLaTrinidad_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DomoLaTrinidad_3, 
                style: style_DomoLaTrinidad_3,
                popuplayertitle: "Domo La Trinidad",
                interactive: true,
                title: '<img src="styles/legend/DomoLaTrinidad_3.png" /> Domo La Trinidad'
            });
var format_DomoLaLaja_4 = new ol.format.GeoJSON();
var features_DomoLaLaja_4 = format_DomoLaLaja_4.readFeatures(json_DomoLaLaja_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DomoLaLaja_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DomoLaLaja_4.addFeatures(features_DomoLaLaja_4);
var lyr_DomoLaLaja_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DomoLaLaja_4, 
                style: style_DomoLaLaja_4,
                popuplayertitle: "Domo La Laja ",
                interactive: true,
                title: '<img src="styles/legend/DomoLaLaja_4.png" /> Domo La Laja '
            });
var format_Poblacin_5 = new ol.format.GeoJSON();
var features_Poblacin_5 = format_Poblacin_5.readFeatures(json_Poblacin_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblacin_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacin_5.addFeatures(features_Poblacin_5);
var lyr_Poblacin_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacin_5, 
                style: style_Poblacin_5,
                popuplayertitle: "Población",
                interactive: true,
                title: '<img src="styles/legend/Poblacin_5.png" /> Población'
            });
var format_GeositioDomoCadereyta_6 = new ol.format.GeoJSON();
var features_GeositioDomoCadereyta_6 = format_GeositioDomoCadereyta_6.readFeatures(json_GeositioDomoCadereyta_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeositioDomoCadereyta_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeositioDomoCadereyta_6.addFeatures(features_GeositioDomoCadereyta_6);
var lyr_GeositioDomoCadereyta_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeositioDomoCadereyta_6, 
                style: style_GeositioDomoCadereyta_6,
                popuplayertitle: "Geositio Domo Cadereyta",
                interactive: true,
    title: 'Geositio Domo Cadereyta<br />\
    <img src="styles/legend/GeositioDomoCadereyta_6_0.png" /> Afloramiento<br />\
    <img src="styles/legend/GeositioDomoCadereyta_6_1.png" /> Información general<br />\
    <img src="styles/legend/GeositioDomoCadereyta_6_2.png" /> Punto de observación<br />\
    <img src="styles/legend/GeositioDomoCadereyta_6_3.png" /> <br />'
        });
var format_GeositioDomoLaTrinidad_7 = new ol.format.GeoJSON();
var features_GeositioDomoLaTrinidad_7 = format_GeositioDomoLaTrinidad_7.readFeatures(json_GeositioDomoLaTrinidad_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeositioDomoLaTrinidad_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GeositioDomoLaTrinidad_7.addFeatures(features_GeositioDomoLaTrinidad_7);
var lyr_GeositioDomoLaTrinidad_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GeositioDomoLaTrinidad_7, 
                style: style_GeositioDomoLaTrinidad_7,
                popuplayertitle: "Geositio Domo La Trinidad",
                interactive: true,
    title: 'Geositio Domo La Trinidad<br />\
    <img src="styles/legend/GeositioDomoLaTrinidad_7_0.png" /> Afloramiento<br />\
    <img src="styles/legend/GeositioDomoLaTrinidad_7_1.png" /> Información del domo<br />\
    <img src="styles/legend/GeositioDomoLaTrinidad_7_2.png" /> Punto de observación<br />'
        });
var format_AreaNaturalProtegida_8 = new ol.format.GeoJSON();
var features_AreaNaturalProtegida_8 = format_AreaNaturalProtegida_8.readFeatures(json_AreaNaturalProtegida_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreaNaturalProtegida_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreaNaturalProtegida_8.addFeatures(features_AreaNaturalProtegida_8);
var lyr_AreaNaturalProtegida_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreaNaturalProtegida_8, 
                style: style_AreaNaturalProtegida_8,
                popuplayertitle: "AreaNaturalProtegida",
                interactive: false,
                title: '<img src="styles/legend/AreaNaturalProtegida_8.png" /> AreaNaturalProtegida'
            });
var format_Carreteras_9 = new ol.format.GeoJSON();
var features_Carreteras_9 = format_Carreteras_9.readFeatures(json_Carreteras_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carreteras_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carreteras_9.addFeatures(features_Carreteras_9);
var lyr_Carreteras_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Carreteras_9, 
                style: style_Carreteras_9,
                popuplayertitle: "Carreteras",
                interactive: true,
                title: '<img src="styles/legend/Carreteras_9.png" /> Carreteras'
            });

lyr_ALOSRECORTADOFINAL_0.setVisible(true);lyr_Litologas_1.setVisible(true);lyr_DomoCadereyta_2.setVisible(true);lyr_DomoLaTrinidad_3.setVisible(true);lyr_DomoLaLaja_4.setVisible(true);lyr_Poblacin_5.setVisible(true);lyr_GeositioDomoCadereyta_6.setVisible(true);lyr_GeositioDomoLaTrinidad_7.setVisible(true);lyr_AreaNaturalProtegida_8.setVisible(true);lyr_Carreteras_9.setVisible(true);
var layersList = [lyr_ALOSRECORTADOFINAL_0,lyr_Litologas_1,lyr_DomoCadereyta_2,lyr_DomoLaTrinidad_3,lyr_DomoLaLaja_4,lyr_Poblacin_5,lyr_GeositioDomoCadereyta_6,lyr_GeositioDomoLaTrinidad_7,lyr_AreaNaturalProtegida_8,lyr_Carreteras_9];
lyr_Litologas_1.set('fieldAliases', {'fid': 'fid', 'ERA': 'ERA', 'PERIODO': 'PERIODO', 'EDINICIO': 'EDINICIO', 'EDFINAL': 'EDFINAL', 'LITOLOGIA': 'LITOLOGIA', 'ROCA': 'ROCA', 'CLAVE': 'CLAVE', 'FORMACION': 'FORMACION', 'O_ESPACIAL': 'O_ESPACIAL', 'CLAVE_SGM': 'CLAVE_SGM', 'SIMBOLO': 'SIMBOLO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_DomoCadereyta_2.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_DomoLaTrinidad_3.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_DomoLaLaja_4.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Poblacin_5.set('fieldAliases', {'ID_LOC': 'ID_LOC', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'CVE_GEO': 'CVE_GEO', 'FECHA_ACT': 'FECHA_ACT', 'CALIREPR': 'CALIREPR', });
lyr_GeositioDomoCadereyta_6.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Elevación': 'Elevación', 'Elemento geológico': 'Elemento geológico', 'Provincia volcánica': 'Provincia volcánica', 'Unidad geológica': 'Unidad geológica', 'Descripción': 'Descripción', 'Clave': 'Clave', 'Edad': 'Edad', 'Interés geológico': 'Interés geológico', 'Otros intereses': 'Otros intereses', 'Relevancia': 'Relevancia', 'Propiedad': 'Propiedad', 'Estado de conservación': 'Estado de conservación', 'Tipo de protección': 'Tipo de protección', 'Amenazas y riesgos': 'Amenazas y riesgos', 'Accesibilidad': 'Accesibilidad', 'Infraestructura': 'Infraestructura', 'Interés': 'Interés', 'Acceso': 'Acceso', 'Peligros': 'Peligros', 'Observaciones': 'Observaciones', 'Imagen': 'Imagen', 'Coordenadas': 'Coordenadas', });
lyr_GeositioDomoLaTrinidad_7.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Elevación': 'Elevación', 'Elemento geológico': 'Elemento geológico', 'Provincia': 'Provincia', 'Unidad geológica': 'Unidad geológica', 'Descripción': 'Descripción', 'Clave': 'Clave', 'Edad': 'Edad', 'Interés geológico': 'Interés geológico', 'Otros intereses': 'Otros intereses', 'Relevancia': 'Relevancia', 'Propiedad': 'Propiedad', 'Estado de conservación': 'Estado de conservación', 'Tipo de protección': 'Tipo de protección', 'Amenazas y riesgos': 'Amenazas y riesgos', 'Accesibilidad': 'Accesibilidad', 'Infraestructura': 'Infraestructura', 'Acceso': 'Acceso', 'Peligros': 'Peligros', 'Observaciones': 'Observaciones', 'Imagen': 'Imagen', 'Coordenadas': 'Coordenadas', });
lyr_AreaNaturalProtegida_8.set('fieldAliases', {'ENTITY': 'ENTITY', 'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'THICKNESS': 'THICKNESS', 'COLOR': 'COLOR', 'OID': 'OID', });
lyr_Carreteras_9.set('fieldAliases', {'ID': 'ID', 'TIPOVIA': 'TIPOVIA', 'TIPO': 'TIPO', 'NUMERO': 'NUMERO', 'DERE_TRAN': 'DERE_TRAN', 'ADMINISTRA': 'ADMINISTRA', 'NUME_CARR': 'NUME_CARR', 'CONDICION': 'CONDICION', 'ORIGEN': 'ORIGEN', 'CALI_REPR': 'CALI_REPR', 'CVEGEO': 'CVEGEO', 'NOMVIAL': 'NOMVIAL', 'SENTIDO': 'SENTIDO', 'LONGITUD': 'LONGITUD', 'UNIDAD': 'UNIDAD', });
lyr_Litologas_1.set('fieldImages', {'fid': 'TextEdit', 'ERA': 'TextEdit', 'PERIODO': 'TextEdit', 'EDINICIO': 'TextEdit', 'EDFINAL': 'TextEdit', 'LITOLOGIA': 'TextEdit', 'ROCA': 'TextEdit', 'CLAVE': 'TextEdit', 'FORMACION': 'TextEdit', 'O_ESPACIAL': 'TextEdit', 'CLAVE_SGM': 'TextEdit', 'SIMBOLO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_DomoCadereyta_2.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_DomoLaTrinidad_3.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_DomoLaLaja_4.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Poblacin_5.set('fieldImages', {'ID_LOC': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'CVE_GEO': 'TextEdit', 'FECHA_ACT': 'TextEdit', 'CALIREPR': 'TextEdit', });
lyr_GeositioDomoCadereyta_6.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Elevación': 'TextEdit', 'Elemento geológico': 'TextEdit', 'Provincia volcánica': 'TextEdit', 'Unidad geológica': 'TextEdit', 'Descripción': 'TextEdit', 'Clave': 'TextEdit', 'Edad': 'TextEdit', 'Interés geológico': 'TextEdit', 'Otros intereses': 'TextEdit', 'Relevancia': 'TextEdit', 'Propiedad': 'TextEdit', 'Estado de conservación': 'TextEdit', 'Tipo de protección': 'TextEdit', 'Amenazas y riesgos': 'TextEdit', 'Accesibilidad': 'TextEdit', 'Infraestructura': 'TextEdit', 'Interés': 'TextEdit', 'Acceso': 'TextEdit', 'Peligros': 'TextEdit', 'Observaciones': 'TextEdit', 'Imagen': 'TextEdit', 'Coordenadas': 'TextEdit', });
lyr_GeositioDomoLaTrinidad_7.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Elevación': 'TextEdit', 'Elemento geológico': 'TextEdit', 'Provincia': 'TextEdit', 'Unidad geológica': 'TextEdit', 'Descripción': 'TextEdit', 'Clave': 'TextEdit', 'Edad': 'TextEdit', 'Interés geológico': 'TextEdit', 'Otros intereses': 'TextEdit', 'Relevancia': 'TextEdit', 'Propiedad': 'TextEdit', 'Estado de conservación': 'TextEdit', 'Tipo de protección': 'TextEdit', 'Amenazas y riesgos': 'TextEdit', 'Accesibilidad': 'TextEdit', 'Infraestructura': 'TextEdit', 'Acceso': 'TextEdit', 'Peligros': 'TextEdit', 'Observaciones': 'TextEdit', 'Imagen': 'TextEdit', 'Coordenadas': 'TextEdit', });
lyr_AreaNaturalProtegida_8.set('fieldImages', {'ENTITY': 'TextEdit', 'LAYER': 'TextEdit', 'ELEVATION': 'TextEdit', 'THICKNESS': 'TextEdit', 'COLOR': 'Range', 'OID': 'Range', });
lyr_Carreteras_9.set('fieldImages', {'ID': 'TextEdit', 'TIPOVIA': 'TextEdit', 'TIPO': 'TextEdit', 'NUMERO': 'TextEdit', 'DERE_TRAN': 'TextEdit', 'ADMINISTRA': 'TextEdit', 'NUME_CARR': 'TextEdit', 'CONDICION': 'TextEdit', 'ORIGEN': 'TextEdit', 'CALI_REPR': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOMVIAL': 'TextEdit', 'SENTIDO': 'TextEdit', 'LONGITUD': 'TextEdit', 'UNIDAD': 'TextEdit', });
lyr_Litologas_1.set('fieldLabels', {'fid': 'hidden field', 'ERA': 'header label - visible with data', 'PERIODO': 'header label - visible with data', 'EDINICIO': 'hidden field', 'EDFINAL': 'hidden field', 'LITOLOGIA': 'header label - visible with data', 'ROCA': 'header label - visible with data', 'CLAVE': 'hidden field', 'FORMACION': 'header label - visible with data', 'O_ESPACIAL': 'hidden field', 'CLAVE_SGM': 'hidden field', 'SIMBOLO': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_DomoCadereyta_2.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'header label - visible with data', });
lyr_DomoLaTrinidad_3.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'header label - visible with data', });
lyr_DomoLaLaja_4.set('fieldLabels', {'id': 'hidden field', 'Nombre': 'header label - visible with data', });
lyr_Poblacin_5.set('fieldLabels', {'ID_LOC': 'hidden field', 'TIPO': 'header label - visible with data', 'NOMBRE': 'header label - visible with data', 'CVE_GEO': 'hidden field', 'FECHA_ACT': 'hidden field', 'CALIREPR': 'hidden field', });
lyr_GeositioDomoCadereyta_6.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'header label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Elevación': 'header label - visible with data', 'Elemento geológico': 'header label - visible with data', 'Provincia volcánica': 'header label - visible with data', 'Unidad geológica': 'header label - visible with data', 'Descripción': 'header label - visible with data', 'Clave': 'header label - visible with data', 'Edad': 'header label - visible with data', 'Interés geológico': 'header label - visible with data', 'Otros intereses': 'header label - visible with data', 'Relevancia': 'header label - visible with data', 'Propiedad': 'header label - visible with data', 'Estado de conservación': 'header label - visible with data', 'Tipo de protección': 'header label - visible with data', 'Amenazas y riesgos': 'header label - visible with data', 'Accesibilidad': 'header label - visible with data', 'Infraestructura': 'header label - visible with data', 'Interés': 'header label - visible with data', 'Acceso': 'header label - visible with data', 'Peligros': 'header label - visible with data', 'Observaciones': 'header label - visible with data', 'Imagen': 'header label - visible with data', 'Coordenadas': 'header label - visible with data', });
lyr_GeositioDomoLaTrinidad_7.set('fieldLabels', {'fid': 'hidden field', 'Nombre': 'header label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'Elevación': 'header label - visible with data', 'Elemento geológico': 'header label - visible with data', 'Provincia': 'header label - visible with data', 'Unidad geológica': 'header label - visible with data', 'Descripción': 'header label - visible with data', 'Clave': 'header label - visible with data', 'Edad': 'header label - visible with data', 'Interés geológico': 'header label - visible with data', 'Otros intereses': 'header label - visible with data', 'Relevancia': 'header label - visible with data', 'Propiedad': 'header label - visible with data', 'Estado de conservación': 'header label - visible with data', 'Tipo de protección': 'header label - visible with data', 'Amenazas y riesgos': 'header label - visible with data', 'Accesibilidad': 'header label - visible with data', 'Infraestructura': 'header label - visible with data', 'Acceso': 'header label - visible with data', 'Peligros': 'header label - visible with data', 'Observaciones': 'header label - visible with data', 'Imagen': 'header label - visible with data', 'Coordenadas': 'header label - visible with data', });
lyr_AreaNaturalProtegida_8.set('fieldLabels', {'ENTITY': 'header label - visible with data', 'LAYER': 'header label - visible with data', 'ELEVATION': 'header label - visible with data', 'THICKNESS': 'header label - visible with data', 'COLOR': 'header label - visible with data', 'OID': 'header label - visible with data', });
lyr_Carreteras_9.set('fieldLabels', {'ID': 'hidden field', 'TIPOVIA': 'header label - visible with data', 'TIPO': 'header label - visible with data', 'NUMERO': 'hidden field', 'DERE_TRAN': 'hidden field', 'ADMINISTRA': 'header label - visible with data', 'NUME_CARR': 'hidden field', 'CONDICION': 'hidden field', 'ORIGEN': 'header label - visible with data', 'CALI_REPR': 'hidden field', 'CVEGEO': 'hidden field', 'NOMVIAL': 'hidden field', 'SENTIDO': 'hidden field', 'LONGITUD': 'hidden field', 'UNIDAD': 'hidden field', });
lyr_Carreteras_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});