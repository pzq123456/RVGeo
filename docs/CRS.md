# 
- wgs84 https://epsg.io/4326
> - https://en.wikipedia.org/wiki/Spatial_reference_system
> - https://gisgeography.com/ellipsoid-oblate-spheroid-earth/
The goal of any spatial reference system is to create a common reference frame in which locations can be measured precisely and consistently as coordinates, which can then be shared unambiguously, so that any recipient can identify the same location that was originally intended by the originator. To accomplish this, any coordinate reference system definition needs to be composed of several specifications:
A coordinate system, an abstract framework for measuring locations. Like any mathematical coordinate system, its definition consists of a measurable space (whether a plane, a three-dimension void, or the surface of an object such as the Earth), an origin point, a set of axis vectors emanating from the origin, and a unit of measure.
A horizontal datum, which binds the abstract coordinate system to the real space of the Earth. A horizontal datum can be defined as a precise reference framework for measuring geographic coordinates (latitude and longitude). Examples include the World Geodetic System and the 1927 and 1983 North American Datum. A datum generally consists of an estimate of the shape of the Earth (usually an ellipsoid), and one or more anchor points or control points, established locations (often marked by physical monuments) for which the measurement is documented.
A definition for a projected CRS must also include a choice of map projection to convert the spherical coordinates specified by the datum into cartesian coordinates on a planar surface.
Thus, a CRS definition will typically consist of a "stack" of dependent specifications, as exemplified in the following table:

地球并不是完美的球体，而是一个略扁的椭球体。因此，地球的半径并不是一个固定值，而是在赤道和极点之间略有不同。

根据国际大地测量学与地球物理学联合会（IUGG）在2004年制定的地球参考框架（GRS80），地球的平均半径为6371.0088公里。这个值是通过对全球各地的大地测量数据进行综合分析得出的，是目前最精确的地球半径值。

如果把地球视作球体，那么半径取6371.0088公里时误差最小。在这个半径下，地球的表面积和体积与实际值之间的误差都非常小。

具体来说，地球表面积的误差约为0.0002%，体积的误差约为0.0003%。这两个误差都非常小，可以忽略不计。

当然，如果对地球的形状要求更高，则可以考虑使用更精确的地球椭球体模型，例如GRS80椭球体。GRS80椭球体的长半轴为6378.137公里，短半轴为6356.7523142公里。在这个模型下，地球表面积和体积的误差可以进一步降低。

不过，在大多数情况下，使用6371.0088公里作为地球半径已经足够精确了。

## tiles systems
```
    +-------------+-------------+  85.0511 deg N
    |             |             |
    |    x: 0     |    x: 1     |
    |    y: 0     |    y: 0     |
    |    z: 1     |    z: 1     |
    |             |             |
    +-------------+-------------+   0.0 deg N
    |             |             |
    |    x: 0     |    x: 1     |
    |    y: 1     |    y: 1     |
    |    z: 1     |    z: 1     |
    |             |             |
    +-------------+-------------+  85.0511 deg S

180.0 deg W               180.0 deg E
```
> - https://mercantile.readthedocs.io/en/latest/quickstart.html
> - https://developers.planet.com/docs/planetschool/xyz-tiles-and-slippy-maps/

## why mercator
Although the Mercator projection significantly distorts scale and area (particularly near the poles), it has two important properties that outweigh the scale distortion:
It’s a conformal projection, which means that it preserves the shape of relatively small objects. This is especially important when showing aerial imagery, because we want to avoid distorting the shape of buildings. Square buildings should appear square, not rectangular.
It’s a cylindrical projection, which means that north and south are always straight up and down, and west and east are always straight left and right.
Since the Mercator projection goes to infinity at the poles, it doesn’t actually show the entire world. Using a square aspect ratio for the map, the maximum latitude shown is approximately 85.05 degrees.
To simplify the calculations, we use the spherical form of this projection, not the ellipsoidal form. Since the projection is used only for map display, and not for displaying numeric coordinates, we don’t need the extra precision of an ellipsoidal projection. The spherical projection causes approximately 0.33% scale distortion in the Y direction, which is not visually noticeable.