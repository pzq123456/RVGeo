# Example12 （二维）噪声生成器及噪声可视化 Noise Generator and visualization

```ts
  const Perlin = RVGeo.Noise.Perlin; // Perlin 噪声生成器
  const dampedSin3D = RVGeo.Noise.dampedSin3D; // 3D阻尼正弦波噪声生成器
  const Sin3D = RVGeo.Noise.Sin3D; // 3D正弦波噪声生成器
  const Grid = RVGeo.Coverage.Grid; // 栅格类
  const size = 64;
  const blocksize = 256;

  let data = [];
  // sample by Perlin, dampedSin3D, Sin3D
  data.push(sample(size,0.05,0.05,Perlin));
  data.push(sample(size,1,1,dampedSin3D));
  data.push(sample(size,1,1,Sin3D));

  // draw grid
  let mySimpleColorBand = RVGeo.Colors.simpleColorBandFactory(RVGeo.Colors.stretchType.linear);
  let myPseudoColorBand = RVGeo.Colors.pseudoColorBandFactory(RVGeo.Colors.stretchType.linear);

  let grid = [] as RVGeo.Coverage.Grid[];
  data.forEach((d) => {
    grid.push(new Grid(myMBR1, [d]));
  });

  for(let i = 0; i < 3; i++){
    drawGrid2d(canvas, data[i], {x: 0, y: i*blocksize, w: blocksize, h: blocksize}, grid[i].getBandStatistics(0), mySimpleColorBand);
    drawGrid2d(canvas, data[i], {x: blocksize, y: i*blocksize, w: blocksize, h: blocksize}, grid[i].getBandStatistics(0), myPseudoColorBand);
  }

  function sample(size: number,x: number,y: number, sampleFunc: (x: number, y: number) => number){
    let data = [];
    for(let i = 0; i < size; i++){
      let tmp = [];
      for(let j = 0; j < size; j++){
        let noise = sampleFunc(i*x - size/2, j*y - size/2); // 生成噪声0-1
        tmp.push(noise);
      }
      data.push(tmp);
    }
    return data;
  }
```