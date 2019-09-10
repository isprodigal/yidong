jinteng = {};
notch = {};

function jtGetJsonFromServer2(uri, params, method, isJson, isAjax) {
    if (method == null) {
        method = 'POST';
    }

    if (isJson == null) {
        isJson = true;
    }

    if (isAjax == null) {
        isAjax = false;
    }
    var jsonData = '{}';
    var postpath = params;
    var xmlhttp = new XMLHttpRequest();
    //xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");    这是老版ie使用的创建xhttprequest对象的方法

    if(uri.substr(0,7).toLowerCase() == 'http://' || uri.substr(0,7).toLowerCase() == 'https:/')
    {
        var URL = uri;
    }else
    {
        var URL = uri;
    }

    // console.log(URL);
    // console.log(params);

    //if
    if (isAjax) {
        // console.log('异步发送');
        xmlhttp.open(method, URL, true);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(postpath);
        xmlhttp.onreadystatechange = function() {
            if ((xmlhttp.readyState == 4) && (xmlhttp.status == 200)) {
                jsonData = xmlhttp.responseText;
            } else {
                return false;
            }
        }
    } else {
        // console.log('同步发送');
        xmlhttp.open(method, URL, false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.send(postpath);
        jsonData = xmlhttp.responseText;
    }

    // alert(jsonData);
    // console.log(jsonData);
    //统一问题处理
    if (isJson) {
        var jsonArray = eval('(' + jsonData + ')');
        if (jsonArray.status != 10000) {
            alert(jsonArray.msg);
            return false;
        } else {
            return jsonArray;
        }
    } else {
        return jsonData;
    }


}

function isApiready() {
    //console.log(' in api ready');
    return typeof api !== 'undefined';
}


jinteng.isempty = function(string)
{
    if (string == 'undefined' || string == null || string == 'null' || string == undefined) {
        return true;
    } else {
        return false;
    }
}

jinteng.storage = function(key,value){
    // 增加本地存储前缀
    var fixT = '_jt_';
    
    if(jinteng.isempty(value))
    {
        //取值
        key = fixT + key;
        var tmp = localStorage.getItem(key);
        return waitR;
    }
    
    if(!jinteng.isempty(key) && !jinteng.isempty(value))
    {
        localStorage.setItem(fixT + key,value);
        return true;
    }
}

notch.fix() = function() {
	var timeNow = new Date().getTime();
    var cacheTimeOut = timeNow - 172800;//两天缓存期间
    var fixHeaderStatus = jinteng.storage('_fixHeader_status');
    if(10000 != fixHeaderStatus)
    {
        if(cacheTimeOut > jinteng.storage('_fixHeader_time'))
        {
            var T = jtFixNotchBase();
            if(T == 'undefined')
            {
              setTimeout(notch.fix(), 1000);
            }else {
              return T;
            }
        }else {
            return jinteng.storage('_fixHeader');
        }
    }
    else
    {
        return jinteng.storage('_fixHeader');
    }
}



function jtFixNotchBase() {
    if (isApiready()) {
        // 设备型号
        var deviceModel = api.deviceModel;

        // 设备型号MD5
        var md5Sign = jinteng.md5(deviceModel);

        // 应用名
        var appName = api.appName;

        // 应用版本
        var appV = api.appVersion;

        // 操作系统类型
        var sysType = api.systemType;

        //操作系统版本
        var sysVersion = api.systemVersion;

        //设备唯一标识
        var deviceId = api.deviceId;

        //运营商名
        var operator = api.operator;

        // 设备名称
        var deviceName = api.deviceName;

        // 适配高度
        // var fixH = 100;
        var HubUrl = 'http://hub.jintengwangluo.com/index.php/Notch/Seach/mobile';
        var params = '?mobile=' + deviceModel + '&sign=' + md5Sign + '&app=' + appName + '&appversion=' + appV + '&system=' + sysType + '&systemversion=' + sysVersion + '&deviceid=' + deviceId + '&operator' + operator;
        var retData = jtGetJsonFromServer2(HubUrl+params,'','GET',false);
        if (retData) {
            ret = eval('(' + retData + ')');
            jinteng.storage('_fixHeader',ret.padding);
            jinteng.storage('_fixHeader_status',ret.status);
            jinteng.storage('_fixHeader_time',new Date().getTime());
            return ret.padding;
        }else {
            jinteng.storage('_fixHeader_time',new Date().getTime());
            return 0;
        }
    } else {
        setTimeout(jtFixNotch(), 1000);
    }
}