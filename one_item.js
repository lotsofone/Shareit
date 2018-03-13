


//image
var image=window.document.getElementById("image");
image.src="device_picture/"+frameElement.iframeChannal.name+".jpg";

window.document.getElementById("item_name").innerHTML=frameElement.iframeChannal.name;
window.document.getElementById("manager").innerHTML="仪器负责人："+frameElement.iframeChannal.manager;
window.document.getElementById("phone").innerHTML="电话："+frameElement.iframeChannal.phone;
window.document.getElementById("device_id").innerHTML="仪器编号："+frameElement.iframeChannal.device_id;
window.document.getElementById("item_status").innerHTML=frameElement.iframeChannal.status;

window.document.getElementById("point").innerHTML=""+frameElement.iframeChannal.point+"分";
window.document.getElementById("item_price").innerHTML=frameElement.iframeChannal.price;
window.document.getElementById("item_discription").innerHTML="仪器简介："+frameElement.iframeChannal.discription;
window.document.getElementById("item_detail").innerHTML="详细信息："+frameElement.iframeChannal.detail;
window.document.getElementById("item_procedure").innerHTML="租用方式："+frameElement.iframeChannal.procedure;