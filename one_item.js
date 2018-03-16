


//image
var image=window.document.getElementById("image");
image.src="device_picture/"+frameElement.iframeChannal.name+".jpg";

window.document.getElementById("item_name").innerHTML=frameElement.iframeChannal.name;
window.document.getElementById("manager").innerHTML="仪器负责人："+frameElement.iframeChannal.manager;
window.document.getElementById("phone").innerHTML="电话："+frameElement.iframeChannal.phone;
window.document.getElementById("device_id").innerHTML="仪器编号："+frameElement.iframeChannal.device_id;
window.document.getElementById("item_status").innerHTML=frameElement.iframeChannal.status;
//stars
var point = frameElement.iframeChannal.point;
var base_star_width=document.getElementById("star1").width;
{
    function clamp(a){return a>1?1:(a<0?0:a)}
    document.getElementById("span_star5").style.width = clamp(point-4)*base_star_width+"px";
    document.getElementById("span_star4").style.width = clamp(point-3)*base_star_width+"px";
    document.getElementById("span_star3").style.width = clamp(point-2)*base_star_width+"px";
    document.getElementById("span_star2").style.width = clamp(point-1)*base_star_width+"px";
    document.getElementById("span_star1").style.width = clamp(point-0)*base_star_width+"px";
}
window.document.getElementById("point").innerHTML=""+point+"分";

window.document.getElementById("item_price").innerHTML=frameElement.iframeChannal.price;
window.document.getElementById("item_discription").innerHTML="仪器简介："+frameElement.iframeChannal.discription;
window.document.getElementById("item_detail").innerHTML="详细信息："+frameElement.iframeChannal.detail;
window.document.getElementById("item_procedure").innerHTML="租用方式："+frameElement.iframeChannal.procedure;

frameElement.style.height = document.body.scrollHeight;