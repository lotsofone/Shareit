var lab_data = new Array();

//把实验室信息放到一个数组中。这是东秦的数据
{
    lab_data.push(a={
        name: "激光显微拉曼光谱仪",
        device_id: "D1009102030007",
        manager: "李王萍",
        phone: "(020)80394782",
        status: "空闲",
        point: 4.7,
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
        procedure: "网上接收3D模型，打印完成后取走产品。根据模型的打印时间计费，不同耗材价格不同，PLA、ABS、PC、FLEX、HIPS为129元/小时，TPU、TPE、Fiber为199元/小时，Carbon为499/小时。不足一小时的部分按一小时计算。",
    });
    lab_data.push(a={
        name: "MERCURY S124D 24口交换机",
        device_id: "D100830x0xxxxx",
        manager: "李天志",
        phone: "(020)85072983",
        status: "空闲",
        point: 1.8,
        price: "￥12/日/台",
        discription: "用于网络技术教学",
        detail: "网络标准：IEEE802.3、IEEE802.3u、IEEE802.3X，端口：24个10/100Mbps RJ45端口，支持8K的MAC地址表深度。尺寸：294mm×180mm×44mm",
        procedure: "按日出租，7日起租，每台每天12元，实验室共有96台存货。预定后借出日的12:00之后到实验室取走仪器，最后一天的16:00前将仪器送回实验室。",
    });
}

for(var i=0; i<lab_data.length; i++){
    //添加iframe元素
    var new_iframe = document.createElement("iframe");
    new_iframe.scrolling = "no";
    new_iframe.className="iframe_item";
    document.getElementById("result").appendChild(new_iframe);

    new_iframe.iframeChannal=lab_data[i];//传入数据
    new_iframe.src="one_item.html";//设置src同时刷新
}
        