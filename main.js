import * as RV from './index.js';

let pl = RV.Test.test_6(8,1000);//生成狄罗妮三角形的点集个数
let plt = [];

for(let itm of pl){
  let po = new RV.Vector.Point(itm[0],itm[1]);
  plt.push(po);
}





//let triangleBtn = document.querySelector('.triangle');
let pointsetBtn = document.querySelector('.pointset');
let lineBtn = document.querySelector('.complexline');


// create the canvas and reporting list
let myCanvas = new RV.Creator.Canvas('myCanvas', document.body, 1900, 1200);
myCanvas.create();
myCanvas.createReportList();



// creater footer 
let footer = document.createElement('footer');
footer.innerHTML = '© 2022-2023 Powered by RVGeo.js';
document.body.appendChild(footer);
// center the footer

footer.style.flex = '0 0 auto';
footer.style.textAlign = 'center';
footer.style.backgroundColor = '#f5f5f5';






// draw a pointset and its convex_hull
pointsetBtn.addEventListener('click', () => {
    let pl = RV.Test.test_2(80,700,100,100); //生成随机点集
    let ps = new RV.Vector.PointSet(pl);
    let pointset1 = new RV.Renderer.PointSetView(myCanvas.ctx,'green',ps)
    // clear the canvas before drawing
    myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    pointset1.draw();
    pointset1.draw_convex_hull();
    pointset1.draw_extent();
});


// draw a complexline and its DPline
lineBtn.addEventListener('click', () => {
  let pl = RV.Test.test_4(1000,500,20);
  let pointset1 = new RV.Renderer.LineView(myCanvas.ctx,"rgba(255, 157, 0, 0.846)",pl);
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  pointset1.draw("rgba(255, 157, 0, 0.846)",1,false);
  pointset1.draw_DPsmmoth(290,true);
  pointset1.draw_extent();

});


let cs1Btn = document.querySelector('.cs1');
cs1Btn.addEventListener('click', () => {
  let tr = RV.Test.test_5(800);
  let tri = new RV.Renderer.TriangleView(myCanvas.ctx,'green',tr);
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  tri.draw_EXCircle();
  let pen1 = new RV.pan.pan(myCanvas.ctx,'blue');

  tri.draw();
 
  tri.draw_INCircle();
  let center = tr.getINCcenter();
  pen1.draw_line(center,center.getFootPoint_(tr.a));
  pen1.draw_line(center,center.getFootPoint_(tr.b));
  pen1.draw_line(center,center.getFootPoint_(tr.c));

});


let cs2Btn = document.querySelector('.cs2');
cs2Btn.addEventListener('click', () => {
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  let trilist = RV.Vector.Delaunay_triangulation(pl);
  let data = RV.Vector.Tesson_polygon_adj_Matrix(pl);

  
  for(let tri of trilist){
    let triview = new RV.Renderer.TriangleView(myCanvas.ctx,'green',tri);
    triview.draw();
  }

  
  let grid1= RV.Raster.fromMatrix(data);
  let gridview = new RV.Renderer.GridView(myCanvas.ctx,grid1,512+512,512+512+10,512+512+512,512+10);
  gridview.draw_dispersed_custom(myCanvas.height,true,RV.pan.CellValueRenderer.ColorBand_2,"三角形邻接关系",4)

})


let cs3Btn = document.querySelector('.cs3');
cs3Btn.addEventListener('click', () => {
  //http://124.221.217.153:5003/datapublic/dem.csv
  //服务器数据地址
  $.get("public/dem.csv",function(data1,status){
    // clear the canvas before drawing
    myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    let data = RV.Raster.parser1(255,256,data1);
    

    // 这一段逻辑被封装为grid的静态方法 parser1
    // let tdata = data1.split(',');
    // let rres = [];
    // for(let i = 0;i < 255;i++){
    //   let ttp = [];

    //   for(let j=0;j<256;j++){
    //     ttp.push(parseFloat(tdata[i*255+j])*1000);
    //   }
    //   rres.push(ttp);
    // }
    
    let grid1= RV.Raster.fromMatrix(data);
    // grid1.toIntGrid();
  

    let stt =new RV.Stastic(grid1.get1DArray());
    grid1.padding_(10,stt.mean);// 可以选择padding的尺寸以及填充值 默认均值填充
    grid1.depadding_(); // 展示反padding效果 使用该方法可以抵消padding效果！
    grid1.padding_(1,stt.mean);// 可以选择padding的尺寸以及填充值 默认均值填充
    let colorramp = new RV.Renderer.ColorRamp(stt);
    let gridview = new RV.Renderer.GridView(myCanvas.ctx,grid1,30,512+30,512+30,30);
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

    let cs = grid1.get_SampleLine(254,100,0,100);
    gridview.draw_cell_set(cs,"green",myCanvas.height);
    let da = grid3.get_CellValueList(cs,10);
    let st = new RV.Stastic(da);
    let stv4 = new RV.Renderer.StasticView(myCanvas.ctx,st);
    stv4.draw_step_plot(30+600,512+30,512+600+600+30,30,10,250,myCanvas.height,myCanvas.width,"green","图表 3-1 剖面图");

    let cs2 = grid1.get_SampleLine(100,254,100,0);
    gridview.draw_cell_set(cs2,"red",myCanvas.height);
    let da2 = grid3.get_CellValueList(cs2,10);
    let st2 = new RV.Stastic(da2);
    let stv5 = new RV.Renderer.StasticView(myCanvas.ctx,st2);
    stv5.draw_step_plot_single(30+600,512,512+600+600+30,0,10,250,myCanvas.height,myCanvas.width,"red");
  });
})

