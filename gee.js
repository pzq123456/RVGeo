// 在 GEE 平台上获取遥感影像
function getImage(geometry) {
var image = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(geometry)
    .filterDate('2019-01-01', '2019-12-31')
    .sort('CLOUD_COVER')
    .first();
return image;
}

// 使用 geometry 裁剪遥感影像
function clipImage(image, geometry) {
    var clippedImage = image.clip(geometry);
    return clippedImage;
}

// 保存裁剪好的遥感影像
function saveImage(image, name) {
    Export.image.toDrive({
        image: image,
        description: name,
        scale: 30,
        region: geometry
    });
}

// 主 函数
function main(geometry) {
    var image = getImage(geometry);
    var clippedImage = clipImage(image, geometry);
    saveImage(clippedImage, 'clippedImage');
}

// 调用主函数
main(geometry);


