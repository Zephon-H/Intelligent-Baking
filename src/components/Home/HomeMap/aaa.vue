<template>
    <div>
      <keep-alive>
      <div id="l-map"></div>
      </keep-alive>
    </div>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=lSZms8vUZ0bZns6rVHLWe3RQLaovokQM"></script>
<script>
    import {mapRequest} from '../../../api/HomePage/Home'
    export default {
        name: "index1",
        data(){
          return{
            //地址数据
            adds:[],
            //设备ID
            deviceId:[]
          }
        },
        methods:{
          //地图初始化
          mapInit(){
            let map = new BMapGL.Map("l-map");
            //设置地图中心和层级
            map.centerAndZoom(new BMapGL.Point(102.856699,24.896172), 10);
            //允许滚轮缩放
            map.enableScrollWheelZoom(true);
            //设置初始视角
            map.setHeading(0);
            map.setTilt(0);
            let scaleCtrl = new BMapGL.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT });  // 添加比例尺控件
            map.addControl(scaleCtrl);
            let zoomCtrl = new BMapGL.ZoomControl({anchor: BMAP_ANCHOR_TOP_RIGHT });  // 添加缩放控件
            map.addControl(zoomCtrl);
            let navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
            map.addControl(navi3DCtrl);
            //添加提示框和标注
            for(var i = 0; i<this.adds.length; i++){
              let marker = new BMapGL.Marker(this.adds[i]);
              map.addOverlay(marker);
              marker.setLabel(new BMapGL.Label("设备ID:</br>"+this.deviceId[i],{offset:new BMapGL.Size(15,-50)}));
            }
          }
        },
        mounted() {
          //页面挂载初始化地图并请求位置数据
          this.mapInit()
          mapRequest(this,BMapGL)
        },
        watch:{
          //监听地址数据变化并重新渲染地图
          adds:{
            handler(){
              this.mapInit()
            },
            deep:true
          },
          //监听设备数据变化并重新渲染地图
          deviceId:{
            handler(){
              this.mapInit()
            },
            deep:true
          }
        }
    }
</script>

<style scoped>
    #l-map{
        /*height: 21.4rem;*/
        /*width: 39.4rem;*/
        height: 50rem;
        width: 60rem;
        border-radius: 1rem;
        border:0.3rem solid white;
    }
</style>