let cs4Btn = document.querySelector('.cs4');
cs4Btn.addEventListener('click', () => {
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  let trilist = RV.Vector.Delaunay_triangulation(pl);
  let data =  RV.Vector.Tesson_polygon_adj_Matrix(pl);

  let pen1 = new  RV.pan.pan(myCanvas.ctx,'blue');
  
  for(let tri of trilist){
    let index = trilist.indexOf(tri);
    let connect = data[index];
    let sum = 0;
    for(let i = 0; i< connect.length;i++){
      sum = sum + connect[i];
      if(connect[i]!==0){
        let antri = trilist[i];
        pen1.draw_line(tri.getINCcenter(),antri.getINCcenter());
      }
    }
    let left_edge = 6 - sum;

    let center = tri.getINCcenter();

    if(left_edge== 1){
      pen1.draw_line(center,center.getFootPoint_(tri.c));
    }
    if(left_edge== 2){
      pen1.draw_line(center,center.getFootPoint_(tri.a));
    }
    if(left_edge== 3){
      pen1.draw_line(center,center.getFootPoint_(tri.b));
    }

    let ps = RV.Vector.PointSet.fromaArray_2D(pl,0,1);
    let pointset1 = new  RV.Renderer.PointSetView(myCanvas.ctx,'blue',ps);

    pointset1.draw_convex_hull();
  }

  
  let grid1=RV.Raster.fromMatrix(data);
  let stt =new RV.Stastic(grid1.get1DArray());
  let gridview = new  RV.Renderer.GridView(myCanvas.ctx,grid1,512+512,512+512+10,512+512+512,512+10);
  gridview.draw_dispersed_custom(myCanvas.height,true,RV.pan.CellValueRenderer.ColorBand_1,"三角形邻接关系",4);
  let pointset1 = new PointSetView(myCanvas.ctx,'blue',plt);
  pointset1.draw_convex_hull();
})

let cs5Btn = document.querySelector('.cs5');
cs5Btn.addEventListener('click', () => {
    // clear the canvas before drawing
    myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    let pl = RV.Test.test_10(200,3,1000);
    let ten = new RV.Learn.Tensor_2D(pl);
    let res = ten.K_means(3,0.0001,100);

    let pl1 = res[0];
    let ps1 = RV.Vector.PointSet.fromaArray_2D(pl1,1,0);
    let psv1 = new RV.Renderer.PointSetView(myCanvas.ctx,'green',ps1);
    psv1.draw();
    psv1.draw_convex_hull();

    let pl2 = res[1];
    let ps2 = RV.Vector.PointSet.fromaArray_2D(pl2,1,0);
    let psv2 = new RV.Renderer.PointSetView(myCanvas.ctx,'red',ps2);
    psv2.draw();
    psv2.draw_convex_hull();

    let pl3 = res[2];
    let ps3 = RV.Vector.PointSet.fromaArray_2D(pl3,1,0);
    let psv3 = new RV.Renderer.PointSetView(myCanvas.ctx,'blue',ps3);
    psv3.draw();
    psv3.draw_convex_hull();

})

let cs6Btn = document.querySelector('.cs6');
cs6Btn.addEventListener('click', () => {
  // clear the canvas before drawing
  myCanvas.ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  let grid = new RV.Raster(50,50,0);
  let grid1 = RV.Raster.fromMatrix(grid.splash_AccmulationSerface(25,24,0));
  grid1.get_Contour(5);

  let stt =new RV.Stastic(grid1.get1DArray());
  let colorramp = new RV.Renderer.ColorRamp(stt);
  let gridview = new RV.Renderer.GridView(myCanvas.ctx,grid1,30,1024,1024+30,0);
  gridview.draw(colorramp,myCanvas.height,myCanvas.width,true,"累积表面测试视图");

})
