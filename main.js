var lab_data = new Array();

//把实验室信息放到一个数组中。这是东秦的数据
{
    lab_data.push(a={
        name: "激光显微拉曼光谱仪",
        device_id: "D1009102030007",
        manager: "李王萍",
        phone: "(020)80394782",
        status: "空闲",
        point: 4.2,
        price: "￥38999/日",
        discription: "用于材料价键分析，结构分析",
        detail: "He-Cd激光器（325 nm）、Ar+离子激光器（488 nm，514 nm）、He-Ne激光器（633 nm）和785 nm半导体激光器，共四个激光器5条波长的激光。同时还配备了奥林巴斯BX41开放型显微镜，以及Lincam冷热台和气相反应池等附件。",
        procedure: "仪器按日出租，每日12900元，需咨询仪器空闲时段并预约。",
    });
    lab_data.push(a={
        name: "RAISE 3D打印机",
        device_id: "D1005302089033",
        manager: "李天志",
        phone: "(020)85072983",
        status: "空闲",
        point: 2.4,
        price: "￥129/小时",
        discription: "用于建筑设计、工业设计等领域，可便捷地打印出模型",
        detail: "打印技术：FDM，打印层厚：0.01-0.3mm，打印尺寸：305*305*305mm，定位精度：XY轴0.0125mm z轴0.00125mm，文件类型：.stl .obj",
        procedure: "网上接收3D模型，打印完成后取走产品。根据模型的打印时间计费，不同耗材价格不同，PLA、ABS、PC、FLEX、HIPS为129元/小时，TPU、TPE、Fiber为199元/小时，Carbon为499/小时。",
    });
    lab_data.push(a={
        name: "罗克韦尔实验室",
        status: "空闲",
        point: 4.8,
        price: "￥1999/日",
        discription: "在罗克韦尔自动化集成架构下进行自动化控制研发。",
        procedure: "实验室按日出租，起始日从8:00开始使用，结束日需在18:00前下机"
    });
    lab_data.push(a={
        name: "运动目标检测实验室",
        status: "忙碌",
        point: 3.9,
        price: "￥10990/日",
        discription: "",
        procedure: "实验室按日出租，起始日从6:00开始使用，结束日需在16:30前下机"
    });
    lab_data.push(a={
        name: "表面质量检测实验室",
        status: "空闲",
        point: 4.9,
        price: "￥1299/样品",
        procedure: "预约后将样品送到实验室，网上传回检测结果"
    });
}

for(var i=0; i<lab_data.length; i++){
    //添加iframe元素
    var new_iframe = document.createElement("iframe");
    new_iframe.scrolling = "no";
    new_iframe.className="iframe_item";
    document.getElementById("result").appendChild(new_iframe);

    new_iframe.iframeChannal=lab_data[i];//传入数据
    new_iframe.src="one_item.html";
}
        