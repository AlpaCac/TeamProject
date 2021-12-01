// collection[i] 第i个收集品是否被找到
// num_collection

var data_collection=window.localStorage;

for(var i=1;i<=5;i++)
{
    var colimg_yhf=document.getElementById("col_img"+i);
    var pd_yhf=data_collection["collection"+i];
    console.log(colimg_yhf);
    if(pd_yhf!=undefined)
    {
        colimg_yhf.src="image_collection/col"+i+"_true.png";
    }
}