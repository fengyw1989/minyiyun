/**
 * Created by yyg on 2017/2/28.
 */
$(document).ready(function(){
    laydate({elem: '#date03', format: 'YYYY/MM/DD',
        choose: function(datas){ //选择日期完毕的回调
            //alert('得到：'+datas);
        }
    });
    laydate({elem: '#date04', format: 'YYYY/MM/DD',
        choose: function(datas){ //选择日期完毕的回调
            //alert('得到：'+datas);
        }
    });
    var type = getUrlObj().type;
    var code = getUrlObj().code;
    var time = getUrlObj().time;
    var name = getUrlObj().name;
    initData = function(){
        updateChart();//民意来源占比
    }
    initData();
    function updateChart(){
        var data = {
            "status": 200,
            "data": {
                "statisticsDates": ["2017-02-17", "2017-02-18"],
                "showData": [
                    {
                        "originCode": "origin01",
                        "originName": "市长热线12345",
                        "opinionCount": 1132
                    },
                    {
                        "originCode": "origin02",
                        "originName": "公安局",
                        "opinionCount": 3192
                    },
                    {
                        "originCode": "origin03",
                        "originName": "信访局",
                        "opinionCount": 292
                    },
                    {
                        "originCode": "origin04",
                        "originName": "公安局",
                        "opinionCount": 192
                    },
                    {
                        "originCode": "origin05",
                        "originName": "督查室",
                        "opinionCount": 2192
                    },
                    {
                        "originCode": "origin06",
                        "originName": "城管局",
                        "opinionCount": 4192
                    },
                    {
                        "originCode": "origin02",
                        "originName": "民生通",
                        "opinionCount": 3800
                    }
                ]
            }
        };
        var paramData = {
            id:'chartId',
            color:['#00c0fe','#0082d2','#fbc802','#fe5600','#ff9200'],
            legendGrid:{ left:'10%', top:'28%',},
            center: ['50%', '40%'],
            radius: ['30%', '50%'],
            data:[]
        };
        for(var i=0;i<data.data.showData.length;i++){
            paramData.data.push({
                value:data.data.showData[i].opinionCount,
                code:data.data.showData[i].originCode,
                name:data.data.showData[i].originName
            })
        }
        resetOpt();//重置默认配置
        waterPoloOpt.isRose = true;//使用玫瑰图
        waterPoloOpt.labelLine = true;//使用标线
        waterPoloOpt.legend = true;//使用图例
        var myChart = initPie(paramData);
        myChart.on('click',function(param){
            //localStorage.setItem('code',param.data.code);
            //localStorage.setItem('name',param.data.name);
            var pm = '?type='+type+'&time='+time+'&name='+param.data.name+'&code='+param.data.code;
            window.location.href = './source_scale.html'+pm;
        });
    }

});
