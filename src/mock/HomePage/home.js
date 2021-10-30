import Mock from 'mockjs'

let params = Mock.mock({ // 数据池
    "云南省": {"total": 1000, "abnormal": 10},
    "贵州省": {"total": 100}
})

let provinceParams = Mock.mock({ // 数据池
    "昆明市": {"total": 600, "abnormal": 3},
    "普洱市": {"total": 200},
    "丽江市": {"total": 200, "abnormal": 7}
})
let cityParams = Mock.mock({
    "东川区": {"total": 340},
    "晋宁县": {"total": 260, "abnormal": 3}
})


let deviceData = Mock.mock({
    "runningDevice": [10, 100, 300, 500, 600, 1000, 800, 600, 100],
    "abnormalDevice": [0, 0, 10, 13, 20, 80, 22,  4, 2],
    "time": ["10:00", "10:05", "10:10", "10:15", "10:20", "10:25", "10:30", "10:35", "10:40"]
})


export default {
    mapData: () => ({
        code: 200,
        data: params
    }),
    mapDataProvince: () => ({
        code: 200,
        data: provinceParams
    }),
    mapDataCity: () => ({
        code: 200,
        data: cityParams
    }),
    deviceData: () =>({
        code: 200,
        data: deviceData
    })
}
