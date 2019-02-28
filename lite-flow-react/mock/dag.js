var Mock = require('mockjs');
var qs = require('qs');

module.exports = {
    'GET /console/flow/viewDag': {
        status: 0,
        data: {
            "links": [
                {
                    "id": null,
                    "taskId": 2,
                    "upstreamTaskId": 1,
                    "config": 0,
                    "status": 0
                },
                {
                    "id": null,
                    "taskId": 3,
                    "upstreamTaskId": 1,
                    "config": 0,
                    "status": 0
                },
                {
                    "id": null,
                    "taskId": 4,
                    "upstreamTaskId": 2,
                    "config": 0,
                    "status": 0
                },
                {
                    "id": null,
                    "taskId": 4,
                    "upstreamTaskId": 3,
                    "config": 0,
                    "status": 0
                },
                {
                    "id": null,
                    "taskId": 4,
                    "upstreamTaskId": 5,
                    "config": {
                        "startTime": "${yesterday}",
                        "endTime": "${today}",
                    },
                    "status": 0
                }
            ],
            "nodes": [
                {
                    "id": 1,
                    "name": "t1",
                    "scheduleType": 0,
                    "period": 2,
                    "maxRunningtime": -1,
                    "startOvertime": 0,
                    "queueName": null,
                    "status": 1,
                },
                {
                    "id": 2,
                    "name": "t2",
                    "scheduleType": 0,
                    "period": 2,
                    "cronExpression": "45 4 * * ?",
                    "status": 1
                },
                {
                    "id": 3,
                    "name": "t3",
                    "scheduleType": 0,
                    "period": 2,
                    "cronExpression": "45 4 * * ?",
                    "status": 0,
                    "createdTime": 1510282709000,
                    "modifiedTime": 1510361752000
                },
                {
                    "id": 4,
                    "name": "t4",
                    "scheduleType": 0,
                    "period": 2,
                    "cronExpression": "45 4 * * ?",
                    "status": -1,
                    "createTime": 1510282709000,
                    "updateTime": 1510361752000
                },
                {
                    "id": 5,
                    "name": "t5",
                    "scheduleType": 0,
                    "period": 2,
                    "cronExpression": "45 4 * * ?",
                    "status": 0
                }
            ]
        }
    }
};
