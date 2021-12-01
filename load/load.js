// 变量名：
// now_sence:当前幕
// num_save:存档数量
// save[]:存档幕
// describe[]:存档描述
// collection[i] 第i个收集品是否被找到
// num_collection

var data_load=window.localStorage;
var num_save=data_load["num_save"];
if(num_save==undefined){num_save=0;}

console.log(num_save);

// 存档数据显示
for(var i_yhf=1;i_yhf<=num_save;i_yhf++)
{
    var scene_load=data_load["save"+i_yhf];
    console.log("savenum"+num_save+" "+i+" "+scene_load);
    var savedata_load=document.getElementById("tr"+i_yhf);
    // var des_load=document.getElementById("")//描述框

    //背景图片
    var imgnum_yhf=parseInt(scene_load);
    console.log(i_yhf+" imgnum "+imgnum_yhf);
    var img_url;
    if( (imgnum_yhf>=50&&imgnum_yhf<=65) || (imgnum_yhf>=73&&imgnum_yhf<=84) || (imgnum_yhf>=99&&imgnum_yhf<=111) || (imgnum_yhf>=117&&imgnum_yhf<=122) || (imgnum_yhf>=124&&imgnum_yhf<=130) || (imgnum_yhf>=133&&imgnum_yhf<=136) )img_url="url(../bg/"+imgnum_yhf+"bg.png)";//改为图片路径即可
    else img_url="url(../bg/"+imgnum_yhf+"bg.jpg)";//改为图片路径即可
    console.log(img_url);
    // var img_url="url(image_main/bg"+i_yhf+".jpg)";//改为图片路径即可
    savedata_load.style.backgroundImage=img_url;
    savedata_load.style.backgroundSize="cover";

    //描述
    var word_load=data_load["describe"+i_yhf];//描述内容
    var vector_load=document.getElementById("dex_tr"+i_yhf);//描述框
    if(word_load==undefined)word_load="Save "+i_yhf;//默认描述内容
    //修改des内文字为word_load
    vector_load.innerHTML=word_load;
    vector_load.style.color="white";
}

//点击跳转至游戏当前scene
var div_load=new Array(100);
for(var i_yhf2=1;i_yhf2<=num_save;i_yhf2++)
{
    div_load[i_yhf2]=document.getElementById("tr"+i_yhf2);
    // console.log("for: "+i_yhf2);
    div_load[i_yhf2].onclick=function ()
    {
        // var myevent=$(this);
        var myevent=this;
        // console.log(myevent);
        var now_yhff=this.id.charAt(this.id.length - 1);
        // console.log("i_yhf2: "+this.id+" "+now_yhff);
        // console.log("colicked");
        data_load["now_scene"]=parseInt( data_load["save"+now_yhff] )+1;
        data_load["now_j"]=data_load["savedj"+now_yhff];
        // console.log("savenum: "+data_load["save"+now_yhff]);
        // console.log("nowsecne "+data_load["now_scene"]);
        window.location.href="../Game/game.html"//跳转至选择scene
    }
}