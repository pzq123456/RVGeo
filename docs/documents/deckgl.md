# RVGeo Quick Start Guide for Geospatial Analysis and Visualization

This guide demonstrates how to use the RVGeo library with raw deck.gl for geospatial analysis and visualization without additional dependencies.

## 1. Basic Setup

First, load the necessary libraries and sample data:

```javascript
import { ScatterplotLayer, GeoJsonLayer } from 'deck.gl';
import * as RVGeo from 'rvgeo';  // Assume installed via npm

// Sample data - replace with your data source in actual use
const sampleData = [
    { id: 1, lon: 114.1, lat: 22.2, value: 10, category: 'A' },
    { id: 2, lon: 114.2, lat: 22.3, value: 20, category: 'B' },
    // More data points...
];

// Define analysis area boundary
const AREA_BORDER = [
    [113.8, 22.1],
    [114.5, 22.1],
    [114.5, 22.6],
    [113.8, 22.6],
    [113.8, 22.1]  // Closed polygon
];
```

## 2. Data Preparation and Analysis

### 2.1 Data Transformation and Basic Computation

```javascript
// Convert to RVGeo-supported MultiPoint format
const points = RVGeo.toMultiPoint(sampleData.map(d => [d.lon, d.lat]));

// Compute MBR (Minimum Bounding Rectangle)
const areaMBR = RVGeo.polygonToMBR(AREA_BORDER);

// Compute Convex Hull
const convexHull = RVGeo.toPolygon(RVGeo.convexHull(points.geometries));
console.log('Convex Hull Area (km²):', 
    RVGeo.EPSG3857.area(convexHull.getCoordinates()[0]) / 1e6);
```

### 2.2 Advanced Spatial Analysis

```javascript
// Create Delaunay Triangulation
const boundaryPoints = RVGeo.toMultiPoint(AREA_BORDER.slice(0, 4));
const delaunay = RVGeo.Delaunator.from([
    ...points.toXY(), 
    ...boundaryPoints.toXY()
]);

// Generate and Clip Voronoi Diagram
const voronoi = new RVGeo.Voronoi(delaunay);
const clippedVoronoi = voronoi.cutVoronoiByMBR(areaMBR);
const voronoiPolygons = Array.from(clippedVoronoi, ([key, value]) => 
    RVGeo.toPolygon(value, { centeridx: key })
);
```

## 3. Visualization with Raw deck.gl

### 3.1 Basic Layer Configuration

```javascript
// Point Data Layer
const pointLayer = new ScatterplotLayer({
    id: 'points',
    data: sampleData,
    getPosition: d => [d.lon, d.lat],
    getRadius: d => d.value * 100,
    getFillColor: [0, 128, 255, 200],
    radiusMinPixels: 3,
    radiusMaxPixels: 30,
    pickable: true
});

// Boundary Layer
const borderLayer = new GeoJsonLayer({
    id: 'border',
    data: {
        type: 'Feature',
        geometry: {
            type: 'Polygon',
            coordinates: [AREA_BORDER]
        }
    },
    stroked: true,
    filled: false,
    getLineColor: [255, 0, 0],
    lineWidthMinPixels: 2
});
```

### 3.2 Visualization of Analysis Results

```javascript
// Voronoi Diagram Layer
const voronoiLayer = new GeoJsonLayer({
    id: 'voronoi',
    data: RVGeo.toMultiPolygon(voronoiPolygons).toGeoJSON(),
    stroked: true,
    filled: true,
    getFillColor: [255, 255, 0, 50],
    getLineColor: [0, 0, 0],
    lineWidthMinPixels: 1
});

// Convex Hull Layer
const convexHullLayer = new GeoJsonLayer({
    id: 'convex-hull',
    data: convexHull.toGeoJSON(),
    stroked: true,
    filled: false,
    getLineColor: [0, 255, 0],
    lineWidthMinPixels: 2
});
```

## 4. Final Map Configuration

```javascript
// Tooltip Configuration
const getTooltip = ({ object }) => object && {
    html: `<div>
        <strong>ID:</strong> ${object.id}<br/>
        <strong>Location:</strong> ${object.lon.toFixed(4)}, ${object.lat.toFixed(4)}<br/>
        <strong>Value:</strong> ${object.value}<br/>
        <strong>Category:</strong> ${object.category}
    </div>`,
    style: {
        backgroundColor: '#fff',
        color: '#333',
        padding: '10px',
        borderRadius: '4px'
    }
};

// Map Initialization Configuration
const initialViewState = {
    longitude: 114.17,
    latitude: 22.28,
    zoom: 10,
    pitch: 0,
    bearing: 0
};

// Render Map
const deckgl = new DeckGL({
    initialViewState,
    controller: true,
    layers: [
        voronoiLayer,
        convexHullLayer,
        borderLayer,
        pointLayer
    ],
    getTooltip
});
```

## 5. Usage Instructions

1. **Data Requirements**:
     - Point data must include longitude (`lon`) and latitude (`lat`) fields
     - Boundary coordinates must form a closed polygon

2. **Quick Start**:
     ```bash
     npm install deck.gl rvgeo
     ```
     Then integrate the above code into your React/Vue app or plain JavaScript project.

3. **Customization Options**:
     - Adjust visual parameters like color and radius
     - Modify the analysis area boundary
     - Add more data attributes to the tooltip
