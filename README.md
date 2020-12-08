# SEM_Group_2

# Mad Hatters

To run our project:

<b>Turn on Services</b>

1. cd into our SEM_GROUP_2 folder
2. run docker-compose up -d

<b>Use Services</b>

1. Go to http://localhost:4200/

<b>Turn off Services</b>

1. run docker-compose down

<b>View Logs For A Particular Service</b>

1. Service names with viewable logs: 
      auth.service.ts, 
      catalog.service.ts, 
      schedule.service.ts, 
      user.service.ts, 
      catalog-index.js, 
      schedulingService.js, 
      user-index.js
      
2. Go to http://localhost:65535/serviceLogs/:serviceName

<b>View Logs For A Particular Date</b>

1. The date format is YYYY-MM-DD. 
2. The URL is http://localhost:65535/logByDate/:date
3. Replace ":date" in the above URL with a properly formatted date for which you would like to view logs.
4. Go to the URL.

<b>View a log with a particular Request ID</b>

1. The Request ID format is "userEmail%20-%20date" where %20 replaces spaces
2. Example: "null - Tue Dec 08 2020 10:53:27 GMT-0800 (Pacific Standard Time)" 
                will be input as
            "null%20-%20Tue%20Dec%2008%202020%2010:53:27%20GMT-0800%20(Pacific%20Standard%20Time)"
3. The URL is http://localhost:65535/logByReq/:requestID
4. Replace ":requestID" in the above URL with a properly formatted requestID for which you would like to view a log.
5. Go to the URL.

<b>View a log with a particular Response ID</b>

1. The Response ID format is "#%20-%20userEmail%20-%20date" where %20 replaces spaces
2. Example: "22 - M5 - Tue Dec 08 2020 10:53:13 GMT-0800 (Pacific Standard Time)" 
                will be input as
            "22%20-%20M5%20-%20Tue%20Dec%2008%202020%2010:53:13%20GMT-0800%20(Pacific%20Standard%20Time)"
3. The URL is http://localhost:65535/logByRes/:responseID
4. Replace ":responseID" in the above URL with a properly formatted responseID for which you would like to view a log.
5. Go to the URL.

