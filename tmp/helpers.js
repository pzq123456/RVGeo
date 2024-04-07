import * as RV from './index.js';

/**
 * 帮助函数 用与快速展示栅格数据的渲染效果
 * @param {*} data  栅格数据
 * @param {*} myCanvas 画布对象
 */

function RasterDemo1(data,myCanvas){
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

  let grid1= RV.Raster.fromMatrix(data);
  let stt =new RV.Stastic(grid1.get1DArray());
  grid1.padding_(10,stt.mean);// 可以选择padding的尺寸以及填充值 默认均值填充
  grid1.depadding_(); // 展示反padding效果 使用该方法可以抵消padding效果！
  grid1.padding_(1,stt.mean);// 可以选择padding的尺寸以及填充值 默认均值填充
  let colorramp = new RV.Renderer.ColorRamp(stt);
  let gridview = new RV.Renderer.GridView(myCanvas.ctx,grid1,30,512+30,512+30,30);// 
  gridview.draw(colorramp,myCanvas.height,myCanvas.width,true,"栅格1-1 原始DEM渲染");

  let dd = grid1.get_Aspect();
  let grid2 = RV.Raster.fromMatrix(dd);
  let stt2 =new RV.Stastic(grid2.get1DArray());
  let colorramp2 = new RV.Renderer.ColorRamp(stt2);
  let gridview2 = new RV.Renderer.GridView(myCanvas.ctx,grid2,600+600,512+600,512+600+600,600);
  gridview2.draw_aspect(colorramp2,myCanvas.height,myCanvas.width,true,"栅格 2-1 坡向");


  let dd1 = grid1.get_Slope();
  let grid3 = RV.Raster.fromMatrix(dd1);
  let stt3 =new RV.Stastic(grid3.get1DArray());
  let colorramp3 = new RV.Renderer.ColorRamp(stt3);
  let gridview3 = new RV.Renderer.GridView(myCanvas.ctx,grid3,30,512+600,512+30,600);
  gridview3.draw_main(colorramp3,myCanvas.height,myCanvas.width,true,"栅格 2-2 坡度");
  
  let stv3 = new RV.Renderer.StasticView(myCanvas.ctx,stt2);
  stv3.draw_box_whisker_plot(30+600,512+600,512+600+30,600,10,60,myCanvas.height,myCanvas.width,"图表 2-2 坡向数据箱线图");

  // let cs = grid1.get_SampleLine(254,100,0,100);
  // gridview.draw_cell_set(cs,"green",myCanvas.height);
  // let da = grid3.get_CellValueList(cs,10);
  // let st = new RV.Stastic(da);
  // let stv4 = new RV.Renderer.StasticView(myCanvas.ctx,st);
  // stv4.draw_step_plot(30+600,512+30,512+600+600+30,30,10,250,myCanvas.height,myCanvas.width,"green","图表 3-1 剖面图");

  // let cs2 = grid1.get_SampleLine(100,254,100,0);

  // gridview.draw_cell_set(cs2,"red",myCanvas.height);
  // let da2 = grid3.get_CellValueList(cs2,10);
  // let st2 = new RV.Stastic(da2);
  // let stv5 = new RV.Renderer.StasticView(myCanvas.ctx,st2);
  // stv5.draw_step_plot_single(30+600,512,512+600+600+30,0,10,250,myCanvas.height,myCanvas.width,"red");
}

export {RasterDemo1};
