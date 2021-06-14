window.addEventListener("load", initPopup);
function initPopup(){
    chrome.storage.sync.get(["personal"], function (res) {   
        console.log(res);
        var namediv = document.getElementById('fullname');
        var fullname = document.createElement('h6');
        fullname.textContent = res["personal"]["first-name"] + " " + res["personal"]["last-name"] ;
        fullname.style.textAlign = "center";
        namediv.appendChild(fullname);

        var cont = document.getElementById('cont');
        var sample0 = {
            "location": "Berkeley, CA",
            "phone": "(415) 323-4000",
            "email": "oski@berkeley.edu",
            "site": "joesmith.site",
            "github": "github.com/Tombarr"
        };
        // var obj = JSON.parse(sample);
        //const contLi1 = document.createElement('li');
        const contLi2 = document.createElement('li');
        // const contLi3 = document.createElement('li');
        // const contLi4 = document.createElement('li');
        // const contLi5 = document.createElement('li');
        //const contPara1 = document.createElement('p');
        const contPara2 = document.createElement('p');
        // const contPara3 = document.createElement('p');
        // const contPara4 = document.createElement('p');
        // const contPara5 = document.createElement('p');
        //const conti1 = document.createElement('h6');

        //const conti2 = document.createElement('i');
        // const conti3 = document.createElement('i');
        // const conti4 = document.createElement('i');
        // const conti5 = document.createElement('i');

        // // conti1.classList.add("fa fa-map-marker-alt");
        // conti1.title = "Location";
        // // conti2.classList.add("fa fa-phone");
        // conti2.title = "Cell phone";
        // // conti3.classList.add("fa fa-envelope");
        // conti3.title = "Email";
        // // conti4.classList.add("fa fa-globe-americas");
        // conti4.title = "Website";
        // // conti5.classList.add("fa fa-github");
        // conti5.title = "Github";

        //contPara1.appendChild(conti1);
        //contPara2.appendChild(conti2);
        // contPara3.appendChild(conti3);
        // contPara4.appendChild(conti4);
        // contPara5.appendChild(conti5);


        //conti1.textContent = sample4.firstname + " " + sample4.lastname;sample0.location + " | E: " + sample0.email + " | M: " + sample0.phone;
        contPara2.textContent = sample0.location + " | E: " + sample0.email + " | M: " + sample0.phone;
        contPara2.className = "sanserif";
        // contPara3.textContent = sample0.email;
        // contPara4.textContent = sample0.site;
        // contPara5.textContent = sample0.github;

        //contLi1.appendChild(contPara1);
        contLi2.appendChild(contPara2);
        // contLi3.appendChild(contPara3);
        // contLi4.appendChild(contPara4);
        // contLi5.appendChild(contPara5);

        //cont.appendChild(contLi1);
        cont.appendChild(contLi2);
        
        // cont.appendChild(contLi3);
        // cont.appendChild(contLi4);
        // cont.appendChild(contLi5);
    }); 
    chrome.storage.sync.get(["education"], function (res) {  
        console.log(res);
        var educ = document.getElementById('educ');
        var sample2 = {
            "schools": [{
                "degree": "M.S.",
                "major": "Human Computer Interaction",
                "school": "Massachusetts Institute of Technology",
                "from": "09/2012",
                "to": "08/2020",
                "gpa": "4.00"
            },
                {
                    "degree": "B.S.",
                    "major": "Computer Science",
                    "school": "Harvard University",
                    "from": "09/2008",
                    "to": "05/2012",
                    "gpa": "3.91"
                }]
        };
    // var obj = JSON.parse(sample);
    const schools  = sample2.schools;
    for (let i = 0; i < schools.length; i++) {
        console.log(i);
        const thisSkl = schools[i];
        const expLi = document.createElement('li');
        const expDiv1 = document.createElement('div');
        const expPara1 = document.createElement('p');
        const expTime = document.createElement('time');
        const expDiv2 = document.createElement('div');
        const expSpan1 = document.createElement('span');
        const expSpan2 = document.createElement('span');

        expPara1.className = "sanserif";
        expPara1.textContent = thisSkl.degree + ", " + thisSkl.major;
        expTime.textContent = thisSkl.from + " – " + thisSkl.to;
        expDiv1.appendChild(expPara1);
        expDiv1.appendChild(expTime);

        expSpan1.textContent = thisSkl.school;
        expSpan2.textContent = "GPA: " + thisSkl.gpa;
        expDiv2.appendChild(expSpan1);
        expDiv2.appendChild(expSpan2);

        expLi.appendChild(expDiv1);
        expLi.appendChild(expDiv2);
        educ.appendChild(expLi);
    }
    }); 
    var sample3 = {
    "technologies": ["JavaScript", "PHP", "HTML5", "CSS3", "Bootstrap", "React"],
    "courses": ["Responsive Design", "A/B Testing", "Mobile Development", "Data Visualization", "Usability Testing"]
    };
    //COURSES
    var courses = document.getElementById('relevant-courses');
    // var obj = JSON.parse(sample);
    var courseList = sample3.courses;
    var expLi = document.createElement('li');
    //var expDiv1 = document.createElement('div');
    var expPara1 = document.createElement('p');

    expPara1.className = "sanserif";
    expPara1.textContent = "Relevant Courses: " + courseList[0]
    for (let i = 1; i < courseList.length; i++) {
        expPara1.textContent = expPara1.textContent + ", " + courseList[i];
    }
    console.log(expPara1.textContent);

    //    expDiv1.appendChild(expPara1);
    //    expLi.appendChild(expDiv1);
    expLi.appendChild(expPara1);
    courses.appendChild(expLi);

    //SKILLS//
    var skills = document.getElementById('skills');
    // var obj = JSON.parse(sample);
    var techList = sample3.technologies;
    var expLi = document.createElement('li');
    //var expDiv1 = document.createElement('div');
    var expPara1 = document.createElement('p');

    expPara1.className = "sanserif";
    expPara1.textContent = "Skills: " + techList[0]
    for (let i = 1; i < techList.length; i++) {
        expPara1.textContent = expPara1.textContent + ", " + techList[i];
    }
    console.log(expPara1.textContent)

    //expDiv1.appendChild(expPara1);
    //expLi.appendChild(expDiv1);
    expLi.appendChild(expPara1);
    skills.appendChild(expLi);
    chrome.storage.sync.get(["categories"], function (res) { 
        console.log(res);
        var sample = {
            "category1":{
                "name":"Work Experience",
                "items": [{
                    "company": "Uber",
                    "position": "Software Engineering Internship",
                    "from": "02/2020",
                    "to": "08/2020",
                    "description": [
                    "Developed convenient, cost-effective, and privacy first proctoring platform for online University exams. The many to one proctoring platform has unique features including one to one audio, visual, and chat communication, individual recording, screen sharing and face filters.", 
                    "Implemented webRTC peer connections relayed through Kurento media servers and  hosted on AWS EC2 instances for audio-visual communication. Web sockets are used for Signalling and for the chat application.",
                    "Built course management system and proctoring UI with Angular framework.Used react native for mobile app",
                    "Build rest api for creating sessions, authentication, and recording ops with spring java and mySQL."
                    ]
                },
                {
                    "company": "Netflix",
                    "position": "Software Engineering",
                    "from": "04/2021",
                    "to": "08/2021",
                    "description": [
                    "Transitioned from express to a serverless architecture leveraging AWS Lambda, DynamoDB. Connected the front end with Amazon cognito and AWS RESTful API.",
                    "Developed a fully functional online whiteboard software allowing realtime interaction and learning between multiple users with canvas and pubNub servers.",
                    "Iteratively improved user experience and reduced friction with A/B testing",
                    "Personally secured 10+ clients with 30-40 users each after multiple in person meetings."
                    ]
                }]
            },
            "category2":{
                "name":"Personal Projects",
                "items": [{
                    "company": "Pinxuan Intelligence",
                    "position": "Data consultant",
                    "from": "02/2020",
                    "to": "08/2020",
                    "description": [
                    "Implemented a customised  fine-grained image classification model to boost existing classification accuracy from 80 percent to 90 percent in predicting the make and model of cars.",
                    "Created mobile app with react native, mongoDB to predict the make and model of a car from camera image."
                    ]
                },
                {
                    "company": "Facebook",
                    "position": "Software Engineering",
                    "from": "04/2021",
                    "to": "08/2021",
                    "description": [
                    "Trained a hand gesture recognition model to detect gestures with TensorFlow, OpenCV, and Python",
                    "Used a Facial Landmark Detection model with customised algorithm to detect blink patterns."
                    ]
                }]
            }
        };
        function createExps(exps, positions) {
            for (let i = 0; i < positions.length; i++) {
                console.log(i);
                const thisPos = positions[i];
                const expLi = document.createElement('li');
                const expHeader = document.createElement('header');
                const expPara1 = document.createElement('p');
                const expTime = document.createElement('time');
                const expSpan = document.createElement('span');
                const expUl = document.createElement('ul');

                expPara1.className = "sanserif";
                expPara1.textContent = thisPos.company;
                expTime.textContent = thisPos.from + " – " + thisPos.to;
                expHeader.appendChild(expPara1);
                expHeader.appendChild(expTime);

                expSpan.textContent = thisPos.position;

                const desc = thisPos.description;
                for (let j = 0; j < desc.length; j++) {
                    const expDescLi = document.createElement('li');
                    expDescLi.textContent = desc[j];
                    expUl.appendChild(expDescLi);
                }

                expLi.appendChild(expHeader);
                expLi.appendChild(expSpan);
                expLi.appendChild(expUl);
                exps.appendChild(expLi);
            }
        }
        function createCategory(num,category) {
            var categories = document.getElementById('categories');
            var line = document.createElement('hr');
            var heading = document.createElement('h6');
            var list = document.createElement('ol');
            list.id = "cat" + num;
            heading.textContent = category.name;
            categories.appendChild(line);
            categories.appendChild(heading);
            categories.appendChild(list);
        }
        var exps = document.getElementById('cat1');
        // var obj = JSON.parse(sample);
        var positions = sample.category1.items;
        createExps(exps,positions);
        if(sample.category2) {
            createCategory(2,sample.category2)
            var exps = document.getElementById('cat2');
            var positions = sample.category2.items;
            createExps(exps,positions);
        }
        if(sample.category3) {
            createCategory(3,sample.category3)
            var exps = document.getElementById('cat3');
            var positions = sample.category3.items;
            createExps(exps,positions);
        }  
    });
}