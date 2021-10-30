import Mock from 'mockjs'

let params = Mock.mock({ // 数据池
    options: [{
        value: 'yunnan',
        label: '云南省',
        children: [{
            value: 'kunming',
            label: '昆明市',
            children: [{
                value: 'dongchuanqu',
                label: '东川区',
                children: [{
                    value: '10001',
                    label: '设备1'
                },{
                    value: '10002',
                    label: '设备2'
                }
                ]
            }, {
                value: 'jinning',
                label: '晋宁县'
            }, {
                value: 'anning',
                label: '安宁市'
            }, {
                value: 'xishan',
                label: '西山区'
            }]
        }, {
            value: 'lijiang',
            label: '丽江市',
            children: [{
                value: 'gucheng',
                label: '古城区'
            }, {
                value: 'yongsheng',
                label: '永胜县'
            }]
        }]
    }]
})

let deviceDataDetail = Mock.mock({
    "temperature1": [10, 15, 32, 55, 88, 99, 66, 76, 60, 70, 75, 77],
    "temperature2": [8, 12, 30, 40, 70, 88, 68, 52, 30, 40, 50, 55],
    "humidity1": [0, 0, 10, 13, 20, 80, 22,  4, 2, 5, 10, 20],
    "humidity2": [0, 10, 6, 11, 15, 54, 12,  8, 1, 3, 7, 12],
    "time": ["10:00", "10:05", "10:10", "10:15", "10:20", "10:25", "10:30", "10:35", "10:40", "10:45", "10:50", "10:55"]
})

export default {
    getSearchData: () => ({
        code: 200,
        data: params
    }),
    getDeviceDataDetail:()=>( {
        code: 200,
        data: deviceDataDetail
    })
}
